import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/Sections";
import { CONTACT_EMAIL, socials, tracks } from "@/data/site";

const title = "Apply / Contact — Techlicious Labs Internships, Bengaluru";
const description =
  "Apply for a Techlicious Labs internship in PCB design, embedded firmware, robotics, Python/AI-ML or full-stack development. Bengaluru, Karnataka.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `College: ${data.get("college")}`,
      `Track: ${data.get("track")}`,
      "",
      `${data.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Internship application — ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Apply now"
        title="Ready to build something real?"
        sub="Tell us who you are and which track you want. We'll get back with dates, format and the project you'd be starting on."
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
            >
              <h2 className="text-2xl">Internship application</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This opens your email app with the details filled in — send it and we'll reply.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college">College</Label>
                  <Input id="college" name="college" required placeholder="College / University" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="track">Preferred track</Label>
                  <select
                    id="track"
                    name="track"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {tracks.map((t) => (
                      <option key={t.title}>{t.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Anything you've built already?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Projects, clubs, hackathons — or just tell us what you want to build."
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full sm:w-auto">
                Send application <Send className="size-4" />
              </Button>
              {sent && (
                <p className="mt-4 text-sm text-primary">
                  Your email app should have opened with the application ready to send.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl surface-navy p-8">
              <h2 className="text-2xl text-navy-foreground">Reach us directly</h2>
              <ul className="mt-6 space-y-4 text-navy-foreground/80">
                <li className="flex items-center gap-3">
                  <Mail className="size-5 text-mint" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-mint">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-5 text-mint" />
                  Bengaluru, Karnataka, India
                </li>
              </ul>
              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
                Follow the lab
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-navy-foreground/20 px-4 py-1.5 text-xs font-medium text-navy-foreground/80 transition-colors hover:border-mint hover:text-mint"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
              <p className="mt-10 font-hand text-3xl text-accent">Think. Build. Break. Fix.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
