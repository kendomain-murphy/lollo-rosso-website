import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

export function LocationCard({ name, address, phone, hours, image }: LocationCardProps) {
  const handleGetDirections = () => {
    console.log(`Getting directions to ${name}`);
  };

  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-location-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-serif text-2xl font-bold" data-testid={`text-location-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</h3>
        
        <div className="space-y-3">
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground" data-testid={`text-location-address-${name.toLowerCase().replace(/\s+/g, '-')}`}>{address}</p>
          </div>
          
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <a
              href={`tel:${phone}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-location-phone-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {phone}
            </a>
          </div>
          
          <div className="flex gap-3">
            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground" data-testid={`text-location-hours-${name.toLowerCase().replace(/\s+/g, '-')}`}>{hours}</p>
          </div>
        </div>

        <Button
          onClick={handleGetDirections}
          className="w-full"
          data-testid={`button-directions-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Get Directions
        </Button>
      </div>
    </Card>
  );
}
