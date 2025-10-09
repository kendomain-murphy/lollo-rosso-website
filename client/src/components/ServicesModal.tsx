import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, PartyPopper, GraduationCap } from "lucide-react";

const services = [
  {
    id: "catering",
    title: "Catering Services",
    icon: UtensilsCrossed,
    shortDesc: "Elevate your events with our premium catering",
    fullDesc:
      "From intimate gatherings to large corporate events, our catering service brings the authentic flavors of Lollo Rosso to your venue. We offer customizable menus featuring our signature bowls, premium sushi platters, and artisanal dimsums.",
    features: [
      "Customizable menus for all occasions",
      "Fresh ingredients, prepared on-site",
      "Professional presentation and service",
      "Flexible serving options",
    ],
  },
  {
    id: "events",
    title: "Private Events",
    icon: PartyPopper,
    shortDesc: "Host unforgettable celebrations at our venues",
    fullDesc:
      "Create memorable experiences in our beautifully designed spaces. Whether it's a birthday, anniversary, or corporate gathering, we provide the perfect ambiance and exceptional cuisine for your special occasion.",
    features: [
      "Exclusive venue access",
      "Personalized menu planning",
      "Dedicated event coordinator",
      "Custom decorations available",
    ],
  },
  {
    id: "workshops",
    title: "Culinary Workshops",
    icon: GraduationCap,
    shortDesc: "Learn the art of Asian fusion cuisine",
    fullDesc:
      "Join our expert chefs for hands-on culinary workshops. Learn the techniques behind our signature dishes, from sushi rolling to dumpling folding. Perfect for team building or food enthusiasts.",
    features: [
      "Expert chef instructors",
      "Small group sessions",
      "Take-home recipe cards",
      "Complimentary tasting menu",
    ],
  },
];

export function ServicesModal() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const currentService = services.find((s) => s.id === selectedService);

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            data-testid="text-services-heading"
          >
            Our Services
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-services-subtitle"
          >
            Bringing exceptional experiences beyond our restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="hover-elevate cursor-pointer transition-all"
                onClick={() => setSelectedService(service.id)}
                data-testid={`card-service-${service.id}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" data-testid={`icon-${service.id}`} />
                    </div>
                  </div>
                  <h3
                    className="font-serif text-2xl font-semibold mb-3"
                    data-testid={`text-${service.id}-title`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-4"
                    data-testid={`text-${service.id}-desc`}
                  >
                    {service.shortDesc}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    data-testid={`button-learn-more-${service.id}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl" data-testid="dialog-service-details">
          {currentService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <currentService.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="font-serif text-3xl" data-testid="text-modal-title">
                    {currentService.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-foreground/70" data-testid="text-modal-description">
                  {currentService.fullDesc}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-4" data-testid="text-features-heading">
                  What We Offer
                </h4>
                <ul className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`text-feature-${index}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4" data-testid="text-contact-info">
                  Interested in booking? Contact us for more information and pricing.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    className="flex-1"
                    data-testid="button-contact-us"
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(null)}
                    data-testid="button-close-modal"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
