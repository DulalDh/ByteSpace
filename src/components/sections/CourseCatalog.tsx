"use client";

import { useState } from "react";
import { CourseCategory } from "@/enums/course-category";
import { CourseSection } from "@/components/sections/CourseSection";
import { HeroSection } from "@/components/sections/HeroSection";
import type { Course, Testimonial } from "@/types/home";

export function CourseCatalog({
  courses,
  testimonials,
}: {
  courses: Course[];
  testimonials: Testimonial[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>(
    CourseCategory.Featured,
  );
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const visibleCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === CourseCategory.Featured ||
      course.category === activeCategory ||
      course.title.toLowerCase().includes(activeCategory.toLowerCase());
    const searchableText =
      `${course.title} ${course.category} ${course.teacher}`.toLowerCase();

    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  return (
    <>
      <HeroSection query={query} onQueryChange={setQuery} />
      <CourseSection
        courses={visibleCourses}
        testimonials={testimonials}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </>
  );
}
