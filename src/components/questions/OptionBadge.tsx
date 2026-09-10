import type { HTMLAttributes } from "react";

type OptionBadgeState = "default" | "selected" | "correct" | "wrong" | "missed";

type OptionBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
  state?: OptionBadgeState;
  shape?: "circle" | "square";
};

/** The shared A/B/C/D marker used everywhere a question option is shown. */
export function OptionBadge({ label, state = "default", shape = "circle", className = "", ...props }: OptionBadgeProps) {
  const stateClass = {
    default: "border-slate-300 bg-white text-slate-500",
    selected: "border-emerald-500 bg-emerald-500 text-white",
    correct: "border-emerald-500 bg-emerald-500 text-white",
    wrong: "border-rose-500 bg-rose-500 text-white",
    missed: "border-amber-500 bg-amber-100 text-amber-700",
  }[state];

  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center border text-xs font-extrabold ${
        shape === "circle" ? "rounded-full" : "rounded-md"
      } ${stateClass} ${className}`}
      {...props}
    >
      {label.trim().slice(0, 1).toUpperCase()}
    </span>
  );
}
