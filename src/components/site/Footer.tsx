import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, navLinks, socials } from "@/data/site";
import logoWhite from "@/assets/tl-logo-white.png.asset.json";

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img src={logoWhite.url} alt="Techlicious Labs" className="h-11 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Robotics & embedded systems R&D lab in Bengaluru. Where Theory Gets a Job.
          </p>
          <p className="mt-3 font-hand text-2xl text-mint">Think. Build. Break. Fix.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-mint"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-mint" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-mint">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-mint" />
              Bengaluru, Karnataka, India
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
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
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-navy-foreground/55 sm:px-6">
          © {new Date().getFullYear()} Techlicious Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
