import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// Reads DATABASE_URL from the environment so the same config works for local
// development (.env) and for pushing schema changes to your production
// database (e.g. `DATABASE_URL=postgresql://... npx drizzle-kit push`).
const databaseUrl = process.env.DATABASE_URL || "postgresql://postgres:postgres@127.0.0.1:5432/app_db";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: databaseUrl,
  },
});
