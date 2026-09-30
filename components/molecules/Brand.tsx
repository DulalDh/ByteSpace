import { copy } from "@/data/home-data.js";

interface BrandProps {
  light?: boolean;
}

export function Brand({ light = false }: BrandProps) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2 text-base font-black tracking-tight sm:text-lg md:gap-2 md:text-[24px] ${light ? "text-white" : "text-slate-900"}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 29 32"
        className="h-7 w-auto shrink-0 md:h-8 mb-2"
      >
        <path
          d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
          fill="#D4FB20"
        />
      </svg>
      <span className="leading-none bold">{copy.brand}</span>
    </a>
  );
}
