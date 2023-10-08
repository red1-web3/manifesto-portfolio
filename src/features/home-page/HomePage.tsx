import Header from "@/common/components/header/Header";
import HeroSection from "@/features/home-page/components/hero-section";
import InfoSection from "@/features/home-page/components/info-section";
import OurServicesSection from "@/features/home-page/components/our-services-section/OurServicesSection";
import PortfolioWebsiteSection from "@/features/home-page/components/portfolio-website-section";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PortfolioWebsiteSection />
      <OurServicesSection />
      <InfoSection />

      <div className="h-[200vh]"></div>
    </>
  );
};

export default HomePage;
