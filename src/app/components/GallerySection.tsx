import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1584170621933-56cbfb9fbd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlYXV0aWZ1bCUyMGhhaXJ8ZW58MXx8fHwxNzY2NTI4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Beautiful Hair",
    shape: "rounded-tl-[80px] rounded-br-[80px]"
  },
  {
    url: "https://images.unsplash.com/photo-1734367597054-89b37df6f734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJlYXV0eSUyMGZsb3dlcnN8ZW58MXx8fHwxNzY2NTI4NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Beauty Elegance",
    shape: "rounded-full"
  },
  {
    url: "https://images.unsplash.com/photo-1711274091943-5aae912e6985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY3V0dGluZyUyMHNjaXNzb3JzfGVufDF8fHx8MTc2NjQ5NTg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Professional Tools",
    shape: "rounded-tr-[80px] rounded-bl-[80px]"
  },
  {
    url: "https://images.unsplash.com/photo-1661346376364-706a9eac60ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NjUyODY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Beauty Products",
    shape: "rounded-[50px]"
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Step into our world of beauty and transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${image.shape}`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}