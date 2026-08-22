import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

const isLocalDb = /localhost|127\.0\.0\.1/.test(databaseUrl);

// Hosted Postgres providers (Neon, Supabase, Railway, RDS, etc.) require SSL
// and typically use certificates that aren't in Node's default trust store,
// so we accept the connection without verifying the CA chain — the same
// approach documented by these providers for serverless environments.
// Local development (Docker/localhost) does not use SSL.
const shouldUseSsl = !isLocalDb || /sslmode=require/.test(databaseUrl);

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export const pool =
  globalForDb.__arenaNextJsPostgresqlPool ??
  new Pool({
    connectionString: databaseUrl,
    ssl: shouldUseSsl ? { rejectUnauthorized: false } : undefined,
    // Serverless functions (Vercel) spin up many short-lived instances, each
    // with its own pool — keep this small so we don't exhaust the database's
    // max connection limit. Local/dev environments can use the default.
    max: process.env.VERCEL ? 3 : 10,
    // Keep idle connections around briefly so back-to-back requests on the
    // same warm serverless instance reuse a connection instead of paying the
    // TCP/TLS handshake cost again — a meaningful latency win on Neon.
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const db = drizzle(pool);
