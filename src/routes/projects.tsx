import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, ProjectGrid, StatsBar } from "@/components/site/Sections";

const title = "Projects & R&D — RoboDog, Voice AI, Agri-Tech | Techlicious Labs";
const description =
  "Flagship builds from the Techlicious Labs R&D floor: the RoboDog quadruped, on-device voice assistant, AI crop sorting line, emergency SOS app and factory-floor web tooling.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects / R&D"
        title="Proof of work, not promises"
        sub="These are our own builds — designed, fabricated, coded and debugged in-house. They are also the projects our interns learn inside."
      />

      <section className="surface-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProjectGrid />
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Trophy className="size-7" />
            </span>
            <h2 className="mt-5 text-3xl">Smart India Hackathon 2024 — National Winner</h2>
            <p className="mt-4 text-muted-foreground">
              A national-level win, judged on a working build under deadline. The same team that
              won it reviews your code and your boards.
            </p>
            <p className="mt-4 font-hand text-3xl text-primary">Make it Real.</p>
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
