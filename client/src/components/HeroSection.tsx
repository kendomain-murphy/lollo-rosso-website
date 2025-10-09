import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/lollo-rosso-logo_1760011336039.jpg";

import heroImage1 from "@assets/stock_images/elegant_dining_table_d6319dd3.jpg";
import heroImage2 from "@assets/stock_images/fresh_sushi_platter__5ce826ac.jpg";
import heroImage3 from "@assets/stock_images/asian_rice_bowl_heal_9c81535a.jpg";
import heroImage4 from "@assets/stock_images/steamed_dumplings_di_89c2ddce.jpg";

const carouselImages = [heroImage1, heroImage2, heroImage3, heroImage4];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(135deg, 
            rgba(220, 120, 80, 0.65) 0%, 
            rgba(180, 80, 60, 0.70) 25%,
            rgba(100, 140, 100, 0.60) 50%,
            rgba(70, 120, 120, 0.65) 75%,
            rgba(30, 50, 80, 0.75) 100%)`
        }}
      />
      
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover-elevate active-elevate-2 border border-white/20"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover-elevate active-elevate-2 border border-white/20"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-white" data-testid="text-hero-title">
          Lollo Rosso
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Experience the finest Asian fusion cuisine with artisanal bowl meals, premium sushi, and authentic dimsums
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("menu")}
            data-testid="button-view-menu"
          >
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/20 backdrop-blur-sm"
            onClick={() => scrollToSection("locations")}
            data-testid="button-find-location"
          >
            Find Location
          </Button>
        </div>
      </div>
    </section>
  );
}
