import { motion } from "motion/react";
const aboutBg = new URL("../images/aboutus.jpg", import.meta.url).href;

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-gray-700">
            Allow your body, mind and soul sense a haven of tranquility
          </p>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Ayura Hair and Beauty Salon, where beauty meets precision and passion. Nestled in a serene and welcoming environment, we are your go-to destination for hair, skin, and beauty transformations. At Ayura, we believe in enhancing your natural beauty with services that not only make you look great but also feel your absolute best.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our talented team of stylists and beauty experts bring years of experience, creativity, and care to every appointment. Whether you’re looking for a bold new haircut, a naturally elegant makeup look, or a glowing facial, Ayura promises a personalized and relaxing experience every time.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We pride ourselves on using quality products, understanding individual needs, and staying ahead of the latest trends and techniques in the beauty industry.
          </p>
          <motion.a
            href="#services"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] shadow-xl"
        >
          <div
            className="h-full min-h-[360px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${aboutBg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-green-200/20 via-yellow-200/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
