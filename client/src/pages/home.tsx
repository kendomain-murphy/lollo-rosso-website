import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DishGallery } from "@/components/DishGallery";
import { LocationsSection } from "@/components/LocationsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DishGallery />
      <LocationsSection />
      <AwardsSection />
      <Footer />
    </div>
  );
}
