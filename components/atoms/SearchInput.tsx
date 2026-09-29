import type { ChangeEventHandler, InputHTMLAttributes } from "react";

type SearchInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "name" | "placeholder" | "type" | "value" | "defaultValue" | "className" | "autoComplete"
> & {
  label: string;
  showSearchIcon?: boolean;
  compact?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export function SearchInput({
  label,
  showSearchIcon = false,
  compact = false,
  className = "",
  ...inputProps
}: SearchInputProps) {
  return (
    <div className={`flex h-full min-w-0 items-center ${compact ? "w-full" : "w-0 flex-1"}`}>
      {showSearchIcon && (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-slate-400 md:h-7 md:w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4 4" />
        </svg>
      )}
      <input
        aria-label={label}
        className={`h-full min-w-0 flex-1 bg-transparent text-slate-700 outline-none placeholder:text-slate-400 ${compact ? "px-3 text-xs" : "px-3 text-base md:text-[24px]"} ${className}`}
        {...inputProps}
      />
    </div>
  );
}
