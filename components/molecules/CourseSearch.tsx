import { SearchInput } from "@/components/atoms/SearchInput";

interface CourseSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function CourseSearch({ query, onQueryChange }: CourseSearchProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-30 mx-auto mt-10 flex h-[54px] w-full max-w-[780px] items-center gap-4 md:mt-[82px] md:h-[70px] md:gap-5">
      <div className="flex h-full min-w-0 flex-1 items-center rounded-full bg-white px-6 shadow-[0_12px_35px_rgba(0,0,0,.2)] md:px-9">
        <SearchInput
          label="Search courses"
          name="course-search"
          placeholder="Course, topic, creator"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          showSearchIcon
        />
      </div>
      <button className="h-full shrink-0 rounded-full bg-[#ceff00] px-7 text-base font-semibold text-slate-900 shadow-[0_8px_22px_rgba(0,0,0,.12)] transition hover:bg-[#b9ed00] md:px-9 md:text-[22px]">
        Search
      </button>
    </form>
  );
}
