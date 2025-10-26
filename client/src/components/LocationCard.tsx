import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  mapsUrl: string;
  embedUrl: string;
}

export function LocationCard({ name, address, phone, hours, image, mapsUrl, embedUrl }: LocationCardProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleGetDirections = () => {
    if (isMobile) {
      setIsMapOpen(true);
    } else {
      setIsMapOpen(true);
    }
  };

  const openInGoogleMaps = () => {
    window.open(mapsUrl, "_blank");
  };

  return (
    <>
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

      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]" data-testid={`dialog-map-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl" data-testid={`text-map-title-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name} Location
            </DialogTitle>
            <DialogDescription data-testid={`text-map-description-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {address}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${name}`}
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={openInGoogleMaps}
                className="flex-1"
                variant="default"
                data-testid={`button-open-maps-${name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in Google Maps
              </Button>
              
              {isMobile && (
                <Button
                  onClick={openInGoogleMaps}
                  className="flex-1"
                  variant="outline"
                  data-testid={`button-open-maps-mobile-${name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  Open in Maps App
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
