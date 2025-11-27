import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { ServiceType } from "../types";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback"; 
import worldMap from "figma:asset/0b03370f1c4885f540dde36f44401e94088fa6b7.png";

interface HeroSectionProps {
  onNavigate: (page: ServiceType) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      
      {/* World Map Background - Full Section */}
      <div className="absolute inset-0 z-0">
        <img 
          src={worldMap}
          alt="World Map"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Overlay to blend with theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      {/* Golden animated lines (full width) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        
        {/* INNER CONTENT BOX */}
        <div className="relative p-6 sm:p-8 md:p-12 rounded-xl overflow-hidden">

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#d4af37]/20 to-[#ffd700]/20 backdrop-blur-sm rounded-full border border-[#d4af37]/30"
            >
              <p className="text-xs sm:text-sm flex items-center gap-2">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#d4af37]" />
                <span className="text-[#d4af37]">Empowering Startups & MSMEs Since Inception</span>
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="golden-shimmer">Complete Business Solutions</span>
              <br />
              for Your Growth Journey
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2"
            >
              Prawal Solution Pvt Ltd provides end-to-end support for startups and MSMEs - from business setup and compliance to digital transformation and financial services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black hover:from-[#c5a028] hover:to-[#d4af37] shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300 w-full sm:w-auto"
                onClick={() => onNavigate("contact")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto px-2"
            >
              {[
                { icon: CheckCircle, text: "500+ Clients Served" },
                { icon: CheckCircle, text: "Expert Consultancy" },
                { icon: CheckCircle, text: "End-to-End Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-[#d4af37]/20"
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
    </section>
  );
}