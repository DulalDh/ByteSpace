import { CourseSearch } from "@/components/molecules/CourseSearch";
import { SiteHeader } from "@/components/molecules/SiteHeader";
import { testimonials } from "@/data/home-data.js";

interface HeroSectionProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function HeroSection({ query, onQueryChange }: HeroSectionProps) {
  return (
    <section className="grid-bg hero-glow relative min-h-[760px] overflow-hidden text-white md:min-h-[1320px] xl:min-h-[1400px]">
      <SiteHeader />
      <div className="relative z-20 mx-auto max-w-[1500px] px-5 pt-12 text-center md:pt-[70px]">
        <h1 className="mx-auto max-w-[1200px] text-[42px] font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-[clamp(76px,5vw,100px)]">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="mx-auto mt-8 max-w-5xl text-sm leading-6 text-white/75 md:mt-12 md:text-[24px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <CourseSearch query={query} onQueryChange={onQueryChange} />
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 h-[410px] w-[min(1500px,100vw)] -translate-x-1/2 md:h-[900px]">
        <div aria-hidden="true" className="absolute bottom-[-880px] left-1/2 h-[1500px] w-[1500px] -translate-x-1/2 rounded-full bg-[#ceff00]" />
        <img src="/groupboy-cutout.png" alt="Smiling learner studying on a laptop" className="absolute bottom-0 left-1/2 z-[1] w-[min(95vw,620px)] max-w-none -translate-x-1/2 md:w-[min(60vw,860px)]" />

        <div className="absolute left-[4%] top-[28%] z-10 rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-lg md:left-[21.5%] md:top-[40%] md:px-6 md:py-5">
          <b className="block text-base font-medium md:text-[22px]">UI/UX Design</b>
          <span className="text-sm text-slate-400 md:text-[18px]">200 Courses　•　1000+ Students</span>
        </div>
        <div className="absolute right-[1%] top-[34%] z-10 rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-lg md:right-[18%] md:top-[42%] md:px-6 md:py-5">
          <span className="text-sm md:text-[18px]">Learning Progress</span>
          <b className="block text-5xl leading-[1.1] md:text-[64px]">55%</b>
          <span className="mt-2 block h-2 w-44 rounded-full bg-slate-100 md:w-[270px]"><i className="block h-full w-[55%] rounded-full bg-[#ceff00]" /></span>
        </div>
        <div className="absolute bottom-[5%] left-[1%] z-10 rounded-2xl bg-white px-4 py-3 text-left text-slate-900 shadow-lg md:bottom-[14%] md:left-[15%] md:px-5 md:py-4">
          <span className="block text-sm md:text-[22px]">Happy Students</span>
          <b className="text-xs font-normal text-slate-500 md:text-base">4.5 (240)</b>{" "}<span className="text-[#ceff00]">★</span>
          <div className="mt-2 flex -space-x-2">
            {testimonials.map(({ name, avatar }) => (
              <img key={name} src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=100&q=80`} alt="ByteSpace student" className="h-7 w-7 rounded-full border-2 border-white object-cover md:h-11 md:w-11" />
            ))}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#ceff00] text-[9px] font-bold md:h-11 md:w-11 md:text-sm">2K+</span>
          </div>
        </div>

        <div className="absolute left-[-8%] top-[-12%] z-10 h-16 w-52 rotate-[18deg] rounded-full bg-[#ceff00] shadow-[0_45px_0_0_#ceff00,0_90px_0_0_#ceff00] md:left-[-10%]" />
        <div className="absolute right-[-10%] top-[-17%] z-10 h-64 w-40 rotate-[-27deg] rounded-[45%] bg-[#ceff00] md:right-[-7%] md:h-72 md:w-48" />
        <svg aria-hidden="true" viewBox="0 0 120 120" className="absolute left-[13%] top-[17%] z-10 h-28 w-28 -rotate-12 md:h-44 md:w-44"><path d="M25 18c58 2-28 27 34 37 52 8-32 22 26 45" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="19" /></svg>
        <svg aria-hidden="true" viewBox="0 0 120 120" className="absolute right-[5%] top-[46%] z-10 h-36 w-28 rotate-12 md:h-56 md:w-44"><path d="M27 14c66 1-42 31 38 41 60 8-32 29 27 50" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21" /></svg>
        <div className="absolute left-[-7%] bottom-[-9%] z-10 h-44 w-56 rotate-[-26deg] rounded-full border-[38px] border-white md:left-[-5%] md:h-[280px] md:w-[360px] md:border-[62px]" />
        <div className="absolute right-[15%] top-[16%] z-10 h-0 w-0 rotate-[15deg] border-b-[100px] border-l-[55px] border-r-[55px] border-b-white border-l-transparent border-r-transparent md:border-b-[180px] md:border-l-[100px] md:border-r-[100px]" />
      </div>
      <div className="absolute bottom-0 left-[4%] h-32 w-32 rounded-full bg-[#ceff00] opacity-70 blur-2xl" />
    </section>
  );
}
