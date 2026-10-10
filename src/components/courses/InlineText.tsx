import type { ReactNode } from "react";

// Lesson text is authored with a tiny amount of inline markup
// (<strong>, <em>) that carries teaching weight. It is parsed into React
// elements — never injected as HTML — so a stray tag can only ever render as
// literal text.
const INLINE_SOURCE = "<(strong|b|em|i)>([\\s\\S]*?)<\\/\\1>";

function parseInline(text: string): ReactNode[] {
  const re = new RegExp(INLINE_SOURCE, "gi");
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tag = m[1].toLowerCase();
    const key = `i${i++}`;
    out.push(
      tag === "strong" || tag === "b" ? (
        <strong key={key} className="font-semibold text-slate-900">
          {m[2]}
        </strong>
      ) : (
        <em key={key}>{m[2]}</em>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length > 0 ? out : [text];
}

export function InlineText({ text }: { text: string }) {
  return <>{parseInline(text)}</>;
}
