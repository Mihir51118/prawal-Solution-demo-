import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "918735010382"; // Replace with actual WhatsApp number
  const message =
    "Hi, I'm interested in learning more about Prawal Solution services.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 300,
      }}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle
        className="h-6 w-6 sm:h-7 sm:w-7 text-white"
        fill="white"
      />

      {/* Pulse animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

      {/* Tooltip - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden sm:block absolute left-full ml-4 px-3 py-2 bg-[#1a1a1a] text-[#d4af37] text-sm rounded-lg whitespace-nowrap border border-[#d4af37]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        Chat with us on WhatsApp
      </motion.div>
    </motion.button>
  );
}