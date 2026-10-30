import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import prizeImg from "@/assets/prize-pack.png";
import ghostImg from "@/assets/ghost.png";
import pumpkinImg from "@/assets/pumpkin.png";

const ENTER_URL = "https://example.com/enter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spooky Halloween Giveaway! 🎃" },
      { name: "description", content: "Enter for a chance to win a Halloween prize pack full of treats, decorations, and costume goodies." },
      { property: "og:title", content: "Spooky Halloween Giveaway! 🎃" },
      { property: "og:description", content: "Win a Halloween prize pack. Winner announced on November 1." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const prizes = [
  { title: "Sweet Treats", text: "A big bag of candy and chocolate favorites." },
  { title: "Spooky Decorations", text: "Pumpkins, lanterns, and festive décor for your home." },
  { title: "Costume Goodies", text: "Witch hats, capes, and fun costume accessories." },
];

const steps = [
  { title: "Click Enter", text: "Tap the Enter the Giveaway button." },
  { title: "Fill the Form", text: "Add your name and email address." },
  { title: "Cross Your Fingers", text: "We pick a winner on November 1." },
];

const faqs = [
  { q: "Who can enter?", a: "Anyone 18 or older can enter the giveaway." },
  { q: "When is the winner announced?", a: "The winner will be announced on November 1." },
  { q: "How will I know if I won?", a: "We will email the winner directly." },
  { q: "Can I enter more than once?", a: "One entry per person, please." },
];

function CtaButton({ children, href = ENTER_URL }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="bg-cta inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-bold uppercase text-primary-foreground transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-hero">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="/" className="font-display text-2xl text-primary">Spooky Giveaway</a>
          <a href={ENTER_URL} className="bg-cta rounded-lg px-5 py-2.5 text-sm font-bold text-primary-foreground">
            Enter Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-10 md:grid-cols-2">
          <div className="relative">
            <img src={prizeImg} alt="Halloween prize pack" width={1024} height={1024} className="mx-auto w-full max-w-md" />
            <img src={pumpkinImg} alt="Jack-o-lantern" width={816} height={816} loading="lazy" className="absolute -bottom-4 left-0 w-24 md:w-32" />
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <h1 className="font-display text-5xl leading-tight text-primary md:text-6xl">Spooky Halloween Giveaway! 🎃</h1>
            </div>
            <p className="mt-5 text-lg text-foreground/90">
              Enter for a chance to win a Halloween prize pack full of treats, decorations, and costume goodies. Winner announced on November 1.
            </p>
            <div className="mt-8">
              <CtaButton>Enter the Giveaway</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl text-primary md:text-5xl">What You Could Win</h2>
          <p className="mt-3 text-muted-foreground">One lucky winner takes home the whole pack.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {prizes.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to enter */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <h2 className="font-display text-4xl uppercase text-primary md:text-6xl">Entering Is Scarily Easy</h2>
            <img src={ghostImg} alt="Ghost" width={816} height={816} loading="lazy" className="hidden w-20 sm:block" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-purple font-display text-4xl text-primary">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-1 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <CtaButton>Enter the Giveaway</CtaButton>
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
          <h2 className="font-display text-4xl text-primary">Don't Let This Treat Vanish!</h2>
          <p className="mt-3 text-foreground/90">Sign up to get giveaway updates and the winner announcement.</p>
          {sent ? (
            <p className="mt-6 font-bold text-primary">Thanks! You're on the list. 👻</p>
          ) : (
            <form
              className="mt-6 grid gap-3 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required placeholder="Your Name" className="rounded-lg border border-input bg-muted px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Your Email Address" className="rounded-lg border border-input bg-muted px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <button type="submit" className="bg-cta rounded-lg py-3 text-lg font-bold uppercase text-primary-foreground sm:col-span-2">
                Sign Me Up
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-4xl text-primary md:text-5xl">FAQ</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer text-lg font-medium">{f.q}</summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-brand-purple px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-display text-2xl text-primary">Spooky Giveaway</p>
          <nav className="flex gap-6 font-medium">
            <a href="https://instagram.com" className="hover:text-primary">Instagram</a>
            <a href="https://pinterest.com" className="hover:text-primary">Pinterest</a>
            <a href="mailto:hello@example.com" className="hover:text-primary">Email</a>
          </nav>
          <p className="text-sm text-foreground/70">© 2026 Spooky Giveaway</p>
        </div>
      </footer>
    </div>
  );
}
