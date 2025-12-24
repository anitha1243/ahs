import { motion } from "motion/react";
import Slider from "react-slick";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    text: "Absolutely stunning results! The stylists here are true artists. I've never felt more confident.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    text: "The attention to detail is incredible. Every visit is a luxurious experience from start to finish.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    text: "Best salon I've ever been to! The team really listens and delivers exactly what you want.",
    rating: 5
  },
  {
    name: "Jessica Parker",
    text: "The ambiance is so relaxing and the staff are wonderful. I always leave feeling pampered and beautiful.",
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            Client Love
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our valued clients have to say
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[40px] shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-900">
                    - {testimonial.name}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonials-carousel .slick-dots li button:before {
          font-size: 12px;
          color: #16a34a;
        }
        .testimonials-carousel .slick-dots li.slick-active button:before {
          color: #6b21a8;
        }
      `}</style>
    </section>
  );
}
