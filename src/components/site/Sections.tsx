import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Bot,
  Brain,
  Code2,
  Cpu,
  FlaskConical,
  Layers,
  Shield,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { projects, stats, tracks, whyUs } from "@/data/site";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  cpu: Cpu,
  code: Code2,
  bot: Bot,
  brain: Brain,
  layers: Layers,
  flask: FlaskConical,
  wrench: Wrench,
  users: Users,
  trophy: Trophy,
  shield: Shield,
  badge: BadgeCheck,
  award: Award,
};

export function SectionHeading({
  eyebrow,
  title,
  sub,
  onNavy = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  onNavy?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl sm:text-4xl ${onNavy ? "text-navy-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base ${onNavy ? "text-navy-foreground/70" : "text-muted-foreground"}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mint">{eyebrow}</p>
          <h1 className="mt-4 text-4xl text-navy-foreground sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-navy-foreground/75">{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function TrackGrid() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((t, i) => {
        const Icon = icons[t.icon] ?? Cpu;
        return (
          <Reveal key={t.title} delay={i * 0.06}>
            <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
                Beginner to industry-ready
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="mt-12 grid gap-7 lg:grid-cols-2">
      {list.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.06}>
          <article className="group relative h-full overflow-hidden rounded-3xl border border-navy-foreground/10 bg-navy-muted p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
            <div
              className="absolute inset-0 grid-dots opacity-0 transition-opacity duration-300 group-hover:opacity-40"
              aria-hidden
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                {p.badge === "Award" && <Trophy className="size-3.5" />}
                {p.badge}
              </span>
              <h3 className="mt-5 text-2xl text-navy-foreground sm:text-3xl">{p.title}</h3>
              <p className="mt-4 text-navy-foreground/80">{p.summary}</p>
              <p className="mt-3 text-sm text-navy-foreground/55">{p.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-mint/30 px-2.5 py-1 text-[11px] font-medium text-mint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function WhyGrid() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {whyUs.map((w, i) => {
        const Icon = icons[w.icon] ?? BadgeCheck;
        return (
          <Reveal key={w.title} delay={i * 0.05}>
            <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-foreground">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-base">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.blurb}</p>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div className="rounded-2xl border border-navy-foreground/10 bg-navy-muted px-6 py-8 text-center">
            <p className="font-display text-4xl font-bold text-mint">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-navy-foreground/70">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CTABanner() {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl text-navy-foreground sm:text-4xl">
            Ready to Build Something Real?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/75">
            Applications are open for PCB design, embedded firmware, robotics, AI/ML and full-stack
            tracks. Bring curiosity — we'll hand you the hardware.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/projects">See Our Projects</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
