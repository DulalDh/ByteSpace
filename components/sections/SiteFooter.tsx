"use client";

import { copy, footerLinkGroups } from "@/data/home-data.js";
import { EmailInput } from "@/components/atoms/EmailInput";
import { Brand } from "@/components/molecules/Brand";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-100 bg-white px-5 pb-6 pt-10 text-[#454545] md:px-[4.8vw] md:pb-7 md:pt-[67px]"
    >
      <div className="mx-auto grid w-full max-w-[1808px] gap-8 md:grid-cols-[1.05fr_1.25fr] md:gap-11">
        <div>
          <div className="[&_a]:text-[21px] [&_svg]:h-7 [&_svg]:w-7">
            <Brand />
          </div>
          <p className="mt-6 max-w-[760px] text-sm leading-5 text-[#555] md:mt-[22px] md:text-[14px] md:leading-[14px]">
            {copy.footer.newsletter}
          </p>
          <form
            className="relative mt-11 flex h-11 w-full max-w-[760px] items-center gap-6 md:mt-[45px] md:h-[45px] md:gap-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex h-full min-w-0 flex-1 items-center rounded-full border border-[#d6d8dc] px-5">
              <EmailInput
                id="footer-email"
                label={copy.search.emailLabel}
                name="email"
                placeholder={copy.search.emailPlaceholder}
                autoComplete="email"
                className="h-full min-w-0 flex-1"
                fieldClassName="flex h-full items-center"
                errorClassName="text-xs"
                labelClassName="sr-only"
                inputClassName="h-[43px] min-w-0 w-full self-center bg-transparent py-0 text-base leading-[43px] text-slate-700 outline-none placeholder:text-slate-400 md:text-[24px]"
              />
            </div>
            <button className="h-full shrink-0 rounded-full bg-[#ceff00] px-6 text-[14px] font-medium">
              {copy.search.button}
            </button>
          </form>
          <p className="mt-6 max-w-[720px] text-[11px] leading-5 text-[#555] md:mt-[22px] md:text-[12px] md:leading-5">
            {copy.footer.disclaimer}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-7 text-[13px] text-[#555] sm:grid-cols-3 md:pt-14 md:text-[14px]">
          {footerLinkGroups.map(({ links }, groupIndex) => (
            <ul key={groupIndex} className="space-y-4">
              {links.map((link, linkIndex) => (
                <li key={`${groupIndex}-${link}`}>
                  <a
                    href={
                      groupIndex === 2 && linkIndex === 0
                        ? "#creators"
                        : "#courses"
                    }
                    className="hover:text-blue-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-24 flex w-full max-w-[1808px] flex-wrap justify-between gap-3 border-t border-[#d6d8dc] pt-6 text-[12px] text-[#555] md:mt-[133px] md:pt-[26px]">
        <span>{copy.footer.copyright}</span>
        <span className="flex gap-4 md:gap-6">
          <a href="#footer">{copy.footer.privacy}</a>
          <a href="#footer">{copy.footer.terms}</a>
          <a href="#footer">{copy.footer.cookies}</a>
        </span>
      </div>
    </footer>
  );
}
