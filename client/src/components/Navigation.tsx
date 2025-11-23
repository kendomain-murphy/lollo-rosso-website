import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@assets/LR_NewLogo_TP_ext_1761393901272.png";

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
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="button-logo"
          >
            <img src={logo} alt="Lollo Rosso" className="h-10 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-menu"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("reservations")}
              className="hover:text-primary transition-colors"
              title="Reserve Table"
              data-testid="link-reservations"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-locations"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-testimonials"
            >
              Testimonials
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
              asChild
              className="hidden md:inline-flex"
              data-testid="button-order-now"
            >
              <a 
                href="https://www.zomato.com/ahmedabad/lollo-rosso-bodakdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
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
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-menu-mobile"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("reservations")}
              className="flex items-center w-full text-left py-2 hover:text-primary transition-colors"
              title="Reserve Table"
              data-testid="link-reservations-mobile"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              <span>Reserve Table</span>
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-locations-mobile"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-testimonials-mobile"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              asChild
              className="w-full"
              data-testid="button-order-now-mobile"
            >
              <a 
                href="https://www.zomato.com/ahmedabad/lollo-rosso-bodakdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
