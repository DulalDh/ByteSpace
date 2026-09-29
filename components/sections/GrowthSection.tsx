import { creatorBenefits, growthStats } from "@/data/home-data.js";
import { RemoteImage } from "@/components/atoms/RemoteImage";

export function GrowthSection() {
  return (
    <section className="soft-glow">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Your Path to Professional Growth Starts Here!</h2>
          <p className="mt-5 max-w-lg text-xs leading-6 text-slate-500">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <div className="mt-7 flex gap-8">
            {growthStats.map(({ value, label }) => <div key={label}><b className="text-2xl font-extrabold text-blue-600">{value}</b><span className="mt-1 block text-[10px] text-slate-500">{label}</span></div>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-[45%] bg-[#ceff00]/70 blur-3xl" />
          <div className="relative rounded-3xl bg-white p-3 shadow-xl">
            <RemoteImage imageId="photo-1522202176988-66273c2fd55f" alt="Learners collaborating on a course" className="h-64 w-full rounded-2xl object-cover md:h-80" />
            <div className="absolute bottom-[-18px] left-[-12px] rounded-2xl bg-white p-4 shadow-lg"><span className="text-[10px]">Learning Progress</span><b className="block text-3xl">55%</b><span className="block h-1 w-24 rounded bg-[#ceff00]" /></div>
            <div className="absolute right-[-10px] top-12 text-7xl font-black text-[#ceff00]">〰</div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-24">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-blue-100 blur-3xl" />
          <RemoteImage imageId="photo-1551836022-d5d88e9218df" alt="Creator planning an online course" className="relative h-72 w-full rounded-3xl object-cover shadow-xl md:h-96" />
          <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 shadow-lg"><span className="text-[10px]">Total Revenue</span><b className="block text-lg text-blue-700">$1,200.38</b><span className="text-[9px] text-slate-400">This month</span></div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Create &amp; Manage<br />Courses Easily.</h2>
          <p className="mt-4 max-w-md text-xs leading-6 text-slate-500">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="mt-5 space-y-3 text-xs">
            {creatorBenefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">✓</span>{benefit}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
