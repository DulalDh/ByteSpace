import { copy, testimonials } from "@/data/home-data.js";

interface HappyStudentsCardProps {
  className?: string;
}

export function HappyStudentsCard({ className = "" }: HappyStudentsCardProps) {
  return (
    <div className={`rounded-2xl bg-white px-4 py-3 text-left text-slate-900 shadow-lg md:px-5 md:py-4 ${className}`}>
      <span className="block text-sm md:text-[16px]">{copy.happyStudents.label}</span>
      <b className="text-xs font-normal text-slate-500 md:text-base">{copy.happyStudents.rating}</b>{" "}
      <span className="text-[#ceff00]">★</span>
      <div className="mt-2 flex -space-x-2">
        {testimonials.map(({ name, avatar }, index) => (
          <img
            key={`${name}-${index}`}
            src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=100&q=80`}
            alt={copy.happyStudents.alt}
            className="h-7 w-7 rounded-full border-2 border-white object-cover md:h-11 md:w-11"
          />
        ))}
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#ceff00] text-[9px] font-bold md:h-11 md:w-11 md:text-sm">
          {copy.happyStudents.count}
        </span>
      </div>
    </div>
  );
}
