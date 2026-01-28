/* eslint-disable @next/next/no-img-element */
import { CTAButton } from "@/components/CTAButton";
import { SCHEDULE_URL } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/axis-brands-logo.png"
            alt="Axis Brands"
            className="h-8 w-auto"
          />
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#case-studies"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground sm:inline-flex"
          >
            Case studies
          </a>
          <CTAButton href={SCHEDULE_URL} className="py-2">
            Book free audit
          </CTAButton>
        </div>
      </div>
    </header>
  );
}

