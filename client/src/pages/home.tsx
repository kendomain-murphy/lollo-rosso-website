import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ReservationSection } from "@/components/ReservationSection";
import { MenuSection } from "@/components/MenuSection";
import { BarodaMenuSection } from "@/components/BarodaMenuSection";
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
      <ReservationSection />
      <LocationsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
