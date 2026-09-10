/**
 * Renders authored emphasis in a question stem.
 *
 * Stems ship as plain text with **markers** around the discriminating word
 * ("first", "most appropriate", "priority"). Authoring enforces that emphasis
 * and it is the cue that tells a student what the question is actually asking,
 * so it must survive to the screen.
 *
 * The markers are split in JS and rendered as real <strong> elements. Nothing
 * is injected as HTML, so there is no XSS surface and the payload stays free of
 * markup -- which keeps verify-authored-bank.ts's "no HTML in stem" gate valid.
 */
export function EmphasisedText({ text }: { text: string }) {
  if (!text.includes("**")) return <>{text}</>;

  // Odd indices are the emphasised runs.
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-slate-950">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
