import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { restaurantLocations } from "@/config/reservations";
import { Calendar } from "lucide-react";

export function ReservationSection() {
  const handleReservation = (locationId: string, reservationUrl: string) => {
    if (!reservationUrl) {
      console.warn(`No reservation URL configured for ${locationId}`);
      return;
    }
    
    window.open(`/reserve/${locationId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservations" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-reservations-title">
            Your Table Awaits — Reserve Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-reservations-subtitle">
            Choose your preferred location and book your unforgettable dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurantLocations.map((location) => (
            <Card 
              key={location.id} 
              className="overflow-hidden hover-elevate active-elevate-2 transition-all"
              data-testid={`card-location-${location.id}`}
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                {location.thumbnailImage ? (
                  <img
                    src={location.thumbnailImage}
                    alt={location.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-location-${location.id}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/10">
                    <Calendar className="w-12 h-12 text-muted-foreground/40" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-location-name-${location.id}`}>
                  {location.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-location-description-${location.id}`}>
                  {location.description}
                </p>
                
                <Button
                  className="w-full"
                  onClick={() => handleReservation(location.id, location.reservationUrl)}
                  data-testid={`button-reserve-${location.id}`}
                  disabled={!location.reservationUrl}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Reserve Table
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
