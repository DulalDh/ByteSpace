"use client";

import { useState, type InputHTMLAttributes, type ReactNode } from "react";

type LabeledInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: ReactNode;
  inputClassName?: string;
  labelClassName?: string;
  passwordToggle?: boolean;
};

/** A reusable, accessible label and input pair for forms. */
export function LabeledInput({
  id,
  label,
  className = "",
  inputClassName = "",
  labelClassName = "",
  passwordToggle = false,
  type,
  ...inputProps
}: LabeledInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`labeled-input ${className}`.trim()}>
      <label className={labelClassName} htmlFor={id}>{label}</label>
      <div className={passwordToggle && isPassword ? "relative" : undefined}>
        <input
          id={id}
          type={passwordToggle && isPassword && showPassword ? "text" : type}
          className={inputClassName}
          {...inputProps}
        />
        {passwordToggle && isPassword && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((visible) => !visible)}
            className="absolute right-3 top-[10px] grid h-8 w-8 cursor-pointer place-items-center rounded-full text-[#666] hover:bg-[#f2f4f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164bff]"
          >
            {showPassword ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.7" />
                <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5.2 0 8.7 4.2 9.5 6-.3.7-1.2 2-2.6 3.2M6.2 6.3C3.9 7.7 2.8 10 2.5 11c.8 1.8 4.3 6 9.5 6 1 0 2-.2 2.8-.5" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
