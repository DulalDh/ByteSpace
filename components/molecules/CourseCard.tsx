import type { Course, Testimonial } from "@/types/home";
import { RemoteImage } from "@/components/atoms/RemoteImage";

interface CourseCardProps {
  course: Course;
  students: Testimonial[];
  variant?: "default" | "featured";
}

export function CourseCard({
  course,
  students,
  variant = "default",
}: CourseCardProps) {
  const featured = variant === "featured";

  return (
    <article className={`course-card overflow-hidden border border-slate-200 bg-white ${featured ? "p-[7px] rounded-[22px]" : "p-2.5 mx-2 rounded-2xl"}`}>
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? "h-[112px] rounded-[16px] sm:h-[165px] md:h-[196px]" : "h-40 rounded-xl"}`}>
        <RemoteImage
          imageId={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-2 left-2 flex gap-1.5 text-[12px] text-white">
          <span className={`rounded-full bg-black/55 px-2 py-1 ${featured ? "px-3 py-[6px] sm:px-4" : ""}`}>
            {featured ? "17 Lessons" : "◷ 2 hours 10 mins"}
          </span>
          <span className={`rounded-full bg-black/55 px-2 py-1 ${featured ? "px-3 py-[6px] sm:px-4" : ""}`}>
            {featured ? "2 hours 16 mins" : "▤ 50 Comments"}
          </span>
        </div>
      </div>
      <div className={`px-1 pb-1 pt-2 ${featured ? "sm:px-1.5 sm:pt-[11px]" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={`font-bold ${featured ? "text-[14px] tracking-tight sm:text-[18px] md:text-[20px]" : "text-[20px]"}`}>{course.title}</h3>
            <p className={`mt-1 text-blue-600 ${featured ? "text-[13px] sm:text-[16px]" : "text-xs"}`}>By {course.teacher}</p>
          </div>
          <span className={`shrink-0 text-slate-500 ${featured ? "hidden" : "text-[10px]"}`}>★ 4.5</span>
        </div>
        <div className={`mt-2 flex items-center gap-2 ${featured ? "sm:mt-4" : ""}`}>
          <span className={`rounded-full bg-slate-100 px-2 py-1 text-slate-600 ${featured ? "px-3 py-[6px] text-[10px] sm:px-4 sm:text-xs" : "text-[9px]"}`}>
            ♧ Beginner
          </span>
          <div className={`flex -space-x-1.5 ${featured ? "hidden" : ""}`}>
            {students.map((student, index) => (
              <RemoteImage
                key={`${student.name}-${index}`}
                imageId={student.avatar}
                alt="Course student"
                className="h-5 w-5 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className={`text-[12px] text-slate-400 ${featured ? "hidden" : ""}`}>+{course.students}</span>
        </div>
        <p className={`mt-1.5 font-bold text-blue-600 ${featured ? "text-[13px] sm:text-[15px]" : "text-[16px]"}`}>
          {course.price}
          <span className={`font-normal text-slate-400 ${featured ? "text-[13px] sm:text-[15px]" : "text-[14px]"}`}>
            {" "}
            / lifetime
          </span>
        </p>
      </div>
    </article>
  );
}
