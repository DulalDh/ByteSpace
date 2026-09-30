import { learningPaths } from "@/data/home-data.js";

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
          Explore Diverse Learning Paths at ByteSpace
        </h2>
        <p className="mt-3 text-[18px] leading-6 text-slate-400">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-9 sm:grid-cols-3 lg:grid-cols-6">
        {learningPaths.map(({ title }) => (
          <a
            key={title}
            href="#courses"
            className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ceff00]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-[#292929]"
              >
                {learningPathIcons[title]}
              </svg>
            </span>
            <span className="text-lg font-medium">{title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
