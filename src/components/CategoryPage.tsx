import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Globe, Megaphone, Code, Building2, DollarSign, TrendingUp, Shuffle, Scale, FileCheck, Rocket, Award, ShoppingCart, Receipt, BadgeCheck, Brain } from "lucide-react";
import type { ServiceType } from "../types";

interface CategoryService {
  id: ServiceType;
  title: string;
  description: string;
  icon: any;
  gradient: string;
}

interface CategoryData {
  title: string;
  subtitle: string;
  description: string;
  services: CategoryService[];
  bgGradient: string;
}

const categories: Record<string, CategoryData> = {
  "business-services": {
    title: "Business Services",
    subtitle: "Comprehensive Solutions for Your Business Growth",
    description: "Transform your business with our expert consultancy services. From MSME loans to mergers & acquisitions, we provide end-to-end support for your business needs.",
    bgGradient: "from-blue-900/20 via-purple-900/20 to-blue-900/20",
    services: [
      {
        id: "msme-loan",
        title: "MSME Loan Consultancy",
        description: "Expert assistance in securing government schemes and loans from NBFCs to fuel your business growth.",
        icon: DollarSign,
        gradient: "from-blue-600 to-indigo-700"
      },
      {
        id: "financial-risk",
        title: "Financial & Risk Management",
        description: "Comprehensive guidance on corporate finance, virtual CFO services, and strategic risk management.",
        icon: TrendingUp,
        gradient: "from-green-600 to-emerald-700"
      },
      {
        id: "business-setup",
        title: "Business Setup Services",
        description: "Complete assistance with company and LLP registration, setup, and expansion planning.",
        icon: Building2,
        gradient: "from-purple-600 to-violet-700"
      },
      {
        id: "mergers-acquisitions",
        title: "Mergers & Acquisitions",
        description: "Professional facilitation of mergers, acquisitions, and strategic business combinations.",
        icon: Shuffle,
        gradient: "from-orange-600 to-red-700"
      }
    ]
  },
  "digital-services": {
    title: "Digital Services",
    subtitle: "Transform Your Digital Presence",
    description: "Elevate your business in the digital age with our comprehensive digital solutions. From e-commerce to AI, we help you leverage technology for maximum impact.",
    bgGradient: "from-cyan-900/20 via-blue-900/20 to-purple-900/20",
    services: [
      {
        id: "ecommerce",
        title: "E-commerce Development",
        description: "Creation and integration of user-friendly and effective online stores to boost your digital presence.",
        icon: Globe,
        gradient: "from-cyan-600 to-blue-700"
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Social media marketing, lead generation, WhatsApp marketing, and comprehensive digital campaigns.",
        icon: Megaphone,
        gradient: "from-pink-600 to-rose-700"
      },
      {
        id: "web-app-development",
        title: "Web & App Development",
        description: "Custom developers for complex solutions tailored to your specific business requirements.",
        icon: Code,
        gradient: "from-indigo-600 to-purple-700"
      },
      {
        id: "blutec-ai",
        title: "AI Solutions by Blutec AI",
        description: "Advanced AI-powered solutions and automation tools through our strategic partnership with Blutec AI.",
        icon: Brain,
        gradient: "from-violet-600 to-purple-700"
      }
    ]
  },
  "legal-compliance": {
    title: "Legal & Compliance",
    subtitle: "Stay Compliant, Stay Protected",
    description: "Navigate the complex legal landscape with confidence. Our comprehensive legal and compliance solutions keep your business protected and compliant.",
    bgGradient: "from-red-900/20 via-amber-900/20 to-red-900/20",
    services: [
      {
        id: "legal-compliance",
        title: "Legal & Compliance Solutions",
        description: "Comprehensive services to reduce risk and ensure alignment with legal requirements.",
        icon: Scale,
        gradient: "from-red-600 to-rose-700"
      },
      {
        id: "company-registration",
        title: "Company & Startup Registration",
        description: "Support for Private Limited Company, LLP, and MSME registrations with expert guidance.",
        icon: FileCheck,
        gradient: "from-amber-600 to-orange-700"
      },
      {
        id: "startup-india",
        title: "Startup India & Tax Exemptions",
        description: "DPIIT recognition, tax exemptions, and various other certifications for startups.",
        icon: Rocket,
        gradient: "from-emerald-600 to-green-700"
      }
    ]
  },
  "certifications": {
    title: "Certifications",
    subtitle: "Achieve Excellence, Gain Recognition",
    description: "Boost your business credibility and access government benefits with our certification services. We guide you through every step of the certification process.",
    bgGradient: "from-green-900/20 via-blue-900/20 to-purple-900/20",
    services: [
      {
        id: "iso-certification",
        title: "ISO Certification",
        description: "Complete assistance in obtaining ISO certification to enhance business credibility and quality standards.",
        icon: Award,
        gradient: "from-blue-600 to-cyan-700"
      },
      {
        id: "gem-registration",
        title: "GeM Registration",
        description: "Help businesses register on the Government eMarketplace to sell to government buyers.",
        icon: ShoppingCart,
        gradient: "from-green-600 to-teal-700"
      },
      {
        id: "tax-exemption",
        title: "Tax Exemption Certificates",
        description: "Support for obtaining tax exemption certifications including 80IAC, 12AB, and 80G.",
        icon: Receipt,
        gradient: "from-purple-600 to-pink-700"
      },
      {
        id: "msme-certification",
        title: "MSME Certification",
        description: "Udyam registration and MSME certification to access government benefits and schemes.",
        icon: BadgeCheck,
        gradient: "from-orange-600 to-amber-700"
      }
    ]
  }
};

interface CategoryPageProps {
  category: string;
  onNavigate: (page: ServiceType) => void;
}

export function CategoryPage({ category, onNavigate }: CategoryPageProps) {
  const categoryData = categories[category];

  if (!categoryData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${categoryData.bgGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-white"
            >
              <span className="golden-shimmer">{categoryData.title}</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl mb-6 text-[#d4af37]"
            >
              {categoryData.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              {categoryData.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#d4af37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">
              Our <span className="golden-shimmer">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to help your business succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categoryData.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-8 h-full hover:border-[#d4af37]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#d4af37]/10">
                    <div className="flex flex-col h-full">
                      <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-white mb-4 group-hover:text-[#d4af37] transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <Button
                        onClick={() => onNavigate(service.id)}
                        className="w-full bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black group-hover:shadow-lg group-hover:shadow-[#d4af37]/30 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] border-t border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Contact us today to discuss how our {categoryData.title.toLowerCase()} can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
              >
                Contact Us
              </Button>
              <Button
                onClick={() => onNavigate("home")}
                variant="outline"
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-lg px-8 py-6"
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
