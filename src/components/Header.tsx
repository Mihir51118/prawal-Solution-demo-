import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ServiceType } from "../types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "figma:asset/4425b31730b5795004a8bed3e2193d94c04741b5.png";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentPage: ServiceType;
  onNavigate: (page: ServiceType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessServicesOpen, setBusinessServicesOpen] = useState(false);
  const [digitalServicesOpen, setDigitalServicesOpen] = useState(false);
  const [legalComplianceOpen, setLegalComplianceOpen] = useState(false);
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  const handleNavigation = (page: ServiceType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", damping: 20 }}
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Prawal Solution" className="h-14 w-auto" />
            <div className="hidden md:flex flex-col items-start">
              <span className="golden-shimmer text-xl">Prawal Solution</span>
              <span className="text-xs text-gray-400">Pvt Ltd</span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNavigation("home")}
              className={`text-sm hover:text-[#d4af37] transition-colors ${
                currentPage === "home" ? "text-[#d4af37]" : "text-gray-300"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("about")}
              className={`text-sm hover:text-[#d4af37] transition-colors ${
                currentPage === "about" ? "text-[#d4af37]" : "text-gray-300"
              }`}
            >
              About Us
            </button>

            {/* Business Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#d4af37] transition-colors">
                Business Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border-[#d4af37]/30">
                <DropdownMenuItem onClick={() => handleNavigation("business-services")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a] border-b border-[#d4af37]/20">
                  <strong>View All Business Services</strong>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("msme-loan")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  MSME Loan Consultancy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("financial-risk")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Financial & Risk Management
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("business-setup")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Business Setup
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("mergers-acquisitions")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Mergers & Acquisitions
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Digital Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#d4af37] transition-colors">
                Digital Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border-[#d4af37]/30">
                <DropdownMenuItem onClick={() => handleNavigation("digital-services")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a] border-b border-[#d4af37]/20">
                  <strong>View All Digital Services</strong>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("ecommerce")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  E-commerce Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("digital-marketing")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Digital Marketing
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("web-app-development")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Web & App Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("blutec-ai")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  AI Solutions by Blutec AI
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Legal & Compliance Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#d4af37] transition-colors">
                Legal & Compliance <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border-[#d4af37]/30">
                <DropdownMenuItem onClick={() => handleNavigation("legal-compliance")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a] border-b border-[#d4af37]/20">
                  <strong>View All Legal Services</strong>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("legal-compliance")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Legal & Compliance Solutions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("company-registration")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Company Registration
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("startup-india")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Startup India & Tax Exemptions
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Certifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#d4af37] transition-colors">
                Certifications <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border-[#d4af37]/30">
                <DropdownMenuItem onClick={() => handleNavigation("certifications")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a] border-b border-[#d4af37]/20">
                  <strong>View All Certifications</strong>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("iso-certification")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  ISO Certification
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("gem-registration")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  GeM Registration
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("tax-exemption")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  Tax Exemption Certificates
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("msme-certification")} className="text-gray-300 hover:text-[#d4af37] hover:bg-[#2a2a2a]">
                  MSME Certification
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleNavigation("blog")}
              className={`text-sm hover:text-[#d4af37] transition-colors ${
                currentPage === "blog" ? "text-[#d4af37]" : "text-gray-300"
              }`}
            >
              Blog
            </button>

            <Button 
              onClick={() => handleNavigation("contact")} 
              size="sm" 
              className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#d4af37]"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-[#d4af37]/20">
                <nav className="flex flex-col gap-3">
                  <button
                    onClick={() => handleNavigation("home")}
                    className="text-left text-sm text-gray-300 hover:text-[#d4af37] transition-colors"
                  >
                    Home
                  </button>
                  
                  <button
                    onClick={() => handleNavigation("about")}
                    className="text-left text-sm text-gray-300 hover:text-[#d4af37] transition-colors"
                  >
                    About Us
                  </button>
                  
                  {/* Business Services Dropdown */}
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <button
                      onClick={() => setBusinessServicesOpen(!businessServicesOpen)}
                      className="w-full flex items-center justify-between text-left text-sm text-[#d4af37] hover:text-[#ffd700] transition-colors"
                    >
                      <span>Business Services</span>
                      <motion.div
                        animate={{ rotate: businessServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {businessServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 space-y-2"
                        >
                          <button 
                            onClick={() => handleNavigation("msme-loan")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            MSME Loan Consultancy
                          </button>
                          <button 
                            onClick={() => handleNavigation("financial-risk")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Financial & Risk Management
                          </button>
                          <button 
                            onClick={() => handleNavigation("business-setup")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Business Setup
                          </button>
                          <button 
                            onClick={() => handleNavigation("mergers-acquisitions")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Mergers & Acquisitions
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Digital Services Dropdown */}
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <button
                      onClick={() => setDigitalServicesOpen(!digitalServicesOpen)}
                      className="w-full flex items-center justify-between text-left text-sm text-[#d4af37] hover:text-[#ffd700] transition-colors"
                    >
                      <span>Digital Services</span>
                      <motion.div
                        animate={{ rotate: digitalServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {digitalServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 space-y-2"
                        >
                          <button 
                            onClick={() => handleNavigation("ecommerce")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            E-commerce Development
                          </button>
                          <button 
                            onClick={() => handleNavigation("digital-marketing")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Digital Marketing
                          </button>
                          <button 
                            onClick={() => handleNavigation("web-app-development")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Web & App Development
                          </button>
                          <button 
                            onClick={() => handleNavigation("blutec-ai")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            AI Solutions by Blutec AI
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Legal & Compliance Dropdown */}
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <button
                      onClick={() => setLegalComplianceOpen(!legalComplianceOpen)}
                      className="w-full flex items-center justify-between text-left text-sm text-[#d4af37] hover:text-[#ffd700] transition-colors"
                    >
                      <span>Legal & Compliance</span>
                      <motion.div
                        animate={{ rotate: legalComplianceOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {legalComplianceOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 space-y-2"
                        >
                          <button 
                            onClick={() => handleNavigation("legal-compliance")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Legal & Compliance Solutions
                          </button>
                          <button 
                            onClick={() => handleNavigation("company-registration")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Company Registration
                          </button>
                          <button 
                            onClick={() => handleNavigation("startup-india")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Startup India & Tax Exemptions
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Certifications Dropdown */}
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <button
                      onClick={() => setCertificationsOpen(!certificationsOpen)}
                      className="w-full flex items-center justify-between text-left text-sm text-[#d4af37] hover:text-[#ffd700] transition-colors"
                    >
                      <span>Certifications</span>
                      <motion.div
                        animate={{ rotate: certificationsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {certificationsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 space-y-2"
                        >
                          <button 
                            onClick={() => handleNavigation("iso-certification")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            ISO Certification
                          </button>
                          <button 
                            onClick={() => handleNavigation("gem-registration")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            GeM Registration
                          </button>
                          <button 
                            onClick={() => handleNavigation("tax-exemption")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            Tax Exemption Certificates
                          </button>
                          <button 
                            onClick={() => handleNavigation("msme-certification")} 
                            className="block w-full text-left text-sm text-gray-300 hover:text-[#d4af37] pl-4 py-1 transition-colors"
                          >
                            MSME Certification
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => handleNavigation("blog")}
                    className="text-left text-sm text-gray-300 hover:text-[#d4af37] transition-colors"
                  >
                    Blog
                  </button>

                  <Button 
                    onClick={() => handleNavigation("contact")} 
                    className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black mt-2"
                  >
                    Contact Us
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}