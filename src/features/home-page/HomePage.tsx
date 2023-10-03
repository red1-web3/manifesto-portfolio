import Header from "@/common/components/header/Header";
import HeroSection from "@/features/home-page/components/hero-section";
import PortfolioWebsiteSection from "@/features/home-page/components/portfolio-website-section";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PortfolioWebsiteSection />

      <div className="h-[200vh]"></div>
    </>
  );
};

export default HomePage;
