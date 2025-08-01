
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import YouTubeWorksSection from "@/components/YouTubeWorksSection";
import BlogShowcase from "@/components/BlogShowcase";
import WebsiteCopyShowcase from "@/components/WebsiteCopyShowcase";
import MagazineShowcase from "@/components/MagazineShowcase";
import StatsSection from "@/components/StatsSection";
import TrustSignals from "@/components/TrustSignals";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import SectionDivider from "@/components/SectionDivider";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollIndicator from "@/components/ScrollIndicator";
import SimpleFAQSection from "@/components/SimpleFAQSection";
import SimpleToolsSection from "@/components/SimpleToolsSection";
import EmailAnalyticsShowcase from "@/components/EmailAnalyticsShowcase";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Index = () => {
  const { isScrolling } = useSmoothScroll();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <ScrollIndicator isScrolling={isScrolling} />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      
      {/* Premium Content Services */}
      <SectionDivider 
        title="Premium Content Services" 
        subtitle="Strategic content that drives business growth and audience engagement"
        variant="featured"
      />
      <WebsiteCopyShowcase />
      <MagazineShowcase />
      <BlogShowcase />
      
      {/* Digital Content Management */}
      <SectionDivider 
        title="Digital Content Management" 
        subtitle="Social media strategy and video content that builds brand presence"
        variant="social"
      />
      <YouTubeWorksSection />
      <EmailAnalyticsShowcase />
      
      {/* Tools & Skills */}
      <SectionDivider 
        title="Professional Toolkit" 
        subtitle="Advanced tools and proven expertise for exceptional content results"
        variant="default"
      />
      <SimpleToolsSection />
      
      {/* Process & Results */}
      <ProcessSection />
      <StatsSection />
      <TrustSignals />
      
      {/* FAQ Section */}
      <SimpleFAQSection />
      
      <ContactSection />
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Index;
