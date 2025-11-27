import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
  action: () => void;
}

type ConversationStep = "welcome" | "category" | "service" | "details" | "contact";

interface CategoryData {
  name: string;
  services: ServiceData[];
}

interface ServiceData {
  name: string;
  description: string;
  benefits: string[];
}

const categories: Record<string, CategoryData> = {
  "business-funding": {
    name: "Business Funding & Advisory",
    services: [
      {
        name: "MSME Loan Consultancy",
        description: "Expert assistance in securing MSME loans from government schemes and NBFCs. We help you get loans up to ₹10 Crores with minimal documentation.",
        benefits: [
          "Government scheme loans with lower interest rates",
          "NBFC funding with quick approval (7-15 days)",
          "Loan amount up to ₹10 Crores",
          "Minimal documentation required",
          "95% loan approval success rate"
        ]
      },
      {
        name: "Financial Advisory",
        description: "Comprehensive financial planning, investment advisory, and business growth strategies tailored to your needs.",
        benefits: [
          "Expert financial planning and budgeting",
          "Investment advisory services",
          "Cash flow management",
          "Profit optimization strategies",
          "Financial risk assessment"
        ]
      },
      {
        name: "Business Setup",
        description: "End-to-end business setup services including registration, licensing, and compliance for smooth business launch.",
        benefits: [
          "Complete business registration assistance",
          "License and permit acquisition",
          "Location and market analysis",
          "Business plan development",
          "Hassle-free setup in 15 days"
        ]
      },
      {
        name: "Mergers & Acquisitions",
        description: "Expert M&A facilitation services including due diligence, valuation, and deal structuring.",
        benefits: [
          "Complete due diligence",
          "Business valuation services",
          "Deal negotiation support",
          "Legal documentation",
          "Post-merger integration"
        ]
      }
    ]
  },
  "digital-services": {
    name: "Digital & Technology Services",
    services: [
      {
        name: "E-commerce Development",
        description: "Build powerful online stores with payment integration, inventory management, and SEO optimization.",
        benefits: [
          "Custom e-commerce website design",
          "Payment gateway integration",
          "Mobile-responsive design",
          "SEO optimization",
          "24/7 technical support"
        ]
      },
      {
        name: "Digital Marketing",
        description: "Result-driven digital marketing including SEO, social media, PPC, and lead generation campaigns.",
        benefits: [
          "Search engine optimization (SEO)",
          "Social media marketing (Facebook, Instagram, LinkedIn)",
          "Google Ads & PPC campaigns",
          "WhatsApp marketing",
          "Content marketing & email campaigns"
        ]
      },
      {
        name: "Web & App Development",
        description: "Custom web and mobile app development with modern technology stack and user-friendly design.",
        benefits: [
          "Responsive website development",
          "Mobile app development (iOS & Android)",
          "Custom web applications",
          "CMS integration (WordPress, Shopify)",
          "Ongoing maintenance & support"
        ]
      },
      {
        name: "AI & Automation Solutions",
        description: "Cutting-edge AI solutions including chatbots, process automation, and intelligent business tools.",
        benefits: [
          "AI-powered chatbots",
          "Business process automation",
          "Data analytics & insights",
          "Machine learning solutions",
          "Cost reduction up to 40%"
        ]
      }
    ]
  },
  "legal-compliance": {
    name: "Legal & Compliance Services",
    services: [
      {
        name: "Legal Solutions",
        description: "Comprehensive legal services including contracts, agreements, IP protection, and regulatory compliance.",
        benefits: [
          "Contract drafting & review",
          "Intellectual property protection",
          "Legal compliance advisory",
          "Dispute resolution support",
          "Expert legal consultation"
        ]
      },
      {
        name: "Company Registration",
        description: "Fast and hassle-free company registration for Private Limited, LLP, OPC, and Partnership firms.",
        benefits: [
          "Private Limited Company registration",
          "LLP & OPC registration",
          "Partnership firm registration",
          "Complete ROC filing",
          "Registration in 7-10 days"
        ]
      },
      {
        name: "Compliance Management",
        description: "End-to-end compliance management including GST, labor laws, and statutory filings.",
        benefits: [
          "GST compliance & filing",
          "Labor law compliance",
          "Annual statutory filings",
          "Regulatory compliance audits",
          "Penalty-free compliance"
        ]
      }
    ]
  },
  "certifications": {
    name: "Certifications & Registrations",
    services: [
      {
        name: "ISO Certification",
        description: "Get ISO certifications (9001, 14001, 27001, 45001) with expert guidance and fast processing.",
        benefits: [
          "ISO 9001 (Quality Management)",
          "ISO 14001 (Environmental Management)",
          "ISO 27001 (Information Security)",
          "Complete documentation support",
          "Certification in 30-45 days"
        ]
      },
      {
        name: "GeM Registration",
        description: "Complete GeM portal registration to sell products/services to government departments.",
        benefits: [
          "GeM portal registration",
          "Product/service listing",
          "Bidding assistance",
          "Order management support",
          "Access to government tenders"
        ]
      },
      {
        name: "Tax Exemptions (80G/12A)",
        description: "Get tax exemption certificates for NGOs and businesses to avail of tax benefits.",
        benefits: [
          "80G registration for donations",
          "12A registration for NGOs",
          "Tax benefit maximization",
          "Expert documentation",
          "Quick approval process"
        ]
      },
      {
        name: "Startup India Registration",
        description: "Register under Startup India program and get DPIIT recognition for tax benefits and funding.",
        benefits: [
          "DPIIT recognition certificate",
          "3-year tax holiday benefits",
          "Access to government funding",
          "IPR cost reduction",
          "Fast-track registration"
        ]
      },
      {
        name: "MSME/Udyam Registration",
        description: "Quick MSME/Udyam registration to access government schemes, loans, and subsidies.",
        benefits: [
          "Online Udyam registration",
          "MSME certificate in 24-48 hours",
          "Access to government schemes",
          "Subsidy & loan benefits",
          "Free consultation"
        ]
      }
    ]
  }
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState<ConversationStep>("welcome");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      showWelcomeMessage();
    }
  }, [isOpen]);

  const addMessage = (text: string, isBot: boolean, options?: ChatOption[]) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot,
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const showWelcomeMessage = () => {
    setCurrentStep("welcome");
    setTimeout(() => {
      addMessage(
        "👋 Hello! Welcome to Prawal Solution Pvt Ltd!\n\nI'm your virtual assistant, here to help you find the perfect service for your business needs.",
        true
      );
      
      setTimeout(() => {
        showCategorySelection();
      }, 1000);
    }, 500);
  };

  const showCategorySelection = () => {
    setCurrentStep("category");
    const categoryOptions: ChatOption[] = [
      {
        label: "💼 Business Funding & Advisory",
        value: "business-funding",
        action: () => handleCategorySelect("business-funding")
      },
      {
        label: "🚀 Digital & Technology Services",
        value: "digital-services",
        action: () => handleCategorySelect("digital-services")
      },
      {
        label: "⚖️ Legal & Compliance Services",
        value: "legal-compliance",
        action: () => handleCategorySelect("legal-compliance")
      },
      {
        label: "🏆 Certifications & Registrations",
        value: "certifications",
        action: () => handleCategorySelect("certifications")
      }
    ];

    addMessage(
      "Please select a service category you're interested in:",
      true,
      categoryOptions
    );
  };

  const handleCategorySelect = (categoryKey: string) => {
    const category = categories[categoryKey];
    setSelectedCategory(categoryKey);
    
    addMessage(category.name, false);
    
    setTimeout(() => {
      setCurrentStep("service");
      const serviceOptions: ChatOption[] = category.services.map(service => ({
        label: service.name,
        value: service.name,
        action: () => handleServiceSelect(service)
      }));

      addMessage(
        `Great choice! Here are our ${category.name} offerings:\n\nPlease select a specific service:`,
        true,
        serviceOptions
      );
    }, 800);
  };

  const handleServiceSelect = (service: ServiceData) => {
    setSelectedService(service);
    addMessage(service.name, false);
    
    setTimeout(() => {
      setCurrentStep("details");
      
      const benefitsList = service.benefits.map((benefit, index) => 
        `${index + 1}. ${benefit}`
      ).join('\n');

      addMessage(
        `📋 *${service.name}*\n\n${service.description}\n\n✨ *Key Benefits:*\n${benefitsList}`,
        true
      );

      setTimeout(() => {
        const contactOptions: ChatOption[] = [
          {
            label: "📞 Yes, Request a Call",
            value: "request-call",
            action: () => handleRequestCall()
          },
          {
            label: "🔙 Back to Services",
            value: "back",
            action: () => handleBackToServices()
          },
          {
            label: "🏠 Start Over",
            value: "start-over",
            action: () => handleStartOver()
          }
        ];

        addMessage(
          "Would you like us to contact you for more details and a free consultation?",
          true,
          contactOptions
        );
      }, 1500);
    }, 800);
  };

  const handleRequestCall = () => {
    addMessage("Yes, Request a Call", false);
    setCurrentStep("contact");
    
    setTimeout(() => {
      addMessage(
        "Excellent! 🎉\n\nPlease share your contact details in any format you like - just type naturally!\n\n✨ *Examples:*\n• Name: Rahul Kumar, Phone: 9876543210\n• My name is Priya and number is +91 9988776655\n• Amit Kumar 9876543210\n\nOur AI will understand! 😊",
        true
      );
    }, 800);
  };

  const handleContactSubmit = (text: string) => {
    // Intelligent parsing function
    const parseContactInfo = (input: string) => {
      let name = "";
      let phone = "";

      // Extract phone number (supports various formats)
      const phonePatterns = [
        /(?:\+91[\s-]?)?[6-9]\d{9}/g, // Indian format with or without +91
        /(?:\+91)?[\s-]?\(?[6-9]\d{2}\)?[\s-]?\d{3}[\s-]?\d{4}/g, // With brackets/spaces
      ];

      for (const pattern of phonePatterns) {
        const phoneMatch = input.match(pattern);
        if (phoneMatch) {
          phone = phoneMatch[0].replace(/[\s-()]/g, "").replace(/^\+91/, ""); // Clean up
          break;
        }
      }

      // Remove phone from input to extract name
      let remainingText = input
        .replace(/(?:\+91[\s-]?)?[6-9]\d{9}/g, "")
        .replace(/(?:\+91)?[\s-]?\(?[6-9]\d{2}\)?[\s-]?\d{3}[\s-]?\d{4}/g, "");

      // Extract name (looking for patterns)
      const namePatterns = [
        /(?:name|naam)[\s:is-]+([a-zA-Z\s.]+?)(?:\n|phone|mobile|number|$)/gi,
        /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/, // Capitalized names at start
        /(?:my|i am|i'm|this is)[\s]+([A-Z][a-zA-Z\s]+?)(?:\n|phone|mobile|number|and|$)/gi,
      ];

      for (const pattern of namePatterns) {
        const nameMatch = remainingText.match(pattern);
        if (nameMatch) {
          name = nameMatch[1] ? nameMatch[1].trim() : nameMatch[0].trim();
          break;
        }
      }

      // If name still empty, try to get first capitalized words
      if (!name) {
        const fallbackName = remainingText.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/);
        if (fallbackName) {
          name = fallbackName[0].trim();
        }
      }

      return { name, phone };
    };

    const { name, phone } = parseContactInfo(text);

    if (name && phone) {
      addMessage(text, false);
      
      setTimeout(() => {
        addMessage(
          `✅ *Thank you, ${name}!*\\n\\nYour details have been received:\\n📱 Phone: ${phone}\\n💼 Service: ${selectedService?.name}\\n\\nOur expert team will contact you within 2-4 hours to discuss your requirements in detail.\\n\\nIn the meantime, you can:\\n• Call us: +91 XXXX XXXXXX\\n• Email: info@prawalsolution.com\\n• Visit our website for more information\\n\\nIs there anything else I can help you with?`,
          true,
          [
            {
              label: "🔙 Explore Other Services",
              value: "explore",
              action: () => handleStartOver()
            },
            {
              label: "✅ That's All, Thank You",
              value: "done",
              action: () => handleThankYou()
            }
          ]
        );
      }, 1000);
    } else {
      addMessage(text, false);
      setTimeout(() => {
        addMessage(
          "🤔 I couldn't detect your name or phone number clearly.\\n\\nPlease try again with your name and phone number. You can type it in any format!\\n\\n✨ *Examples:*\\n• Rahul Kumar 9876543210\\n• Name: Priya, Phone: +91 9988776655\\n• My name is Amit and my number is 9876543210",
          true
        );
      }, 500);
    }
  };

  const handleBackToServices = () => {
    addMessage("Back to Services", false);
    if (selectedCategory) {
      setTimeout(() => {
        handleCategorySelect(selectedCategory);
      }, 500);
    }
  };

  const handleStartOver = () => {
    addMessage("Start Over", false);
    setSelectedCategory(null);
    setSelectedService(null);
    setTimeout(() => {
      showCategorySelection();
    }, 500);
  };

  const handleThankYou = () => {
    addMessage("That's All, Thank You", false);
    setTimeout(() => {
      addMessage(
        "🙏 Thank you for choosing Prawal Solution Pvt Ltd!\n\nWe look forward to serving you. Have a great day! 🌟",
        true
      );
    }, 800);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    if (currentStep === "contact") {
      handleContactSubmit(text);
    } else {
      addMessage(text, false);
      
      setTimeout(() => {
        addMessage(
          "I'm here to guide you through our services using the options above. Please select from the available choices, or type 'start over' to begin again.",
          true
        );
      }, 800);
    }
    
    setInputValue("");
  };

  const handleOptionClick = (option: ChatOption) => {
    option.action();
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-black" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[420px] sm:max-w-[calc(100vw-3rem)] h-[100dvh] sm:h-auto"
          >
            <Card className="flex flex-col h-full sm:h-[600px] sm:max-h-[calc(100vh-3rem)] bg-[#1a1a1a] border-[#d4af37]/30 shadow-2xl sm:rounded-lg rounded-none">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37] to-[#ffd700]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                    <Bot className="h-6 w-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-black">Prawal Assistant</h4>
                    <p className="text-xs text-black/80">● Online - Always Ready to Help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-black hover:bg-black/10 transition-colors cursor-pointer z-10"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${message.isBot ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-3 ${
                        message.isBot
                          ? "bg-[#2a2a2a] text-white"
                          : "bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    
                    {/* Options Buttons */}
                    {message.options && message.options.length > 0 && (
                      <div className="flex flex-col gap-2 mt-3 w-full max-w-[85%]">
                        {message.options.map((option, index) => (
                          <Button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            variant="outline"
                            className="w-full justify-start text-left border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 text-sm py-2 h-auto"
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-[#d4af37]/30">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage(inputValue);
                      }
                    }}
                    placeholder={
                      currentStep === "contact" 
                        ? "Enter your details..." 
                        : "Type a message..."
                    }
                    className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37]"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by Prawal Solution AI
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}