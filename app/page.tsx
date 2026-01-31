/* eslint-disable @next/next/no-img-element */

import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SCHEDULE_URL, CASE_STUDIES, FAQ, PACKAGE_SCOPE, TOP_STATS } from "@/lib/content";

// Helper function to find case study by brand name
function findCaseStudyByBrandName(brandName: string) {
  return CASE_STUDIES.find(
    (cs) => cs.brandName.toLowerCase() === brandName.toLowerCase()
  );
}

// Helper function to extract brand name from sub text
function extractBrandName(sub: string): { brandName: string; rest: string } | null {
  const match = sub.match(/\(([^)]+)\)/);
  if (match) {
    return {
      brandName: match[1],
      rest: sub.replace(match[0], "").trim(),
    };
  }
  // If no parentheses, check if the whole thing is a brand name
  const caseStudy = findCaseStudyByBrandName(sub);
  if (caseStudy) {
    return { brandName: sub, rest: "" };
  }
  return null;
}

// Component to render stat sub text with clickable brand name
function StatSubText({ sub }: { sub: string }) {
  const extracted = extractBrandName(sub);
  if (!extracted) {
    return <div className="mt-1 text-xs text-foreground/60">{sub}</div>;
  }

  const caseStudy = findCaseStudyByBrandName(extracted.brandName);
  const brandLink = caseStudy ? `#case-studies` : undefined;

  return (
    <div className="mt-1 text-xs text-foreground/60">
      {extracted.rest && <span>{extracted.rest} </span>}
      {brandLink ? (
        <a
          href={brandLink}
          className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-blue/80 transition-colors"
        >
          {extracted.brandName}
        </a>
      ) : (
        <span className="font-semibold">{extracted.brandName}</span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <Section className="relative overflow-hidden py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute -right-40 -top-20 h-[520px] w-[520px] rounded-full bg-brand-orange/15 blur-3xl" />
            <div className="absolute bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Turn your Amazon store into a
                <span className="text-brand-blue"> predictable growth engine</span>
                —without guessing.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/75">
                If you’re already getting traffic and sales, the fastest wins usually
                come from fixing conversion, PPC efficiency, inventory constraints,
                and brand control. We’ll show you exactly what to do first.
              </p>

              <ul className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-foreground/80">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <span>
                    A prioritized roadmap for listings, ads, creative, inventory, and
                    brand margins.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <span>
                    What to fix now vs. later (so you don’t waste time on low-impact
                    tweaks).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <span>
                    A clear path to better CVR, better ROAS, and stable scaling.
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={SCHEDULE_URL} className="w-full sm:w-auto">
                  Book your free audit
                </CTAButton>
                <CTAButton
                  href="#case-studies"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  See proof & case studies
                </CTAButton>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/amazon-logo-black.png"
                alt="Amazon"
                className="h-32 w-auto object-contain mb-8"
              />
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-soft sm:p-6 w-full">
                <div className="w-full space-y-8">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold tracking-tight text-foreground">
                      {TOP_STATS[0].value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-foreground/70">
                      {TOP_STATS[0].label}
                    </div>
                    <StatSubText sub={TOP_STATS[0].sub} />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold tracking-tight text-foreground">
                      {TOP_STATS[1].value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-foreground/70">
                      {TOP_STATS[1].label}
                    </div>
                    <StatSubText sub={TOP_STATS[1].sub} />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold tracking-tight text-foreground">
                      {TOP_STATS[2].value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-foreground/70">
                      {TOP_STATS[2].label}
                    </div>
                    <StatSubText sub={TOP_STATS[2].sub} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* BEFORE / AFTER */}
        <Section className="py-14 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Your product got you here. It won&apos;t get you to 8 figures.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/75">
              Most brands hit a ceiling. The ones that break through have a system—not just hustle.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* BEFORE */}
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:p-8">
              <div className="text-sm font-extrabold mb-5">Before</div>
              <ul className="space-y-3 text-sm leading-6 text-foreground/75">
                <li>High logistics costs eating into margins</li>
                <li>Unauthorized resellers undercutting your prices</li>
                <li>Ad spend going up, ROAS going down</li>
                <li>Limited product visibility despite good reviews</li>
                <li>No clear data on what&apos;s actually working</li>
                <li>Doing PPC, creative, logistics, and brand protection yourself</li>
              </ul>
            </div>

            {/* AFTER */}
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:p-8">
              <div className="text-sm font-extrabold mb-5">After</div>
              <ul className="space-y-3 text-sm leading-6 text-foreground/75">
                <li>35% average brand growth in 6 months</li>
                <li>Unauthorized sellers removed (84 removed for one brand alone)</li>
                <li>Lower ACoS with expertly managed PPC and DSP</li>
                <li>Optimized listings that turn browsers into buyers</li>
                <li>Weekly performance reports with clear metrics</li>
                <li>Full-service team: ads, creative, logistics, brand protection, SEO</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[var(--radius-lg)] bg-muted p-5 ring-1 ring-border">
            <div className="grid gap-6 text-center sm:grid-cols-3">
              <div>
                <div className="text-2xl font-extrabold">$100M+</div>
                <div className="mt-1 text-xs text-foreground/60">Sales generated for partners</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">99%</div>
                <div className="mt-1 text-xs text-foreground/60">Client retention rate</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">50+</div>
                <div className="mt-1 text-xs text-foreground/60">Partnered brands</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href={SCHEDULE_URL} className="w-full sm:w-auto">
              Book your free audit
            </CTAButton>
          </div>
        </Section>

        {/* PACKAGE */}
        <Section id="package" className="py-14 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight">
              What we optimize (the stuff that actually moves the needle)
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              From protecting your brand and optimizing listings to executing high-performance advertising and streamlining logistics—we handle every step.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGE_SCOPE.map((s) => (
              <div
                key={s.title}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-soft"
              >
                <div className="text-sm font-extrabold">{s.title}</div>
                <div className="mt-2 text-sm leading-6 text-foreground/75">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius-lg)] bg-brand-blue p-7 text-white shadow-soft sm:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-white/80">
                  Ready for a clear plan?
                </div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight">
                  Book the free audit + strategy call.
                </div>
                <div className="mt-2 text-sm leading-6 text-white/80">
                  We’ll tell you exactly what to fix first—and why.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <CTAButton
                  href={SCHEDULE_URL}
                  className="bg-white text-brand-blue hover:brightness-105"
                >
                  Schedule a call
                </CTAButton>
              </div>
            </div>
          </div>
        </Section>

        {/* CASE STUDIES */}
        <Section id="case-studies" className="py-14 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight">Case studies</h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              Real brands. Real growth. See how we&apos;ve helped companies scale revenue,
              improve ROAS, and take back control of their Amazon presence.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-soft sm:flex-row">
            <div>
              <div className="text-sm font-extrabold">
                Want results like this for your Amazon channel?
              </div>
              <div className="mt-1 text-sm text-foreground/70">
                Start with a free audit + strategy call.
              </div>
            </div>
            <CTAButton href={SCHEDULE_URL} className="w-full sm:w-auto">
              Book free audit
            </CTAButton>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="py-14 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              Quick answers to the most common questions.
            </p>
          </div>
          <div className="mt-8">
            <FAQAccordion items={FAQ} />
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="py-14 sm:py-20">
          <div className="rounded-[var(--radius-lg)] bg-muted p-8 ring-1 ring-border">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-foreground/70">
                  Final step
                </div>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                  Get your Amazon growth roadmap.
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  Book the free audit + strategy call. If there’s a fit, we’ll recommend the
                  best path forward (one-time optimization, ongoing management, or a hybrid).
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <CTAButton href={SCHEDULE_URL} className="w-full sm:w-auto">
                  Book free audit
                </CTAButton>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <Section>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="text-sm font-semibold text-foreground/70">
              © {new Date().getFullYear()} Axis Brands. All rights reserved.
            </div>
            <a
              href="https://axisbrandsco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/55 underline-offset-2 hover:underline"
            >
              Visit our website →
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
