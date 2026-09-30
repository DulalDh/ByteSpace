import { copy, partnerNames } from "@/data/home-data.js";

const partnerMarks = [
  <svg key="wave" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M3 12c8-5 14-5 22-1 5 2 8 2 12 0M2 19c8-5 15-5 23-1 5 2 8 2 13 0" fill="none" stroke="#F5F5F6" strokeWidth="2.4" />
  </svg>,
  <svg key="sun" viewBox="0 0 40 40" aria-hidden="true">
    <g fill="currentColor" transform="translate(20 20)">
      {Array.from({ length: 12 }, (_, index) => (
        <rect key={index} x="-2" y="-20" width="4" height="10" transform={`rotate(${index * 30})`} />
      ))}
      <circle r="8" />
    </g>
  </svg>,
  <svg key="bolt" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="m23 6-13 16h9l-2 12 14-18h-10z" fill="#F5F5F6" />
  </svg>,
  <svg key="clover" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <g fill="#F5F5F6">
      <circle cx="15" cy="15" r="5" /><circle cx="25" cy="15" r="5" />
      <circle cx="15" cy="25" r="5" /><circle cx="25" cy="25" r="5" />
    </g>
  </svg>,
  <svg key="rings" viewBox="0 0 40 40" aria-hidden="true">
    {Array.from({ length: 8 }, (_, index) => (
      <circle key={index} cx="20" cy="20" r={5 + index * 2.1} fill="none" stroke="currentColor" strokeWidth="1.2" />
    ))}
  </svg>,
];

export function TrustedPartnersSection() {
  return (
    <section
      aria-label={copy.partners.ariaLabel}
      className="flex min-h-54 flex-wrap items-center justify-center gap-x-10 gap-y-4 bg-[#F5F5F6] px-5 py-6 text-[#82868E] sm:gap-x-14"
    >
      {partnerNames.map((name, index) => (
        <div key={index} className="flex items-center gap-3 text-[24px] font-bold tracking-tight">
          <span className="h-10 w-10 shrink-0">{partnerMarks[index]}</span>
          <span>{name}</span>
        </div>
      ))}
    </section>
  );
}
