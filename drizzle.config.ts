import { defineConfig } from "drizzle-kit";

// `drizzle-kit generate` only diffs the schema against ./migrations, so it must
// work without a connection string. Credentials are attached only when one is
// available (e.g. for `db:push`), which keeps migration generation working in
// CI/build environments where no database is provisioned.
const url = process.env.DATABASE_URL ?? process.env.NETLIFY_DATABASE_URL;

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  ...(url ? { dbCredentials: { url } } : {}),
});
