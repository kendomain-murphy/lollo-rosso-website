import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@assets/LR_NewLogo_TP_ext_1761393901272.png";

export function ReservationNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-logo-home"
          >
            <img src={logo} alt="Lollo Rosso" className="h-10 w-auto" />
          </a>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              size="sm"
              data-testid="button-back-to-website"
            >
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Main Website
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
