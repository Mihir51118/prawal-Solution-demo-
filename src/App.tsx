import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { CategoryPage } from "./components/CategoryPage";
import { BlogListPage } from "./components/BlogListPage";
import { WelcomePopup } from "./components/WelcomePopup";
import { ChatBot } from "./components/ChatBot";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SEO } from "./components/SEO";
import type { ServiceType } from "./types";
import { serviceDetails } from "./data/serviceDetails";
import { seoData } from "./data/seoData";

export default function App() {
  const [currentPage, setCurrentPage] = useState<ServiceType | "home" | "contact" | "about">("home");

  const handleNavigate = (page: ServiceType | "home" | "contact" | "about") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return (
        <>
          <HeroSection onNavigate={handleNavigate} />
          <ServicesSection onNavigate={handleNavigate} />
          <CertificationsSection />
          <CTASection onNavigate={handleNavigate} />
        </>
      );
    }

    if (currentPage === "contact") {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (currentPage === "about") {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    if (currentPage === "blog") {
      return <BlogListPage onNavigate={handleNavigate} />;
    }

    // Category pages
    if (currentPage === "business-services" || currentPage === "digital-services" || currentPage === "legal-compliance" || currentPage === "certifications") {
      return <CategoryPage category={currentPage} onNavigate={handleNavigate} />;
    }

    // Service detail page
    const service = serviceDetails[currentPage as ServiceType];
    if (service) {
      return <ServiceDetailPage serviceType={currentPage as ServiceType} onNavigate={handleNavigate} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO data={seoData[currentPage as ServiceType]} />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WelcomePopup />
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
}