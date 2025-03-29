import NavbarComponent from "@/components/navbar-component";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import FooterComponent from "@/components/footer-component";
import ContactSection from "@/components/contact-section";

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