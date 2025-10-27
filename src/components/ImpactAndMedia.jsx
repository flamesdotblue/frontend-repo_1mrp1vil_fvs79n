import { BarChart3, FileText, PlayCircle, Images } from "lucide-react";
import { useMemo, useRef, useState } from "react";

export default function ImpactAndMedia() {
  return (
    <section id="impact" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* GRAPHS */}
        <div className="mb-12 inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-200">
          <BarChart3 size={16} />
          <span className="text-sm font-medium">Impact & Growth</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Audience Growth (YoY)</h3>
            <Graph />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Engagement Rate</h3>
            <Graph gradientStart="#a78bfa" gradientEnd="#22d3ee" />
          </div>
        </div>

        {/* PREVIOUS SPONSORS */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold">Previous Sponsors</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {["Google", "Microsoft", "Tata", "Flipkart", "Accenture", "Adobe"].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>

        {/* PDFS */}
        <div className="mt-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">
            <FileText size={16} />
            <span className="text-sm font-medium">Resources</span>
          </div>
          <h3 className="text-2xl font-bold">PDFs</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Sponsorship Deck",
                link: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
              },
              {
                name: "Audience Report",
                link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
              },
              {
                name: "Brand Guidelines",
                link: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf",
              },
            ].map((pdf) => (
              <a
                key={pdf.name}
                href={pdf.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
              >
                <div>
                  <div className="font-medium text-white">{pdf.name}</div>
                  <div className="text-sm text-slate-300">View PDF</div>
                </div>
                <FileText className="text-slate-300 group-hover:text-emerald-300" />
              </a>
            ))}
          </div>
        </div>

        {/* VIDEOS + DOME GLIMPSES */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-3 py-1 text-rose-200">
              <PlayCircle size={16} />
              <span className="text-sm font-medium">Videos</span>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Kshitij Highlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-sky-200">
              <Images size={16} />
              <span className="text-sm font-medium">Glimpses • Dome Gallery</span>
            </div>
            <DomeGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

function Graph({ gradientStart = "#6366f1", gradientEnd = "#22c55e" }) {
  const points = [5, 15, 9, 22, 18, 30, 45, 38, 62, 58, 72, 88];
  const max = Math.max(...points);
  const path = points
    .map((v, i) => `${(i / (points.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(" ");

  return (
    <div className="mt-4">
      <svg viewBox="0 0 100 100" className="h-48 w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="url(#g)"
          strokeWidth="3"
          points={path}
          vectorEffect="non-scaling-stroke"
        />
        {points.map((v, i) => (
          <circle
            key={i}
            cx={(i / (points.length - 1)) * 100}
            cy={100 - (v / max) * 100}
            r="1.8"
            fill="url(#g)"
          />
        ))}
      </svg>
      <div className="mt-2 text-xs text-slate-300">Illustrative data for visual representation</div>
    </div>
  );
}

function DomeGallery() {
  const images = useMemo(
    () =>
      [
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      ],
    []
  );

  const containerRef = useRef(null);
  const [rot, setRot] = useState({ x: -12, y: 20 });

  const onMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setRot({ x: -12 + dy * -10, y: 20 + dx * 30 });
  };

  const radius = 180; // px ring radius
  const rings = 3; // hemisphere rings
  const perRing = Math.ceil(images.length / rings);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      className="relative h-[360px] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur"
      style={{ perspective: 800 }}
    >
      <div
        className="absolute left-1/2 top-1/2 h-0 w-0"
        style={{ transformStyle: "preserve-3d", transform: `translate(-50%, -50%) rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}
      >
        {Array.from({ length: rings }).map((_, ringIndex) => {
          const ringImages = images.slice(
            ringIndex * perRing,
            ringIndex * perRing + perRing
          );
          const tilt = (ringIndex / (rings - 0.2)) * 70; // spread rings on dome
          return (
            <div key={ringIndex} style={{ transformStyle: "preserve-3d" }}>
              {ringImages.map((src, i) => {
                const angle = (i / ringImages.length) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                return (
                  <div
                    key={src + i}
                    className="absolute h-24 w-36 overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-md"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${tilt}deg) translate3d(${x}px, ${-ringIndex * 60}px, ${z}px) rotateY(${(angle * 180) / Math.PI}deg)`,
                    }}
                  >
                    <img
                      src={src}
                      alt="Kshitij glimpse"
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}
