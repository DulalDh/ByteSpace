"use client";

import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import { LabeledInput } from "@/components/atoms/LabeledInput";
import type { ComponentProps } from "react";

type EmailInputProps = Omit<
  ComponentProps<typeof LabeledInput>,
  "type" | "onChange" | "onBlur" | "onInvalid"
> & {
  fieldClassName?: string;
  errorClassName?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

function getEmailError(value: string, required: boolean) {
  const email = value.trim();
  if (!email) return required ? "Email is required." : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Enter a valid email address.";
  }
  return "";
}

/** Email field with shared format validation and optional required validation. */
export function EmailInput({
  required = false,
  onChange,
  onBlur,
  className = "",
  fieldClassName = "",
  errorClassName = "",
  inputClassName = "",
  ...inputProps
}: EmailInputProps) {
  const [error, setError] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setError(getEmailError(event.currentTarget.value, required));
    onChange?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setError(getEmailError(event.currentTarget.value, required));
    onBlur?.(event);
  }

  function handleInvalid(event: FormEvent<HTMLInputElement>) {
    setError(
      getEmailError(event.currentTarget.value, required) ||
        "Enter a valid email address.",
    );
  }

  return (
    <div className={`relative ${className}`.trim()}>
      <LabeledInput
        {...inputProps}
        label={
          <>
            {inputProps.label}
            {required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}
          </>
        }
        type="email"
        required={required}
        className={fieldClassName}
        onChange={handleChange}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${inputProps.id}-error` : inputProps["aria-describedby"]
        }
        inputClassName={inputClassName}
      />
      {error && (
        <p
          id={`${inputProps.id}-error`}
          role="alert"
          className={`absolute top-full left-0 mt-1 text-sm text-red-600 ${errorClassName}`.trim()}
        >
          {error}
        </p>
      )}
    </div>
  );
}
