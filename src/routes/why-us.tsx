import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  CTABanner,
  PageHero,
  SectionHeading,
  StatsBar,
  WhyGrid,
} from "@/components/site/Sections";
import { socials } from "@/data/site";

const title = "Why Techlicious Labs — Real Hardware, Real Mentors";
const description =
  "Industry-standard tools, mentorship from practicing engineers, defence-grade PCB experience, a national hackathon win and project-based certification.";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WhyUs,
});

function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title="Everything here is backed by something we built"
        sub="Compare us on substance: the tools, the mentors, the boards and the track record behind every claim on this page."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <WhyGrid />
        </div>
      </section>

      <section className="surface-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <StatsBar />
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Social proof"
            title="See the lab in motion"
            sub="Build logs, student projects and behind-the-bench moments, posted as they happen."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {socials.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
                >
                  <h3 className="text-lg">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Follow Techlicious Labs on {s.name}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-primary">
                    Visit profile →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
