import { copy, testimonials } from "@/data/home-data.js";
import { RemoteImage } from "@/components/atoms/RemoteImage";

export function TestimonialsSection() {
  return (
    <section
      id="creators"
      className="px-6 py-16 sm:px-10 md:px-14 md:py-20 xl:px-[5%] xl:py-[112px]"
      style={{
        background:
          "radial-gradient(ellipse at 14% 20%, #eaff91 0, transparent 35%), radial-gradient(ellipse at 88% 19%, #e2e8ff 0, transparent 39%), radial-gradient(ellipse at 38% 100%, #e8ecff 0, transparent 49%), #fafbf8",
      }}
    >
      <div className="mx-auto max-w-[1840px]">
        <div className="grid gap-7 md:grid-cols-[0.92fr_1fr] md:items-start md:gap-12">
          <h2 className="max-w-[620px] text-[27px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#111827] sm:text-[34px] lg:text-[44px]">
            {copy.testimonials.title}
          </h2>
          <p className="max-w-[850px] pt-1 text-[14px] leading-[1.8] text-[#4b5c75] sm:text-[15px] lg:text-[18px]">
            {copy.testimonials.description}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="min-h-[350px] rounded-[24px] border border-slate-200/50 bg-white p-7 shadow-[0_2px_4px_rgba(15,23,42,0.12)] sm:p-8 lg:min-h-[445px] lg:p-[35px]"
            >
              <RemoteImage
                imageId={item.avatar}
                alt={item.name}
                className="h-[60px] w-[60px] rounded-full object-cover lg:h-[70px] lg:w-[70px]"
              />
              <h3 className="mt-5 text-[15px] font-bold leading-tight text-[#172033] lg:text-[20px]">
                {item.name}
              </h3>
              <p className="mt-2 text-[13px] font-semibold leading-tight text-[#2864f0] lg:text-[18px]">
                {item.role}
              </p>
              <p className="mt-7 text-[14px] leading-[1.9] text-[#53647d] lg:mt-8 lg:text-[18px] lg:leading-[1.9]">
                “{item.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
