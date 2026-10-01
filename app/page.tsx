import { courses, testimonials } from "@/data/home-data.js";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { CreatorCtaSection } from "@/components/sections/CreatorCtaSection";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { LearningPathsSection } from "@/components/sections/LearningPathsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustedPartnersSection } from "@/components/sections/TrustedPartnersSection";

export default function HomePage() {
  return (
    <main id="home" className="overflow-hidden">
      <CourseCatalog courses={courses} testimonials={testimonials} />
      <TrustedPartnersSection />
      <LearningPathsSection />
      <GrowthSection />
      <CreatorCtaSection />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
