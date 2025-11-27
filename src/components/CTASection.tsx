import { Button } from "./ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { ServiceType } from "../types";

interface CTASectionProps {
  onNavigate?: (page: ServiceType) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjM2NTI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Business Agreement"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black"></div>
      </div>

      {/* Golden animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-white"
          >
            Ready to <span className="golden-shimmer">Grow Your Business</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-gray-300"
          >
            Partner with Prawal Solution Pvt Ltd for comprehensive business support. 
            From compliance to digital transformation, we're here to help you succeed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black hover:from-[#c5a028] hover:to-[#d4af37] shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
              onClick={() => onNavigate?.("contact")}
            >
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              View All Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg p-6 border border-[#d4af37]/30 group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="text-white">+91 XXXX XXXXXX</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg p-6 border border-[#d4af37]/30 group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-white">info@prawalsolution.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}