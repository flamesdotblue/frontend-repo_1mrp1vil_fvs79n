import { Rocket, Handshake } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
      <div className="pointer-events-none absolute -inset-24 opacity-30 [filter:blur(80px)]" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/40" />
        <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/40" />
        <div className="absolute right-1/5 top-1/4 h-56 w-56 translate-x-1/2 rounded-full bg-cyan-500/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        <div className="mx-auto mb-6 flex w-max items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          <Rocket size={16} />
          <span>Kshitij • IIT Kharagpur</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Sponsorships that Power Asia’s Largest Techno-Management Fest
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Partner with India’s brightest minds. Amplify your brand across campuses,
          communities, and global tech audiences through Kshitij.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#sponsor" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow hover:shadow-lg transition">
            <Handshake size={18} /> Sponsor Us
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 transition">
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs">
        Scroll to explore
      </div>
    </section>
  );
}
