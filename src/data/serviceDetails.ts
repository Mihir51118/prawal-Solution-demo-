import { 
  DollarSign, 
  TrendingUp, 
  Building2, 
  Shuffle,
  Globe,
  Megaphone,
  Code,
  Scale,
  FileCheck,
  Briefcase,
  Award,
  ShoppingCart,
  Receipt,
  BadgeCheck,
  Target,
  Shield,
  Zap,
  Users,
  Clock,
  LineChart,
  CheckCircle2,
  Rocket,
  FileText,
  Lightbulb,
  Settings,
  TrendingDown,
  Lock,
  Search,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Mail,
  HeadphonesIcon,
  PenTool,
  Database,
  Cloud,
  LucideIcon,
  Brain,
  Bot,
  Cpu,
  Network,
  Sparkles
} from "lucide-react";
import { ServiceType } from "../App";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceDetail {
  title: string;
  description: string;
  overview: string;
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: ProcessStep[];
}

type ServiceDetailsMap = {
  [K in ServiceType]?: ServiceDetail;
};

export const serviceDetails: ServiceDetailsMap = {
  "msme-loan": {
    title: "MSME Loan Consultancy",
    description: "Expert assistance in securing government schemes and loans from NBFCs to fuel your business growth.",
    overview: "Navigate the complex landscape of MSME financing with our expert consultancy services. We help you identify the right government schemes, prepare comprehensive loan applications, and connect you with the best NBFCs and financial institutions.",
    icon: DollarSign,
    gradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
    iconBg: "bg-blue-600",
    features: [
      {
        title: "Government Scheme Assessment",
        description: "Identify and apply for relevant government schemes like MUDRA, CGTMSE, and more."
      },
      {
        title: "Loan Documentation Support",
        description: "Complete assistance in preparing and submitting loan documentation."
      },
      {
        title: "NBFC Connections",
        description: "Access to our network of trusted NBFCs and financial institutions."
      },
      {
        title: "Eligibility Analysis",
        description: "Detailed analysis of your eligibility for various loan programs."
      }
    ],
    benefits: [
      {
        icon: Target,
        title: "Higher Approval Rates",
        description: "Increase your chances of loan approval with expert guidance."
      },
      {
        icon: Clock,
        title: "Faster Processing",
        description: "Expedited loan processing with proper documentation."
      },
      {
        icon: Shield,
        title: "Best Terms",
        description: "Secure favorable interest rates and repayment terms."
      }
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "Understand your business needs and financial requirements."
      },
      {
        title: "Scheme Selection",
        description: "Identify the most suitable loan programs for your business."
      },
      {
        title: "Documentation",
        description: "Prepare comprehensive loan application packages."
      },
      {
        title: "Application & Follow-up",
        description: "Submit applications and manage the approval process."
      }
    ]
  },
  "financial-risk": {
    title: "Financial & Risk Management",
    description: "Comprehensive guidance on corporate finance, virtual CFO services, and strategic risk management.",
    overview: "Empower your business with professional financial management and strategic planning. Our virtual CFO services provide you with expert financial oversight without the cost of a full-time executive.",
    icon: TrendingUp,
    gradient: "bg-gradient-to-br from-green-600 to-emerald-700",
    iconBg: "bg-green-600",
    features: [
      {
        title: "Virtual CFO Services",
        description: "On-demand CFO expertise for strategic financial planning and decision-making."
      },
      {
        title: "Financial Planning & Analysis",
        description: "Comprehensive budgeting, forecasting, and financial modeling."
      },
      {
        title: "Risk Assessment",
        description: "Identify and mitigate financial and operational risks."
      },
      {
        title: "Cash Flow Management",
        description: "Optimize working capital and improve cash flow efficiency."
      }
    ],
    benefits: [
      {
        icon: LineChart,
        title: "Better Decisions",
        description: "Data-driven insights for strategic business decisions."
      },
      {
        icon: TrendingDown,
        title: "Risk Mitigation",
        description: "Proactive identification and management of business risks."
      },
      {
        icon: DollarSign,
        title: "Cost Efficient",
        description: "CFO-level expertise at a fraction of the cost."
      }
    ],
    process: [
      {
        title: "Financial Assessment",
        description: "Analyze current financial health and identify gaps."
      },
      {
        title: "Strategy Development",
        description: "Create customized financial and risk management strategies."
      },
      {
        title: "Implementation",
        description: "Execute strategies with ongoing monitoring."
      },
      {
        title: "Continuous Support",
        description: "Regular reviews and strategic adjustments."
      }
    ]
  },
  "business-setup": {
    title: "Business Setup Services",
    description: "Complete assistance with company and LLP registration, setup, and expansion planning.",
    overview: "Start your business on the right foot with our comprehensive business setup services. From choosing the right structure to registration and compliance, we handle everything.",
    icon: Building2,
    gradient: "bg-gradient-to-br from-purple-600 to-violet-700",
    iconBg: "bg-purple-600",
    features: [
      {
        title: "Company Registration",
        description: "Private Limited, Public Limited, and One Person Company registration."
      },
      {
        title: "LLP Formation",
        description: "Limited Liability Partnership setup and registration."
      },
      {
        title: "Sole Proprietorship",
        description: "Simple business structure setup for individual entrepreneurs."
      },
      {
        title: "Expansion Planning",
        description: "Strategic planning for business growth and expansion."
      }
    ],
    benefits: [
      {
        icon: Zap,
        title: "Fast Setup",
        description: "Quick and hassle-free business registration process."
      },
      {
        icon: Shield,
        title: "Full Compliance",
        description: "Ensure complete legal and regulatory compliance."
      },
      {
        icon: Lightbulb,
        title: "Expert Advice",
        description: "Choose the best structure for your business needs."
      }
    ],
    process: [
      {
        title: "Consultation",
        description: "Understand your business model and recommend structure."
      },
      {
        title: "Documentation",
        description: "Prepare all required documents and applications."
      },
      {
        title: "Registration",
        description: "File with authorities and obtain registrations."
      },
      {
        title: "Post-Setup Support",
        description: "Provide ongoing compliance and administrative support."
      }
    ]
  },
  "mergers-acquisitions": {
    title: "Mergers & Acquisitions",
    description: "Professional facilitation of mergers, acquisitions, and strategic business combinations.",
    overview: "Navigate complex M&A transactions with confidence. Our experienced team provides end-to-end support from valuation to integration.",
    icon: Shuffle,
    gradient: "bg-gradient-to-br from-orange-600 to-red-700",
    iconBg: "bg-orange-600",
    features: [
      {
        title: "Business Valuation",
        description: "Accurate valuation of businesses for fair transactions."
      },
      {
        title: "Due Diligence",
        description: "Comprehensive financial and legal due diligence."
      },
      {
        title: "Deal Structuring",
        description: "Optimal transaction structures for tax and legal efficiency."
      },
      {
        title: "Integration Planning",
        description: "Post-merger integration strategies and execution."
      }
    ],
    benefits: [
      {
        icon: Target,
        title: "Successful Deals",
        description: "Higher success rate in closing transactions."
      },
      {
        icon: Shield,
        title: "Risk Protection",
        description: "Thorough due diligence to minimize post-deal surprises."
      },
      {
        icon: Users,
        title: "Smooth Transition",
        description: "Seamless integration and change management."
      }
    ],
    process: [
      {
        title: "Strategy & Planning",
        description: "Define M&A objectives and identify targets."
      },
      {
        title: "Valuation & Due Diligence",
        description: "Assess value and conduct comprehensive reviews."
      },
      {
        title: "Negotiation & Deal",
        description: "Structure and negotiate transaction terms."
      },
      {
        title: "Integration",
        description: "Execute post-merger integration plan."
      }
    ]
  },
  "ecommerce": {
    title: "E-commerce Website Development",
    description: "Creation and integration of user-friendly and effective online stores to boost your digital presence.",
    overview: "Transform your business with a powerful e-commerce platform. We build custom online stores that are beautiful, functional, and optimized for conversions.",
    icon: Globe,
    gradient: "bg-gradient-to-br from-cyan-600 to-blue-700",
    iconBg: "bg-cyan-600",
    features: [
      {
        title: "Custom Store Design",
        description: "Unique, branded e-commerce websites tailored to your business."
      },
      {
        title: "Payment Integration",
        description: "Secure payment gateway integration with multiple options."
      },
      {
        title: "Inventory Management",
        description: "Robust systems for product and inventory management."
      },
      {
        title: "Mobile Optimization",
        description: "Fully responsive designs for mobile and tablet devices."
      }
    ],
    benefits: [
      {
        icon: ShoppingBag,
        title: "Increase Sales",
        description: "Optimized checkout process to maximize conversions."
      },
      {
        icon: Smartphone,
        title: "Mobile Ready",
        description: "Perfect shopping experience on all devices."
      },
      {
        icon: Lock,
        title: "Secure Transactions",
        description: "Bank-grade security for customer data and payments."
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Understand your products, customers, and goals."
      },
      {
        title: "Design & Development",
        description: "Create custom e-commerce platform with your brand."
      },
      {
        title: "Integration & Testing",
        description: "Integrate payment gateways and test thoroughly."
      },
      {
        title: "Launch & Support",
        description: "Go live and provide ongoing maintenance."
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing Services",
    description: "Social media marketing, lead generation, WhatsApp marketing, and comprehensive digital campaigns.",
    overview: "Grow your business online with data-driven digital marketing strategies. We help you reach your target audience and convert them into loyal customers.",
    icon: Megaphone,
    gradient: "bg-gradient-to-br from-pink-600 to-rose-700",
    iconBg: "bg-pink-600",
    features: [
      {
        title: "Social Media Marketing",
        description: "Strategic campaigns on Facebook, Instagram, LinkedIn, and Twitter."
      },
      {
        title: "Lead Generation",
        description: "Targeted campaigns to generate quality leads for your business."
      },
      {
        title: "WhatsApp Marketing",
        description: "Direct customer engagement through WhatsApp Business."
      },
      {
        title: "Content Marketing",
        description: "Engaging content creation to attract and retain customers."
      }
    ],
    benefits: [
      {
        icon: Target,
        title: "Reach Your Audience",
        description: "Connect with your ideal customers where they are."
      },
      {
        icon: BarChart3,
        title: "Measurable Results",
        description: "Track ROI with detailed analytics and reporting."
      },
      {
        icon: Rocket,
        title: "Rapid Growth",
        description: "Scale your business faster with digital channels."
      }
    ],
    process: [
      {
        title: "Audit & Strategy",
        description: "Analyze current presence and develop strategy."
      },
      {
        title: "Campaign Creation",
        description: "Design and launch targeted marketing campaigns."
      },
      {
        title: "Optimization",
        description: "Monitor performance and optimize for better results."
      },
      {
        title: "Reporting",
        description: "Provide detailed insights and recommendations."
      }
    ]
  },
  "web-app-development": {
    title: "Web & Application Development",
    description: "Custom developers for complex solutions tailored to your specific business requirements.",
    overview: "Build powerful web and mobile applications that drive your business forward. Our expert developers create scalable, secure, and user-friendly solutions.",
    icon: Code,
    gradient: "bg-gradient-to-br from-indigo-600 to-purple-700",
    iconBg: "bg-indigo-600",
    features: [
      {
        title: "Custom Web Applications",
        description: "Tailored web solutions for your unique business processes."
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications."
      },
      {
        title: "API Development",
        description: "Robust APIs for seamless system integration."
      },
      {
        title: "Cloud Solutions",
        description: "Scalable cloud-based applications and infrastructure."
      }
    ],
    benefits: [
      {
        icon: Zap,
        title: "High Performance",
        description: "Fast, efficient applications built with latest tech."
      },
      {
        icon: Cloud,
        title: "Scalable",
        description: "Solutions that grow with your business needs."
      },
      {
        icon: Settings,
        title: "Custom Features",
        description: "Tailored functionality for your specific requirements."
      }
    ],
    process: [
      {
        title: "Requirements",
        description: "Gather and analyze your technical requirements."
      },
      {
        title: "Design & Architecture",
        description: "Plan the user experience and system architecture."
      },
      {
        title: "Development",
        description: "Build using agile methodology with regular updates."
      },
      {
        title: "Deployment & Support",
        description: "Launch and provide ongoing maintenance."
      }
    ]
  },
  "legal-compliance": {
    title: "Legal & Compliance Solutions",
    description: "Comprehensive services to reduce risk and ensure alignment with legal requirements.",
    overview: "Stay compliant and protected with our comprehensive legal and compliance services. We help you navigate complex regulations and minimize business risks.",
    icon: Scale,
    gradient: "bg-gradient-to-br from-red-600 to-rose-700",
    iconBg: "bg-red-600",
    features: [
      {
        title: "Regulatory Compliance",
        description: "Ensure adherence to all applicable laws and regulations."
      },
      {
        title: "Legal Documentation",
        description: "Drafting and review of contracts, agreements, and policies."
      },
      {
        title: "Labor Law Compliance",
        description: "HR policies and compliance with labor regulations."
      },
      {
        title: "Intellectual Property",
        description: "Trademark, copyright, and patent protection services."
      }
    ],
    benefits: [
      {
        icon: Shield,
        title: "Risk Reduction",
        description: "Minimize legal risks and potential liabilities."
      },
      {
        icon: CheckCircle2,
        title: "Peace of Mind",
        description: "Focus on business while we handle compliance."
      },
      {
        icon: FileText,
        title: "Proper Documentation",
        description: "All legal documents properly drafted and filed."
      }
    ],
    process: [
      {
        title: "Compliance Audit",
        description: "Assess current compliance status and identify gaps."
      },
      {
        title: "Action Plan",
        description: "Develop remediation plan for compliance issues."
      },
      {
        title: "Implementation",
        description: "Execute compliance measures and documentation."
      },
      {
        title: "Ongoing Monitoring",
        description: "Regular reviews to maintain compliance."
      }
    ]
  },
  "company-registration": {
    title: "Company & Startup Registration",
    description: "Support for Private Limited Company, LLP, and MSME registrations with expert guidance.",
    overview: "Make your business official with our streamlined registration services. We handle all the paperwork and procedures to get your company registered quickly and correctly.",
    icon: FileCheck,
    gradient: "bg-gradient-to-br from-amber-600 to-orange-700",
    iconBg: "bg-amber-600",
    features: [
      {
        title: "Private Limited Company",
        description: "Complete registration process for Pvt Ltd companies."
      },
      {
        title: "LLP Registration",
        description: "Limited Liability Partnership formation and filing."
      },
      {
        title: "MSME Registration",
        description: "Udyam registration for MSME benefits."
      },
      {
        title: "PAN & TAN",
        description: "Obtain all necessary tax registrations."
      }
    ],
    benefits: [
      {
        icon: Zap,
        title: "Quick Process",
        description: "Fast-track your business registration."
      },
      {
        icon: CheckCircle2,
        title: "Error-Free",
        description: "Accurate filing with no rejections."
      },
      {
        icon: Briefcase,
        title: "Business Benefits",
        description: "Access to business loans and government schemes."
      }
    ],
    process: [
      {
        title: "Document Collection",
        description: "Gather required documents and information."
      },
      {
        title: "Name Approval",
        description: "Apply for and secure company name approval."
      },
      {
        title: "Filing & Registration",
        description: "Submit applications and complete registration."
      },
      {
        title: "Certificate Delivery",
        description: "Receive incorporation certificate and documents."
      }
    ]
  },
  "startup-india": {
    title: "Startup India & Tax Exemptions",
    description: "DPIIT recognition, tax exemptions, and various other certifications for startups.",
    overview: "Unlock the benefits of Startup India with DPIIT recognition. Access tax exemptions, government schemes, and funding opportunities designed for innovative startups.",
    icon: Rocket,
    gradient: "bg-gradient-to-br from-emerald-600 to-green-700",
    iconBg: "bg-emerald-600",
    features: [
      {
        title: "DPIIT Recognition",
        description: "Get recognized by Department for Promotion of Industry and Internal Trade."
      },
      {
        title: "Tax Exemptions (80IAC)",
        description: "3-year tax holiday for eligible startups."
      },
      {
        title: "Patent Fee Reduction",
        description: "80% reduction in patent filing fees."
      },
      {
        title: "Government Tenders",
        description: "Access to government procurement without prior experience."
      }
    ],
    benefits: [
      {
        icon: DollarSign,
        title: "Tax Savings",
        description: "Significant tax benefits for 3 consecutive years."
      },
      {
        icon: Target,
        title: "Funding Access",
        description: "Eligibility for government funding and grants."
      },
      {
        icon: Award,
        title: "Recognition",
        description: "Official startup status adds credibility."
      }
    ],
    process: [
      {
        title: "Eligibility Check",
        description: "Verify your startup meets DPIIT criteria."
      },
      {
        title: "Document Preparation",
        description: "Prepare incorporation certificate and other documents."
      },
      {
        title: "DPIIT Application",
        description: "Apply for recognition on Startup India portal."
      },
      {
        title: "Tax Exemption Filing",
        description: "Apply for 80IAC and other applicable exemptions."
      }
    ]
  },
  "iso-certification": {
    title: "ISO Certification",
    description: "Complete assistance in obtaining ISO certification to enhance business credibility and quality standards.",
    overview: "Achieve international quality standards with ISO certification. We guide you through the entire certification process to enhance your business credibility and operational excellence.",
    icon: Award,
    gradient: "bg-gradient-to-br from-blue-600 to-cyan-700",
    iconBg: "bg-blue-600",
    features: [
      {
        title: "ISO 9001 (Quality Management)",
        description: "Quality management system certification for consistent service delivery."
      },
      {
        title: "ISO 27001 (Information Security)",
        description: "Information security management system certification."
      },
      {
        title: "ISO 14001 (Environmental)",
        description: "Environmental management system certification."
      },
      {
        title: "Gap Analysis",
        description: "Identify gaps between current practices and ISO standards."
      }
    ],
    benefits: [
      {
        icon: Award,
        title: "Enhanced Credibility",
        description: "Build trust with customers and partners."
      },
      {
        icon: Target,
        title: "Better Processes",
        description: "Improve operational efficiency and quality."
      },
      {
        icon: Briefcase,
        title: "Business Growth",
        description: "Access to larger clients and government tenders."
      }
    ],
    process: [
      {
        title: "Gap Assessment",
        description: "Evaluate current processes against ISO standards."
      },
      {
        title: "Implementation",
        description: "Develop and implement required processes and documentation."
      },
      {
        title: "Internal Audit",
        description: "Conduct internal audits to ensure compliance."
      },
      {
        title: "Certification Audit",
        description: "External audit and certification issuance."
      }
    ]
  },
  "gem-registration": {
    title: "GeM Registration",
    description: "Help businesses register on the Government eMarketplace to sell to government buyers.",
    overview: "Access India's largest government procurement platform. We help you register on GeM and navigate the process of selling to government departments and PSUs.",
    icon: ShoppingCart,
    gradient: "bg-gradient-to-br from-green-600 to-teal-700",
    iconBg: "bg-green-600",
    features: [
      {
        title: "GeM Seller Registration",
        description: "Complete registration as a seller on Government eMarketplace."
      },
      {
        title: "Product Listing",
        description: "List your products and services on the platform."
      },
      {
        title: "Bid Management",
        description: "Assistance in bidding for government tenders."
      },
      {
        title: "Compliance Support",
        description: "Ensure compliance with GeM policies and regulations."
      }
    ],
    benefits: [
      {
        icon: Target,
        title: "Government Business",
        description: "Direct access to government procurement."
      },
      {
        icon: DollarSign,
        title: "Large Opportunities",
        description: "Tap into multi-crore government contracts."
      },
      {
        icon: CheckCircle2,
        title: "Transparent Process",
        description: "Fair and transparent bidding mechanism."
      }
    ],
    process: [
      {
        title: "Registration",
        description: "Create seller account on GeM portal."
      },
      {
        title: "Verification",
        description: "Complete KYC and business verification."
      },
      {
        title: "Product Upload",
        description: "List products/services with proper categorization."
      },
      {
        title: "Bid & Fulfill",
        description: "Participate in bids and fulfill orders."
      }
    ]
  },
  "tax-exemption": {
    title: "Tax Exemption Certificates",
    description: "Support for obtaining tax exemption certifications including 80IAC, 12AB, and 80G.",
    overview: "Navigate the complex world of tax exemptions with expert guidance. We help you obtain various tax exemption certificates to maximize your benefits and compliance.",
    icon: Receipt,
    gradient: "bg-gradient-to-br from-purple-600 to-pink-700",
    iconBg: "bg-purple-600",
    features: [
      {
        title: "80IAC for Startups",
        description: "3-year tax exemption for eligible startups."
      },
      {
        title: "12AB for Trusts/NGOs",
        description: "Registration for charitable trusts and NGOs."
      },
      {
        title: "80G Certification",
        description: "Tax deduction for donations to your organization."
      },
      {
        title: "Compliance Filing",
        description: "Annual compliance and return filing support."
      }
    ],
    benefits: [
      {
        icon: DollarSign,
        title: "Tax Savings",
        description: "Significant reduction in tax liability."
      },
      {
        icon: Users,
        title: "Attract Donors",
        description: "80G certification helps attract more donations."
      },
      {
        icon: Shield,
        title: "Legal Compliance",
        description: "Stay compliant with tax regulations."
      }
    ],
    process: [
      {
        title: "Eligibility Assessment",
        description: "Determine which exemptions you qualify for."
      },
      {
        title: "Documentation",
        description: "Prepare all required documents and forms."
      },
      {
        title: "Application Filing",
        description: "Submit applications to relevant authorities."
      },
      {
        title: "Certificate Issuance",
        description: "Receive exemption certificates and guidelines."
      }
    ]
  },
  "msme-certification": {
    title: "MSME Certification & Registration",
    description: "Udyam registration and MSME certification to access government benefits and schemes.",
    overview: "Get officially recognized as an MSME and unlock a world of government benefits, subsidies, and schemes designed to help small businesses grow.",
    icon: BadgeCheck,
    gradient: "bg-gradient-to-br from-orange-600 to-amber-700",
    iconBg: "bg-orange-600",
    features: [
      {
        title: "Udyam Registration",
        description: "Online MSME registration with Udyam portal."
      },
      {
        title: "MSME Benefits Access",
        description: "Access to government subsidies and schemes."
      },
      {
        title: "Priority Lending",
        description: "Lower interest rates and easier loan access."
      },
      {
        title: "Tender Benefits",
        description: "Exemption from earnest money in government tenders."
      }
    ],
    benefits: [
      {
        icon: DollarSign,
        title: "Financial Benefits",
        description: "Subsidies, lower interest rates, and easy loans."
      },
      {
        icon: Shield,
        title: "Protection Benefits",
        description: "Protection against delayed payments."
      },
      {
        icon: Award,
        title: "Recognition",
        description: "Official MSME status and credibility."
      }
    ],
    process: [
      {
        title: "Business Details",
        description: "Collect business and owner information."
      },
      {
        title: "Online Application",
        description: "File Udyam registration online."
      },
      {
        title: "Aadhaar Verification",
        description: "Verify with Aadhaar and PAN."
      },
      {
        title: "Certificate Download",
        description: "Receive Udyam registration certificate instantly."
      }
    ]
  },
  "blutec-ai": {
    title: "AI Solutions by Blutec AI",
    description: "Advanced AI-powered solutions and automation tools through our strategic partnership with Blutec AI.",
    overview: "Transform your business with cutting-edge AI technology through our exclusive partnership with Blutec AI. Access enterprise-grade AI solutions, intelligent automation, and data-driven insights to stay ahead in the digital age.",
    icon: Brain,
    gradient: "bg-gradient-to-br from-violet-600 to-purple-700",
    iconBg: "bg-violet-600",
    features: [
      {
        title: "AI-Powered Automation",
        description: "Intelligent automation solutions to streamline your business processes and reduce manual work."
      },
      {
        title: "Machine Learning Solutions",
        description: "Custom ML models for predictive analytics, forecasting, and intelligent decision-making."
      },
      {
        title: "Natural Language Processing",
        description: "Advanced NLP solutions for chatbots, sentiment analysis, and text processing."
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis solutions for quality control, security, and insights."
      },
      {
        title: "AI Chatbots & Virtual Assistants",
        description: "Intelligent conversational AI to enhance customer service and engagement."
      },
      {
        title: "Data Analytics & Insights",
        description: "AI-driven analytics to extract valuable insights from your business data."
      }
    ],
    benefits: [
      {
        icon: Cpu,
        title: "Enhanced Efficiency",
        description: "Automate repetitive tasks and increase operational efficiency by up to 70%."
      },
      {
        icon: Sparkles,
        title: "Smart Decision Making",
        description: "Data-driven insights powered by AI for better business decisions."
      },
      {
        icon: Bot,
        title: "24/7 Availability",
        description: "AI-powered systems that work round the clock without breaks."
      },
      {
        icon: Network,
        title: "Scalable Solutions",
        description: "Enterprise-grade AI infrastructure that grows with your business."
      }
    ],
    process: [
      {
        title: "Consultation & Analysis",
        description: "Understand your business challenges and identify AI opportunities."
      },
      {
        title: "Solution Design",
        description: "Design customized AI solutions tailored to your specific needs."
      },
      {
        title: "Development & Integration",
        description: "Develop and seamlessly integrate AI solutions into your existing systems."
      },
      {
        title: "Training & Support",
        description: "Comprehensive training and ongoing support for optimal AI utilization."
      }
    ]
  }
};