import {
  creatorBenefits,
  courses,
  growthStats,
  testimonials,
} from "@/data/home-data.js";
import { CourseCard } from "@/components/molecules/CourseCard";
import { LearningProgressCard } from "@/components/molecules/LearningProgressCard";
import { HappyStudentsCard } from "@/components/molecules/HappyStudentsCard";
import { copy } from "@/data/home-data.js";

export function GrowthSection() {
  return (
    <section className="soft-glow">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-11 md:grid-cols-2 md:px-10 md:py-[4.75rem] lg:gap-16 lg:py-[5rem]">
        <div>
          <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight md:text-[44px]">
            {copy.growth.title}
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600 font-medium md:text-[18px]">
            {copy.growth.description}
          </p>
          <div className="mt-7 flex gap-8">
            {growthStats.map(({ value, label }) => (
              <div key={label}>
                <b className="text-[44px] font-bold text-blue-600">{value}</b>
                <span className="text-[18px] mt-1 block text-slate-600 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto h-[273px] w-full max-w-[560px] sm:h-[329px] md:h-[350px]">
          <div className="absolute inset-0 rounded-[42%] bg-white/55 blur-3xl" />
          <div className="absolute left-[4%] w-[70%] top-[-15%] sm:left-[8%]">
            <CourseCard
              course={courses[0]}
              students={testimonials}
              variant="featured"
            />
          </div>
          <img
            src="/hero-learner.png"
            alt={copy.hero.learnerAlt}
            className="absolute bottom-[-30%] left-[10%] z-10 w-[700px] max-w-none drop-shadow-[0_30px_28px_rgba(15,23,42,0.28)]"
          />
          <LearningProgressCard
            size="large"
            className="absolute right-0 top-[38%] z-20 w-[54%] sm:right-[-14%] sm:w-[40%]"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 120 160"
            className="absolute right-[1%] top-[22%] z-20 h-28 w-24 rotate-6 sm:right-[-14%] sm:top-[10%] sm:h-40 sm:w-32"
          >
            <path
              d="M60 12c68 0-16 25 31 38 42 12-37 21 3 36 43 16-39 19 4 43"
              fill="none"
              stroke="#ceff00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        </div>
      </div>
      {/* Manage Courses Start */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:px-10 md:pb-28 md:pt-20 lg:gap-20">
        <div className="relative mx-auto h-[390px] w-full max-w-[560px] sm:h-[490px] md:h-[570px]">
          <div className="absolute inset-0 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute left-10 top-[2%] z-10 w-[40%] rounded-[18px] bg-blue-700 px-4 py-4 text-white shadow-lg sm:px-6 sm:py-5">
            <span className="block text-sm sm:text-lg text-[16px]">
              {copy.growth.revenue}
            </span>
            <span className="block text-xs text-white/70 text-[10px]">
              {copy.growth.revenuePeriod}
            </span>
            <b className="mt-2 block text-xl sm:text-[24px]">{copy.growth.revenueAmount}</b>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[68%] rounded-full bg-[#ceff00]" />
            </div>
          </div>
          <div className="absolute left-10 top-[32%] z-10 w-[25%] rounded-[18px] bg-blue-700 px-4 py-4 text-white shadow-lg sm:px-6 sm:py-5">
            <span className="block text-[16px]">{copy.growth.yearToDate}</span>
            <span className="block text-xs text-white/70 text-[10px]">
              {copy.growth.year}
            </span>
            <b className="mt-2 block text-[24px]">{copy.growth.annualRevenue}</b>
            <span className="mt-3 inline-block rounded-full bg-[#ceff00] px-3 py-1 text-xs font-semibold text-slate-900">
              {copy.growth.increase}
            </span>
          </div>
          <img
            src="/manage-courses.png"
            alt={copy.growth.creatorImageAlt}
            className="absolute bottom-[-15%] left-[13%] z-[11] h-100%] w-[100%] object-contain object-bottom drop-shadow-[0_24px_24px_rgba(15,23,42,0.24)]"
          />
          <HappyStudentsCard className="absolute bottom-[30%] right-0 z-20" />
          <svg
            aria-hidden="true"
            viewBox="0 0 120 160"
            className="absolute left-[63%] top-[13%] z-[12] h-36 w-28 rotate-6 sm:right-[-2%] sm:h-44 sm:w-36"
          >
            <path
              d="M60 12c68 0-16 25 31 38 42 12-37 21 3 36 43 16-39 19 4 43"
              fill="none"
              stroke="#ceff00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        </div>
        <div className="relative z-10">
          <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight md:text-[44px]">
            {copy.growth.creatorTitle}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:mt-8 md:text-[18px] md:leading-8">
            {copy.growth.creatorDescription}
          </p>
          <ul className="mt-7 space-y-4 text-base md:mt-9 md:text-[18px]">
            {creatorBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Manage Courses End */}
    </section>
  );
}
