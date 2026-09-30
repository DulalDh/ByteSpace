import type { Course, Testimonial } from "@/types/home";
import { copy, courseCategories } from "@/data/home-data.js";
import { CourseCard } from "@/components/molecules/CourseCard";

interface CourseSectionProps {
  courses: Course[];
  testimonials: Testimonial[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CourseSection({
  courses,
  testimonials,
  activeCategory,
  onCategoryChange,
}: CourseSectionProps) {
  return (
    <section
      id="courses"
      className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-[42px]">
          {copy.courseSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-[18px] text-[#82868E]">
          {copy.courseSection.description}
        </p>
      </div>
      <div className="mx-auto mt-7 flex max-w-5xl flex-wrap justify-center gap-2">
        {courseCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-full px-4 py-2 text-[16px] mx-1 my-2 transition ${activeCategory === category ? "bg-[#ceff00] font-bold text-slate-900" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {courses.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              course={course}
              students={testimonials}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-sm text-slate-500">
          {copy.courseSection.empty}
        </div>
      )}
    </section>
  );
}
