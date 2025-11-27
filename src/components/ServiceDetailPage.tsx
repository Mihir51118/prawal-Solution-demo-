import { ServiceType } from "../types";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { serviceDetails } from "../data/serviceDetails";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceDetailPageProps {
  serviceType: ServiceType;
  onNavigate: (page: ServiceType) => void;
}

export function ServiceDetailPage({ serviceType, onNavigate }: ServiceDetailPageProps) {
  const service = serviceDetails[serviceType];

  if (!service) {
    return null;
  }

  const Icon = service.icon;

  const serviceImages = [
    "https://images.unsplash.com/photo-1762151717091-4e0633e0c431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjb25zdWx0aW5nfGVufDF8fHx8MTc2MzcwMjUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzU5NTk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  ];
  const randomImage = serviceImages[Math.floor(Math.random() * serviceImages.length)];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={randomImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: -5 }}
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 mb-8 text-gray-400 hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </motion.button>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#ffd700] mb-6"
            >
              <Icon className="h-8 w-8 text-black" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 text-white"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              What We <span className="golden-shimmer">Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 mb-8"
            >
              {service.overview}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-3 bg-[#1a1a1a] p-4 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all"
                >
                  <CheckCircle className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-2 text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-white"
            >
              Key <span className="golden-shimmer">Benefits</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <Card className="text-center border-[#d4af37]/20 bg-[#1a1a1a] hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="h-6 w-6 text-black" />
                        </div>
                        <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-white"
            >
              Our <span className="golden-shimmer">Process</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] text-black flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#d4af37]/50"
                    >
                      {index + 1}
                    </motion.div>
                    <h4 className="mb-2 text-white">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6 text-white">
              Ready to <span className="golden-shimmer">Get Started</span>?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Let our experts help you with {service.title.toLowerCase()}. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
              >
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                onClick={() => onNavigate("home")}
              >
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}