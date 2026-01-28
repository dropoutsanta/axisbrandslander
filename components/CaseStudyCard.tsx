import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="w-full rounded-[var(--radius-lg)] border border-border bg-card shadow-soft p-5">
      <div className="text-sm font-semibold text-foreground/70">
        Case study
      </div>
      <div className="mt-1 text-xl font-extrabold tracking-tight">
        {caseStudy.brandName}
      </div>

      <div className="mt-4 grid grid-cols-[140px_1fr] gap-x-4 gap-y-1 text-sm">
        {caseStudy.keyMetrics.slice(0, 3).map((m) => (
          <div key={m.label} className="contents">
            <div className="text-foreground/60">{m.label}</div>
            <div className="font-semibold">{m.value}</div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-foreground/75">
        {caseStudy.summary}
      </p>

      <a
        href={caseStudy.pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-semibold text-brand-blue hover:underline underline-offset-4"
      >
        Read full case study
      </a>
    </div>
  );
}
