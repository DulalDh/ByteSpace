import { Brand } from "@/components/molecules/Brand";

export function SiteHeader() {
  return (
    <header className="relative z-30  border-white/15 bg-[#063fe7]/30 mt-4">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:h-[80px] md:px-5">
        <Brand light />
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 text-[10px] text-white/85 sm:gap-7 sm:text-xs md:gap-8 md:text-[16px]"
        >
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#courses">Courses</a>
          <a href="#creators">Creators</a>
        </nav>
        <div className="flex items-center gap-3 text-[10px] sm:gap-4 sm:text-[11px] md:gap-7 md:text-[16px]">
          <a href="#footer">Sign In</a>
          <a
            className="rounded-full px-3 py-1.5 md:px-4 md:py-2"
            href="#footer"
          >
            Join Us
          </a>
          <a
            aria-label="Shopping bag"
            href="#courses"
            className="hidden items-center sm:flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 20"
              className="h-5 w-4 md:h-6 md:w-[19px]"
            >
              <path
                d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
                fill="#F5F5F6"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
