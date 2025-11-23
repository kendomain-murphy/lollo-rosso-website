import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ReservationSection } from "@/components/ReservationSection";
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
