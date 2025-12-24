import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Personalized Beauty Solutions",
    text:
      "Every face and style is unique, and so are our services. We tailor each treatment to suit your individual needs.",
  },
  {
    title: "Experienced Professionals",
    text:
      "Our team consists of certified and passionate stylists and aestheticians who stay updated with the latest beauty trends and techniques.",
  },
  {
    title: "Premium Products",
    text:
      "We use only trusted, high-quality products to ensure safety, effectiveness, and a touch of luxury in every service.",
  },
  {
    title: "Relaxing Ambience",
    text:
      "Ayura offers a tranquil and welcoming environment where you can unwind while we work our magic.",
  },
  {
    title: "Affordable Luxury",
    text:
      "Exceptional service doesn’t have to come with a high price tag. Our services start at just $30, giving you premium beauty care at competitive rates.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="choose" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-green-100"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-gray-700">{p.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-full shadow hover:shadow-lg transition"
          >
            Contact Now
          </motion.a>
        </div>
      </div>
    </section>
  );
}
