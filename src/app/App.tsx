import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesCarousel } from "./components/ServicesCarousel";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsCarousel />
      <ContactSection />
      
      <footer className="bg-gradient-to-r from-green-800 via-green-900 to-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2025 Ayura Hair & Beauty. All rights reserved.</p>
          <p className="text-rose-200">Where beauty meets artistry</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
