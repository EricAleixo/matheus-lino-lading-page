import type { ReactNode } from "react";
import { ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Ambientes: escuros e claros alternam junto da narrativa, não a cada seção. */
type Tone = "ink" | "deep" | "mist" | "paper";

const TONE_CLASS: Record<Tone, string> = {
  ink: "deep-atmosphere text-mist",
  deep: "veil-atmosphere text-mist",
  mist: "bg-mist text-ink",
  paper: "paper-atmosphere text-ink",
};

export function Section({
  id,
  tone = "mist",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative isolate overflow-hidden", TONE_CLASS[tone])}>
      <div
        className={cn(
          "relative mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <p className={cn("text-xs font-semibold", muted ? "text-steel" : "text-current opacity-50")}>
      {children}
    </p>
  );
}

export function CtaButton({
  variant = "light",
  className,
  label = "Quero tomar decisões melhores no marketing",
}: {
  variant?: "light" | "dark";
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="#diagnostico"
      className={cn(
        "luminous-button inline-flex min-h-16 w-full items-center justify-between gap-4 rounded-full px-6 text-left text-[0.9375rem] font-semibold transition-[transform,background-color,box-shadow] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto sm:min-w-[390px] sm:text-base",
        variant === "light"
          ? "border border-mist/70 bg-mist text-ink hover:bg-paper focus-visible:outline-steel"
          : "border border-ink/15 bg-ink text-mist hover:bg-deep focus-visible:outline-deep",
        className,
      )}
    >
      {label}
      <ArrowDownRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.7} />
    </a>
  );
}
