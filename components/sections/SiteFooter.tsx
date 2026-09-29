import { footerLinkGroups } from "@/data/home-data.js";
import { SearchInput } from "@/components/atoms/SearchInput";
import { Brand } from "@/components/molecules/Brand";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-100 bg-white px-5 py-10 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <Brand />
          <p className="mt-4 max-w-sm text-[10px] leading-5 text-slate-500">
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <form
            className="mt-4 flex h-10 max-w-sm items-center gap-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex h-full min-w-0 flex-1 items-center rounded-full border border-slate-200 px-2">
              <SearchInput
                label="Your email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                compact
              />
            </div>
            <button className="h-full shrink-0 rounded-full bg-[#ceff00] px-4 text-[10px] font-bold">
              Search
            </button>
          </form>
          <p className="mt-3 max-w-sm text-[9px] leading-4 text-slate-400">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-[10px] text-slate-500 sm:grid-cols-3">
          {footerLinkGroups.map(({ links }, groupIndex) => (
            <ul key={groupIndex} className="space-y-3">
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
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-slate-100 pt-5 text-[9px] text-slate-400">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <span className="flex gap-4">
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Terms of Service</a>
          <a href="#footer">Cookie Settings</a>
        </span>
      </div>
    </footer>
  );
}
