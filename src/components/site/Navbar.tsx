import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navLinks } from "@/data/site";
import logoAsset from "@/assets/tl-logo.png.asset.json";
import iconAsset from "@/assets/tl-icon.png.asset.json";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 py-2 shadow-[var(--shadow-card)] backdrop-blur-md"
          : "border-transparent bg-background/70 py-4 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Techlicious Labs home">
          <img
            src={scrolled ? iconAsset.url : logoAsset.url}
            alt="Techlicious Labs"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-10 sm:h-11"}`}
          />
          <span className="sr-only">Techlicious Labs</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <SignInDialog />
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <Link to="/contact">Apply Now</Link>
          </Button>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-medium text-foreground"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button asChild variant="hero" className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SignInDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="default" className="text-sm">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Student Portal — coming soon</DialogTitle>
          <DialogDescription>
            Sign-in for the Techlicious Labs student portal is on the way. You will track your
            project progress, mentor feedback and certification here.
          </DialogDescription>
        </DialogHeader>
        <p className="font-hand text-2xl text-primary">Small Steps, Big Builds</p>
      </DialogContent>
    </Dialog>
  );
}
