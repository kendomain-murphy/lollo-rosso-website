import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function HeroSection() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMenuWithTab = (tab: string) => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Use multiple checks to ensure scroll completes
      const setHashWhenReady = (attempts = 0) => {
        if (attempts > 20) {
          // Fallback: set hash anyway after max attempts
          window.location.hash = `menu-${tab}`;
          return;
        }
        
        // Check if element is in viewport
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
        
        if (isVisible) {
          window.location.hash = `menu-${tab}`;
        } else {
          // Check again in 100ms
          setTimeout(() => setHashWhenReady(attempts + 1), 100);
        }
      };
      
      // Start checking after initial delay
      setTimeout(() => setHashWhenReady(), 300);
    }
  };

  const scrollToBarodaMenu = () => {
    const element = document.getElementById("baroda-menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          >Explore Lolloccino</Button>
        </div>
      </div>
    </section>
  );
}
