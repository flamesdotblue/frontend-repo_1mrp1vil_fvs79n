import { BarChart3, FileText, PlayCircle, Images } from "lucide-react";

export default function ImpactAndMedia() {
  return (
    <section id="impact" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* GRAPHS */}
        <div className="mb-12 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
          <BarChart3 size={16} />
          <span className="text-sm font-medium">Impact & Growth</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">Audience Growth (YoY)</h3>
            <Graph />
          </div>
          <div className="rounded-2xl border bg-white p-6">
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
                  className="flex h-20 items-center justify-center rounded-xl border bg-white px-3 text-slate-600"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>

        {/* PDFS */}
        <div className="mt-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
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
                className="group flex items-center justify-between rounded-xl border bg-white p-4 hover:border-indigo-300 hover:shadow"
              >
                <div>
                  <div className="font-medium">{pdf.name}</div>
                  <div className="text-sm text-slate-500">View PDF</div>
                </div>
                <FileText className="text-slate-400 group-hover:text-indigo-500" />
              </a>
            ))}
          </div>
        </div>

        {/* VIDEOS + GLIMPSES */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-rose-700">
              <PlayCircle size={16} />
              <span className="text-sm font-medium">Videos</span>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border bg-black">
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700">
              <Images size={16} />
              <span className="text-sm font-medium">Glimpses</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl border bg-white"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1515165562835-c3b8da8e09f9?q=80&w=800&auto=format&fit=crop`}
                    alt="Kshitij glimpse"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
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
      <div className="mt-2 text-xs text-slate-500">Illustrative data for visual representation</div>
    </div>
  );
}
