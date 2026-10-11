import { CourseSearch } from "@/components/molecules/CourseSearch";
import { SiteHeader } from "@/components/molecules/SiteHeader";
import { LearningProgressCard } from "@/components/molecules/LearningProgressCard";
import { HappyStudentsCard } from "@/components/molecules/HappyStudentsCard";
import { copy } from "@/data/home-data.js";

interface HeroSectionProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function HeroSection({ query, onQueryChange }: HeroSectionProps) {
  return (
    <section className="grid-bg relative min-h-[690px] overflow-hidden text-white xl:min-h-[1000px]">
      <SiteHeader />
      <div className="relative z-20 mx-auto mt-4 max-w-[1500px] px-4 pt-8 text-center xl:mt-8 xl:px-5 xl:pt-[20px]">
        <h1 className="mx-auto max-w-[1200px] text-[clamp(36px,10vw,52px)] font-extrabold leading-[1.08] tracking-tight xl:text-[clamp(72px,5vw,100px)]">
          {copy.hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-5xl text-sm leading-6 text-white/75 xl:mt-12 xl:text-[18px]">
          {copy.hero.description}
        </p>
        <CourseSearch query={query} onQueryChange={onQueryChange} />
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 h-[350px] w-[min(1500px,100vw)] -translate-x-1/2 xl:h-[900px]">
        <div
          aria-hidden="true"
          className="absolute bottom-[-760px] left-1/2 h-[1050px] w-[900px] -translate-x-1/2 rounded-full bg-[#ceff00] xl:bottom-[-880px] xl:h-[1320px] xl:w-[1120px]"
        />
        <img
          src="/hero-learner.png"
          alt={copy.hero.learnerAlt}
          className="absolute bottom-0 left-1/2 z-[1] w-[min(75vw,520px)] max-w-none -translate-x-1/2 xl:w-[min(50vw,760px)]"
        />

        <div className="absolute left-[4%] top-[28%] z-10 hidden rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-lg xl:block xl:left-[22%] xl:top-[56%] xl:px-6 xl:py-5">
          <b className="block text-base font-medium xl:text-[16px]">
            {copy.hero.category}
          </b>
          <span className="text-sm text-slate-400 xl:text-[12px]">
            {copy.hero.categoryStats}
          </span>
        </div>
        <LearningProgressCard className="absolute right-[2%] top-[30%] z-10 origin-top-right scale-[.68] xl:right-[26%] xl:top-[58%] xl:scale-100" />
        <HappyStudentsCard className="absolute bottom-[5%] left-[1%] z-20 hidden xl:block xl:bottom-[8%] xl:left-[26%]" />

        <div className="absolute left-[-8%] top-[14%] z-10 hidden h-16 w-52 rotate-[18deg] rounded-full bg-[#ceff00] shadow-[0_45px_0_0_#ceff00,0_90px_0_0_#ceff00] xl:block xl:left-[-10%]" />
        <div className="absolute right-[-10%] top-[14%] z-10 hidden h-64 w-40 rotate-[-27deg] rounded-[45%] bg-[#ceff00] xl:block xl:right-[-7%] xl:h-72 xl:w-48" />
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          className="absolute left-[8%] top-[37%] z-10 hidden h-28 w-28 -rotate-12 xl:block xl:h-44 xl:w-44"
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
          className="absolute right-[5%] top-[64%] z-10 hidden h-36 w-28 rotate-12 xl:block xl:h-56 xl:w-44"
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
        <div className="absolute left-[-7%] bottom-[9%] z-10 hidden h-44 w-56 rotate-[-26deg] rounded-full border-[38px] border-white xl:block xl:left-[5%] xl:h-[200px] xl:w-[260px] xl:border-[62px]" />
        <div className="absolute right-[10%] top-[38%] z-10 hidden h-0 w-0 rotate-[15deg] border-b-[100px] border-l-[55px] border-r-[55px] border-b-white border-l-transparent border-r-transparent xl:block xl:border-b-[140px] xl:border-l-[60px] xl:border-r-[60px]" />
      </div>
      <div className="absolute bottom-0 left-[4%] h-32 w-32 rounded-full bg-[#ceff00] opacity-70 blur-2xl" />
    </section>
  );
}
