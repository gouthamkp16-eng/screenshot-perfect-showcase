import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, SectionHeading, TrackGrid } from "@/components/site/Sections";

const title = "Internship Tracks — PCB, Firmware, Robotics, AI/ML | Techlicious Labs";
const description =
  "Hands-on internship tracks in KiCad PCB design, ESP32 embedded firmware, robotics and mechanical design, Python + AI/ML and full-stack development. Beginner to industry-ready.";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Internships,
});

const steps = [
  { n: "01", t: "Fundamentals", d: "Core theory compressed into what you actually need at the bench." },
  { n: "02", t: "Guided build", d: "Follow a mentor-led build, breaking and fixing it as you go." },
  { n: "03", t: "Your own project", d: "Scope, design and build something of your own with review checkpoints." },
  { n: "04", t: "Defend & certify", d: "Present your build, get documented feedback and project-based certification." },
];

function Internships() {
  return (
    <>
      <PageHero
        eyebrow="What we teach"
        title="Internship tracks built around real hardware"
        sub="Five core tracks for ECE, EEE, ETE, CSE and AI/ML students — each taking you from beginner to industry-ready on the tools engineers actually use."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Tracks"
            title="Pick your track"
            sub="Every track ends with a working build and documentation you can put in front of a recruiter."
          />
          <TrackGrid />
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it runs"
            title="Four stages, one finished build"
            sub="The same structure across every track, so colleges know exactly what the internship delivers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
                  <h3 className="mt-3 text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
