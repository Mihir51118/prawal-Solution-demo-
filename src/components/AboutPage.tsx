import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  Heart,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe2,
  Handshake
} from "lucide-react";
import type { ServiceType } from "../types";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/4425b31730b5795004a8bed3e2193d94c04741b5.png";

interface AboutPageProps {
  onNavigate: (page: ServiceType) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "14+", label: "Services Offered" },
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every service we deliver, ensuring quality and professionalism."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative solutions to solve complex business challenges."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize your needs and deliver customized solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in building strong partnerships and working together towards common goals."
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "We are committed to driving sustainable growth for our clients and our organization."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge"
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Efficient processes ensuring timely delivery of services"
    },
    {
      icon: Handshake,
      title: "Trusted Partner",
      description: "Long-term relationships built on trust and reliability"
    },
    {
      icon: Globe2,
      title: "Comprehensive Solutions",
      description: "One-stop shop for all your business consultancy needs"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjM5ODkxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Prawal Solution Team"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
        </div>

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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-white text-5xl md:text-6xl font-bold"
            >
              About <span className="golden-shimmer">Prawal Solution Pvt Ltd</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Prawal Solution Pvt Ltd is a leading business consultancy firm dedicated to empowering enterprises with comprehensive solutions across finance, legal, digital, and compliance domains. We combine expertise, innovation, and personalized service to help businesses thrive in today's dynamic marketplace.
            </motion.p>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          {[...Array(15)].map((_, i) => (
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

      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl mb-2 golden-shimmer"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[#d4af37]/30 p-8 h-full hover:border-[#d4af37]/50 transition-all hover:shadow-xl hover:shadow-[#d4af37]/20">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h2 className="mb-4 text-white">
                  Our <span className="golden-shimmer">Mission</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  To empower businesses with innovative, reliable, and comprehensive consultancy services that drive growth, ensure compliance, and unlock new opportunities. We are committed to being the catalyst for our clients' success through expertise, integrity, and dedication.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[#d4af37]/30 p-8 h-full hover:border-[#d4af37]/50 transition-all hover:shadow-xl hover:shadow-[#d4af37]/20">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-black" />
                </div>
                <h2 className="mb-4 text-white">
                  Our <span className="golden-shimmer">Vision</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  To be India's most trusted and innovative business consultancy firm, recognized for transforming businesses through technology-driven solutions, strategic guidance, and unwavering commitment to client success. We envision a future where every business has access to world-class consultancy services.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="golden-shimmer">Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6 h-full hover:border-[#d4af37]/50 transition-all group hover:shadow-lg hover:shadow-[#d4af37]/20">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzOTg3NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="What We Do"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">
              What <span className="golden-shimmer">We Do</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive suite of services designed to address every aspect of your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-[#d4af37]/30 p-6 h-full hover:border-[#d4af37]/70 transition-all">
                <Briefcase className="h-12 w-12 text-[#d4af37] mb-4" />
                <h3 className="text-white mb-3">Business Services</h3>
                <p className="text-gray-400 text-sm mb-4">
                  MSME loans, financial management, business setup, and M&A facilitation
                </p>
                <Button
                  onClick={() => onNavigate("business-services")}
                  variant="ghost"
                  className="text-[#d4af37] hover:text-[#ffd700] p-0 h-auto"
                >
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-[#d4af37]/30 p-6 h-full hover:border-[#d4af37]/70 transition-all">
                <Globe2 className="h-12 w-12 text-[#d4af37] mb-4" />
                <h3 className="text-white mb-3">Digital Services</h3>
                <p className="text-gray-400 text-sm mb-4">
                  E-commerce, digital marketing, web development, and AI solutions
                </p>
                <Button
                  onClick={() => onNavigate("digital-services")}
                  variant="ghost"
                  className="text-[#d4af37] hover:text-[#ffd700] p-0 h-auto"
                >
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-amber-900/20 border-[#d4af37]/30 p-6 h-full hover:border-[#d4af37]/70 transition-all">
                <Shield className="h-12 w-12 text-[#d4af37] mb-4" />
                <h3 className="text-white mb-3">Legal & Compliance</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Legal solutions, company registration, and regulatory compliance
                </p>
                <Button
                  onClick={() => onNavigate("legal-compliance")}
                  variant="ghost"
                  className="text-[#d4af37] hover:text-[#ffd700] p-0 h-auto"
                >
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border-[#d4af37]/30 p-6 h-full hover:border-[#d4af37]/70 transition-all">
                <Award className="h-12 w-12 text-[#d4af37] mb-4" />
                <h3 className="text-white mb-3">Certifications</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ISO, GeM, tax exemptions, and MSME certifications
                </p>
                <Button
                  onClick={() => onNavigate("certifications")}
                  variant="ghost"
                  className="text-[#d4af37] hover:text-[#ffd700] p-0 h-auto"
                >
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose <span className="golden-shimmer">Prawal Solution</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We stand out from the competition with our commitment to excellence and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6 text-center h-full hover:border-[#d4af37]/50 hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all group">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-14 w-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon className="h-7 w-7 text-black" />
                    </motion.div>
                    <h3 className="text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black via-[#1a1a1a] to-black border-t border-[#d4af37]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2Mzk3MTI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Partner with us"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-white">
              Ready to Transform Your <span className="golden-shimmer">Business</span>?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Partner with Prawal Solution Pvt Ltd and experience the difference that expert guidance, innovative solutions, and dedicated support can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => onNavigate("home")}
                variant="outline"
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-lg px-8 py-6"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}