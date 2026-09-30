import { CourseSearch } from "@/components/molecules/CourseSearch";
import { SiteHeader } from "@/components/molecules/SiteHeader";
import { testimonials } from "@/data/home-data.js";
import { LearningProgressCard } from "@/components/molecules/LearningProgressCard";

interface HeroSectionProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function HeroSection({ query, onQueryChange }: HeroSectionProps) {
  return (
    <section className="grid-bg relative min-h-[760px] overflow-hidden text-white md:min-h-[1320px] xl:min-h-[1000px]">
      <SiteHeader />
      <div className="relative z-20 mx-auto max-w-[1500px] px-5 pt-12 mt-8 text-center md:pt-[20px]">
        <h1 className="mx-auto max-w-[1200px] text-[40px] font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-[clamp(72px,5vw,100px)]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mx-auto mt-8 max-w-5xl text-sm leading-6 text-white/75 md:mt-12 md:text-[18px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <CourseSearch query={query} onQueryChange={onQueryChange} />
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 h-[410px] w-[min(1500px,100vw)] -translate-x-1/2 md:h-[900px]">
        <div
          aria-hidden="true"
          className="absolute bottom-[-880px] left-1/2 h-[1320px] w-[1120px] -translate-x-1/2 rounded-full bg-[#ceff00]"
        />
        <img
          src="/hero-learner.png"
          alt="Smiling learner studying on a laptop"
          className="absolute bottom-0 left-1/2 z-[1] w-[min(75vw,520px)] max-w-none -translate-x-1/2 md:w-[min(50vw,760px)]"
        />

        <div className="absolute left-[4%] top-[28%] z-10 rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-lg md:left-[22%] md:top-[56%] md:px-6 md:py-5">
          <b className="block text-base font-medium md:text-[16px]">
            UI/UX Design
          </b>
          <span className="text-sm text-slate-400 md:text-[12px]">
            200 Courses　•　1000+ Students
          </span>
        </div>
        <LearningProgressCard className="absolute right-[1%] top-[34%] z-10 md:right-[26%] md:top-[58%]" />
        <div className="absolute bottom-[5%] left-[1%] z-12 rounded-2xl bg-white px-4 py-3 text-left text-slate-900 shadow-lg md:bottom-[8%] md:left-[26%] md:px-5 md:py-4">
          <span className="block text-sm md:text-[16px]">Happy Students</span>
          <b className="text-xs font-normal text-slate-500 md:text-base">
            4.5 (240)
          </b>{" "}
          <span className="text-[#ceff00]">★</span>
          <div className="mt-2 flex -space-x-2">
            {testimonials.map(({ name, avatar }, index) => (
              <img
                key={`${name}-${index}`}
                src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=100&q=80`}
                alt="ByteSpace student"
                className="h-7 w-7 rounded-full border-2 border-white object-cover md:h-11 md:w-11"
              />
            ))}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#ceff00] text-[9px] font-bold md:h-11 md:w-11 md:text-sm">
              2K+
            </span>
          </div>
        </div>

        <div className="absolute left-[-8%] top-[14%] z-10 h-16 w-52 rotate-[18deg] rounded-full bg-[#ceff00] shadow-[0_45px_0_0_#ceff00,0_90px_0_0_#ceff00] md:left-[-10%]" />
        <div className="absolute right-[-10%] top-[14%] z-10 h-64 w-40 rotate-[-27deg] rounded-[45%] bg-[#ceff00] md:right-[-7%] md:h-72 md:w-48" />
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          className="absolute left-[8%] top-[37%] z-10 h-28 w-28 -rotate-12 md:h-44 md:w-44"
        >
          <path
            d="M25 18c58 2-28 27 34 37 52 8-32 22 26 45"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="19"
          />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          className="absolute right-[5%] top-[64%] z-10 h-36 w-28 rotate-12 md:h-56 md:w-44"
        >
          <path
            d="M27 14c66 1-42 31 38 41 60 8-32 29 27 50"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="21"
          />
        </svg>
        <div className="absolute left-[-7%] bottom-[9%] z-10 h-44 w-56 rotate-[-26deg] rounded-full border-[38px] border-white md:left-[5%] md:h-[200px] md:w-[260px] md:border-[62px]" />
        <div className="absolute  right-[10%] top-[38%] z-10 h-0 w-0 rotate-[15deg] border-b-[100px] border-l-[55px] border-r-[55px] border-b-white border-l-transparent border-r-transparent md:border-b-[140px] md:border-l-[60px] md:border-r-[60px]" />
      </div>
      <div className="absolute bottom-0 left-[4%] h-32 w-32 rounded-full bg-[#ceff00] opacity-70 blur-2xl" />
    </section>
  );
}
