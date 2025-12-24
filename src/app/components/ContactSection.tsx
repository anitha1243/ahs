import { motion } from "motion/react";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to make you look and feel amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Location</h3>
                <p className="text-gray-600">113 Clissold Parade, Campsie NSW 2194</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Phone</h3>
                <a href="tel:0452053666" className="text-gray-600 hover:text-green-600 transition-colors">
                  0452 053 666
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600">Contact us for inquiries</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl mb-6 text-gray-800">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/ayurahairandbeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white hover:shadow-xl transition-shadow"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.facebook.com/p/Ayura-hair-beauty-61570828078895/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white hover:shadow-xl transition-shadow"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-[60px] shadow-2xl"
          >
            <h3 className="text-3xl mb-6 text-gray-800">Book Your Appointment</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your desired service..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}