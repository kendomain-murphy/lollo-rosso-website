import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import heroVideo from "@assets/Walk In _1762781293296.mp4";
import heroPoster from "@assets/8-4064_1761394200452.jpg";

const heroContent = [
  {
    title: "lollo rosso",
    subtitle: "Experience the finest Asian fusion cuisine with artisanal bowl meals, premium sushi, and authentic dimsums"
  },
  {
    title: "lollo rosso",
    subtitle: "Discover authentic flavors and modern elegance at our four premium locations"
  }
];

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
    setCurrentSlide((prev) => (prev + 1) % heroContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-5"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {heroContent.map((content, index) => (
          <div
            key={index}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <h1 className="font-mono text-5xl md:text-7xl font-bold mb-6 tracking-wider text-white" data-testid="text-hero-title">
              {content.title}
            </h1>
            <p className="md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-[20px]" data-testid="text-hero-subtitle">
              {content.subtitle}
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
        ))}
      </div>
    </section>
  );
}
