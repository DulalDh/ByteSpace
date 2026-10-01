import { Brand } from "@/components/molecules/Brand";
import { CourseCard } from "@/components/molecules/CourseCard";
import { HappyStudentsCard } from "@/components/molecules/HappyStudentsCard";
import { copy, courses, testimonials } from "@/data/home-data.js";

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

export function AuthMarketingPanel({ mode }: { mode: "login" | "signup" }) {
  const text = copy.auth[mode];

  return (
    <section
      className="relative min-h-svh min-w-0 pb-[15vh] pl-[clamp(32px,8.4vw,164px)] pr-6 max-[1100px]:min-h-0 max-[1100px]:p-0"
      aria-label="About ByteSpace"
    >
      <div>
        <Brand light className="h-11 w-10 [&>span]:hidden [&>svg]:mb-0 [&>svg]:h-[33px] pt-[10px]" />
      </div>
      <div className="mt-[clamp(32px,5.3vh,68px)] max-w-[680px] max-[1100px]:mt-4 max-[600px]:my-[42px]">
        <h2 className="m-0 text-[20px] font-bold leading-[1.2] tracking-[-0.7px] max-[600px]:text-[20px]">
          {text.marketingTitle}
        </h2>
        <p className="mt-[clamp(10px,1.8vh,23px)] mb-0 text-[18px] leading-[1.65] font-normal tracking-[-0.35px] max-[1100px]:text-[18px] max-[600px]:mt-[10px] max-[600px]:text-[15px] max-[600px]:leading-[1.5]">
          {text.marketingDescription}
        </p>
      </div>

      <div className="relative mt-[clamp(24px,8.8vh,112px)] h-[clamp(360px,39.2vh,501px)] w-full max-w-[656px] max-[1100px]:mt-8 max-[1100px]:h-[340px] max-[1100px]:w-full max-[1100px]:max-w-none max-[600px]:mt-6 max-[600px]:h-[340px]">
        <div className="relative mt-[-30px] h-[650px] w-full origin-top-left scale-[0.77] min-[1101px]:[@media(max-height:800px)]:scale-[0.6] max-[1100px]:h-[340px] max-[1100px]:scale-100 max-[600px]:h-[340px]">
          <div className="absolute top-[130px] left-0 z-[1] w-[86%] max-[1100px]:top-[55px] max-[1100px]:w-3/4 max-[600px]:w-[86%]">
            <CourseCard course={courses[1]} students={testimonials} variant="featured" className={backCardClasses} />
          </div>
          <div className="absolute top-0 left-[23%] z-[2] w-[86%] max-[1100px]:left-[19%] max-[1100px]:w-4/5 max-[600px]:left-[14%] max-[600px]:w-[86%]">
            <CourseCard course={courses[2]} students={testimonials} variant="featured" className={frontCardClasses} />
          </div>
          <div className="absolute top-12 left-[10%] z-[3] h-[116px] w-[136px] rotate-[-40deg] rounded-[50%] border-[34px] border-[#ceff00] max-[1100px]:h-[62px] max-[1100px]:w-[70px] max-[1100px]:border-[18px]" />
          <div className="absolute bottom-[-50px] left-0 z-[3] h-[174px] w-[174px] rotate-[9deg] rounded-xl bg-[#ceff00] [clip-path:polygon(49%_0,100%_100%,0_82%)] max-[1100px]:hidden" />
          <svg viewBox="0 0 118 132" aria-hidden="true" className="absolute right-[-10%] bottom-[71px] z-[10] h-[132px] w-[118px] rotate-[160deg] drop-shadow-[0_4px_2px_#00000012] max-[1100px]:hidden">
            <path d="M95 8C10 12 20 48 94 50S15 87 91 91 49 117 44 126" fill="none" stroke="#fff" strokeWidth="24" strokeLinecap="round" />
          </svg>
          <HappyStudentsCard className="!absolute !right-[-50px] !bottom-[-60px] !z-[5] !min-h-[166px] !w-[350px] !rounded-[22px] !bg-[#ceff00] !px-[22px] !py-5 !shadow-none [&>span:first-child]:!text-[23px] [&_img]:!h-[54px] [&_img]:!w-[54px] [&_.mt-2>span]:!h-[54px] [&_.mt-2>span]:!w-[54px] max-[1100px]:!hidden" />
        </div>
      </div>
    </section>
  );
}
