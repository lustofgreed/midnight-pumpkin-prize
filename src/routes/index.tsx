import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Smartphone,
  ClipboardCheck,
  BadgeCheck,
  ShoppingBasket,
  Landmark,
  Apple,
  HeartPulse,
  Medal,
  Building2,
  Tent,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import phonePackageImg from "@/assets/phone-package.png";
import ghostImg from "@/assets/ghost-witch.png";
import iphoneImg from "@/assets/iphone.png";
import webImg from "@/assets/spider-web.png";
import pumpkinImg from "@/assets/black-pumpkin.png";

const APPLY_URL = "https://example.com/apply";
// EDIT THIS: change APPLY_URL above — every button and form on the page redirects there.

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spooky — Halloween Deal 🎃" },
      {
        name: "description",
        content:
          "Boo! Ghost your phone bill and score a spooky deal. Free phone package and free monthly service through the federal Lifeline program.",
      },
      { property: "og:title", content: "Spooky — Halloween Deal 🎃" },
      {
        property: "og:description",
        content: "Claim your free phone package and free monthly service before this treat vanishes!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: MapPin, label: "1. Enter ZIP Code" },
  { icon: Smartphone, label: "2. Choose your plan & phone" },
  { icon: ClipboardCheck, label: "3. Check eligibility" },
  { icon: BadgeCheck, label: "4. Get Approved" },
];

const programs = [
  { icon: ShoppingBasket, label: "SNAP / Food Stamps" },
  { icon: Landmark, label: "SSI" },
  { icon: Apple, label: "California WIC" },
  { icon: HeartPulse, label: "Medicaid / Medi-Cal" },
  { icon: Medal, label: "Veterans Pension" },
  { icon: Building2, label: "Public Housing (HUD)" },
  { icon: Tent, label: "Tribal TANF" },
];

const stateTabs = ["California", "Kentucky", "Tribal Residents", "Other States"];

function Logo() {
  return (
    <a href="/" className="leading-none">
      <span className="block font-display text-3xl text-brand-orange">Spooky</span>
      <span className="block text-[10px] font-medium tracking-widest text-muted-foreground">
        HALLOWEEN GIVEAWAY
      </span>
    </a>
  );
}

function ApplyButton({ children = "Apply Now" }: { children?: React.ReactNode }) {
  return (
    <a
      href={APPLY_URL}
      className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}

function DripEdge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-8 w-full ${className}`}
    >
      <path
        d="M0,0 L600,0 L600,6 C585,6 580,28 565,28 C550,28 548,10 535,10 C522,10 520,34 505,34 C490,34 488,12 475,12 C462,12 458,26 445,26 C432,26 430,8 415,8 C400,8 398,32 383,32 C368,32 366,14 352,14 C338,14 336,30 322,30 C308,30 306,10 292,10 C278,10 276,36 261,36 C246,36 244,16 230,16 C216,16 214,28 200,28 C186,28 184,8 170,8 C156,8 154,30 140,30 C126,30 124,12 110,12 C96,12 94,34 80,34 C66,34 64,14 50,14 C36,14 34,24 20,24 C8,24 6,10 0,10 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Countdown() {
  const [left, setLeft] = useState<{ h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const target = Date.now() + (3 * 3600 + 11 * 60 + 6) * 1000;
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cell = (value: number | undefined, label: string) => (
    <div className="flex flex-col items-center">
      <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="font-display text-5xl text-brand-orange">
        {value === undefined ? "--" : String(value).padStart(2, "0")}
      </span>
    </div>
  );

  return (
    <div className="flex items-start justify-center gap-4">
      {cell(left?.h, "Hours")}
      <span className="pt-4 text-2xl text-muted-foreground">:</span>
      {cell(left?.m, "Mins")}
      <span className="pt-4 text-2xl text-muted-foreground">:</span>
      {cell(left?.s, "Secs")}
    </div>
  );
}

function LeadForm({ buttonText }: { buttonText: string }) {
  return (
    <form
      className="mt-6 grid gap-3 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = APPLY_URL;
      }}
    >
      <input
        required
        placeholder="Enter Zip Code"
        className="rounded-lg border border-input bg-muted px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required
        type="email"
        placeholder="Enter Your Email Address"
        className="rounded-lg border border-input bg-muted px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        className="bg-cta rounded-lg py-3 text-lg font-bold uppercase text-primary-foreground sm:col-span-2"
      >
        {buttonText}
      </button>
    </form>
  );
}

function PrivacyNote() {
  return (
    <p className="mt-4 text-xs text-muted-foreground">
      By continuing, you agree to our <span className="underline">Privacy Policy</span> and to receive emails
      about the latest updates, offers and notifications from Spooky. You can unsubscribe at any time.
    </p>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-panel/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Logo />
          <ApplyButton />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-14 text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={ghostImg} alt="Ghost mascot" width={816} height={816} className="w-16 md:w-20" />
            <h1 className="font-display text-5xl leading-tight text-foreground drop-shadow md:text-7xl">
              Boo! Ghost your phone bill,
              <br />
              Score a spooky deal
            </h1>
          </div>
          <img
            src={phonePackageImg}
            alt="Free phone package with two smartphones, SIM cards and charger"
            width={1024}
            height={1024}
            className="mt-6 w-full max-w-lg"
          />
          <div className="mt-8 w-full max-w-2xl rounded-2xl border border-border bg-panel/90 p-6 backdrop-blur">
            <h2 className="text-xl font-bold text-brand-orange">
              Enter your details and unlock your spooky-good deal.
            </h2>
            <LeadForm buttonText="Unlock My Offer" />
            <PrivacyNote />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <h2 className="font-display text-5xl text-brand-orange md:text-6xl">
              Don't let this treat vanish!
            </h2>
            <img src={ghostImg} alt="Ghost mascot" width={816} height={816} loading="lazy" className="w-14 md:w-16" />
          </div>
          <div className="mt-8">
            <Countdown />
          </div>
          <div className="relative mt-4 rounded-t-2xl bg-panel px-6 pb-2 pt-8 text-card-foreground">
            <p className="text-sm text-foreground/90">
              Quick! Boo can't keep these scary-good phone offers around forever
            </p>
            <LeadForm buttonText="Claim My Treat" />
            <PrivacyNote />
          </div>
          <DripEdge className="text-panel" />
        </div>
      </section>

      {/* How to claim */}
      <section className="relative overflow-hidden px-5 py-20">
        <img
          src={webImg}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          className="pointer-events-none absolute -right-24 -top-24 w-80 opacity-40"
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <h2 className="font-display text-5xl uppercase text-brand-orange md:text-7xl">
              Claiming your treat
              <br />
              is scarily easy
            </h2>
            <img src={ghostImg} alt="Ghost mascot" width={816} height={816} loading="lazy" className="hidden w-20 sm:block" />
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.label} className="relative flex flex-col items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-orange/40 bg-navy">
                  <s.icon className="h-10 w-10 text-brand-orange" />
                </div>
                <p className="mt-4 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ApplyButton>Ready, Set, Boo!</ApplyButton>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="relative overflow-hidden px-5 py-20">
        <img
          src={webImg}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          className="pointer-events-none absolute -left-24 -top-24 w-72 opacity-30"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl text-brand-orange md:text-6xl">Who can claim this treat?</h2>
          <p className="mt-4 text-foreground/90">
            Boo might have this treat for you if you receive benefits from one of these programs or meet the
            income requirement.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {programs.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center rounded-xl border border-navy bg-navy/60 p-5"
              >
                <p.icon className="h-10 w-10 text-foreground" />
                <p className="mt-3 text-sm font-bold">{p.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ApplyButton>Check My Eligibility</ApplyButton>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Offer provided through the federal Lifeline program via Spooky. Eligibility, service, and
            device availability vary by state.
          </p>
        </div>
      </section>

      {/* Offer by state */}
      <section className="relative overflow-hidden px-5 py-20">
        <img
          src={webImg}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          className="pointer-events-none absolute -right-32 top-0 w-96 opacity-40"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={ghostImg} alt="Ghost mascot" width={816} height={816} loading="lazy" className="w-14 md:w-16" />
            <h2 className="font-display text-5xl text-brand-orange md:text-6xl">
              Knock, knock...your treat is inside
            </h2>
          </div>
          <p className="mt-3 text-sm text-foreground/80">
            Pick where you live and uncover the scary-good FREE deal waiting in your area
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {stateTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`rounded-t-lg px-5 py-2.5 text-sm font-bold transition-colors ${
                  activeTab === i
                    ? "bg-brand-orange text-primary-foreground"
                    : "bg-brand-orange/50 text-foreground hover:bg-brand-orange/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rounded-b-2xl rounded-tr-2xl bg-brand-orange px-6 pb-4 pt-10 text-primary-foreground">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl [writing-mode:vertical-rl]">iPhone 11</span>
                <img
                  src={iphoneImg}
                  alt="iPhone 11"
                  width={816}
                  height={816}
                  loading="lazy"
                  className="w-36"
                />
              </div>
              <span className="text-4xl font-bold">+</span>
              <div className="rounded-xl border border-primary-foreground/40 p-6">
                <p className="font-display text-5xl">12GB/mo</p>
                <p className="mt-1 text-sm font-medium">Free Monthly Service</p>
              </div>
            </div>
            <a
              href={APPLY_URL}
              className="mt-8 inline-block w-full max-w-md rounded-lg bg-panel py-3 text-sm font-bold uppercase text-foreground transition-opacity hover:opacity-90"
            >
              Get This $0 Treat
            </a>
          </div>
          <DripEdge className="text-brand-orange" />
          <p className="mt-6 text-sm font-medium">
            Phone models vary by inventory. The best treats go fast, so claim yours early!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-panel px-5 py-10">
        <img
          src={pumpkinImg}
          alt="Black jack-o-lantern"
          width={816}
          height={816}
          loading="lazy"
          className="absolute -top-10 left-6 w-20 md:w-24"
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <nav className="flex gap-6 font-medium">
            <a href="https://instagram.com" className="hover:text-brand-orange">Instagram</a>
            <a href="https://pinterest.com" className="hover:text-brand-orange">Pinterest</a>
            <a href="mailto:hello@example.com" className="hover:text-brand-orange">Email</a>
          </nav>
          <p className="text-sm text-foreground/70">© 2026 Spooky</p>
        </div>
      </footer>
    </div>
  );
}
