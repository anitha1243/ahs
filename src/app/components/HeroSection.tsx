import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroBg = "https://images.unsplash.com/photo-1711274091943-5aae912e6985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Green/Yellow gradient tint overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-100/50 via-yellow-100/50 to-green-100/50" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-green-600 via-yellow-500 to-green-700 bg-clip-text text-transparent"
        >
          Ayura Hair & Beauty
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Where elegance meets expertise. Experience the art of beauty in a sanctuary of style.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-green-500 text-green-600 rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300"
          >
            Book Now
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-green-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}