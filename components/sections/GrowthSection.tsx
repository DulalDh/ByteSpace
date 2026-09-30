import {
  creatorBenefits,
  courses,
  growthStats,
  testimonials,
} from "@/data/home-data.js";
import { RemoteImage } from "@/components/atoms/RemoteImage";
import { CourseCard } from "@/components/molecules/CourseCard";
import { LearningProgressCard } from "@/components/molecules/LearningProgressCard";

export function GrowthSection() {
  return (
    <section className="soft-glow">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-11 md:grid-cols-2 md:px-10 md:py-[4.75rem] lg:gap-16 lg:py-[5rem]">
        <div>
          <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight md:text-[44px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600 font-medium md:text-[18px]">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
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
            alt="Smiling learner studying on a laptop"
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
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-24 mt-20">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-blue-100 blur-3xl" />
          <RemoteImage
            imageId="photo-1551836022-d5d88e9218df"
            alt="Creator planning an online course"
            className="relative h-72 w-full rounded-3xl object-cover shadow-xl md:h-96"
          />
          <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 shadow-lg">
            <span className="text-[10px]">Total Revenue</span>
            <b className="block text-lg text-blue-700">$1,200.38</b>
            <span className="text-[9px] text-slate-400">This month</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-[44px]">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mt-4 max-w-md text-[18px] leading-7 text-slate-600">
            ByteSpace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>
          <ul className="mt-5 space-y-3 text-xs">
            {creatorBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">
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
