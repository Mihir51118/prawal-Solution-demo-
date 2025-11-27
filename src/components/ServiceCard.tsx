import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
}

export function ServiceCard({ icon: Icon, title, description, color, onClick }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", damping: 15, stiffness: 300 }}
    >
      <Card 
        className={`h-full border-[#d4af37]/20 bg-[#1a1a1a] hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} group`}
        onClick={onClick}
      >
        <CardHeader>
          <motion.div 
            className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <CardTitle className="mb-2 text-white group-hover:text-[#d4af37] transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
