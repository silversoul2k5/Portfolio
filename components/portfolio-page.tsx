import { AmbientParticles } from "@/components/ambient-particles";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CustomCursor } from "@/components/custom-cursor";
import { PageLoader } from "@/components/page-loader";
import { SmoothScroll } from "@/components/smooth-scroll";

export function PortfolioPage() {
  return (
    <div className="relative overflow-x-clip bg-background text-white">
      <SmoothScroll />
      <PageLoader />
      <CustomCursor />
      <SiteHeader />
      <AmbientParticles />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        {/* Skills Section */}
        <SkillsSection />
        {/* Projects Section */}
        <ProjectsSection />
        {/* Journey Section */}
        <JourneySection />
        {/* Contact Section */}
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
