import { testimonials } from "@/data/home-data.js";
import { RemoteImage } from "@/components/atoms/RemoteImage";

export function TestimonialsSection() {
  return (
    <section id="creators" className="soft-glow px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Discover What Our<br />Community Is Saying</h2>
          <p className="max-w-xl text-[14.4px] leading-7 text-slate-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article key={`${item.name}-${index}`} className="rounded-2xl bg-white p-6 shadow-sm">
              <RemoteImage imageId={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
              <h3 className="mt-4 text-sm font-bold">{item.name}</h3>
              <p className="mt-1 text-xs font-semibold text-blue-600">{item.role}</p>
              <p className="mt-4 text-[14.4px] leading-7 text-slate-600">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
