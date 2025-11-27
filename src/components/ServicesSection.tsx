import { ServiceCard } from "./ServiceCard";
import { 
  Building2, 
  DollarSign, 
  Globe, 
  Megaphone, 
  Scale, 
  FileCheck,
  TrendingUp,
  Shuffle,
  Code,
  Brain
} from "lucide-react";
import { ServiceType } from "../types";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServicesSectionProps {
  onNavigate: (page: ServiceType) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const businessServices = [
    {
      icon: DollarSign,
      title: "MSME Loan Consultancy",
      description: "Expert assistance in securing government schemes and loans from NBFCs to fuel your business growth.",
      color: "bg-[#d4af37] text-black",
      onClick: () => onNavigate("msme-loan")
    },
    {
      icon: TrendingUp,
      title: "Financial & Risk Management",
      description: "Comprehensive guidance on corporate finance, virtual CFO services, and strategic risk management.",
      color: "bg-[#ffd700] text-black",
      onClick: () => onNavigate("financial-risk")
    },
    {
      icon: Building2,
      title: "Business Setup",
      description: "Complete assistance with company and LLP registration, setup, and expansion planning.",
      color: "bg-[#c5a028] text-black",
      onClick: () => onNavigate("business-setup")
    },
    {
      icon: Shuffle,
      title: "Mergers & Acquisitions",
      description: "Professional facilitation of mergers, acquisitions, and strategic business combinations.",
      color: "bg-[#d4af37] text-black",
      onClick: () => onNavigate("mergers-acquisitions")
    }
  ];

  const digitalServices = [
    {
      icon: Globe,
      title: "E-commerce Website Development",
      description: "Creation and integration of user-friendly and effective online stores to boost your digital presence.",
      color: "bg-[#ffd700] text-black",
      onClick: () => onNavigate("ecommerce")
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Social media marketing, lead generation, WhatsApp marketing, and comprehensive digital campaigns.",
      color: "bg-[#c5a028] text-black",
      onClick: () => onNavigate("digital-marketing")
    },
    {
      icon: Code,
      title: "Website & App Development",
      description: "Custom developers for complex solutions tailored to your specific business requirements.",
      color: "bg-[#d4af37] text-black",
      onClick: () => onNavigate("web-app-development")
    },
    {
      icon: Brain,
      title: "AI Solutions by Blutec AI",
      description: "Advanced AI-powered solutions and automation tools through our strategic partnership with Blutec AI.",
      color: "bg-[#ffd700] text-black",
      onClick: () => onNavigate("blutec-ai")
    }
  ];

  const legalServices = [
    {
      icon: Scale,
      title: "Legal & Compliance Solutions",
      description: "Comprehensive services to reduce risk and ensure alignment with legal requirements.",
      color: "bg-[#ffd700] text-black",
      onClick: () => onNavigate("legal-compliance")
    },
    {
      icon: FileCheck,
      title: "Company & Startup Registration",
      description: "Support for Private Limited Company, LLP, and MSME registrations with expert guidance.",
      color: "bg-[#c5a028] text-black",
      onClick: () => onNavigate("company-registration")
    },
    {
      icon: Building2,
      title: "Startup India & Tax Exemptions",
      description: "DPIIT recognition, tax exemptions, and various other certifications for startups.",
      color: "bg-[#d4af37] text-black",
      onClick: () => onNavigate("startup-india")
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjEwNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="mb-3 sm:mb-4 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="golden-shimmer">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Comprehensive business solutions designed to help startups and MSMEs thrive in today's competitive landscape.
          </p>
        </motion.div>

        {/* Business & Financial Services */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-center mb-2 text-white text-xl sm:text-2xl md:text-3xl">Business & Financial Services</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#ffd700] mx-auto"></div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {businessServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Digital & Marketing Services */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-center mb-2 text-white text-xl sm:text-2xl md:text-3xl">Digital & Marketing Services</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#ffd700] mx-auto"></div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {digitalServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Legal & Compliance */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-center mb-2 text-white text-xl sm:text-2xl md:text-3xl">Legal & Compliance</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#ffd700] mx-auto"></div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {legalServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}