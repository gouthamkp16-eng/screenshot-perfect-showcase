import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircuitBackground } from "@/components/site/CircuitBackground";
import { Reveal } from "@/components/site/Reveal";
import {
  CTABanner,
  ProjectGrid,
  SectionHeading,
  StatsBar,
  TrackGrid,
  WhyGrid,
} from "@/components/site/Sections";
import iconAsset from "@/assets/tl-icon.png.asset.json";

const title = "Techlicious Labs — Where Theory Gets a Job";
const description =
  "Robotics and embedded systems R&D lab in Bengaluru offering hands-on internships in PCB design, embedded firmware, robotics, Python/AI-ML and full-stack development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="surface-navy relative overflow-hidden">
        <CircuitBackground />
        <img
          src={iconAsset.url}
          alt=""
          aria-hidden
          className="animate-float pointer-events-none absolute -right-10 top-10 hidden w-[420px] opacity-10 lg:block"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 px-4 py-1.5 text-xs font-medium text-mint">
              Robotics &amp; Embedded Systems R&amp;D Lab · Bengaluru
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] text-navy-foreground sm:text-7xl">
              Techlicious <span className="text-gradient-brand">Labs</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-5 font-display text-2xl font-semibold text-navy-foreground sm:text-3xl"
            >
              Where Theory Gets a Job.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-2 font-hand text-4xl text-accent"
            >
              Think. Build. Break. Fix.
            </motion.p>
            <p className="mt-6 max-w-xl text-navy-foreground/75">
              A robotics and embedded systems R&D lab in Bengaluru running hands-on internships for
              ECE, EEE, ETE, CSE and AI/ML students — real boards, real firmware, real products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/internships">
                  Explore Internships <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/projects">See Our Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Not a training institute"
            title="An R&D lab that trains engineers"
            sub="Our students work on the same hardware, firmware and software our team ships — guided by practicing engineers, with a VTU-aligned curriculum."
          />
          <div className="mt-12">
            <TrackGrid />
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/internships">See all internship tracks</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="surface-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Proof of work"
            title="Projects we actually built"
            sub="Flagship builds from our lab — hardware, firmware and software shipped end to end."
            onNavy
          />
          <ProjectGrid limit={4} />
          <Reveal className="mt-10 text-center">
            <Button asChild variant="onNavy" size="lg">
              <Link to="/projects">
                Explore the full R&D showcase <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why us"
            title="Built to make you employable"
            sub="Every reason below is backed by something we have designed, shipped or won."
          />
          <WhyGrid />
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
