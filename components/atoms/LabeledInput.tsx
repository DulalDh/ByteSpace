import type { InputHTMLAttributes } from "react";

type LabeledInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  inputClassName?: string;
  labelClassName?: string;
};

/** A reusable, accessible label and input pair for forms. */
export function LabeledInput({
  id,
  label,
  className = "",
  inputClassName = "",
  labelClassName = "",
  ...inputProps
}: LabeledInputProps) {
  return (
    <div className={`labeled-input ${className}`.trim()}>
      <label className={labelClassName} htmlFor={id}>{label}</label>
      <input id={id} className={inputClassName} {...inputProps} />
    </div>
  );
}
