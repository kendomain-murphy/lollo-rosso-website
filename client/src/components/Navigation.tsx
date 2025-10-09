import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-2xl font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="button-logo"
          >
            Lollo Rosso
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-menu"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-locations"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-awards"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex"
              data-testid="button-order-now"
            >
              Order Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-menu-mobile"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-locations-mobile"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-awards-mobile"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
              data-testid="button-order-now-mobile"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
