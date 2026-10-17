# Where this stands

_Build blocked 2026-10-17; everything else finished and verified._

## The one remaining step

Production is running a build from **14:58 UTC on 2026-10-17** that has
`EMAIL_FROM = nursegritprep...` compiled **incorrectly** — actually it holds
`nursegridprep@gmail.com` (grid). Brevo verifies `nursegritprep@gmail.com`
(grit). One letter apart; every send is rejected at the sender check.

Vercel's free tier allows 100 API deployments per day, all used. It resets at
**2026-10-18 15:10 UTC**, or a Redeploy from the dashboard may bypass it.

After the rebuild, run:

```bash
~/weekly-email-dry-run/resume.sh <CRON_SECRET>
```

It sends one email, checks whether the provider delivered it, and stops
immediately if it did not.

## What is already true

- Brevo verifies `nursegritprep@gmail.com` — confirmed by a live probe that
  reached a real delivery attempt (it only failed because the recipient was
  `@example.com`, which Brevo blocks).
- `EMAIL_FROM` is set to that address for production and preview.
- `WEEKLY_DIGEST_BATCH=1` is set for production, so the first send after the
  rebuild is a single email, not 168.
- 168 accounts are due. 5 seeded test addresses are excluded as undeliverable.
- The weekly cron is **not** scheduled. It cannot run unattended.
- The ledger is clean: nothing is marked as sent.

## If the canary is rejected anyway

The `verification` field carries the provider's own reason. The two likely ones:

- *"sender ... is not valid"* — the build still has the old value; it did not
  pick up the environment. Check the deployment's commit, not the dashboard value.
- *"sender ... is not verified"* — verify that exact spelling in Brevo
  (Senders & Domains), then retry.

## The spelling question

`nursegritprep` is missing the **d**. It works, but 168 nursing students will
see a misspelled address beside the product name. Verifying
`nursegridprep@gmail.com` in Brevo, then rebuilding, ships the correct spelling
instead. Nothing else needs to change — `EMAIL_FROM` is one variable.
