import { footerLinkGroups } from "@/data/home-data.js";
import { SearchInput } from "@/components/atoms/SearchInput";
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
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <form
            className="mt-11 flex h-11 w-full max-w-[760px] items-center gap-6 md:mt-[45px] md:h-[45px] md:gap-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex h-full min-w-0 flex-1 items-center rounded-full border border-[#d6d8dc] px-5">
              <SearchInput
                label="Your email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <button className="h-full shrink-0 rounded-full bg-[#ceff00] px-6 text-[14px] font-medium">
              Search
            </button>
          </form>
          <p className="mt-6 max-w-[720px] text-[11px] leading-5 text-[#555] md:mt-[22px] md:text-[12px] md:leading-5">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
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
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <span className="flex gap-4 md:gap-6">
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Terms of Service</a>
          <a href="#footer">Cookie Settings</a>
        </span>
      </div>
    </footer>
  );
}
