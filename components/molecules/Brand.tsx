interface BrandProps {
  light?: boolean;
}

export function Brand({ light = false }: BrandProps) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2 text-base font-black tracking-tight sm:text-lg md:gap-3 md:text-[30px] ${light ? "text-white" : "text-slate-900"}`}
    >
      <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7 md:h-10 md:w-10">
        <path fill="#ceff00" d="M5 2h7v10a7 7 0 1 1-7 7V2Zm9 10h5a7 7 0 1 1-5 12V12Z" />
        <path fill="#073fe5" d="M12 12h2v2h-2z" />
      </svg>
      <span>ByteSpace</span>
    </a>
  );
}
