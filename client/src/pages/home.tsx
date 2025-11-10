import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DishGallery } from "@/components/DishGallery";
import { MenuSection } from "@/components/MenuSection";
import { ServicesModal } from "@/components/ServicesModal";
import { LocationsSection } from "@/components/LocationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DishGallery />
      <MenuSection />
      <ServicesModal />
      <LocationsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
