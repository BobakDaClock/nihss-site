import { Link } from "react-router-dom";
import { nihssItems } from "../nihssData";

function MediaPreview({ item }) {
  const previewPath = `/Media/${item.slug}-preview.png`;

  return (
    <div className="mt-5 rounded-[1.25rem] border border-white/70 bg-white/34 p-4 shadow-[0_8px_22px_rgba(148,163,184,0.06)] backdrop-blur-2xl">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        Media Preview
      </p>

      <div className="mt-3 flex h-28 items-center justify-center overflow-hidden rounded-[1rem] border border-white/60 bg-white/38 text-sm text-slate-500 backdrop-blur-2xl">
        <img
          src={previewPath}
          alt={`${item.title} preview`}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="hidden h-full w-full items-center justify-center text-sm text-slate-500">
          Add image: {previewPath}
        </div>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#eef8ff_30%,_#374151_68%,_#000000_100%)] text-slate-900">
      <section className="border-b border-white/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-600/90">
              Clinical Education Resource
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Learn the NIH Stroke Scale with structured visual guidance.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              This platform is designed to support rapid review of NIHSS
              components, scoring ranges, and demonstration media for each
              assessment element.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#components"
                className="rounded-[1.25rem] border border-sky-200/70 bg-white/38 px-5 py-3 text-sm font-medium text-sky-700 shadow-[0_12px_30px_rgba(56,189,248,0.08)] backdrop-blur-2xl transition-all duration-300 hover:bg-sky-50/70 hover:text-sky-800"
              >
                Explore Components
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/22 p-6 shadow-[0_30px_80px_rgba(59,130,246,0.12)] backdrop-blur-[28px]">
            <div className="rounded-[1.75rem] border border-white/65 bg-white/28 p-6 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
              <p className="text-sm font-medium text-sky-600/90">
                Quick Summary
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-white/70 bg-white/34 p-4 shadow-[0_8px_22px_rgba(148,163,184,0.06)] backdrop-blur-2xl">
                  <p className="text-2xl font-semibold text-slate-900">11</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Core NIHSS components
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/70 bg-white/34 p-4 shadow-[0_8px_22px_rgba(148,163,184,0.06)] backdrop-blur-2xl">
                  <p className="text-2xl font-semibold text-slate-900">42</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Maximum total score
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/70 bg-white/34 p-4 shadow-[0_8px_22px_rgba(148,163,184,0.06)] backdrop-blur-2xl">
                  <p className="text-2xl font-semibold text-slate-900">
                    Visual
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Media-based reinforcement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600/90">
            NIHSS Breakdown
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Assessment Components
          </h2>
          <p className="mt-4 text-slate-600">
            Select any item to open a dedicated detail page with room for
            scoring guidance, testing notes, examples, and video-based teaching
            material.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {nihssItems.map((item) => (
            <article
              key={item.id}
              className="rounded-[2rem] border border-white/65 bg-white/28 p-5 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px] transition hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-[0_24px_50px_rgba(56,189,248,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-sky-600/90">
                    Item {item.id}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <span className="rounded-full border border-white/70 bg-white/34 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-2xl">
                  {item.points}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <MediaPreview item={item} />

              <Link
                to={`/item/${item.slug}`}
                className="mt-5 inline-flex rounded-[1.25rem] border border-sky-200/70 bg-white/38 px-4 py-2 text-sm font-medium text-sky-700 shadow-[0_12px_30px_rgba(56,189,248,0.08)] backdrop-blur-2xl transition-all duration-300 hover:bg-sky-50/70 hover:text-sky-800"
              >
                View Section
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
