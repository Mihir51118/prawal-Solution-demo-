import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
}

interface SEOProps {
  data?: SEOData;
}

export function SEO({ data }: SEOProps) {
  const defaultData: SEOData = {
    title: "Prawal Solution Pvt Ltd - India's Leading Business Consultancy & Digital Services",
    description: "Prawal Solution Pvt Ltd offers MSME loan consultancy, financial services, ISO certification, GeM registration, Startup India registration, digital marketing, e-commerce development, legal compliance, business setup, and tax exemptions. Your trusted partner for business growth.",
    keywords: "MSME loan consultant, business consultancy India, ISO certification, GeM registration, Startup India registration, digital marketing services, e-commerce development, legal compliance services, business setup assistance, financial advisory, tax exemption consultant, MSME certification, company registration, M&A facilitation, AI solutions, web development, business consultancy firm, financial services India, startup consultancy, business growth solutions",
    canonicalUrl: "https://prawalsolution.com"
  };

  const seoConfig = data || defaultData;
  const ogImage = "https://images.unsplash.com/photo-1760611656007-f767a8082758?w=1200&h=630&fit=crop";
  const ogType = "website";

  useEffect(() => {
    // Update document title
    document.title = seoConfig.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic SEO Meta Tags
    updateMetaTag('description', seoConfig.description);
    updateMetaTag('keywords', seoConfig.keywords);
    updateMetaTag('author', 'Prawal Solution Pvt Ltd');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('theme-color', '#d4af37');
    
    // Geo Tags for Local SEO
    updateMetaTag('geo.region', 'IN');
    updateMetaTag('geo.placename', 'India');
    
    // Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp)
    updateMetaTag('og:title', seoConfig.title, true);
    updateMetaTag('og:description', seoConfig.description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', seoConfig.canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'Prawal Solution - Business Consultancy Services', true);
    updateMetaTag('og:site_name', 'Prawal Solution Pvt Ltd', true);
    updateMetaTag('og:locale', 'en_IN', true);
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoConfig.title);
    updateMetaTag('twitter:description', seoConfig.description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', 'Prawal Solution - Business Consultancy Services');
    updateMetaTag('twitter:site', '@PrawalSolution');
    updateMetaTag('twitter:creator', '@PrawalSolution');
    
    // Additional Business-Specific Tags
    updateMetaTag('application-name', 'Prawal Solution');
    updateMetaTag('apple-mobile-web-app-title', 'Prawal Solution');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('format-detection', 'telephone=yes');
    
    // Mobile Optimization
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('HandheldFriendly', 'True');
    updateMetaTag('MobileOptimized', 'width');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seoConfig.canonicalUrl;

    // Add structured data (JSON-LD) for rich snippets
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Prawal Solution Pvt Ltd",
      "description": seoConfig.description,
      "url": seoConfig.canonicalUrl,
      "logo": ogImage,
      "image": ogImage,
      "telephone": "+91-XXXXXXXXXX",
      "email": "info@prawalsolution.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "India"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": [
        "MSME Loan Consultancy",
        "Business Consultancy",
        "ISO Certification",
        "GeM Registration",
        "Digital Marketing",
        "E-commerce Development",
        "Legal Compliance",
        "Startup India Registration",
        "Financial Advisory",
        "Tax Exemption Services"
      ],
      "priceRange": "₹₹",
      "openingHours": "Mo-Sa 09:00-18:00",
      "sameAs": [
        "https://www.facebook.com/prawalsolution",
        "https://www.linkedin.com/company/prawalsolution",
        "https://twitter.com/prawalsolution",
        "https://www.instagram.com/prawalsolution"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [seoConfig.title, seoConfig.description, seoConfig.keywords, seoConfig.canonicalUrl]);

  return null;
}