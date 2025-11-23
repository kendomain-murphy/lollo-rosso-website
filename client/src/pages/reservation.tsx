import { useParams } from "wouter";
import { ReservationNavigation } from "@/components/ReservationNavigation";
import { getLocationById, isValidReservationUrl } from "@/config/reservations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function ReservationPage() {
  const params = useParams<{ location: string }>();
  const locationId = params.location;
  const location = locationId ? getLocationById(locationId) : undefined;
  
  const isUrlValid = location?.reservationUrl ? isValidReservationUrl(location.reservationUrl) : false;

  if (!location) {
    return (
      <div className="min-h-screen">
        <ReservationNavigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
          <Card className="p-8 max-w-md text-center">
            <h1 className="font-serif text-2xl font-bold mb-4">Location Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The reservation page you're looking for doesn't exist.
            </p>
            <Link href="/#reservations">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Locations
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  if (!location.reservationUrl || !isUrlValid) {
    return (
      <div className="min-h-screen">
        <ReservationNavigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
          <Card className="p-8 max-w-md text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="font-serif text-2xl font-bold mb-4">{location.name}</h1>
            <p className="text-muted-foreground mb-6">
              {!location.reservationUrl 
                ? "Online reservations for this location will be available soon. Please contact us directly."
                : "The reservation link for this location could not be verified. Please contact us directly."}
            </p>
            <Link href="/#reservations">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Locations
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ReservationNavigation />
      
      <div className="flex-1 flex flex-col">
        <div className="bg-muted/30 border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl font-bold" data-testid="text-reservation-location-name">
                {location.name}
              </h1>
              <p className="text-sm text-muted-foreground">Reserve your table</p>
            </div>
            <div className="flex gap-2">
              <Link href="/#reservations">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <a 
                href={location.reservationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-background">
          <iframe
            src={location.reservationUrl}
            title={`Reservations for ${location.name}`}
            className="w-full h-full absolute inset-0 border-0"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
            referrerPolicy="no-referrer"
            data-testid="iframe-reservation"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
