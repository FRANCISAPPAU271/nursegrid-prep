# Deploying NurseGrid Prep to Vercel (get a permanent link)

This gets you a real, permanent URL like `nursegrid-prep.vercel.app` (or your
own custom domain) that works on any phone, anytime — unlike the temporary
sandbox preview link used during development.

Total time: ~15 minutes. You do not need to touch any code for the basic
deployment — just follow these steps.

---

## Step 1 — Get your code into a GitHub repository

Vercel deploys from a Git repository (GitHub, GitLab, or Bitbucket).

1. Export/download this project from the platform you're building it in
   (look for an "Export", "Download ZIP", or "Push to GitHub" option).
2. Create a new repository on [github.com](https://github.com/new) (e.g.
   `nursegrid-prep`) — keep it **private** since it contains your app code.
3. Push the project into that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nursegrid-prep.git
   git push -u origin main
   ```
   (The included `.gitignore` already excludes `node_modules`, build output,
   and native app build artifacts.)

---

## Step 2 — Create a production Postgres database

Vercel doesn't host Postgres itself, but it integrates with providers that
have generous free tiers. **Neon** is the easiest and is Vercel's recommended
default:

1. Go to [neon.tech](https://neon.tech) → sign up (free) → **Create a project**.
2. Once created, copy the **connection string** shown — it looks like:
   ```
   postgresql://user:password@ep-xxxx-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
   ⚠️ Use the **pooled** connection string (has `-pooler` in the hostname) —
   this matters for serverless functions like Vercel's, which open many
   short-lived database connections.

Alternatives that work equally well: [Supabase](https://supabase.com),
[Railway](https://railway.app), or [Neon via the Vercel Marketplace]
(Vercel Dashboard → Storage → Create Database → Postgres, which is Neon
under the hood).

---

## Step 3 — Import the project into Vercel

1. Go to [vercel.com](https://vercel.com) → sign up/log in (GitHub login is
   easiest) → **Add New → Project**.
2. Select your `nursegrid-prep` GitHub repo → **Import**.
3. Framework preset should auto-detect as **Next.js** — leave the build
   command (`next build`) and output settings as default.
4. Before clicking Deploy, add **Environment Variables** (Step 4 below).

---

## Step 4 — Set environment variables in Vercel

In the Vercel project's **Settings → Environment Variables** (or the import
screen), add:

| Name | Value | Required |
|---|---|---|
| `DATABASE_URL` | Your Neon/Supabase pooled connection string from Step 2 | ✅ Yes |
| `NEXT_PUBLIC_APP_URL` | Your Vercel URL, e.g. `https://nursegrid-prep.vercel.app` (you can add this *after* the first deploy once you know the URL, then redeploy) | Recommended |
| `STRIPE_SECRET_KEY` | Your live/test Stripe secret key, if accepting real Visa card payments | Optional |
| `STRIPE_WEBHOOK_SECRET` | Your Stripe webhook signing secret, if using the `/api/webhooks/stripe` endpoint | Optional |

Apply these to all environments (Production, Preview, Development) unless
you want different values per environment.

---

## Step 5 — Deploy

Click **Deploy**. Vercel will install dependencies, build the app, and give
you a live URL in a couple of minutes — something like:

```
https://nursegrid-prep.vercel.app
```

**This is your permanent link.** Open it on your phone — it will work
immediately, install as a home-screen app (PWA), and stay online continuously
(no more sandbox timeouts).

---

## Step 6 — Set up the database schema and seed data

The database is currently empty — you need to push the table schema once and
optionally seed demo data. From your local machine (with this project's code
and `node`/`npm` installed):

```bash
# Point at your production database for this one-time setup:
export DATABASE_URL="postgresql://user:password@ep-xxxx-pooler...neon.tech/neondb?sslmode=require"

npm install
npx drizzle-kit push          # creates all tables in your production DB
npx tsx src/db/seed.ts        # optional: adds demo accounts + 10,000 questions
```

After seeding, you'll be able to log in on your live site with:
```
demo@nursegrid.app / password123   (full access account)
free@nursegrid.app / password123   (free-tier account)
```

⚠️ Run the seed script only once — it clears and re-seeds all tables, so
don't run it again after real users have signed up.

---

## Step 7 (optional) — Add a custom domain

In Vercel: **Project → Settings → Domains** → add your domain (e.g.
`nursegridprep.com`, purchased from Namecheap, GoDaddy, etc.) → follow the
DNS instructions Vercel shows you. Propagation usually takes a few minutes to
a few hours.

---

## Step 8 — Point the mobile apps at your new permanent URL

If/when you build the Android/iOS apps (see `MOBILE_APPS.md`), update
`capacitor.config.ts`:

```ts
const PRODUCTION_URL = process.env.NEXT_PUBLIC_APP_URL || "https://nursegrid-prep.vercel.app";
```

Then run `npx cap sync` before rebuilding in Android Studio / Xcode.

---

## Redeploying after future code changes

Once connected, Vercel automatically redeploys every time you push to your
GitHub repo's `main` branch — no manual steps needed. If you change
`src/db/schema.ts`, remember to run `npx drizzle-kit push` (Step 6) against
your production `DATABASE_URL` again to apply the schema change.

## Troubleshooting

- **Build fails on Vercel with a database error**: make sure `DATABASE_URL`
  is set in Vercel's environment variables and uses `sslmode=require` (Neon)
  or your provider's SSL-enabled connection string.
- **App loads but shows a 500 error**: check **Vercel → Deployments → your
  deployment → Functions/Logs** for the actual error — usually a missing
  environment variable or a database that hasn't been schema-pushed yet.
- **"Too many connections" errors under load**: make sure you're using the
  **pooled** connection string (`-pooler` in the Neon hostname), not the
  direct one.
