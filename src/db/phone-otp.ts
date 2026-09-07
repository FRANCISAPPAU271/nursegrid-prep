import { db } from "@/db";
import { sql } from "drizzle-orm";
import crypto from "crypto";

// ---------------------------------------------------------------------------
// Phone OTP storage + verification for signup.
//
// Design:
//   • 6-digit code, hashed (sha256) at rest, 10-minute expiry.
//   • Max 5 verification attempts per code; max 3 sends per phone per hour
//     and 3 sends per device per hour (cost + abuse control).
//   • One verified phone can claim the signup TRIAL only once every 90 days
//     — this is the anti-multi-account anchor: Ghana SIMs are Ghana Card
//     registered, so a phone number is a real identity cost.
//   • Table is created lazily/idempotently like the app's other online
//     migrations.
// ---------------------------------------------------------------------------

let ensured = false;

async function ensureOtpTables(): Promise<void> {
  if (ensured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "phone_otps" (
      "id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
      "phone" text NOT NULL,
      "code_hash" text NOT NULL,
      "device_id" text,
      "attempts" int NOT NULL DEFAULT 0,
      "verified_at" timestamptz,
      "expires_at" timestamptz NOT NULL,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "phone_otps_phone_idx" ON "phone_otps" ("phone")`);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "verified_phones" (
      "phone" text PRIMARY KEY,
      "user_id" text,
      "trial_claimed_at" timestamptz,
      "verified_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  ensured = true;
}

function hashCode(code: string): string {
  return crypto.createHash("sha256").update(code).digest("hex");
}

export type SendOtpResult =
  | { ok: true }
  | { ok: false; error: string };

export async function createOtp(phone: string, deviceId: string | null): Promise<{ code: string } | { error: string }> {
  await ensureOtpTables();

  // Rate limits: 3 sends/hour per phone and per device.
  const phoneCount = await db.execute(sql`
    SELECT count(*) AS c FROM "phone_otps"
    WHERE "phone" = ${phone} AND "created_at" > now() - interval '1 hour'
  `);
  if (Number((phoneCount.rows[0] as { c: string | number }).c) >= 3) {
    return { error: "Too many codes requested for this number. Try again in an hour." };
  }
  if (deviceId) {
    const deviceCount = await db.execute(sql`
      SELECT count(*) AS c FROM "phone_otps"
      WHERE "device_id" = ${deviceId} AND "created_at" > now() - interval '1 hour'
    `);
    if (Number((deviceCount.rows[0] as { c: string | number }).c) >= 3) {
      return { error: "Too many codes requested from this device. Try again in an hour." };
    }
  }

  const code = String(crypto.randomInt(100000, 1000000));
  await db.execute(sql`
    INSERT INTO "phone_otps" ("phone", "code_hash", "device_id", "expires_at")
    VALUES (${phone}, ${hashCode(code)}, ${deviceId}, now() + interval '10 minutes')
  `);
  return { code };
}

export async function verifyOtp(phone: string, code: string): Promise<{ ok: boolean; error?: string }> {
  await ensureOtpTables();

  const rows = await db.execute(sql`
    SELECT "id", "code_hash", "attempts", "expires_at", "verified_at"
    FROM "phone_otps"
    WHERE "phone" = ${phone}
    ORDER BY "created_at" DESC
    LIMIT 1
  `);
  const row = rows.rows[0] as
    | { id: string; code_hash: string; attempts: number; expires_at: string | Date; verified_at: string | Date | null }
    | undefined;
  if (!row) return { ok: false, error: "No code was sent to this number. Request a new one." };
  if (row.verified_at) return { ok: true }; // already verified this code
  const expires = row.expires_at instanceof Date ? row.expires_at : new Date(row.expires_at);
  if (expires.getTime() < Date.now()) return { ok: false, error: "That code has expired. Request a new one." };
  if (Number(row.attempts) >= 5) return { ok: false, error: "Too many wrong attempts. Request a new code." };

  if (row.code_hash !== hashCode(code.trim())) {
    await db.execute(sql`UPDATE "phone_otps" SET "attempts" = "attempts" + 1 WHERE "id" = ${row.id}`);
    return { ok: false, error: "That code is not correct. Check the SMS and try again." };
  }

  await db.execute(sql`UPDATE "phone_otps" SET "verified_at" = now() WHERE "id" = ${row.id}`);
  await db.execute(sql`
    INSERT INTO "verified_phones" ("phone") VALUES (${phone})
    ON CONFLICT ("phone") DO NOTHING
  `);
  return { ok: true };
}

// Has this phone completed OTP verification recently (within the last hour)?
// Used by the signup route to accept the verified state.
export async function isPhoneRecentlyVerified(phone: string): Promise<boolean> {
  await ensureOtpTables();
  const rows = await db.execute(sql`
    SELECT 1 FROM "phone_otps"
    WHERE "phone" = ${phone} AND "verified_at" IS NOT NULL AND "verified_at" > now() - interval '1 hour'
    LIMIT 1
  `);
  return rows.rows.length > 0;
}

// Trial anchor: can this phone still claim a signup trial? One claim per
// 90 days per phone number.
export async function canPhoneClaimTrial(phone: string): Promise<boolean> {
  await ensureOtpTables();
  const rows = await db.execute(sql`
    SELECT "trial_claimed_at" FROM "verified_phones" WHERE "phone" = ${phone} LIMIT 1
  `);
  const row = rows.rows[0] as { trial_claimed_at: string | Date | null } | undefined;
  if (!row || !row.trial_claimed_at) return true;
  const claimed = row.trial_claimed_at instanceof Date ? row.trial_claimed_at : new Date(row.trial_claimed_at);
  return Date.now() - claimed.getTime() > 90 * 24 * 60 * 60 * 1000;
}

export async function markTrialClaimed(phone: string, userId: string): Promise<void> {
  await ensureOtpTables();
  await db.execute(sql`
    UPDATE "verified_phones" SET "trial_claimed_at" = now(), "user_id" = ${userId} WHERE "phone" = ${phone}
  `);
}
