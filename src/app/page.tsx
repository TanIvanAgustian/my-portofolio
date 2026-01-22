import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
      </div>
      <Footer />
    </div>
  );
}
