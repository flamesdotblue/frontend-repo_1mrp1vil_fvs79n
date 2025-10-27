import Hero from "./components/Hero";
import AboutAndWhy from "./components/AboutAndWhy";
import ImpactAndMedia from "./components/ImpactAndMedia";
import SponsorForm from "./components/SponsorForm";
import { Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <AboutAndWhy />
        <ImpactAndMedia />
        <SponsorForm />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#hero" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
            <Rocket size={18} />
          </span>
          <span>Kshitij • Sponsorship</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#about" className="hover:text-indigo-600">Who We Are</a>
          <a href="#impact" className="hover:text-indigo-600">Impact</a>
          <a href="#impact" className="hover:text-indigo-600">Events</a>
          <a href="#sponsor" className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-700">Sponsor Us</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Kshitij, IIT Kharagpur • Sponsorship Team
      </div>
    </footer>
  );
}
