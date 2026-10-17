# The weekly email

One email, once a week, to everyone who has a NurseGrid account.

It does two things and nothing else: **reminds them they can subscribe**, and **tells them what's new**.

It will never appear on the website. It's email only — there's no screen in the app that shows it, which is why you can't "go and look at it" in the browser.

---

## Where it lives

| File | What it does |
|---|---|
| `src/lib/weekly-digest.ts` | The email itself. One template. `UPDATES` at the top is the "new this week" list. |
| `src/app/api/cron/weekly-digest/route.ts` | The job. Works out who hasn't had this week's email, then sends it. |
| `src/lib/unsubscribe.ts` | The signed unsubscribe link. Works without logging in. |
| `vercel.json` | Runs the job daily at 07:00 UTC (07:00 Ghana time). |

---

## Before it can send anything

Four environment variables have to exist on the Vercel project
(*Project → Settings → Environment Variables*):

| Variable | Value |
|---|---|
| `CRON_SECRET` | any long random string — also used to authorise a manual run |
| `BREVO_API_KEY` | from your Brevo account |
| `EMAIL_FROM` | e.g. `NurseGrid Prep <hello@nursegridprep.com>` — the domain must be verified in Brevo |
| `NEXT_PUBLIC_APP_URL` | `https://nursegridprep.com` |

Without `CRON_SECRET` the job refuses to run. That's deliberate: an unauthenticated
cron endpoint would be a public way to mail your whole user list.

---

## Testing it

Once redeployed, call the endpoint with the secret:

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  https://nursegridprep.com/api/cron/weekly-digest
```

What the replies mean:

| Reply | Meaning |
|---|---|
| `{"ok":true,"week":"2026-W42","sent":12,...}` | Working. 12 emails went out. |
| `{"ok":true,"skipped":"email not configured..."}` | The Brevo variables aren't set yet. Nothing was sent. |
| `{"error":"Unauthorized"}` | Missing or wrong `CRON_SECRET`, or it isn't set at all. |
| `sent: 0` | Working, but everybody already had this week's email (or there are no users yet). |

### Checking it without sending anything

Add `?dryRun=1`:

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  "https://nursegridprep.com/api/cron/weekly-digest?dryRun=1"
```

```json
{ "ok": true, "dryRun": true, "week": "2026-W42", "accountsDue": 173,
  "provider": { "provider": "brevo", "keyValid": true, "keyKind": "api",
                "canSend": true, "senderVerified": null,
                "detail": "Key is accepted and permitted to send. ..." } }
```

It answers two questions that used to require a real send: **how many people are
due right now**, and **would Brevo accept the request**. It probes the send
endpoint with an empty body, which cannot deliver anything.

- `keyKind: "smtp"` means an SMTP relay password (`xsmtpsib-`) was stored instead
  of an API key (`xkeysib-`). That was the actual cause of the first failed run.
- `senderVerified: null` is normal for a send-only key — it is not permitted to
  list senders. Only a real send proves the sender address is accepted.

Running it twice in the same week is safe — the second run sends nothing,
because the primary key on `weekly_digest_sends` records who has had week `2026-W42`.

---

## Adding to "new this week"

Open `src/lib/weekly-digest.ts` and add a sentence to the `UPDATES` list at the top:

```ts
export const UPDATES: string[] = [
    "New: 40 more paediatric questions, all with rationales.",   // <- add here
    "Every one of the 35 course modules now has its own question set...",
];
```

One sentence each, written for a student. Not a changelog for developers —
"more questions on renal nursing" is useful to them, "refactored the module loader" is not.

Keep to three or four lines. It goes out in the next run automatically.

---

## Who gets it, and how often

- Everyone with an account who has been registered for more than 48 hours
- Not admins
- One email per person per ISO week, maximum — enforced in the database, so
  retries and manual runs can't double-send
- Nobody who clicked unsubscribe

No segments, no free-versus-paying variants. Everybody gets the same email.

The job runs daily rather than weekly so the list is sent in batches,
which stays inside Vercel's function timeout and Brevo's 300/day free tier.
On a small list it finishes in a single run.

---

## Unsubscribing

Every email carries a one-click unsubscribe link that works without logging in
(it's signed, so it can't be forged, and it only works for the account it was
issued to). The link is also set as a `List-Unsubscribe` header, so Gmail and
Apple Mail show their own unsubscribe button at the top of the message.

Unsubscribing adds the address to `email_optouts` and stops all weekly email.
