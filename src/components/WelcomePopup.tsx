import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    customerType: "",
    service: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");
    
    // Temporarily always show for testing - comment out the check
    // if (!hasSeenPopup) {
      // Show popup after 1.5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    // }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenWelcomePopup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Welcome form submitted:", formData);

    setIsSubmitting(false);
    handleClose();

    // Show success message
    alert("Thank you for your interest! Our team will contact you soon.");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      customerType: "",
      service: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-[#1a1a1a] border-[#d4af37] text-white w-[95vw] sm:max-w-xl p-0 overflow-hidden max-h-[90vh] sm:max-h-[80vh] overflow-y-auto">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#ffd700]/5"></div>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute right-4 top-4 z-20 h-8 w-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2a2a] transition-all cursor-pointer"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 p-4 sm:p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-center text-xl sm:text-2xl">
              <span className="golden-shimmer">Welcome to Prawal Solution!</span>
            </DialogTitle>
            
            <DialogDescription className="text-center text-gray-400 mt-1 text-sm">
              Please share your details to get started
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="popup-name" className="text-gray-300 text-sm">
                  Your Name <span className="text-[#d4af37]">*</span>
                </Label>
                <Input
                  id="popup-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37] h-9"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="popup-phone" className="text-gray-300 text-sm">
                  Your Phone <span className="text-[#d4af37]">*</span>
                </Label>
                <Input
                  id="popup-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37] h-9"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="popup-email" className="text-gray-300 text-sm">
                Your Email <span className="text-[#d4af37]">*</span>
              </Label>
              <Input
                id="popup-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37] h-9"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="popup-customerType" className="text-gray-300 text-sm">
                Select New/Existing Customer <span className="text-[#d4af37]">*</span>
              </Label>
              <Select
                required
                value={formData.customerType}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    customerType: value,
                  })
                }
              >
                <SelectTrigger className="bg-[#2a2a2a] border-[#d4af37]/30 text-white focus:border-[#d4af37] h-9">
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#d4af37]/30 text-white">
                  <SelectItem
                    value="new"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    New Customer
                  </SelectItem>
                  <SelectItem
                    value="existing"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    Existing Customer
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="popup-service" className="text-gray-300 text-sm">
                Select Service <span className="text-[#d4af37]">*</span>
              </Label>
              <Select
                required
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    service: value,
                  })
                }
              >
                <SelectTrigger className="bg-[#2a2a2a] border-[#d4af37]/30 text-white focus:border-[#d4af37] h-9">
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#d4af37]/30 text-white max-h-[200px]">
                  <SelectItem
                    value="msme-loan"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    MSME Loan Consultancy
                  </SelectItem>
                  <SelectItem
                    value="financial-risk"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    Financial & Risk Management
                  </SelectItem>
                  <SelectItem
                    value="business-setup"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    Business Setup
                  </SelectItem>
                  <SelectItem
                    value="digital-marketing"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    Digital Marketing
                  </SelectItem>
                  <SelectItem
                    value="ecommerce"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    E-commerce Development
                  </SelectItem>
                  <SelectItem
                    value="legal-compliance"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    Legal & Compliance
                  </SelectItem>
                  <SelectItem
                    value="iso-certification"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    ISO Certification
                  </SelectItem>
                  <SelectItem
                    value="other"
                    className="hover:bg-[#2a2a2a] hover:text-[#d4af37]"
                  >
                    Other Services
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="popup-subject" className="text-gray-300 text-sm">
                Subject <span className="text-[#d4af37]">*</span>
              </Label>
              <Input
                id="popup-subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
                className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37] h-9"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="popup-message" className="text-gray-300 text-sm">
                Describe your query and concern in detail
              </Label>
              <Textarea
                id="popup-message"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37] resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <Button
                type="button"
                onClick={handleClose}
                variant="outline"
                className="border-[#d4af37]/50 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#d4af37] hover:border-[#d4af37] h-9"
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300 h-9"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Send className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="text-xs text-center text-gray-500 mt-3">
            We respect your privacy. Your information will be kept confidential.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}