"use client";

import { LabeledInput } from "@/components/atoms/LabeledInput";
import { EmailInput } from "@/components/atoms/EmailInput";
import { Brand } from "@/components/molecules/Brand";
import { CourseCard } from "@/components/molecules/CourseCard";
import { HappyStudentsCard } from "@/components/molecules/HappyStudentsCard";
import { courses, testimonials } from "@/data/home-data.js";
import Link from "next/link";

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

const frontCardClasses = [
  "!min-h-[450px] !rounded-[31px] !p-5 !shadow-[0_8px_18px_#05174818]",
  "[&>div:first-child]:!h-[264px] [&>div:first-child]:!rounded-[18px]",
  "[&_h3]:!text-[27px] [&_.flex.items-center]:!mt-[19px]",
  "[&_.text-blue-600]:!text-[27px] [&_.text-blue-600_span]:!text-[16px]",
  "max-[1100px]:!min-h-0 max-[1100px]:!rounded-[20px] max-[1100px]:!p-[10px]",
  "max-[1100px]:[&>div:first-child]:!h-[125px] max-[1100px]:[&_h3]:!text-[15px]",
  "max-[1100px]:[&_.text-blue-600]:!text-[15px] max-[1100px]:[&_.text-blue-600_span]:!text-[11px]",
].join(" ");

const backCardClasses = [
  "!h-[450px] !rounded-[30px] !p-[14px] [&>div:first-child]:!h-[235px]",
  "[&>div:first-child]:!rounded-[18px] [&>div:first-child>div]:!hidden [&_h3]:!text-[27px] [&_p]:!text-[16px]",
  "max-[1100px]:!h-auto max-[1100px]:!rounded-[18px] max-[1100px]:!p-2",
  "max-[1100px]:[&>div:first-child]:!h-[115px] max-[1100px]:[&_h3]:!text-[15px]",
].join(" ");

export function LoginPage() {
  return (
    <main
      id="home"
      className="isolate min-h-svh overflow-x-clip bg-transparent text-white min-[1101px]:h-svh min-[1101px]:overflow-hidden before:pointer-events-none before:fixed before:inset-0 before:-z-10 before:bg-[#0641e8] before:bg-[length:122px_122px] before:bg-[image:linear-gradient(#ffffff20_2px,transparent_2px),linear-gradient(90deg,#ffffff20_2px,transparent_2px)] before:content-['']"
    >
      <div className="grid min-h-svh w-full grid-cols-2 items-center min-[1101px]:h-svh max-[1100px]:mx-auto max-[1100px]:w-[min(calc(100%_-_48px),900px)] max-[1100px]:grid-cols-1 max-[1100px]:gap-8 max-[1100px]:px-0 max-[1100px]:pt-6 max-[1100px]:pb-[5vh] max-[600px]:w-[calc(100%_-_32px)] max-[600px]:gap-8 max-[600px]:pt-[18px]">
        <section
          className="relative min-h-svh min-w-0 pb-[15vh] pl-[clamp(32px,8.4vw,164px)] pr-6 max-[1100px]:min-h-0 max-[1100px]:p-0"
          aria-label="About ByteSpace"
        >
          <div>
            <Brand
              light
              className="h-11 w-10 [&>span]:hidden [&>svg]:mb-0 [&>svg]:h-[33px] pt-[10px]"
            />
          </div>
          <div className="mt-[clamp(32px,5.3vh,68px)] max-w-[680px] max-[1100px]:mt-4 max-[600px]:my-[42px]">
            <h2 className="m-0 text-[20px] font-bold leading-[1.2] tracking-[-0.7px] max-[600px]:text-[20px]">
              Sign in with ease
            </h2>
            <p className="mt-[clamp(10px,1.8vh,23px)] mb-0 text-[18px] leading-[1.65] font-normal tracking-[-0.35px] max-[1100px]:text-[18px] max-[600px]:mt-[10px] max-[600px]:text-[15px] max-[600px]:leading-[1.5]">
              Experience a seamless and efficient sign-in process that
              <br className="max-[600px]:hidden" /> grants you instant access to
              a world of knowledge.
            </p>
          </div>

          <div className="relative mt-[clamp(24px,8.8vh,112px)] h-[clamp(360px,39.2vh,501px)] w-full max-w-[656px] max-[1100px]:mt-8 max-[1100px]:h-[340px] max-[1100px]:w-full max-[1100px]:max-w-none max-[600px]:mt-6 max-[600px]:h-[340px]">
            <div className=" mt-[-30px] relative h-[650px] w-full origin-top-left scale-[0.77] min-[1101px]:[@media(max-height:800px)]:scale-[0.6] max-[1100px]:h-[340px] max-[1100px]:scale-100 max-[600px]:h-[340px]">
              <div className="absolute top-[130px] left-0 z-[1] w-[86%] max-[1100px]:top-[55px] max-[1100px]:w-3/4 max-[600px]:w-[86%]">
                <CourseCard
                  course={courses[1]}
                  students={testimonials}
                  variant="featured"
                  className={backCardClasses}
                />
              </div>
              <div className="absolute top-0 left-[23%] z-[2] w-[86%] max-[1100px]:left-[19%] max-[1100px]:w-4/5 max-[600px]:left-[14%] max-[600px]:w-[86%]">
                <CourseCard
                  course={courses[2]}
                  students={testimonials}
                  variant="featured"
                  className={frontCardClasses}
                />
              </div>
              <div className="absolute top-12 left-[10%] z-[3] h-[116px] w-[136px] rotate-[-40deg] rounded-[50%] border-[34px] border-[#ceff00] max-[1100px]:h-[62px] max-[1100px]:w-[70px] max-[1100px]:border-[18px]" />
              <div className="absolute bottom-[-50px] left-0 z-[3] h-[174px] w-[174px] rotate-[9deg] rounded-xl bg-[#ceff00] [clip-path:polygon(49%_0,100%_100%,0_82%)] max-[1100px]:hidden" />
              <svg
                viewBox="0 0 118 132"
                aria-hidden="true"
                className="absolute right-[-10%] bottom-[71px] z-[10] h-[132px] w-[118px] rotate-[160deg] drop-shadow-[0_4px_2px_#00000012] max-[1100px]:hidden"
              >
                <path
                  d="M95 8C10 12 20 48 94 50S15 87 91 91 49 117 44 126"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
              </svg>
              <HappyStudentsCard className="!absolute !right-[-50px] !bottom-[-60px] !z-[5] !min-h-[166px] !w-[350px] !rounded-[22px] !bg-[#ceff00] !px-[22px] !py-5 !shadow-none [&>span:first-child]:!text-[23px] [&_img]:!h-[54px] [&_img]:!w-[54px] [&_.mt-2>span]:!h-[54px] [&_.mt-2>span]:!w-[54px] max-[1100px]:!hidden" />
            </div>
          </div>
        </section>

        <section
          className="relative flex h-[min(66.4vh,850px)] min-h-[680px] max-w-[786px] items-stretch justify-center justify-self-stretch self-end mx-[clamp(18px,1.4vw,27px)] mr-[clamp(32px,8.4vw,164px)] mb-[5vh] ml-[clamp(18px,1.4vw,27px)] rounded-[32px] bg-white text-[#242529] max-[1100px]:mx-auto max-[1100px]:mb-0 max-[1100px]:h-[608px] max-[1100px]:min-h-0 max-[1100px]:w-full max-[600px]:h-auto max-[600px]:min-h-[520px] max-[600px]:rounded-[24px]"
          aria-labelledby="welcome-heading"
        >
          <div className="relative h-full w-[min(614px,calc(100%_-_112px))] pt-[67px] max-[1100px]:w-[min(614px,calc(100%_-_80px))] max-[1100px]:pt-[50px] max-[600px]:h-auto max-[600px]:w-[calc(100%_-_48px)] max-[600px]:py-6">
            <Link
              href="/"
              className="absolute top-5 left-0 inline-flex items-center gap-2 text-[15px] text-[#164bff] no-underline hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164bff]"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
            <p className="m-0 text-[24px] leading-[1.3] text-[#164bff] max-[600px]:text-[18px]">
              Sign In
            </p>
            <h1
              id="welcome-heading"
              className="mt-[6px] mb-[43px] text-[clamp(42px,3.1vw,60px)] leading-[1.08] font-[750] tracking-[-1.8px] max-[1100px]:mb-6 max-[600px]:mt-[7px] max-[600px]:mb-5 max-[600px]:text-[44px] max-[600px]:tracking-[-1px]"
            >
              Welcome Back
            </h1>
            <form
              className="flex flex-col"
              onSubmit={(event) => event.preventDefault()}
            >
              <EmailInput
                id="email"
                label="Email"
                required
                placeholder="designer@example.com"
                autoComplete="email"
                className="flex flex-col"
                labelClassName="text-[18px] leading-[1.35] max-[600px]:text-[15px]"
                inputClassName="mt-[10px] h-[48px] w-full rounded-[17px] border-[1.5px] border-[#e3e4e7] px-[26px] text-[22px] text-[#222] shadow-[0_0_0_1px_#00000003] outline-none placeholder:text-[#999ca5] focus:border-[#164bff] max-[1100px]:mb-4 max-[600px]:mb-4 max-[600px]:h-[39px] max-[600px]:rounded-[13px] max-[600px]:px-4 max-[600px]:text-[17px]"
              />
              <div className="relative mt-[22px]">
                <LabeledInput
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="********"
                  autoComplete="current-password"
                  passwordToggle
                  className="flex flex-col"
                  labelClassName="mb-2 text-[18px] leading-[1.35] max-[600px]:text-[15px]"
                  inputClassName="mb-[22px] h-[48px] w-full rounded-[17px] border-[1.5px] border-[#e3e4e7] py-0 pr-14 pl-[26px] text-[22px] text-[#222] shadow-[0_0_0_1px_#00000003] outline-none placeholder:text-[#999ca5] focus:border-[#164bff] max-[1100px]:mb-4 max-[600px]:mb-4 max-[600px]:h-[39px] max-[600px]:rounded-[13px] max-[600px]:pl-4 max-[600px]:text-[17px]"
                />
              </div>
              <button
                type="submit"
                className="mt-0 h-[43px] min-w-[99px] self-end cursor-pointer rounded-[40px] border-0 bg-[#ceff00] text-[23px] text-[#111] max-[600px]:h-[36px] max-[600px]:min-w-[84px] max-[600px]:text-[18px]"
              >
                Sign In
              </button>
            </form>

            <div className="absolute top-[69%] right-0 left-0 flex items-center gap-4 text-[20px] text-[#999] max-[1100px]:top-[68%] max-[600px]:static max-[600px]:mt-7">
              <span className="h-px flex-1 bg-[#d8d8d8]" />
              <span>or</span>
              <span className="h-px flex-1 bg-[#d8d8d8]" />
            </div>
            <div className="absolute top-[76%] right-0 left-0 flex justify-center gap-[22px] max-[1100px]:top-[76%] max-[600px]:static max-[600px]:mt-5">
              <button
                type="button"
                aria-label="Continue with Facebook"
                className="grid h-[69px] w-[69px] cursor-pointer place-items-center rounded-[23px] border-[1.5px] border-[#d6d6d6] bg-white text-black max-[600px]:h-[48px] max-[600px]:w-[48px] max-[600px]:rounded-[16px]"
              >
                <SocialIcon kind="facebook" />
              </button>
              <button
                type="button"
                aria-label="Continue with Google"
                className="grid h-[69px] w-[69px] cursor-pointer place-items-center rounded-[23px] border-[1.5px] border-[#d6d6d6] bg-white text-black max-[600px]:h-[48px] max-[600px]:w-[48px] max-[600px]:rounded-[16px]"
              >
                <SocialIcon kind="google" />
              </button>
            </div>
            <p className="absolute right-0 bottom-[5.2%] left-0 m-0 text-center text-[20px] text-[#999] max-[600px]:static max-[600px]:mt-6 max-[600px]:text-[15px]">
              New user?{" "}
              <a href="#create-account" className="text-[#164bff] no-underline">
                Create an account
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
