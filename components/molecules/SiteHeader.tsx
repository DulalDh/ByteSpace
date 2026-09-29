import { Brand } from "@/components/molecules/Brand";

export function SiteHeader() {
  return (
    <header className="relative z-30  border-white/15 bg-[#063fe7]/30">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:h-[80px] md:px-5">
        <Brand light />
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 text-[10px] text-white/85 sm:gap-7 sm:text-xs md:gap-8 md:text-[20px]"
        >
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#courses">Courses</a>
          <a href="#creators">Creators</a>
        </nav>
        <div className="flex items-center gap-3 text-[10px] sm:gap-4 sm:text-[11px] md:gap-7 md:text-[20px]">
          <a href="#footer">Sign In</a>
          <a
            className="rounded-full border border-white/40 px-3 py-1.5 md:px-4 md:py-2"
            href="#footer"
          >
            Join Us
          </a>
          <a
            aria-label="Shopping bag"
            href="#courses"
            className="hidden text-base sm:inline md:text-2xl"
          >
            ♧
          </a>
        </div>
      </div>
    </header>
  );
}
