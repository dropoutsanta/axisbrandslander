import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyDrawer({
  caseStudy,
  triggerClassName,
}: {
  caseStudy: CaseStudy;
  triggerClassName?: string;
}) {
  return (
    <Dialog.Root>
      <div
        className={cn(
          "group w-full rounded-[var(--radius-lg)] border border-border bg-card p-5 text-left shadow-soft transition hover:-translate-y-0.5 hover:bg-muted",
          triggerClassName,
        )}
      >
        <Dialog.Trigger asChild>
          <button type="button" className="w-full text-left focus:outline-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-foreground/70">
                  Case study
                </div>
                <div className="mt-1 text-xl font-extrabold tracking-tight">
                  {caseStudy.brandName}
                </div>
                <div className="mt-3 text-sm leading-6 text-foreground/75">
                  {caseStudy.claim}
                </div>
              </div>
              <span className="mt-1 inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                Preview PDF
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {caseStudy.keyMetrics.slice(0, 3).map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-muted p-3 ring-1 ring-border"
                >
                  <div className="text-[11px] font-semibold text-foreground/60">
                    {m.label}
                  </div>
                  <div className="mt-1 text-sm font-extrabold">{m.value}</div>
                </div>
              ))}
            </div>
          </button>
        </Dialog.Trigger>

        <div className="mt-4">
          <a
            href={caseStudy.pdfUrl}
            download
            className="text-sm font-semibold text-brand-blue underline underline-offset-4 hover:brightness-110"
          >
            Download PDF
          </a>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px]" />
        <Dialog.Content
          className={cn(
            "fixed right-0 top-0 z-50 h-dvh w-full max-w-[720px] overflow-hidden border-l border-border bg-background shadow-soft outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
              <div>
                <Dialog.Title className="text-2xl font-extrabold tracking-tight">
                  {caseStudy.brandName}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm leading-6 text-foreground/75">
                  {caseStudy.claim}
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
                >
                  Close
                </button>
              </Dialog.Close>
            </div>

            <div className="flex-1 overflow-auto p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {caseStudy.keyMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-[var(--radius-lg)] bg-muted p-4 ring-1 ring-border"
                  >
                    <div className="text-xs font-semibold text-foreground/60">
                      {m.label}
                    </div>
                    <div className="mt-1 text-lg font-extrabold">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-sm font-extrabold">What we did</div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/75">
                  {caseStudy.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-extrabold">PDF preview</div>
                  <a
                    className="text-sm font-semibold text-brand-blue hover:underline"
                    href={caseStudy.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in new tab
                  </a>
                </div>
                <div className="mt-3 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
                  <iframe
                    title={`${caseStudy.brandName} case study`}
                    src={`${caseStudy.pdfUrl}#view=FitH`}
                    className="h-[70vh] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

