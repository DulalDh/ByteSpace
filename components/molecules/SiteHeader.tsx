import { Brand } from "@/components/molecules/Brand";
import { copy } from "@/data/home-data.js";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-30 mt-2 border-white/15 bg-[#063fe7]/30 sm:mt-4">
      <div className="mx-auto flex min-h-[64px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-5 md:h-[80px]">
        <Brand light />
        <nav
          aria-label={copy.nav.label}
          className="hidden items-center gap-4 text-[10px] text-white/85 sm:flex sm:gap-5 sm:text-xs md:gap-8 md:text-[16px]"
        >
          <a href="#home" className="text-white">
            {copy.nav.home}
          </a>
          <a href="#courses">{copy.nav.courses}</a>
          <a href="#creators">{copy.nav.creators}</a>
        </nav>
        <div className="flex shrink-0 items-center gap-3 text-xs sm:gap-4 sm:text-[11px] md:gap-7 md:text-[16px]">
          <Link href="/login">{copy.nav.signIn}</Link>
          <a
            className="rounded-full bg-white/10 px-3 py-2 sm:bg-transparent md:px-4"
            href="#footer"
          >
            {copy.nav.join}
          </a>
          <a
            aria-label={copy.nav.shoppingBag}
            href="#courses"
            className="hidden items-center md:flex"
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
