import { copy, learningPaths } from "@/data/home-data.js";

const learningPathIcons: Record<string, React.ReactNode> = {
  Design: (
    <>
      <path d="m14.5 6.5 3-3 3 3-3 3" />
      <path d="m3 21 10.5-10.5" />
      <path d="m8 5 11 11-3 3L5 8V5z" />
      <path d="m3 16 5 5" />
    </>
  ),
  Development: (
    <>
      <path d="M7 4H5a2 2 0 0 0-2 2v2" />
      <path d="M17 4h2a2 2 0 0 1 2 2v2" />
      <path d="M7 20H5a2 2 0 0 1-2-2v-2" />
      <path d="M17 20h2a2 2 0 0 0 2-2v-2" />
      <path d="m9 9-3 3 3 3m6-6 3 3-3 3m-3-7-1 8" />
    </>
  ),
  "IT & Software": (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M1 20h22M8 17l-1 3m9-3 1 3" />
    </>
  ),
  Business: (
    <>
      <rect x="3" y="3" width="11" height="18" rx="1" />
      <path d="M14 8h5a2 2 0 0 1 2 2v11h-7" />
      <path d="M7 7h3m-3 4h3m-3 4h3m-3 3h3m7-5h2m-2 4h2" />
    </>
  ),
  Marketing: (
    <>
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M3 11h4l3-3m4 8 3-3h4M12 5a7 7 0 0 1 7 7m-7 7a7 7 0 0 1-7-7" />
    </>
  ),
  Photography: (
    <>
      <path d="M4 7h4l2-3h4l2 3h4a2 2 0 0 1 2 2v10H2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
};

export function LearningPathsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-[44px]">
          {copy.learningPaths.title}
        </h2>
        <p className="mt-3 text-base leading-6 text-slate-400 sm:text-[18px]">
          {copy.learningPaths.description}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-9">
        {learningPaths.map(({ title }) => (
          <a
            key={title}
            href="#courses"
            className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg sm:min-h-40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ceff00] sm:h-16 sm:w-16">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-[#292929] sm:h-8 sm:w-8"
              >
                {learningPathIcons[title]}
              </svg>
            </span>
            <span className="text-sm font-medium sm:text-lg">{title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
