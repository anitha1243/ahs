import { motion } from "motion/react";
import logo from "../images/logo-1.png";

const headerBg = "https://images.unsplash.com/photo-1584170621933-56cbfb9fbd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100/50 shadow-sm"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(34,197,94,0.15), rgba(234,179,8,0.15)), url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Ayura Hair & Beauty Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent hidden sm:block">
            Ayura
          </span>
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 ml-16">
          <a
            href="#home"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-6 py-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm"
        >
          Book Now
        </motion.a>
      </div>
    </motion.header>
  );
}
