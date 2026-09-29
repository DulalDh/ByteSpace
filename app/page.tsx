"use client";

import { useMemo, useState } from "react";
import { CourseCategory } from "@/enums/course-category";
import { courses, testimonials } from "@/data/home-data.js";
import { CreatorCtaSection } from "@/components/sections/CreatorCtaSection";
import { CourseSection } from "@/components/sections/CourseSection";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LearningPathsSection } from "@/components/sections/LearningPathsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustedPartnersSection } from "@/components/sections/TrustedPartnersSection";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>(CourseCategory.Featured);
  const [query, setQuery] = useState("");

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === CourseCategory.Featured ||
        course.category === activeCategory ||
        course.title.toLowerCase().includes(activeCategory.toLowerCase());
      const searchableText = `${course.title} ${course.category} ${course.teacher}`.toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <main id="home" className="overflow-hidden">
      <HeroSection query={query} onQueryChange={setQuery} />
      <TrustedPartnersSection />
      <CourseSection
        courses={visibleCourses}
        testimonials={testimonials}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <LearningPathsSection />
      <GrowthSection />
      <CreatorCtaSection />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
