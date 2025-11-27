import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { ServiceType } from "../types";
import logo from "figma:asset/4425b31730b5795004a8bed3e2193d94c04741b5.png";
import { motion } from "motion/react";

interface FooterProps {
  onNavigate: (page: ServiceType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-[#d4af37]/20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Prawal Solution" className="h-12 sm:h-16 w-auto" />
              <div className="flex flex-col items-start">
                <span className="golden-shimmer text-xl sm:text-2xl">Prawal Solution</span>
                <span className="text-xs sm:text-sm text-gray-400">Pvt Ltd</span>
              </div>
            </motion.button>
            <p className="text-xs sm:text-sm mb-4 text-gray-400">
              Providing end-to-end support to help startups and MSMEs grow through comprehensive business solutions, digital services, and expert consultancy.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="hover:text-[#d4af37] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="hover:text-[#d4af37] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="hover:text-[#d4af37] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="hover:text-[#d4af37] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d4af37] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate("home")} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate("home");
                    setTimeout(() => {
                      const element = document.getElementById('services');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate("contact");
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#d4af37] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate("msme-loan")} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  MSME Loans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("business-setup")} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  Business Setup
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("digital-marketing")} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("legal-compliance")} 
                  className="hover:text-[#d4af37] transition-colors hover:translate-x-1 inline-block"
                >
                  Legal & Compliance
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-[#d4af37]/20 pt-8 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-lg p-6 disclaimer-text"
          >
            <h4 className="text-[#d4af37] mb-3">Disclaimer</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              We are a consulting firm specializing in startup services in India, with expertise in addressing the needs of modern enterprises. Our company offers professional consultancy services and is not affiliated or associated with any Government/Non-Government Agencies, Institutions, Organizations, or Departments.
            </p>
            <div className="border-t border-[#d4af37]/10 pt-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-[#d4af37]">Note:</span> Payments for services are exclusively accepted in the name of <span className="text-white">PRAWAL SOLUTION Private Limited</span>, and must be made through a 'Current Account' via NEFT/IMPS/RTGS or through authorized digital payment platforms. We do not accept payments to personal accounts or under any other name.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-8 text-center text-sm">
    <p className="text-gray-400">
        &copy; {currentYear} Prawal Solution Pvt Ltd. Developed By HARSH All rights reserved. 
    </p>
    <p className="text-[#d4af37] mt-1">
        Made with excellence.
    </p>
</div>
      </div>
    </footer>
  );
}