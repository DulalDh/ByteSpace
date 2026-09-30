import type { Course, Testimonial } from "@/types/home";
import { RemoteImage } from "@/components/atoms/RemoteImage";

interface CourseCardProps {
  course: Course;
  students: Testimonial[];
}

export function CourseCard({ course, students }: CourseCardProps) {
  return (
    <article className="course-card overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5">
      <div className="relative h-40 overflow-hidden rounded-xl bg-slate-100">
        <RemoteImage
          imageId={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-2 left-2 flex gap-1.5 text-[12px] text-white">
          <span className="rounded-full bg-black/55 px-2 py-1">
            ◷ 2 hours 10 mins
          </span>
          <span className="rounded-full bg-black/55 px-2 py-1">
            ▤ 50 Comments
          </span>
        </div>
      </div>
      <div className="px-1 pb-1 pt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p className="mt-1 text-xs text-blue-600">By {course.teacher}</p>
          </div>
          <span className="shrink-0 text-[10px] text-slate-500">★ 4.5</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[9px] text-slate-600">
            ♧ Beginner
          </span>
          <div className="flex -space-x-1.5">
            {students.map((student, index) => (
              <RemoteImage
                key={`${student.name}-${index}`}
                imageId={student.avatar}
                alt="Course student"
                className="h-5 w-5 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="text-[12px] text-slate-400">+{course.students}</span>
        </div>
        <p className="mt-2 text-[16px] font-bold text-blue-600">
          {course.price}
          <span className="text-[14px] font-normal text-slate-400">
            {" "}
            / lifetime
          </span>
        </p>
      </div>
    </article>
  );
}
