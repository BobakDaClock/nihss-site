import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { nihssItems } from "../nihssData";
import FAQMedia from "./FAQMedia.jsx";

function getImageEntries(item, scoreIndex) {
  if (item.images && item.images[scoreIndex]) {
    return item.images[scoreIndex];
  }

  return [
    {
      src: `/Media/${item.slug}-${scoreIndex}.png`,
      caption: "",
    },
  ];
}

export default function ComponentPage() {
  const { slug } = useParams();
  const item = nihssItems.find((entry) => entry.slug === slug);

  const [selectedScoreIndex, setSelectedScoreIndex] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);
  const [imageError, setImageError] = useState(false);

  if (!item) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#eef8ff_30%,_#374151_68%,_#000000_100%)] px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-white/60 bg-white/22 p-8 shadow-[0_30px_80px_rgba(59,130,246,0.12)] backdrop-blur-[28px]">
            <h1 className="text-3xl font-semibold text-slate-900">
              Section not found
            </h1>
            <p className="mt-4 text-slate-600">
              The requested NIHSS item does not exist.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-[1.25rem] border border-sky-200/70 bg-white/38 px-5 py-3 text-sm font-medium text-sky-700 shadow-[0_12px_30px_rgba(56,189,248,0.08)] backdrop-blur-2xl transition-all duration-300 hover:bg-sky-50/70 hover:text-sky-800"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const activeImageEntries = getImageEntries(item, selectedScoreIndex);
  const faqs = item.faqs || [];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#eef8ff_30%,_#374151_68%,_#000000_100%)] px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center rounded-full border border-white/70 bg-white/35 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_30px_rgba(59,130,246,0.08)] backdrop-blur-2xl transition hover:bg-white/50"
        >
          ← Back to Home
        </Link>

        <section className="mt-8 rounded-[2rem] border border-white/60 bg-white/22 p-8 shadow-[0_30px_80px_rgba(59,130,246,0.12)] backdrop-blur-[28px]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600/90">
                Item {item.id}
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900">
                {item.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {item.overview}
              </p>
            </div>

            <span className="rounded-full border border-white/75 bg-white/40 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_24px_rgba(148,163,184,0.10)] backdrop-blur-2xl">
              Score Range: {item.points}
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* SCORING */}
            <div className="rounded-[1.75rem] border border-white/65 bg-white/30 p-6 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Scoring
              </h2>

              <ul className="mt-4 space-y-3">
                {item.scoring.map((line, index) => {
                  const isActive = index === selectedScoreIndex;

                  return (
                    <li key={line}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedScoreIndex(index);
                          setImageError(false);
                        }}
                        className={`w-full rounded-[1.25rem] border px-4 py-3 text-left text-base transition-all duration-300 backdrop-blur-2xl ${
                          isActive
                            ? "border-sky-300/80 bg-sky-200/38 text-slate-900 shadow-[0_0_0_1px_rgba(125,211,252,0.24),0_14px_32px_rgba(56,189,248,0.16)]"
                            : "border-white/70 bg-white/34 text-slate-700 shadow-[0_8px_22px_rgba(148,163,184,0.06)] hover:border-sky-200/80 hover:bg-white/48"
                        }`}
                      >
                        {line}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* TEACHING NOTES */}
            <div className="rounded-[1.75rem] border border-white/65 bg-white/30 p-6 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Teaching Notes
              </h2>

              <ul className="mt-4 space-y-3">
                {item.tips.map((tip) => (
                  <li
                    key={tip}
                    className="rounded-[1.25rem] border border-white/70 bg-white/34 px-4 py-3 text-slate-700 shadow-[0_8px_22px_rgba(148,163,184,0.06)] backdrop-blur-2xl"
                  >
                    {tip}
                  </li>
                ))}
              </ul>

              <Link
                to={`/item/${item.slug}/misconceptions`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-[1.25rem] border border-sky-200/70 bg-white/38 px-5 py-4 text-base font-medium text-sky-700 shadow-[0_12px_30px_rgba(56,189,248,0.08)] backdrop-blur-2xl transition-all duration-300 hover:bg-sky-50/70 hover:text-sky-800"
              >
                Common Misconceptions
              </Link>
            </div>
          </div>

          {/* MEDIA */}
          <div className="mt-8 rounded-[1.75rem] border border-white/65 bg-white/28 p-6 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600/90">
              Media Module
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/38 shadow-[0_12px_32px_rgba(148,163,184,0.08)] backdrop-blur-2xl p-4">
              {!imageError ? (
                <div className="space-y-6">
                  {activeImageEntries.map((entry, index) => (
                    <div key={`${entry.src}-${index}`} className="space-y-3">
                      {entry.caption && (
                        <div className="rounded-[1.25rem] border border-white/70 bg-white/34 px-4 py-3 text-sm text-slate-700">
                          {entry.caption}
                        </div>
                      )}

                      <div className="overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/34">
                        <div className="flex min-h-[320px] items-center justify-center md:min-h-[380px]">
                          <img
                            src={entry.src}
                            alt=""
                            className="h-full w-full object-contain"
                            onError={() => setImageError(true)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[320px] items-center justify-center text-slate-500">
                  Image not found
                </div>
              )}
            </div>
          </div>

          {/* COMMON QUESTIONS */}
          {faqs.length > 0 && (
            <div className="mt-8 rounded-[1.75rem] border border-white/65 bg-white/28 p-6 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600/90">
                Common Questions
              </p>

              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setFaqOpen(faqOpen === index ? null : index)
                      }
                      className="w-full rounded-[1.25rem] border border-white/70 bg-white/36 px-5 py-4 text-left text-base font-medium text-slate-800 backdrop-blur-2xl"
                    >
                      <div className="flex justify-between">
                        <span>{faq.question}</span>
                        <span>{faqOpen === index ? "−" : "+"}</span>
                      </div>
                    </button>

                    {faqOpen === index && (
                      <div className="mt-2 rounded-[1.25rem] border border-white/70 bg-white/34 px-5 py-4 text-slate-700 space-y-4">
                        <div>{faq.answer}</div>

                        {faq.media && <FAQMedia media={faq.media} />}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
