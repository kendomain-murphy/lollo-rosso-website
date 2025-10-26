import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import heroImage1 from "@assets/8-4064_1761394200452.jpg";
import heroImage2 from "@assets/16-3437_1761394200454.jpg";
import heroImage3 from "@assets/31-4227_1761394200456.jpg";
import heroImage4 from "@assets/5_1-3613_1761394200458.jpg";

const carouselImages = [heroImage1, heroImage2, heroImage3, heroImage4];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMenuWithTab = (tab: string) => {
    window.location.hash = `menu-${tab}`;
    const element = document.getElementById("menu");
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
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border shadow-lg hover:bg-white transition-colors"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border shadow-lg hover:bg-white transition-colors"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-foreground w-8"
                : "bg-foreground/50 hover:bg-foreground/80"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-mono text-5xl md:text-7xl font-bold mb-6 tracking-wider text-white" data-testid="text-hero-title">
          lollo rosso
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Experience the finest Asian fusion cuisine with artisanal bowl meals, premium sushi, and authentic dimsums
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" data-testid="button-view-menu">
                View Menu
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48" data-testid="dropdown-menu-locations">
              <DropdownMenuItem
                onClick={() => scrollToMenuWithTab("navrangpura")}
                data-testid="menu-location-ahmedabad"
              >
                Ahmedabad
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => scrollToSection("menu")}
                data-testid="menu-location-baroda"
              >
                Baroda
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => window.open("https://www.adanione.com/svpia-ahmedabad-airport/food-beverages/lollo-rosso-terminal-1-level-0-2153?serviceMode=pickup-at-store", "_blank")}
                data-testid="menu-location-svp-airport"
              >
                SVP Airport
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => scrollToSection("menu")}
                data-testid="menu-location-goa"
              >
                Goa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/80 backdrop-blur-sm border-white/40 text-foreground hover:bg-background"
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
