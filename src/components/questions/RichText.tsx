import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Renders authored rationales and strategies with their intended structure.
//
// The authored bank stores light markup that carries real teaching weight:
//
//   CORRECT (B) — "Reduced level of consciousness". Impaired consciousness
//   ... defines <strong>severe malaria</strong> and carries a high mortality
//   risk ...
//
//   Why the other options fail:
//   • A — Fever is expected in malaria and its height does not correlate ...
//   • C — The positive RDT confirms the diagnosis but says nothing ...
//
// Rendered as {rationale} inside a <p>, React escapes the tags so students
// literally saw "<strong>severe malaria</strong>", and CSS collapsed the
// newlines so every bullet ran together into one block of text.
//
// This component restores the structure:
//   * blank-line-separated blocks become separate paragraphs
//   * lines starting with • (or -) become a proper list
//   * <strong>/<em>/<b>/<i> become real emphasis
//
// It deliberately does NOT use dangerouslySetInnerHTML. The markup is parsed
// into React elements and any tag other than the four above is left as
// literal text, so a stray tag in authored content can never inject markup.
// ---------------------------------------------------------------------------

const INLINE = /<(strong|b|em|i)>([\s\S]*?)<\/\1>/gi;

/** Parse the supported inline tags into React nodes. */
function inline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tag = m[1].toLowerCase();
    const inner = m[2];
    const key = `${keyPrefix}-i${i++}`;
    if (tag === "strong" || tag === "b") {
      out.push(
        <strong key={key} className="font-semibold text-slate-900">
          {inner}
        </strong>,
      );
    } else {
      out.push(<em key={key}>{inner}</em>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length > 0 ? out : [text];
}

const BULLET = /^\s*(?:[•·*]|-)\s+/;

export function RichText({ text, className = "" }: { text: string; className?: string }) {
  if (!text) return null;

  // Normalise newlines, then split into blocks on blank lines.
  const blocks = text.replace(/\r\n/g, "\n").split(/\n\s*\n/);

  return (
    <div className={`space-y-2 ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim().length > 0);
        const bulletLines = lines.filter((l) => BULLET.test(l));

        // A block is a list when every line in it is a bullet.
        if (bulletLines.length > 0 && bulletLines.length === lines.length) {
          return (
            <ul key={`b${bi}`} className="list-none space-y-1.5">
              {lines.map((line, li) => (
                <li key={`b${bi}-l${li}`} className="flex gap-2">
                  <span aria-hidden className="mt-px select-none text-slate-400">
                    •
                  </span>
                  <span className="flex-1">{inline(line.replace(BULLET, ""), `b${bi}-l${li}`)}</span>
                </li>
              ))}
            </ul>
          );
        }

        // A block that mixes a lead-in line with bullets, e.g.
        //   Why the other options fail:
        //   • A — ...
        if (bulletLines.length > 0) {
          const lead = lines.filter((l) => !BULLET.test(l));
          return (
            <div key={`b${bi}`} className="space-y-1.5">
              {lead.map((line, li) => (
                <p key={`b${bi}-p${li}`}>{inline(line, `b${bi}-p${li}`)}</p>
              ))}
              <ul className="list-none space-y-1.5">
                {lines
                  .filter((l) => BULLET.test(l))
                  .map((line, li) => (
                    <li key={`b${bi}-u${li}`} className="flex gap-2">
                      <span aria-hidden className="mt-px select-none text-slate-400">
                        •
                      </span>
                      <span className="flex-1">
                        {inline(line.replace(BULLET, ""), `b${bi}-u${li}`)}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        }

        // Plain paragraph; single newlines inside it become line breaks.
        return (
          <p key={`b${bi}`}>
            {lines.map((line, li) => (
              <span key={`b${bi}-s${li}`}>
                {li > 0 && <br />}
                {inline(line, `b${bi}-s${li}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
