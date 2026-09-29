import { learningPaths } from "@/data/home-data.js";

export function LearningPathsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Explore Diverse Learning Paths at ByteSpace</h2>
        <p className="mt-3 text-xs leading-5 text-slate-400">At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there’s something for everyone.</p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {learningPaths.map(({ icon, title }) => (
          <a key={title} href="#courses" className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ceff00] text-xl font-black">{icon}</span>
            <span className="text-xs font-medium">{title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
