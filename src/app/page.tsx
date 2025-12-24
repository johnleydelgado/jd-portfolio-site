import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/common/HeroSection";
import { AboutSection } from "@/components/common/AboutSection";
import { ExperienceSection } from "@/components/common/ExperienceSection";
import { ProjectsSection } from "@/components/common/ProjectsSection";
import { ContactSection } from "@/components/common/ContactSection";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
