
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import TrustSignals from "@/components/TrustSignals";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <StatsSection />
      <TrustSignals />
      <ContactSection />
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Index;
