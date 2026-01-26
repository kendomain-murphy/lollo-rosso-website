import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown, BookOpen, Utensils } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80; // Increased to account for navigation + padding
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  };

  const scrollToMenuWithTab = (tab: string) => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const element = document.getElementById("menu");
      if (element) {
        const navHeight = 80; // Increased to account for navigation + padding
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Set hash after scroll completes
        setTimeout(() => {
          window.location.hash = `menu-${tab}`;
        }, 800);
      }
    });
  };

  const scrollToBarodaMenu = () => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const element = document.getElementById("baroda-menu");
      if (element) {
        const navHeight = 80; // Increased to account for navigation + padding
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src="/videos/hero-walk-in.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-5"></div>
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" data-testid="button-view-menu">
                <span className="relative mr-2">
                  <BookOpen className="h-5 w-5" />
                  <Utensils className="absolute -top-1 -right-1 h-3 w-3" />
                </span>
                Lollo Rosso
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
                onClick={() => scrollToBarodaMenu()}
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
                onClick={() => window.open("https://www.instagram.com/lollorossogoa/reels/", "_blank")}
                data-testid="menu-location-goa"
              >
                Goa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Tooltip open={tooltipOpen} onOpenChange={(open) => !open && setTooltipOpen(false)}>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/80 backdrop-blur-sm border-white/40 text-foreground hover:bg-background"
                data-testid="button-find-location"
                onClick={() => setTooltipOpen(!tooltipOpen)}
              >Explore Lolloccino</Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[200px] text-center text-xs sm:text-sm">
              <p>Stay tuned, something special is simmering!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
