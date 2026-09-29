import { partnerNames } from "@/data/home-data.js";

export function TrustedPartnersSection() {
  return (
    <section
      aria-label="Trusted by teams"
      className="flex min-h-34 flex-wrap items-center justify-center gap-x-10 gap-y-4 bg-[#f5f5f7] px-5 py-6 text-[#92949b] sm:gap-x-14"
    >
      {partnerNames.map((name) => (
        <span key={name} className="text-[24px] font-bold tracking-tight">
          {name}
        </span>
      ))}
    </section>
  );
}
