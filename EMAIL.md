# The weekly email

> **Paused 2026-10-17, pending a verified Brevo sender.** The job works end to end —
> 173 accounts, correct segmentation, idempotent ledger — but Brevo rejects every
> message because no sender address is verified on the account. The schedule is
> removed from `vercel.json` so it cannot run unattended and mark people as
> contacted for mail that never arrived. Restore the cron entry once a sender is
> verified, then run `?reset=1` and a real run, then `?verify=1` to confirm
> `delivered` rather than `requests`.

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

### The three diagnostic modes

Append any of these to the cron URL. All need the same `Authorization` header.

| Mode | Answers |
|---|---|
| `?dryRun=1` | How many people are due right now, and would Brevo accept the request. Sends nothing. |
| `?verify=1` | What actually happened to recent sends, from Brevo's own event log. |
| `?reset=1` | Clears this week's ledger so the same people can be sent to again. |

**`?verify=1` matters more than it looks.** A 2xx from Brevo means *accepted*, not
*delivered*. On 2026-10-17 the first live run reported `sent: 173` and every one
of those messages was then rejected asynchronously, because the sender address
was not a verified Brevo sender. `?verify=1` reported:

```json
{ "ok": false, "counts": { "requests": 173, "error": 173 },
  "topReasons": [{ "reason": "Sending has been rejected because the sender you used
    … is not valid. Validate your sender or authenticate your domain", "count": 173 }] }
```

So after any send: run `?verify=1`, and only believe `delivered`.

### A send is not a delivery

After every batch the job reads the provider's event log and reconciles:

| Field | Meaning |
|---|---|
| `accepted` | messages the provider took (a 2xx) |
| `delivered` | messages with a real delivery event — never inferred |
| `rejected` | messages the provider threw away afterwards |
| `unconfirmed` | no event either way |
| `rolledBack` | people returned to the due list because their mail did not arrive |

Anyone rejected, and anyone unconfirmed during a failing batch, has their ledger
row deleted so they stay due. `ok` is `false` whenever anything was rejected, so
a broken sender can never look like a success.

Verified live on 2026-10-17 with the sender still unverified:

```json
{ "ok": false, "accepted": 3, "delivered": 0, "rejected": 3,
  "unconfirmed": 0, "rolledBack": 3,
  "verification": "provider rejected 3 and left 0 unconfirmed; 3 returned to the due list — Sending has been rejected because the sender ... is not valid." }
```

The first version of this check said `delivered: 1` for that same batch, because
it computed accepted − rejected and one rejection event had not landed yet. It
now only counts confirmed deliveries.

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
