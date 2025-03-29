import NavbarComponent from "@/components/navbar-component";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import FooterComponent from "@/components/footer-component";
import ContactSection from "@/components/sections/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarComponent />

      <main className="container py-10 mx-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FooterComponent />
    </div>
  );
}