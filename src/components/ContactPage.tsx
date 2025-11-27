import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  Building2,
} from "lucide-react";
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
import { Card } from "./ui/card";
import type { ServiceType } from "../types";
import networkImage from "figma:asset/7a4319c4cd9581de3cab57a5844d80b0192d5da3.png";
import connectWithUsImage from "figma:asset/f9e882cf2e47d6cc139a258da38e3a31ae61b9d7.png";

interface ContactPageProps {
  onNavigate: (page: ServiceType) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    customerType: "",
    service: "",
    subject: "",
    message: "",
  });
  const [callbackPhone, setCallbackPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact form submitted:", formData);

    setIsSubmitting(false);
    alert(
      "Thank you for contacting us! We'll get back to you soon.",
    );

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

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Callback requested:", callbackPhone);
    alert("Thank you! We'll call you back shortly.");
    setCallbackPhone("");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Connect With Us Section */}
      <section className="py-16 bg-[#0a0a0a] border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={networkImage}
            alt="Connect With Us"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a0a0a]/80 to-black/70"></div>
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
              <span className="golden-shimmer">
                Connect With Us
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your preferred way to reach out to us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Chat Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6 h-full hover:border-[#d4af37]/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-white mb-2">Chat</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Start a live chat with our support team
                  </p>
                  <Button
                    onClick={() => {
                      // Open WhatsApp chat
                      window.open(
                        "https://wa.me/918735010382?text=Hello%20Prawal%20Solution!%20I%20would%20like%20to%20inquire%20about%20your%20services.",
                        "_blank",
                      );
                    }}
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black"
                  >
                    Start Chat
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Email Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6 h-full hover:border-[#d4af37]/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-white mb-2">Email</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Send us an email anytime
                  </p>
                  <Button
                    onClick={() => {
                      // Open Gmail compose
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=info@prawalsolution.com&su=Inquiry%20About%20Services&body=Hello%20Prawal%20Solution%20Team,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0A%0AThank%20you!",
                        "_blank",
                      );
                    }}
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black"
                  >
                    Send Email
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Call Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6 h-full hover:border-[#d4af37]/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-white mb-2">Call</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Speak directly with our team
                  </p>
                  <Button
                    onClick={() =>
                      (window.location.href =
                        "tel:918735010382")
                    }
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black"
                  >
                    Call Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - How Can We Help You */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-white">
                How Can We Help You?
              </h2>
              <p className="text-gray-400 mb-8">
                Whether you have a question about our services,
                need a consultation, or want to start a project
                with us, our team is ready to answer all your
                inquiries.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-lg border border-[#d4af37]/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Address</h4>
                    <p className="text-sm text-gray-400">
                      13/4th Floor,4D Square Mall, Motera,
                      <br />
                      Ahmedabad, Gujarat 380005, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-lg border border-[#d4af37]/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Phone</h4>
                    <p className="text-sm text-gray-400">
                      +91 87350 10382
                    </p>
                    <p className="text-sm text-gray-400">
                      +91 99041 71614
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-lg border border-[#d4af37]/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">E-mail</h4>
                    <p className="text-sm text-gray-400">
                      info@prawalsolution.com
                    </p>
                    <p className="text-sm text-gray-400">
                      support@prawalsolution.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-lg border border-[#d4af37]/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Working Hours
                    </h4>
                    <p className="text-sm text-gray-400">
                      Monday - Saturday: 9:30 AM - 6:00 PM
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Google Map */}
              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-4">
                <div className="h-[250px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.8366723570875!2d72.5927880758831!3d23.103074013318135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c8e27e716b%3A0xe32167d04939ce83!2s4D%20Square%20Mall%2C%20Motera!5e0!3m2!1sen!2sin!4v1764047136033!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prawal Solution Office Location"
                    className="rounded-lg"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-8">
                <h2 className="mb-2 text-white">
                  Give Us a Message
                </h2>
                <p className="text-sm text-gray-400 mb-6">
                  Your Questions Matter. We're Here to Answer
                  Them.
                </p>
                <p className="text-sm text-[#d4af37] mb-6">
                  Simply share all your concerns with us
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-gray-300"
                      >
                        Your Name{" "}
                        <span className="text-[#d4af37]">
                          *
                        </span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-gray-300"
                      >
                        Your Phone{" "}
                        <span className="text-[#d4af37]">
                          *
                        </span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-300"
                    >
                      Your Email{" "}
                      <span className="text-[#d4af37]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="customerType"
                      className="text-gray-300"
                    >
                      Select New/Existing Customer{" "}
                      <span className="text-[#d4af37]">*</span>
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
                      <SelectTrigger className="bg-[#2a2a2a] border-[#d4af37]/30 text-white focus:border-[#d4af37]">
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

                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-gray-300"
                    >
                      Select Service{" "}
                      <span className="text-[#d4af37]">*</span>
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
                      <SelectTrigger className="bg-[#2a2a2a] border-[#d4af37]/30 text-white focus:border-[#d4af37]">
                        <SelectValue placeholder="Choose..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-[#d4af37]/30 text-white max-h-[300px]">
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

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-gray-300"
                    >
                      Subject{" "}
                      <span className="text-[#d4af37]">*</span>
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-gray-300"
                    >
                      Describe your query and concern in detail
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
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

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
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
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Emails to Contact */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="mb-6 text-center text-white">
              Other Emails to Contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-6 w-6 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      For business service inquiries
                    </p>
                    <a
                      href="mailto:business@prawalsolution.com"
                      className="text-[#d4af37] hover:text-[#ffd700] transition-colors"
                    >
                      business@prawalsolution.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#1a1a1a] border-[#d4af37]/20 p-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      For customer support
                    </p>
                    <a
                      href="mailto:support@prawalsolution.com"
                      className="text-[#d4af37] hover:text-[#ffd700] transition-colors"
                    >
                      support@prawalsolution.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Request A Call Back */}
      <section className="py-16 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {[...Array(30)].map((_, i) => (
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="mb-4 text-center text-white">
              Request A{" "}
              <span className="golden-shimmer">Call Back</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Ever find yourself staring at your computer screen
              a good consulting slogan to come to mind?
              Oftentimes.
            </p>

            <form
              onSubmit={handleCallbackSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={callbackPhone}
                onChange={(e) =>
                  setCallbackPhone(e.target.value)
                }
                placeholder="Enter Your Phone Number"
                className="flex-1 bg-[#2a2a2a] border-[#d4af37]/30 text-white placeholder:text-gray-500 focus:border-[#d4af37] h-12"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] hover:from-[#c5a028] hover:to-[#d4af37] text-black shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300 h-12 px-8"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}