"use client";

import { useMemo, useState } from "react";

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking"];

const courses = [
  { title: "Learn Figma from Basics", category: "UI/UX Design", teacher: "Lily Nguyen", price: "$25", image: "photo-1586717791821-3f44a563fa4c", students: "2.4k" },
  { title: "Build Digital Asset Portfolio", category: "Graphic Design", teacher: "Avery Collins", price: "$25", image: "photo-1545235617-9465d2a55698", students: "1.8k" },
  { title: "The Power of Big Data", category: "Data Science", teacher: "Jordan Lee", price: "$25", image: "photo-1551288049-bebda4e38f71", students: "3.2k" },
  { title: "Balancing Productivity and Life", category: "Productivity", teacher: "Maya Brooks", price: "$25", image: "photo-1498050108023-c5249f4df085", students: "980" },
  { title: "Mastering Money Management", category: "Business", teacher: "Noah Patel", price: "$25", image: "photo-1460925895917-afdab827c52f", students: "1.3k" },
  { title: "From Idea to Startup Success", category: "Freelance & Entrepreneurship", teacher: "Sam Rivera", price: "$25", image: "photo-1556761175-b413da4baf72", students: "2.1k" },
];

const categoriesExplore = [
  ["✳", "Design"], ["♙", "Development"], ["▣", "IT & Software"], ["▦", "Business"], ["✣", "Marketing"], ["▧", "Photography"],
];

const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", avatar: "photo-1534528741775-53994a69daeb", quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", avatar: "photo-1500648767791-00dcc994a43e", quote: "I’ve had several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", avatar: "photo-1506794778202-cad84cf45f1d", quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally." },
];

function Image({ id, alt, className = "" }: { id: string; alt: string; className?: string }) {
  return <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`} alt={alt} className={className} />;
}

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#home" className={`flex items-center gap-2 text-base font-black tracking-tight sm:text-lg ${light ? "text-white" : "text-slate-900"}`}><svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7"><path fill="#ceff00" d="M5 2h7v10a7 7 0 1 1-7 7V2Zm9 10h5a7 7 0 1 1-5 12V12Z"/><path fill="#073fe5" d="M12 12h2v2h-2z"/></svg><span>ByteSpace</span></a>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [query, setQuery] = useState("");
  const shownCourses = useMemo(() => courses.filter((course) => {
    const categoryMatch = activeCategory === "Featured" || course.category === activeCategory || course.title.toLowerCase().includes(activeCategory.toLowerCase());
    return categoryMatch && `${course.title} ${course.category} ${course.teacher}`.toLowerCase().includes(query.toLowerCase());
  }), [activeCategory, query]);

  return <main id="home" className="overflow-hidden">
    <section className="grid-bg hero-glow relative min-h-[760px] overflow-hidden text-white md:min-h-[1320px] xl:min-h-[1400px]">
      <header className="relative z-30 border-b border-white/15 bg-[#063fe7]/30">
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:h-[160px] md:px-10">
          <Brand light />
          <nav aria-label="Main navigation" className="flex items-center gap-4 text-[10px] text-white/85 sm:gap-7 sm:text-xs"><a href="#home" className="text-white">Home</a><a href="#courses">Courses</a><a href="#creators">Creators</a></nav>
          <div className="flex items-center gap-3 text-[10px] sm:gap-4 sm:text-[11px]"><a href="#footer">Sign In</a><a className="rounded-full border border-white/40 px-3 py-1.5" href="#footer">Join Us</a><a aria-label="Shopping bag" href="#courses" className="hidden text-base sm:inline">♧</a></div>
        </div>
      </header>
      <div className="relative z-20 mx-auto max-w-[1500px] px-5 pt-12 text-center md:pt-[70px]">
        <h1 className="mx-auto max-w-[1200px] text-[42px] font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-[clamp(76px,5vw,100px)]">Get Access to Hundreds<br />Courses Available</h1>
        <p className="mx-auto mt-8 max-w-5xl text-sm leading-6 text-white/75 md:mt-12 md:text-[24px]">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <form onSubmit={(event) => { event.preventDefault(); document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" }); }} className="relative z-30 mx-auto mt-10 flex h-[54px] w-full max-w-[780px] items-center gap-4 md:mt-[82px] md:h-[70px] md:gap-5">
          <div className="flex h-full min-w-0 flex-1 items-center rounded-full bg-white px-6 shadow-[0_12px_35px_rgba(0,0,0,.2)] md:px-9"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-slate-400 md:h-7 md:w-7" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/></svg><input aria-label="Search courses" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Course, topic, creator" className="h-full min-w-0 flex-1 bg-transparent px-3 text-base text-slate-700 outline-none placeholder:text-slate-400 md:text-[24px]" /></div><button className="h-full shrink-0 rounded-full bg-[#ceff00] px-7 text-base font-semibold text-slate-900 shadow-[0_8px_22px_rgba(0,0,0,.12)] transition hover:bg-[#b9ed00] md:px-9 md:text-[22px]">Search</button>
        </form>
      </div>
      <div className="absolute bottom-0 left-1/2 z-10 h-[410px] w-[min(1500px,100vw)] -translate-x-1/2 md:h-[900px]">
        <div aria-hidden="true" className="absolute bottom-[-880px] left-1/2 h-[1500px] w-[1500px] -translate-x-1/2 rounded-full bg-[#ceff00]" />
        <img src="/groupboy-cutout.png" alt="Smiling learner studying on a laptop" className="absolute bottom-0 left-1/2 z-[1] w-[min(95vw,620px)] max-w-none -translate-x-1/2 md:w-[min(60vw,860px)]" />
        <div className="absolute left-[4%] top-[28%] z-10 rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-lg md:left-[26%] md:px-7 md:py-6"><b className="block text-base font-medium md:text-[22px]">UI/UX Design</b><span className="text-sm text-slate-400 md:text-[18px]">200 Courses　•　1000+ Students</span></div>
        <div className="absolute right-[1%] top-[34%] z-10 rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-lg md:right-[25%] md:px-7 md:py-6"><span className="text-sm md:text-[18px]">Learning Progress</span><b className="block text-5xl leading-[1.1] md:text-[64px]">55%</b><span className="mt-2 block h-2 w-44 rounded-full bg-slate-100 md:w-[270px]"><i className="block h-full w-[55%] rounded-full bg-[#ceff00]" /></span></div>
        <div className="absolute bottom-[5%] left-[1%] z-10 rounded-2xl bg-white px-4 py-3 text-left text-slate-900 shadow-lg md:bottom-[2%] md:left-[23%] md:px-6 md:py-5"><span className="block text-sm md:text-[22px]">Happy Students</span><b className="text-xs font-normal text-slate-500 md:text-base">4.5 (240)</b> <span className="text-[#ceff00]">★</span><div className="mt-2 flex -space-x-2">{testimonials.map((t) => <Image key={t.name} id={t.avatar} alt="ByteSpace student" className="h-7 w-7 rounded-full border-2 border-white object-cover md:h-12 md:w-12" />)}<span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#ceff00] text-[9px] font-bold md:h-12 md:w-12 md:text-sm">2K+</span></div></div>
        <div className="absolute left-[-8%] top-[-12%] z-10 h-16 w-52 rotate-[18deg] rounded-full bg-[#ceff00] shadow-[0_45px_0_0_#ceff00,0_90px_0_0_#ceff00] md:left-[-10%]" />
        <div className="absolute right-[-10%] top-[-17%] z-10 h-64 w-40 rotate-[-27deg] rounded-[45%] bg-[#ceff00] md:right-[-7%] md:h-72 md:w-48" />
        <svg aria-hidden="true" viewBox="0 0 120 120" className="absolute left-[13%] top-[17%] z-10 h-28 w-28 -rotate-12 md:h-44 md:w-44"><path d="M25 18c58 2-28 27 34 37 52 8-32 22 26 45" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="19" /></svg>
        <svg aria-hidden="true" viewBox="0 0 120 120" className="absolute right-[5%] top-[46%] z-10 h-36 w-28 rotate-12 md:h-56 md:w-44"><path d="M27 14c66 1-42 31 38 41 60 8-32 29 27 50" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21" /></svg>
        <div className="absolute left-[-7%] bottom-[-9%] z-10 h-44 w-56 rotate-[-26deg] rounded-full border-[38px] border-white md:left-[-5%] md:h-[280px] md:w-[360px] md:border-[62px]" />
        <div className="absolute right-[15%] top-[16%] z-10 h-0 w-0 rotate-[15deg] border-b-[100px] border-l-[55px] border-r-[55px] border-b-white border-l-transparent border-r-transparent md:border-b-[180px] md:border-l-[100px] md:border-r-[100px]" />
      </div>
      <div className="absolute bottom-0 left-[4%] h-32 w-32 rounded-full bg-[#ceff00] blur-2xl opacity-70" />
    </section>

    <section aria-label="Trusted by teams" className="flex min-h-24 flex-wrap items-center justify-center gap-x-10 gap-y-4 bg-[#f5f5f7] px-5 py-6 text-[#92949b] sm:gap-x-14">
      {["◉ Logopsum", "✺ Logopsum", "◈ Logopsum", "✿ Logopsum", "◍ Logopsum"].map((name) => <span key={name} className="text-sm font-bold tracking-tight">{name}</span>)}
    </section>

    <section id="courses" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-2xl text-center"><h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Discover Your Passion,<br />Build Your Skills</h2><p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-slate-400">At ByteSpace Courses, we bring you close to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p></div>
      <div className="mx-auto mt-7 flex max-w-5xl flex-wrap justify-center gap-2">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-3 py-1.5 text-[10px] transition ${activeCategory === category ? "bg-[#ceff00] font-bold text-slate-900" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{category}</button>)}</div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shownCourses.map((course) => <article key={course.title} className="course-card overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5">
        <div className="relative h-40 overflow-hidden rounded-xl bg-slate-100"><Image id={course.image} alt={course.title} className="h-full w-full object-cover" /><div className="absolute bottom-2 left-2 flex gap-1.5 text-[9px] text-white"><span className="rounded-full bg-black/55 px-2 py-1">◷ 2 hours 10 mins</span><span className="rounded-full bg-black/55 px-2 py-1">▤ 50 Comments</span></div></div>
        <div className="px-1 pb-1 pt-3"><div className="flex items-start justify-between gap-3"><div><h3 className="text-sm font-bold">{course.title}</h3><p className="mt-1 text-[10px] text-blue-600">By {course.teacher}</p></div><span className="shrink-0 text-[10px] text-slate-500">★ 4.5</span></div><div className="mt-2 flex items-center gap-2"><span className="rounded-full bg-slate-100 px-2 py-1 text-[9px] text-slate-600">♧ Beginner</span><div className="flex -space-x-1.5">{testimonials.map((t) => <Image key={t.name} id={t.avatar} alt="Course student" className="h-5 w-5 rounded-full border-2 border-white object-cover" />)}</div><span className="text-[9px] text-slate-400">+{course.students}</span></div><p className="mt-2 text-xs font-bold text-blue-600">{course.price}<span className="text-[9px] font-normal text-slate-400"> / lifetime</span></p></div>
      </article>)}</div>
      {shownCourses.length === 0 && <div className="py-16 text-center text-sm text-slate-500">No courses found. Try a different search or category.</div>}
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-20"><div className="mx-auto max-w-2xl text-center"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Explore Diverse Learning Paths at ByteSpace</h2><p className="mt-3 text-xs leading-5 text-slate-400">At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there’s something for everyone.</p></div><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categoriesExplore.map(([icon, title]) => <a key={title} href="#courses" className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ceff00] text-xl font-black">{icon}</span><span className="text-xs font-medium">{title}</span></a>)}</div></section>

    <section className="soft-glow"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
      <div><h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Your Path to Professional Growth Starts Here!</h2><p className="mt-5 max-w-lg text-xs leading-6 text-slate-500">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p><div className="mt-7 flex gap-8">{[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([num, label]) => <div key={label}><b className="text-2xl font-extrabold text-blue-600">{num}</b><span className="mt-1 block text-[10px] text-slate-500">{label}</span></div>)}</div></div>
      <div className="relative mx-auto w-full max-w-lg"><div className="absolute inset-8 rounded-[45%] bg-[#ceff00]/70 blur-3xl"/><div className="relative rounded-3xl bg-white p-3 shadow-xl"><Image id="photo-1522202176988-66273c2fd55f" alt="Learners collaborating on a course" className="h-64 w-full rounded-2xl object-cover md:h-80"/><div className="absolute bottom-[-18px] left-[-12px] rounded-2xl bg-white p-4 shadow-lg"><span className="text-[10px]">Learning Progress</span><b className="block text-3xl">55%</b><span className="block h-1 w-24 rounded bg-[#ceff00]"/></div><div className="absolute right-[-10px] top-12 text-7xl font-black text-[#ceff00]">〰</div></div></div>
    </div>
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-24">
      <div className="relative mx-auto w-full max-w-lg"><div className="absolute inset-8 rounded-full bg-blue-100 blur-3xl"/><Image id="photo-1551836022-d5d88e9218df" alt="Creator planning an online course" className="relative h-72 w-full rounded-3xl object-cover shadow-xl md:h-96"/><div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 shadow-lg"><span className="text-[10px]">Total Revenue</span><b className="block text-lg text-blue-700">$1,200.38</b><span className="text-[9px] text-slate-400">This month</span></div></div>
      <div><h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Create &amp; Manage<br/>Courses Easily.</h2><p className="mt-4 max-w-md text-xs leading-6 text-slate-500">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p><ul className="mt-5 space-y-3 text-xs">{["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((item) => <li key={item} className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">✓</span>{item}</li>)}</ul></div>
    </div></section>

    <section className="grid-bg relative overflow-hidden px-5 py-16 text-center text-white md:py-20"><div className="relative z-10 mx-auto max-w-3xl"><h2 className="text-3xl font-extrabold leading-tight md:text-4xl">Unlock Your Potential as a<br className="hidden sm:block"/> Creator with ByteSpace</h2><p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-white/70">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your first course on the ByteSpace Course Library.</p><a href="#footer" className="mt-6 inline-flex rounded-full bg-[#ceff00] px-6 py-3 text-xs font-bold text-slate-900">Join as Creator</a></div><span className="absolute -left-4 top-0 text-8xl font-black text-[#ceff00]">〰</span><span className="absolute right-8 top-4 rotate-12 text-7xl text-white">◢</span><span className="absolute bottom-[-22px] left-16 text-8xl text-white">◯</span><span className="absolute -right-2 bottom-[-40px] text-8xl font-black text-[#ceff00]">〰</span></section>

    <section id="creators" className="soft-glow px-5 py-16 md:px-10 md:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2 md:items-end"><h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Discover What Our<br/>Community Is Saying</h2><p className="max-w-xl text-xs leading-6 text-slate-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p></div><div className="mt-9 grid gap-4 md:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="rounded-2xl bg-white p-6 shadow-sm"><Image id={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover"/><h3 className="mt-4 text-sm font-bold">{item.name}</h3><p className="mt-1 text-[10px] font-semibold text-blue-600">{item.role}</p><p className="mt-4 text-xs leading-6 text-slate-600">“{item.quote}”</p></article>)}</div></div></section>

    <footer id="footer" className="border-t border-slate-100 bg-white px-5 py-10 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.6fr_1fr]"><div><Brand/><p className="mt-4 max-w-sm text-[10px] leading-5 text-slate-500">Stay up to date with our latest features and releases by joining our newsletter.</p><form className="mt-4 flex max-w-sm rounded-full border border-slate-200 p-1" onSubmit={(e) => e.preventDefault()}><input type="email" aria-label="Your email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 text-[10px] outline-none"/><button className="rounded-full bg-[#ceff00] px-4 py-2 text-[10px] font-bold">Search</button></form><p className="mt-3 max-w-sm text-[9px] leading-4 text-slate-400">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p></div><div className="grid grid-cols-2 gap-6 text-[10px] text-slate-500 sm:grid-cols-3">{[["Featured Courses", "Business", "Marketing", "Photography", "IT", "Design"], ["Development", "Marketing", "Photography", "Finance", "Sport"], ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"]].map((list, i) => <ul key={i} className="space-y-3">{list.map((link, j) => <li key={`${link}-${j}`}><a href={j === 0 && i === 2 ? "#creators" : "#courses"} className="hover:text-blue-600">{link}</a></li>)}</ul>)}</div></div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-slate-100 pt-5 text-[9px] text-slate-400"><span>© 2023 ByteSpace. All rights reserved.</span><span className="flex gap-4"><a href="#footer">Privacy Policy</a><a href="#footer">Terms of Service</a><a href="#footer">Cookie Settings</a></span></div></footer>
  </main>;
}
