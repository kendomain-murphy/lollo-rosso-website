import { useParams } from "wouter";
import { ReservationNavigation } from "@/components/ReservationNavigation";
import { getLocationById, isValidReservationUrl } from "@/config/reservations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
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
        <div className="flex items-center justify-center min-h-screen px-6">
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
        <div className="flex items-center justify-center min-h-screen px-6">
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
      <div className="flex-1 flex flex-col pt-16">
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
