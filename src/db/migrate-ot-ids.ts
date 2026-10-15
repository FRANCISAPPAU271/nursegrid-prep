/**
 * Migration helper to update any legacy question authored IDs in the database.
 * Run this if your production database was already seeded with the old batch:
 *
 *   npx tsx src/db/migrate-ot-ids.ts
 */
import "dotenv/config";
import { db, pool } from "./index";
import { sql } from "drizzle-orm";

async function main() {
  console.log("Checking for legacy authored IDs in database...");
  const result = await db.execute(
    sql`UPDATE "questions"
        SET "authored_id" = REPLACE("authored_id", 'NG-ORIGINAL-OT-', 'NG-ORIGINAL-CLINICAL-')
        WHERE "authored_id" LIKE 'NG-ORIGINAL-OT-%'
        RETURNING "id", "authored_id";`
  );
  console.log(`Updated ${result.rowCount ?? 0} rows in database.`);
  await pool.end();
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
