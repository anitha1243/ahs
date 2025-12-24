import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Hair Styling",
    description: "Professional cuts, colors, and styling to bring out your natural beauty",
    image: "https://images.unsplash.com/photo-1763048208932-cbe149724374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjY0OTk4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shape: "rounded-tl-[100px] rounded-br-[100px]"
  },
  {
    title: "Hair Coloring",
    description: "Expert color treatments with premium products for vibrant, lasting results",
    image: "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3NjY0ODEzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shape: "rounded-full"
  },
  {
    title: "Beauty Treatments",
    description: "Luxurious spa treatments to rejuvenate your skin and soul",
    image: "https://images.unsplash.com/photo-1664549761426-6a1cb1032854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0cmVhdG1lbnQlMjBzcGF8ZW58MXx8fHwxNzY2NTI4MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shape: "rounded-tr-[100px] rounded-bl-[100px]"
  },
  {
    title: "Facial Treatments",
    description: "Customized facial treatments for radiant, glowing skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBiZWF1dHl8ZW58MXx8fHwxNzY2NTI4MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shape: "rounded-[60px]"
  }
];

export function ServicesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium beauty and hair services
          </p>
        </motion.div>

        <div className="service-carousel">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`overflow-hidden h-80 ${service.shape}`}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .service-carousel .slick-dots li button:before {
          font-size: 12px;
          color: #f43f5e;
        }
        .service-carousel .slick-dots li.slick-active button:before {
          color: #be123c;
        }
        .service-carousel .slick-prev,
        .service-carousel .slick-next {
          z-index: 1;
        }
        .service-carousel .slick-prev:before,
        .service-carousel .slick-next:before {
          color: #f43f5e;
          font-size: 32px;
        }
      `}</style>
    </section>
  );
}