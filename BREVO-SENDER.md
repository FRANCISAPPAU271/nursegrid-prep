# Getting email working (one-time, ~10 minutes)

> **Resolved 2026-10-17.** The verified sender is `nursegritprep@gmail.com` —
> misspelled, missing the *d*, and permanently so: it is the mailbox the owner
> actually controls, and the correctly spelled address cannot be verified
> without access to it. `EMAIL_FROM` matches this spelling. Do not "correct"
> it; a corrected value is rejected at the sender check on every send.
>
> Everything else on this page is done. The only outstanding step is a rebuild
> the 2026-10-17 deployment quota blocked; see RESUME.md.


Everything else about the weekly email is finished, deployed and tested.
It cannot send because Brevo rejects the sender address, and only the account
owner can fix that.

## Why it's blocked

```
Sending has been rejected because the sender you used
nursegridprep@gmail.com is not valid. Validate your sender or authenticate your domain
```

The account had **never delivered a single email** — 180 requests, 180 errors,
0 delivered over a 90-day window — because no usable sender was ever verified
against the address the app was sending from.

The API key on the project is send-only by design: it cannot create a sender,
list senders, or authenticate a domain. That is why this needs the dashboard.

## Do this

Brevo → **Senders, Domains & Dedicated IPs** → **Domains** → **Authenticate your domain**

1. Enter `nursegridprep.com`.
2. Choose "I don't want to add a DMARC record" if you have none.
3. Brevo shows **2 DNS records** (a `brevo-code` TXT and a `mail._domainkey` DKIM TXT).
4. Add them at Namecheap (your DNS is on `dns1/dns2.registrar-servers.com`):
   *Domain List → nursegridprep.com → Manage → Advanced DNS → Add New Record*.
5. Back in Brevo, click **Verify**.

Then a sender at that domain becomes valid — e.g. `hello@nursegridprep.com`.
No Gmail involved, and mail avoids the spam folder.

**Shortcut if you want it working in 2 minutes instead:** *Senders → Add a sender*
→ `nursegridprep@gmail.com` → click the confirmation link Brevo emails you.
That verifies the single address but does nothing for deliverability, and 173
students receiving mail from a Gmail address looks improvised.

## Then tell me, and I'll finish in one pass

1. Set `EMAIL_FROM` to the verified address.
2. Restore the cron entry in `vercel.json` (removed on 2026-10-17 so an
   unattended run couldn't write 173 ledger rows for undelivered mail).
3. `?reset=1` — clear the week's ledger.
4. Real run — expect `sent: 173`.
5. `?verify=1` — **check for `delivered`, not `requests`.** This is the step
   that was missing the first time, when "sent: 173" turned out to be 173
   rejections.

## Also broken by the same cause

`/api/cron/reminders` sends trial-ending and subscription-expiring notices
through the same `sendEmail`. Those have never been delivered either. Fixing the
sender fixes both.
