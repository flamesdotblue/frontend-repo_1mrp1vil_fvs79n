import { useEffect, useState } from "react";
import { Rocket, Handshake } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Atmospheric glow layers */}
      <div className="pointer-events-none absolute -inset-24 opacity-30 [filter:blur(80px)]" aria-hidden>
        <div className="absolute left-1/3 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/40" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-indigo-500/40" />
        <div className="absolute left-1/2 bottom-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center text-white sm:pt-32">
        <div
          className="mx-auto mb-5 flex w-max items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur"
          style={{ transform: `translateY(${offset * -0.3}px)` }}
        >
          <Rocket size={16} />
          <span>Kshitij • IIT Kharagpur</span>
        </div>
        <h1
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ transform: `translateY(${offset * -0.2}px)` }}
        >
          Future-ready Sponsorships for a New Tech Era
        </h1>
        <p
          className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
          style={{ transform: `translateY(${offset * -0.15}px)` }}
        >
          Step into a world where brands meet innovation. Join Asia’s largest
          techno‑management fest and engage with next‑gen audiences in 3D.
        </p>
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ transform: `translateY(${offset * -0.1}px)` }}
        >
          <a
            href="#sponsor"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow transition hover:shadow-lg"
          >
            <Handshake size={18} /> Sponsor Us
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/20"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">
        Scroll to explore
      </div>
    </section>
  );
}
