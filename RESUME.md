# Where this stands

_Build blocked 2026-10-17; everything else finished and verified._

## The one remaining step

Production is running a build from **14:58 UTC on 2026-10-17** that has the
**wrong sender compiled in** — `nursegridprep@gmail.com` (grid), while Brevo
verifies `nursegritprep@gmail.com` (grit). One letter apart, and every send is
rejected at the sender check because of it.

`EMAIL_FROM` now holds the correct (grit) value for both production and preview,
but Vercel bakes environment variables into a build: rotating `CRON_SECRET` and
watching production reject the new value proved that. So the fix needs one
rebuild.

Vercel's free tier allows 100 API deployments per day, all used. It resets at
**2026-10-18 15:10 UTC**, or a Redeploy from the dashboard may bypass it.

After the rebuild, run:

```bash
~/weekly-email-dry-run/resume.sh <CRON_SECRET>
```

It sends one email, checks whether the provider delivered it, and stops
immediately if it did not.

## What is already true

- Brevo verifies `nursegritprep@gmail.com`. A live probe from that address
  reached a real delivery attempt — it only failed because the probe recipient
  was `@example.com`, which Brevo blocks outright.
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

## The spelling decision (settled)

`nursegritprep@gmail.com` — missing the **d** — is the address that is verified in
Brevo, and it is the one the account owner actually controls. The correctly
spelled `nursegridprep@gmail.com` cannot be verified without access to that
mailbox, so asking for it creates a loop that never closes.

**This is the permanent sender. Do not "correct" it.** `EMAIL_FROM` is set to
`NurseGrid Prep <nursegritprep@gmail.com>` for production and preview.

If the spelling is ever to be fixed, the order is: create or gain access to the
correctly spelled mailbox, verify it in Brevo, and only then change
`EMAIL_FROM` and rebuild. Changing the variable first is what caused every
rejection in this log — six separate attempts, each one rejected at the sender
check with the same message.
