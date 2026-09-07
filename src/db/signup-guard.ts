import { db } from "@/db";
import { sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Trial-abuse guard.
//
// Records a device marker + IP for every signup, then answers one question:
// "has this device or IP been used to farm trials recently?" If yes, the new
// account is still created normally — it just starts WITHOUT the free trial
// and without referral reward days.
//
// Signals, tuned for Ghana's network reality:
//   • Device match (same browser localStorage ID) within 30 days → strong
//     signal, trial withheld.
//   • IP velocity (3+ signups from the same IP within 7 days) → weaker
//     signal (mobile carriers NAT many users behind one IP; cyber cafés are
//     shared), so a single IP repeat is allowed — only rapid clusters trip it.
//
// Table is created lazily (idempotent) like the app's other online
// migrations, so no formal migration is needed.
// ---------------------------------------------------------------------------

let ensured = false;

async function ensureGuardTable(): Promise<void> {
  if (ensured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "signup_guards" (
      "id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
      "user_id" text,
      "device_id" text,
      "ip_address" text,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "signup_guards_device_idx" ON "signup_guards" ("device_id")`);
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "signup_guards_ip_idx" ON "signup_guards" ("ip_address")`);
  ensured = true;
}

export type TrialEligibility = {
  eligible: boolean;
  reason: "ok" | "device_seen" | "ip_velocity";
};

export async function checkTrialEligibility(
  deviceId: string | null,
  ipAddress: string | null,
): Promise<TrialEligibility> {
  try {
    await ensureGuardTable();

    // Strong signal: this exact device already created an account recently.
    if (deviceId) {
      const deviceHit = await db.execute(sql`
        SELECT 1 FROM "signup_guards"
        WHERE "device_id" = ${deviceId}
          AND "created_at" > now() - interval '30 days'
        LIMIT 1
      `);
      if (deviceHit.rows.length > 0) return { eligible: false, reason: "device_seen" };
    }

    // Weak signal: only rapid clusters from one IP (3+ in 7 days) — a single
    // repeat is allowed because carriers NAT many students behind one IP.
    if (ipAddress) {
      const ipCount = await db.execute(sql`
        SELECT count(*) AS c FROM "signup_guards"
        WHERE "ip_address" = ${ipAddress}
          AND "created_at" > now() - interval '7 days'
      `);
      const c = Number((ipCount.rows[0] as { c: string | number } | undefined)?.c ?? 0);
      if (c >= 3) return { eligible: false, reason: "ip_velocity" };
    }

    return { eligible: true, reason: "ok" };
  } catch {
    // Never let the guard break signups — fail open.
    return { eligible: true, reason: "ok" };
  }
}

export async function recordSignup(
  userId: string,
  deviceId: string | null,
  ipAddress: string | null,
): Promise<void> {
  try {
    await ensureGuardTable();
    await db.execute(sql`
      INSERT INTO "signup_guards" ("user_id", "device_id", "ip_address")
      VALUES (${userId}, ${deviceId}, ${ipAddress})
    `);
  } catch {
    // Recording failure must never block account creation.
  }
}
