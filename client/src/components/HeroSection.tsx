import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/elegant_dining_table_d6319dd3.jpg";
import logo from "@assets/lollo-rosso-logo_1760011336039.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Lollo Rosso" className="h-32 md:h-48 w-auto" data-testid="img-hero-logo" />
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
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
