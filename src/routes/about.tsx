import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, SectionHeading, StatsBar } from "@/components/site/Sections";

const title = "About Techlicious Labs — R&D-Driven Robotics Lab in Bengaluru";
const description =
  "Techlicious Labs is an R&D-driven robotics and embedded systems company in Bengaluru with a VTU-aligned, project-first internship curriculum for engineering students.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const pillars = [
  {
    title: "Structured curriculum",
    body: "Each track runs week by week from fundamentals to a finished, demonstrable build — no open-ended self-study.",
  },
  {
    title: "Hands-on labs",
    body: "Bench time with boards, probes, printers and soldering — not a slide deck about them.",
  },
  {
    title: "Mentorship that codes",
    body: "Mentors are engineers currently designing PCBs and writing firmware for shipped products.",
  },
  {
    title: "Industry-relevant tools",
    body: "KiCad, ESP32, PlatformIO, ESP-IDF, FreeRTOS, Wokwi and LTspice — the same toolchain used in industry.",
  },
  {
    title: "Project-first approach",
    body: "You leave with a build in your portfolio and the ability to explain every design decision in it.",
  },
  {
    title: "Proof over promises",
    body: "Our credibility is the RoboDog, the sorting line, the factory web app — see the projects page.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An R&D company that happens to train brilliantly"
        sub="Techlicious Labs designs and ships real robotics and embedded systems from Bengaluru. Students learn inside that work — on real hardware, real firmware and real problems."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Positioning"
            title="Not a training institute with a lab attached"
            sub="Most programmes teach around a syllabus. We teach around products we are already building — which is why our students can defend their work in an interview room."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                  <CheckCircle2 className="size-6 text-primary" />
                  <h3 className="mt-4 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-6" />
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl">VTU-aligned curriculum</h2>
              <p className="mt-4 text-muted-foreground">
                Our internship and course content is mapped to VTU engineering syllabus outcomes
                across ECE, EEE and CSE — so department heads and placement cells can see exactly
                which course outcomes each module supports. Internship reports, project
                documentation and evaluation rubrics are structured to match college requirements,
                making recognition and credit-mapping straightforward.
              </p>
              <p className="mt-5 font-hand text-3xl text-primary">Small Steps, Big Builds</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/internships">View internship tracks</Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/contact">Talk to us about a college tie-up</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="surface-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <StatsBar />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
