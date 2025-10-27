import { Users, Target, Star, Trophy } from "lucide-react";

export default function AboutAndWhy() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* WHO ARE WE */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-700">
              <Users size={16} />
              <span className="text-sm font-medium">Who Are We</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Sponsorship Team behind Kshitij, IIT Kharagpur
            </h2>
            <p className="mt-4 text-slate-600">
              We build long-lasting brand partnerships for India’s premier
              student-driven techno-management fest. From national outreach to
              high-impact on-ground and digital visibility, we craft
              integrations that matter.
            </p>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-indigo-50 to-white p-6">
            <h3 className="text-lg font-semibold text-slate-800">Motto</h3>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-indigo-700 shadow">
                <Target size={16} /> Think
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-indigo-700 shadow">
                <Star size={16} /> Create
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-indigo-700 shadow">
                <Trophy size={16} /> Enjoy
              </span>
            </div>
            <p className="mt-4 text-slate-600">
              Our philosophy celebrates curiosity, innovation, and the joy of
              building together with our partners.
            </p>
          </div>
        </div>

        {/* 75 YEARS + FLAGSHIP */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <p className="text-5xl font-extrabold text-indigo-600">75</p>
            <p className="mt-1 text-sm font-semibold tracking-widest text-slate-500">
              YEARS OF LEGACY
            </p>
            <p className="mt-3 text-slate-600">
              Celebrating decades of excellence at IIT Kharagpur, driving
              impact and innovation across the nation.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-5xl font-extrabold text-indigo-600">300K+</p>
            <p className="mt-1 text-sm font-semibold tracking-widest text-slate-500">
              DIGITAL REACH
            </p>
            <p className="mt-3 text-slate-600">
              Multi-platform presence with targeted campaigns and creator
              collaborations.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-5xl font-extrabold text-indigo-600">1500+</p>
            <p className="mt-1 text-sm font-semibold tracking-widest text-slate-500">
              CAMPUS AMBASSADORS
            </p>
            <p className="mt-3 text-slate-600">
              A pan-India grassroots network enabling hyperlocal outreach.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold">Why Associate With Us</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "High-Impact Visibility",
                desc: "Unlock presence across print, digital, and on-ground touchpoints including prime stages and televised moments.",
              },
              {
                title: "Youth + Tech Audience",
                desc: "Direct access to early adopters, future leaders, and top tech talent from across the country.",
              },
              {
                title: "Customized Integrations",
                desc: "We co-create contests, workshops, product showcases, and brand moments tailored to your goals.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border p-6">
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className="mt-2 text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold">Flagship Events</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Robotics Championship",
                desc: "Nationwide robotics competition attracting the brightest makers.",
              },
              {
                name: "Tech Talks Summit",
                desc: "Dialogues with industry leaders, entrepreneurs, and innovators.",
              },
              {
                name: "Startup Arena",
                desc: "Pitch battles and showcases for breakthrough ideas and products.",
              },
            ].map((ev) => (
              <div key={ev.name} className="rounded-2xl border p-6">
                <div className="mb-2 text-sm font-semibold tracking-wide text-indigo-600">
                  FLAGSHIP
                </div>
                <div className="text-lg font-semibold">{ev.name}</div>
                <div className="mt-2 text-slate-600">{ev.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
