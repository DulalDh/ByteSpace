import { copy } from "@/data/home-data.js";

export function CreatorCtaSection() {
  return (
    <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#073fe5] bg-[linear-gradient(#ffffff18_1px,transparent_1px),linear-gradient(90deg,#ffffff18_1px,transparent_1px)] bg-[size:136px_136px] px-4 py-14 text-center text-white sm:min-h-[400px] sm:px-5 sm:py-12 md:min-h-[496px]">
      <div className="relative z-20 mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-4xl text-[clamp(23px,6vw,30px)] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[44px]">
          {copy.creatorCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[800px] text-sm leading-[1.65] text-white/90 sm:mt-6 sm:text-[14px] md:max-w-[1120px] md:text-[18px]">
          {copy.creatorCta.description}
        </p>
        <a
          href="#footer"
          className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#ceff00] px-6 text-[15px] font-medium text-slate-900 transition-colors hover:bg-[#dcff45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-8 sm:px-[26px] sm:text-base"
        >
          {copy.creatorCta.button}
        </a>
      </div>

      {/* Oversized abstract forms frame the text without competing with it. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 -top-8 hidden h-44 w-52 text-[#ceff00] sm:-left-12 sm:block sm:h-48 sm:w-[216px]"
        viewBox="0 0 320 280"
        fill="none"
      >
        <path
          d="M-28 15C28 45 58 75 112 82c25 3 50-2 69-15 13-9 32-7 40 6 8 14 2 33-11 43-28 22-65 32-104 27-47-6-89-29-134-62"
          stroke="currentColor"
          strokeWidth="47"
          strokeLinecap="round"
        />
        <path
          d="M-18 102c42 32 76 68 119 78 19 5 38 2 52-8"
          stroke="currentColor"
          strokeWidth="43"
          strokeLinecap="round"
        />
        <path
          d="M-26 183c35 23 64 50 96 60"
          stroke="currentColor"
          strokeWidth="42"
          strokeLinecap="round"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-4 hidden h-36 w-44 text-[#ceff00] sm:right-[13%] sm:top-6 sm:block sm:h-40 sm:w-44"
        viewBox="0 0 260 220"
      >
        <path
          d="M179 12c4-6 13-4 15 3l48 175c2 7-5 13-12 10L28 133c-7-3-7-12-1-16L179 12Z"
          fill="currentColor"
        />
        <path
          d="m184 26-37 99"
          stroke="white"
          strokeOpacity=".12"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-[49%] hidden h-48 w-40 text-white sm:-left-6 sm:block sm:h-52 sm:w-44"
        viewBox="0 0 200 250"
      >
        <path
          d="M57 10c4-9 16-10 22-2l111 163c7 10 1 23-11 25l-155 25c-13 2-22-10-17-22L57 10Z"
          fill="currentColor"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-[8%] hidden h-[304px] w-44 text-white sm:-right-8 sm:block sm:h-[328px] sm:w-48"
        viewBox="0 0 290 480"
      >
        <path
          d="M293 16C228 10 166 41 118 78 89 100 74 126 89 155l134 275c13 26 47 35 74 24l29-12V20l-33-4Z"
          fill="currentColor"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[5%] hidden h-52 w-[230px] text-[#ceff00] sm:left-[5%] sm:block sm:h-[230px] sm:w-64"
        viewBox="0 0 380 310"
        fill="none"
      >
        <path
          d="M44 310c-10-72 1-154 51-206 34-35 91-53 139-43 35 7 60 31 68 64 8 34-7 76-34 96-23 17-52 14-59-6-9-25 16-56 40-77 26-24 57-47 84-74"
          stroke="currentColor"
          strokeWidth="92"
          strokeLinecap="round"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-5 hidden h-52 w-[230px] text-[#ceff00] sm:-right-8 sm:block sm:h-[230px] sm:w-64"
        viewBox="0 0 380 320"
        fill="none"
      >
        <path
          d="M218 53c29-10 59-13 70-1 14 15 3 36-23 53l-99 64 114-9c31-3 49 9 48 27-1 17-19 31-46 44l-116 56 130-6"
          stroke="currentColor"
          strokeWidth="57"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[7%] hidden h-32 w-[115px] text-white sm:left-[15%] sm:top-[6%] sm:block sm:h-[140px] sm:w-32"
        viewBox="0 0 170 210"
        fill="none"
      >
        <path
          d="M34 23c53-20 79-17 83-6 5 12-60 33-76 48-17 16 73-24 87-7 12 15-73 50-78 68-5 18 68-27 82-11 11 13-26 39-57 60"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
}
