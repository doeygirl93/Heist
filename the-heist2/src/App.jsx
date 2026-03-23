import { useState } from "react";

// ── Fonts: load Bebas Neue (headings) + Inter (body) once ──
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; }
h1, h2, h3 { font-family: 'Bebas Neue', sans-serif; }
::selection { background: rgba(255,0,0,0.3); }`;
// ── Data ────────────────────────────────────────────────────

const phases = [
  { name: "The Blueprint", day: "Day 7",  desc: 'Plan the job. Define your tools, Project requirements and tools.', checkpoint: null },
  { name: "Breach",    day: "Day 12", desc: "Break in to the sucurity. Get the first functional logic working.",          checkpoint: "REQUIREMNET: 8 hours logged" },
  { name: "Vault",     day: "Day 19", desc: "Day of mission: Creak the core and finish the MVP.",                             checkpoint: "REQUIREMENT: 19 hours logged" },
  { name: "Getaway",   day: "Day 25", desc: "Finish the job. Ship your project and demo.",                checkpoint: "REQUIREMNET: 25 hours logged" },
];

const gearItems = [
  { name: "Raspberry Pi 5" },
  { name: "Keychron K10 HE" },
  { name: 'ARZOPA 16"'},
  { name: "Flipper Zero"},
];

const faqs = [
  { q: "What can I build?",      a: "Anything ambitious enough to take around 25 hours - a web app, hardware project, CLI tool, game, or anything else you can ship." },
  { q: "Do I need experience?",  a: "Basic familiarity with your tools helps, but the challenge is ultimately open-ended. The mission is yours to define." },
  { q: "Can I switch projects?", a: "Nope. The point is to finish one in depth. " },
  { q: "What if I fall behind?", a: "If you miss a checkpoint you become a Rouge spy. You can still finish, but you won't qualify for the top rewards." },
  { q: "Can I use AI?",          a: "Yes, but it can't be more than 20% of your total Code and you must disclose usage" },
];

// ── Components ──────────────────────────────────────────────

function Hero() {
  const scrollDown = () => {
    document.getElementById("what")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center"
    >
      {/* GIF background */}
      <img
        src="/hero.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1
          className="text-red-500"
          style={{ fontSize: "clamp(5rem, 15vw, 12rem)", letterSpacing: "0.05em", lineHeight: 1 }}
        >
          THE HEIST
        </h1>
        <p
          className="mt-4 text-white/80 text-base md:text-lg tracking-widest uppercase"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.2em" }}
        >
          Build one thing you actually finish
        </p>

        {/* Scroll arrow */}
        <button
          onClick={scrollDown}
          className="mt-16 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Scroll down
          </span>
          <span className="text-2xl leading-none" className="bounce">↓</span>
        </button>
      </div>
    </section>
  );
}

function WhatThisIs() {
  return (
    <section id="what" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-6">What This Is</h2>
        <p className="text-white/70 text-lg leading-relaxed">
          The Heist is a <span className="text-white font-semibold">25-day engineering challenge</span>. You choose one
          ambitious project — something you've always wanted to finish — and take it all the way from plan to final
          ship. At the end choose between 4 final awards
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className="border border-red-600 p-6 flex flex-col gap-3"
            >
              <div>
                <h3 className="text-3xl text-white">{phase.name}</h3>
                <p className="text-red-500 text-sm mt-1">{phase.day}</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">{phase.desc}</p>
              {phase.checkpoint && (
                <p className="text-white/40 text-xs border-t border-white/10 pt-3">
                  Checkpoint: {phase.checkpoint}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RogueStatus() {
  return (
    <section id="rogue" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-6">What happens if I miss a Checkpoint</h2>
        <p className="text-white/70 text-lg leading-relaxed">
          Miss one checkpoint or milestone and you drop into{" "}
          <span className="text-red-500 font-semibold">Rogue Status</span>. You can still finish the challenge — but
          you're off the main crew roster and ineligible for top rewards. But you might have a second chance of redemption...
        </p>
      </div>
    </section>
  );
}

function WhyThisExists() {
  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-6">Why This Exists</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-4">
          Most projects: start strong - lose momentum after initial progress - abandon projects once the complexity gets to much.
          Leaving many to choose easy, repitive projects rather than taking tha challege of something new
        </p>
        <p className="text-white/70 text-lg leading-relaxed">
          The Heist exists to bridge the gap between starting and finishing
        </p>
      </div>
    </section>
  );
}

function FieldGear() {
  return (
    <section id="gear" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-4">Prizes</h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl">
          Finish the challenge and choose one piece of field gear to help finish your next
          build.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gearItems.map((item) => (
            <div key={item.name} className="border border-red-600 p-6">
              <h3 className="text-2xl text-white">{item.name}</h3>
              <p className="text-white/50 text-sm mt-2">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-sm mt-6">Crew Status required to claim. Rogue members are not eligible.</p>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-10">FAQ</h2>
        <div className="flex flex-col">
          {faqs.map((item, i) => (
            <div key={i} className="border-t border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-white/80 text-base pr-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.q}
                </span>
                <span className="text-red-500 text-xl flex-shrink-0">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <p className="text-white/50 text-sm leading-relaxed pb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          Made with <span className="text-red-500">💗</span> by Doeygirl (aka Chika.)
        </p>
        <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          Built for{" "}
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            Hack Club
          </a>
        </p>
      </div>
    </footer>
  );
}

// ── Root ────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style>{FONTS}</style>
      <Hero />
      <WhatThisIs />
      <HowItWorks />
      <RogueStatus />
      <WhyThisExists />
      <FieldGear />
      <FAQ />
      <Footer />
    </>
  );
}