import { useState } from "react";

// ── Fonts: load Bebas Neue (headings) + Inter (body) once ──
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; }
h1, h2, h3 { font-family: 'Bebas Neue', sans-serif; }
::selection { background: rgba(255,0,0,0.3); }`;
// ── Data ────────────────────────────────────────────────────

const phases = [
  { name: "The Blueprint", day: "Day 1-5",  desc: 'Plan the job, define your tools, and project requirements. You can start the next phase early once approved', checkpoint: null },
  { name: "Initial Breach",    day: "Day 5-12", desc: "Make your first real entry and break into the security. Get the first functional logic working.",          checkpoint: "REQUIREMENT: Get 8 hours logged" },
  { name: "Crack the Vault",     day: "Day 12-19", desc: "Day of mission: Crack the core and finish the MVP.",                             checkpoint: "REQUIREMENT: 19 hours logged, Get MVP" },
  { name: "Final Getaway",   day: "Day 19-25", desc: "Finish the job. Polish and ship your project and demo. Choose the loot found from the vault. ",                checkpoint: "REQUIREMENT: 25 hours logged and shipped" },
];

const gearItems = [
  { name: "Raspberry Pi 5 Kit" },
  { name: "Flipper Zero" },
  { name: 'Portable Monitor + Rasberry pi 400'},
  { name: "Rainy 75 CNC Mechanical keyboard"},
  { name: "200$ Digital grants for mini pc'sm spotify or cloud credits etc."}
];

const faqs = [
  { q: "What can I build?",      a: "Anything ambitious enough to take around 25 hours. Like a web app, hardware project, CLI tool, game, or anything else you can ship and demo." },
  { q: "Do I need experience?",  a: "Basic familiarity with your tools helps, but the challenge is open-ended. You just need commitment." },
  { q: "Can I switch projects?", a: "Nope. The point is to finish one in depth. " },
  { q: "What if I fall behind?", a: "If you miss a checkpoint you become a Rogue Operator. You can still finish, but you won't qualify for the top rewards." },
  { q: "What counts as work time?",          a: "Track time with hackatime or Lapse" },
  { q: "How do I submit milestones?",          a: "Simple uploads and check ins" },
  { q: "Can I work more than 25 hours?",          a: "Absolutly, just 25 hours are required" },
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
        src="/hero v3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[0px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 top-[15%]">
        <h1
          className="relative font-black uppercase text-center"
          style={{
            color: "#000000", // Makes the inside black
            fontSize: "clamp(6rem, 20vw, 16rem)",
            letterSpacing: "0.05em",
            lineHeight: 1,
            WebkitTextStroke: "2px #ff0000",
            filter: "drop-shadow(0 0 15px rgba(255, 0, 0, 0.6))",
            transform: "perspective(500px) rotateX(10deg)",
            animation: "glowPulse 3s ease-in-out infinite"
          }}
        >
          THE HEIST
        </h1>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes glowPulse {
            0%, 100% {
              filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.4));
              text-shadow: 0 0 0px rgba(255, 0, 0, 0);
            }
            50% {
              filter: drop-shadow(0 0 25px rgba(255, 0, 0, 0.8));
              text-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
            }
          }
        `}} />
        <p
          className="mt-4 text-white/80 text-base md:text-lg tracking-widest uppercase"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.2em" }}
        >
          Presented By Hack Club
        </p>
      </div>

      {/* Scroll arrow - Pinned to bottom */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none z-20"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
          Scroll down
        </span>
        <span className="text-2xl leading-none animate-bounce">↓</span>
      </button>
    </section>
  );
}

function WhatThisIs() {
  return (
    <section id="what" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-6">Whats the assignment</h2>
        <p className="text-white/70 text-lg leading-relaxed">
           <span className="text-red-500 font-semibold"> 
            You’ve just been chosen as an operator as part of the Hack Crew . . .  
             </span> <br></br>
            The Heist is a 25‑day mission to take one project from planning to escape. 
           You’ll map the Blueprint, make the Breach, work into the Vault, 
           and pull off the Getaway -- all while logging 25 hours of real work. 
           This is a new YSWS model designed to help you break the past 
           jumping between small, inconsistant projects by giving you structure, checkpoints,
           and a clear arc from idea to completion.  <br></br>

           <span className="text-white font-semibold">Welcome to the Crew. The job starts now.</span>

        </p>
      </div>
    </section>
  );
}

function WhatsDifferent() {
  return (
    <section id="what" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-red-600 mb-6">What makes The Heist different</h2>
        <p className="text-white/70 text-lg leading-relaxed">
            Most programs are built around starting.
      The Heist is built around finishing.
For most YSWS you start multiple small projects, chase quick wins and you reset and move on
But for The Heist you choose one project, you stay on it and push through to the end. <span class="italic"> You don’t escape difficulty by starting something new. </span>
You break through it.

        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className=" px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-10">Operation Breakdown</h2>
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
    <section id="rogue" className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-6">OPERATION FAILURE PROTOCOL</h2>
        <p className="text-white/70 text-lg leading-relaxed">
          If you miss one checkpoint or milestone and your demoted into{" "}
          <span className="text-red-500 font-semibold">Rogue Status</span>. 
          Your mission is compromised. . . You're off the main crew roster and ineligible for top rewards. But still push toward the Getaway because you might have a second chance of redemption... 
        </p>
      </div>
    </section>
  );
}

function WhyThisExists() {
  return (
    <section id="why" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-6">Why This Exists</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-4">
          Every Hacker has a reason for choosing their projects.
           But most never make it past the first 10 hours. Or chose short easy missions that aren't challenging.
          The Heist exists to break that pattern.
          Your mission needs to be in-depth enough to make you think, adapt, and push deeper than you’re used to. 
        So that this YSWS gives you structure, checkpoints, and a shared arc so you finish something that actually matters.

        </p>
        <p className="text-red-600 text-lg leading-relaxed">
          The Heist exists to bridge the gap between starting and finishing
        </p>
      </div>
    </section>
  );
}

function TheCrew() {
  return (
    <section id="crew" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with a "Scanning" aesthetic */}
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            The Crew
          </h2>
          <div className="h-[2px] flex-grow bg-red-600/20"></div>
          <span className="font-mono text-xs text-red-500 hidden md:block">STATUS: ENCRYPTED</span>
        </div>

        {/* The 3-Column Tactical Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/10">
          
          {/* Column 1: The Concept */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-zinc-900/30 transition-colors">
            <h3 className="font-mono text-red-500 text-xs mb-6 uppercase tracking-widest">[ 01. grouping ]</h3>
            <p className="text-white font-bold text-xl mb-4 leading-tight">Join A CREW.</p>
            <p className="text-white/60 text-sm leading-relaxed">
              When you enter The Heist, you’re placed into a Crew.
               A small circle of 3–5 Operators running their 
               own missions, but moving through the operation 
               together. It’s your private channel to drop
                progress, share wins and fails, and keep each
                 other alive through the checkpoints.
            </p>
          </div>

          {/* Column 2: The Sidekick */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-zinc-900/30 transition-colors">
            <h3 className="font-mono text-red-500 text-xs mb-6 uppercase tracking-widest">[ 02. Support ]</h3>
            <p className="text-white font-bold text-xl mb-4 leading-tight">The SIDEKICK</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Each Crew gets a <span className="text-white italic">Sidekick</span> — a helper embedded in your Slack channel. 
              They’re watching the cameras, hypes your progress, drops resources, and checking in when things get quiet.
            </p>
          </div>

          {/* Column 3: Transmissions */}
          <div className="p-8 hover:bg-zinc-900/30 transition-colors">
            <h3 className="font-mono text-red-500 text-xs mb-6 uppercase tracking-widest">[ 03. Intel ]</h3>
            <p className="text-white font-bold text-xl mb-4 leading-tight">Incoming Side Operations.</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Throughout the 25 days, your Crew might accidenttally intercept the wrong radio Transmission into your channel. These transmission might select you for tiny optional side operations. These might be:
    a tiny creative endevor,

    More details about the Vault,

    and/or puzzle that unlocks small cosmetic prizes.
            </p>
          </div>
        </div>

        {/* Horizontal Callout: The Leaderboard */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 p-6 border-l-4 border-red-600 bg-zinc-950">
          <div className="md:w-1/4">
            <h4 className="font-mono text-white text-sm font-bold uppercase tracking-widest">Side-Ops Board</h4>
          </div>
          <div className="md:w-3/4">
            <p className="text-white/50 text-sm">
              Crews that complete side ops together are able to climb a leaderboard for BRAGGING rights. 
              It won't track hours or affect the main prizes —it’s just for fun, chaos, and showing who's the most active in their mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldGear() {
  return (
    <section id="gear" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-white mb-4">Prizes</h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl">
          Complete the mission and get access to the Vault. The hidden stash of high-grade gear reserved for successful spies.<br></br> 
          <span className="text-red-500 font-semibold">Choose between one piece of gear from the Vault:</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gearItems.map((item) => (
            <div key={item.name} className="border border-red-600 p-6">
              <h3 className="text-2xl text-white">{item.name}</h3>
              <p className="text-white/50 text-sm mt-2">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-sm mt-6">Pick the gear that fits the kind of Operator you’re becoming.</p>
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
      <WhatsDifferent />
      <HowItWorks />
      <WhyThisExists />
      <RogueStatus />
       <TheCrew />
      <FAQ />
      <FieldGear />
      <Footer />
    </>
  );
}