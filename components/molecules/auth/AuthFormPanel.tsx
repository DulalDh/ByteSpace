"use client";

import { EmailInput } from "@/components/atoms/EmailInput";
import { LabeledInput } from "@/components/atoms/LabeledInput";
import { copy } from "@/data/home-data.js";
import Link from "next/link";
import { useState } from "react";

function SocialIcon({ kind }: { kind: "facebook" | "google" }) {
  return kind === "facebook" ? (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="block h-8 w-8 shrink-0 fill-current max-[600px]:h-[38px] max-[600px]:w-[38px]"
    >
      <path
        fill="#1877F2"
        d="M12 1.4a10.6 10.6 0 1 0 0 21.2 10.6 10.6 0 0 0 0-21.2Z"
      />
      <path
        fill="#fff"
        d="M13.55 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.32-.14-2.51-.14-2.49 0-4.2 1.52-4.2 4.31V9.6H7.31v3.2h2.82V21h3.42Z"
      />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="block h-8 w-8 shrink-0 fill-current max-[600px]:h-[38px] max-[600px]:w-[38px]"
    >
      <path
        fill="#4285F4"
        d="M12.24 10.2v3.9h5.42a4.8 4.8 0 0 1-1.98 3.12l3.2 2.48c1.87-1.72 2.95-4.25 2.95-7.25 0-.69-.06-1.35-.18-1.99H12.24v-.26Z"
      />
      <path
        fill="#34A853"
        d="M12.24 22c2.7 0 4.97-.9 6.63-2.3l-3.2-2.48c-.9.61-2.06.98-3.43.98-2.63 0-4.86-1.77-5.66-4.15l-3.3 2.55A10 10 0 0 0 12.24 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.58 14.05a6.02 6.02 0 0 1 0-3.84l-3.3-2.55a10 10 0 0 0 0 8.94l3.3-2.55Z"
      />
      <path
        fill="#EA4335"
        d="M12.24 6.06c1.47 0 2.79.5 3.83 1.52l2.87-2.87C17.2 3.07 14.94 2 12.24 2a10 10 0 0 0-8.96 5.66l3.3 2.55c.8-2.38 3.03-4.15 5.66-4.15Z"
      />
    </svg>
  );
}

const fieldClass =
  "mt-[10px] h-[48px] w-full rounded-[17px] border-[1.5px] border-[#e3e4e7] px-[26px] text-[22px] text-[#222] shadow-[0_0_0_1px_#00000003] outline-none placeholder:text-[#999ca5] focus:border-[#164bff] max-[1100px]:mb-4 max-[600px]:mb-4 max-[600px]:h-[39px] max-[600px]:rounded-[13px] max-[600px]:px-4 max-[600px]:text-[17px]";

export function AuthFormPanel({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";
  const text = copy.auth[mode];
  const [fullNameError, setFullNameError] = useState("");

  return (
    <section
      className="relative flex h-[min(66.4vh,850px)] min-h-[680px] max-w-[786px] items-stretch justify-center justify-self-stretch self-end mx-[clamp(18px,1.4vw,27px)] mr-[clamp(32px,8.4vw,164px)] mb-[5vh] ml-[clamp(18px,1.4vw,27px)] rounded-[32px] bg-white text-[#242529] max-[1100px]:mx-auto max-[1100px]:mb-0 max-[1100px]:h-[608px] max-[1100px]:min-h-0 max-[1100px]:w-full max-[600px]:h-auto max-[600px]:min-h-[520px] max-[600px]:rounded-[24px]"
      aria-labelledby="welcome-heading"
    >
      <div className="relative h-full w-[min(614px,calc(100%_-_112px))] pt-[67px] max-[1100px]:w-[min(614px,calc(100%_-_80px))] max-[1100px]:pt-[50px] max-[600px]:h-auto max-[600px]:w-[calc(100%_-_48px)] max-[600px]:py-6">
        <Link
          href="/"
          className="absolute top-5 left-0 inline-flex items-center gap-2 text-[15px] text-[#164bff] no-underline hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164bff] max-[1100px]:static max-[1100px]:mb-5"
        >
          <span aria-hidden="true">←</span>
          {copy.auth.backToHome}
        </Link>
        <p className="m-0 text-[24px] leading-[1.3] text-[#164bff] max-[600px]:text-[18px]">
          {text.eyebrow}
        </p>
        <h1
          id="welcome-heading"
          className="mt-[6px] mb-[43px] text-[clamp(42px,3.1vw,60px)] leading-[1.08] font-[750] tracking-[-1.8px] max-[1100px]:mb-6 max-[600px]:mt-[7px] max-[600px]:mb-5 max-[600px]:text-[44px] max-[600px]:tracking-[-1px]"
        >
          {isSignup ? (
            <>
              {copy.auth.signup.headingFirstLine}
              <br />
              {copy.auth.signup.headingSecondLine}
            </>
          ) : (
            copy.auth.login.heading
          )}
        </h1>
        <form
          className="flex flex-col"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();

            if (isSignup) {
              const fullName = new FormData(event.currentTarget).get(
                "full-name",
              );
              if (typeof fullName !== "string" || !fullName.trim()) {
                setFullNameError("Please enter your full name.");
                event.currentTarget.reportValidity();
                return;
              }
              setFullNameError("");
            }

            event.currentTarget.reportValidity();
          }}
        >
          {isSignup && (
            <div className="mb-[32px]">
              <LabeledInput
                id="full-name"
                name="full-name"
                label={
                  <>
                    {copy.auth.signup.fullNameLabel}
                    <span aria-hidden="true" className="ml-1 text-red-600">
                      *
                    </span>
                  </>
                }
                type="text"
                placeholder={copy.auth.signup.fullNamePlaceholder}
                autoComplete="name"
                required
                aria-invalid={Boolean(fullNameError)}
                aria-describedby={fullNameError ? "full-name-error" : undefined}
                onFocus={(event) => {
                  if (!event.currentTarget.value.trim()) {
                    setFullNameError("Full name is required.");
                  }
                }}
                onChange={(event) => {
                  setFullNameError(
                    event.currentTarget.value.trim()
                      ? ""
                      : "Full name is required.",
                  );
                }}
                onBlur={(event) => {
                  setFullNameError(
                    event.currentTarget.value.trim()
                      ? ""
                      : "Full name is required.",
                  );
                }}
                className="flex flex-col"
                labelClassName="text-[18px] leading-[1.35] max-[600px]:text-[15px]"
                inputClassName={fieldClass}
              />
              {fullNameError && (
                <p
                  id="full-name-error"
                  role="alert"
                  className="absolute mt-1 text-sm text-red-600"
                >
                  {fullNameError}
                </p>
              )}
            </div>
          )}
          <EmailInput
            id="email"
            label={copy.auth.emailLabel}
            required
            placeholder={copy.auth.emailPlaceholder}
            autoComplete="email"
            fieldClassName="flex flex-col"
            labelClassName="text-[18px] leading-[1.35] max-[600px]:text-[15px]"
            inputClassName={fieldClass}
          />
          <div className="relative mt-[32px]">
            <LabeledInput
              id="password"
              label={copy.auth.passwordLabel}
              type="password"
              placeholder={copy.auth.passwordPlaceholder}
              autoComplete={isSignup ? "new-password" : "current-password"}
              required
              passwordToggle
              className="flex flex-col"
              labelClassName="mb-2 text-[18px] leading-[1.35] max-[600px]:text-[15px]"
              inputClassName={`mb-[22px] h-[48px] w-full rounded-[17px] border-[1.5px] border-[#e3e4e7] py-0 pr-14 pl-[26px] text-[22px] text-[#222] shadow-[0_0_0_1px_#00000003] outline-none placeholder:text-[#999ca5] focus:border-[#164bff] max-[1100px]:mb-4 max-[600px]:mb-4 max-[600px]:h-[39px] max-[600px]:rounded-[13px] max-[600px]:pl-4 max-[600px]:text-[17px]`}
            />
          </div>
          <button
            type="submit"
            className="mt-0 h-[43px] min-w-[99px] self-end cursor-pointer rounded-[40px] border-0 bg-[#ceff00] text-[23px] text-[#111] max-[600px]:h-[36px] max-[600px]:min-w-[84px] max-[600px]:text-[18px]"
          >
            {text.submit}
          </button>
        </form>

        {!isSignup && (
          <>
            <div className="absolute top-[69%] right-0 left-0 flex items-center gap-4 text-[20px] text-[#999] max-[1100px]:top-[68%] max-[600px]:static max-[600px]:mt-7">
              <span className="h-px flex-1 bg-[#d8d8d8]" />
              <span>{copy.auth.or}</span>
              <span className="h-px flex-1 bg-[#d8d8d8]" />
            </div>
            <div className="absolute top-[76%] right-0 left-0 flex justify-center gap-[22px] max-[1100px]:top-[76%] max-[600px]:static max-[600px]:mt-5">
              <button
                type="button"
                aria-label={copy.auth.facebookLabel}
                className="grid h-[69px] w-[69px] cursor-pointer place-items-center rounded-[23px] border-[1.5px] border-[#d6d6d6] bg-white text-black max-[600px]:h-[48px] max-[600px]:w-[48px] max-[600px]:rounded-[16px]"
              >
                <SocialIcon kind="facebook" />
              </button>
              <button
                type="button"
                aria-label={copy.auth.googleLabel}
                className="grid h-[69px] w-[69px] cursor-pointer place-items-center rounded-[23px] border-[1.5px] border-[#d6d6d6] bg-white text-black max-[600px]:h-[48px] max-[600px]:w-[48px] max-[600px]:rounded-[16px]"
              >
                <SocialIcon kind="google" />
              </button>
            </div>
          </>
        )}
        <p className="absolute right-0 bottom-[5.2%] left-0 m-0 text-center text-[16px] text-[#999] max-[600px]:static max-[600px]:mt-6 max-[600px]:text-[16px]">
          {text.prompt}{" "}
          <Link
            href={isSignup ? "/login" : "/signup"}
            className="text-[#164bff] no-underline"
          >
            {text.link}
          </Link>
        </p>
      </div>
    </section>
  );
}
