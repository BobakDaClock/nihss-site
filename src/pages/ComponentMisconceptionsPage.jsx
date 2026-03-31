import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { nihssItems } from "../nihssData";

const orbitPositionsByCount = {
  3: [
    { top: "26%", left: "50%" },
    { top: "66%", left: "72%" },
    { top: "66%", left: "28%" },
  ],
  4: [
    { top: "24%", left: "50%" },
    { top: "50%", left: "76%" },
    { top: "76%", left: "50%" },
    { top: "50%", left: "24%" },
  ],
  5: [
    { top: "20%", left: "50%" },
    { top: "36%", left: "76%" },
    { top: "70%", left: "66%" },
    { top: "70%", left: "34%" },
    { top: "36%", left: "24%" },
  ],
  6: [
    { top: "18%", left: "50%" },
    { top: "32%", left: "76%" },
    { top: "68%", left: "76%" },
    { top: "82%", left: "50%" },
    { top: "68%", left: "24%" },
    { top: "32%", left: "24%" },
  ],
};

export default function ComponentMisconceptionsPage() {
  const { slug } = useParams();
  const item = nihssItems.find((entry) => entry.slug === slug);

  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.15);
    }, 16);

    return () => clearInterval(interval);
  }, [isPaused]);

  if (!item) return null;

  const misconceptions = item.misconceptions || [];

  const orbitPositions =
    orbitPositionsByCount[misconceptions.length] ||
    orbitPositionsByCount[6].slice(0, misconceptions.length);

  const activeItem =
    misconceptions.find((entry, index) => index === activeId) || null;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#eef8ff_30%,_#374151_68%,_#000000_100%)] px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* BACK BUTTON */}
        <div className="mb-8">
          <Link
            to={`/item/${item.slug}`}
            className="inline-flex items-center rounded-full border border-white/70 bg-white/35 px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_10px_30px_rgba(59,130,246,0.08)] backdrop-blur-2xl transition hover:bg-white/50"
          >
            ← Back to {item.title}
          </Link>
        </div>

        {/* MAIN CARD */}
        <section className="rounded-[2rem] border border-white/60 bg-white/22 p-6 shadow-[0_30px_80px_rgba(59,130,246,0.12)] backdrop-blur-[28px] md:p-8">
          {/* HEADER */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600/90">
              Interactive Review
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Common Misconceptions
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              Click the center node to review frequent misunderstandings about{" "}
              {item.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* ORBIT PANEL */}
            <div className="rounded-[2rem] border border-white/65 bg-white/28 p-4 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
              <div className="relative mx-auto h-[700px] max-w-[700px] overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/18 shadow-[0_20px_45px_rgba(148,163,184,0.10)] backdrop-blur-[24px]">
                {/* GRID BACKGROUND */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

                {/* CENTER NODE */}
                <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                  <button
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                      if (isOpen) setActiveId(null);
                    }}
                    className={`flex h-56 w-56 items-center justify-center rounded-full border text-center shadow-[0_18px_60px_rgba(59,130,246,0.10)] transition-all duration-500 ${
                      isOpen
                        ? "border-white/60 bg-white/25 text-slate-700 scale-95 opacity-80"
                        : "border-white/70 bg-white/38 text-slate-900 hover:scale-[1.02]"
                    }`}
                  >
                    <div className="px-6 text-center">
                      <span className="block text-2xl font-semibold">
                        Common Misconceptions
                      </span>
                      <span className="mt-2 block text-sm text-slate-600">
                        for {item.title}
                      </span>
                    </div>
                  </button>
                </div>

                {/* ORBIT BUBBLES */}
                {isOpen &&
                  misconceptions.map((entry, index) => {
                    const isActive = activeId === index;

                    const angle =
                      (360 / misconceptions.length) * index + rotation;
                    const radians = (angle * Math.PI) / 180;

                    const depth = (Math.sin(radians) + 1) / 2;
                    const parallaxRadius = 210 + depth * 40;

                    const x = Math.cos(radians) * parallaxRadius;
                    const y = Math.sin(radians) * parallaxRadius;

                    const scale = 0.88 + depth * 0.28;
                    const opacity = 0.55 + depth * 0.45;
                    const zIndex = Math.round(10 + depth * 20);

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveId((prev) =>
                            prev === index ? null : index,
                          );
                          setIsPaused(true);
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="absolute"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                          opacity,
                          zIndex,
                        }}
                      >
                        <div
                          className={`flex h-32 w-32 items-center justify-center rounded-full border px-4 text-center backdrop-blur-[24px] transition-all duration-500 ${
                            isActive
                              ? "border-sky-300 bg-sky-200/40 scale-110 shadow-[0_0_0_1px_rgba(125,211,252,0.25),0_16px_36px_rgba(56,189,248,0.18)]"
                              : "border-white/70 bg-white/38 hover:scale-105"
                          }`}
                          style={{
                            animation: `orbitOut 420ms ease-out forwards`,
                            animationDelay: `${index * 70}ms`,
                          }}
                        >
                          <span className="text-sm font-semibold">
                            {entry.short}
                          </span>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* DETAIL PANEL */}
            <aside className="rounded-[2rem] border border-white/65 bg-white/28 p-6 shadow-[0_20px_45px_rgba(148,163,184,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600/90">
                DETAIL PANEL
              </p>

              {!activeItem ? (
                <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/34 p-6">
                  <h2 className="text-xl font-semibold">
                    Select a misconception
                  </h2>
                  <p className="mt-3">
                    Click any orbiting circle to view details.
                  </p>
                </div>
              ) : (
                <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/34 p-6">
                  <h2 className="text-2xl font-semibold">{activeItem.short}</h2>

                  <div className="mt-5 rounded-[1.25rem] border border-white/70 bg-white/34 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-700">
                      Misconception
                    </p>
                    <p className="mt-2">{activeItem.myth}</p>
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-sky-200 bg-sky-100/40 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-700">
                      Truth
                    </p>
                    <p className="mt-2">{activeItem.truth}</p>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes orbitOut {
          0% {
            opacity: 0;
            transform: scale(0.2);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </main>
  );
}
