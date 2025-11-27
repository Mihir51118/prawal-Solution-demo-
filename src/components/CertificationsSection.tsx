import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Award, ShoppingCart, Receipt, Briefcase } from "lucide-react";
import { ServiceType } from "../types";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CertificationsSectionProps {
  onNavigate: (page: ServiceType) => void;
}

export function CertificationsSection({ onNavigate }: CertificationsSectionProps) {
  const certifications = [
    {
      icon: Award,
      title: "ISO Certification",
      description: "Complete assistance in obtaining ISO certification to enhance your business credibility and quality standards.",
      onClick: () => onNavigate("iso-certification")
    },
    {
      icon: ShoppingCart,
      title: "GeM Registration",
      description: "Help businesses register on the Government eMarketplace to sell products and services to government buyers.",
      onClick: () => onNavigate("gem-registration")
    },
    {
      icon: Receipt,
      title: "Tax Exemption Certificates",
      description: "Support for obtaining tax exemption certifications including 80IAC, 12AB, and 80G for your organization.",
      onClick: () => onNavigate("tax-exemption")
    },
    {
      icon: Briefcase,
      title: "MSME & Startup India",
      description: "Assistance with MSME registration, Startup India recognition, and accessing various government benefits.",
      onClick: () => onNavigate("msme-certification")
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MzYwNzQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Business Meeting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            <span className="golden-shimmer">Certifications</span> & Registrations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navigate the complex world of certifications and registrations with our expert guidance and support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <Card 
                  className="text-center border-[#d4af37]/20 bg-[#1a1a1a] hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-300 cursor-pointer h-full group"
                  onClick={cert.onClick}
                >
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <cert.icon className="h-8 w-8 text-black" />
                    </motion.div>
                    <CardTitle className="mb-2 text-white group-hover:text-[#d4af37] transition-colors">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}