import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "@assets/LR_NewLogo_TP_ext_1761393901272.png";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-card border-t py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Lollo Rosso" className="h-16 w-auto mb-4" data-testid="img-footer-logo" />
            <p className="text-sm text-muted-foreground mb-4">
              Experience the finest Asian fusion cuisine with bowl meals, sushi, and dimsums.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="button-instagram"
              >
                <a
                  href="https://www.instagram.com/lollorossoindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="button-facebook"
              >
                <a
                  href="https://www.facebook.com/lollorossoahmedabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-quick-links">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-menu"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("locations")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-locations"
                >
                  Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("awards")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-awards"
                >Testimonials</button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reservations")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-reservations"
                >Reserve Table</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+912226405000"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >+91 79 4897 7329</a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@lollorosso.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >info@lollorosso.com</a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Ahmedabad, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-hours">Opening Hours</h4>
            <div className="flex gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>Monday - Sunday</p>
                <p className="font-medium">12:00 PM - 11:00 PM</p>
              </div>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <label htmlFor="newsletter-email" className="text-sm font-medium mb-2 block">
                Newsletter
              </label>
              <div className="flex gap-2">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-newsletter-email"
                />
                <Button type="submit" data-testid="button-newsletter-submit">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Lollo Rosso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
