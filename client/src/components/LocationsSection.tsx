import { LocationCard } from "./LocationCard";

import location1 from "@assets/stock_images/modern_restaurant_ex_f278a98c.jpg";
import location2 from "@assets/stock_images/modern_restaurant_ex_2872d1ef.jpg";
import location3 from "@assets/stock_images/modern_restaurant_ex_ae672835.jpg";
import location4 from "@assets/stock_images/modern_restaurant_ex_de10af84.jpg";

//todo: remove mock functionality
const locations = [
  {
    id: 1,
    name: "Bandra West",
    address: "123 Linking Road, Bandra West, Mumbai, Maharashtra 400050",
    phone: "+91 22 2640 5000",
    hours: "Mon-Sun: 12:00 PM - 11:00 PM",
    image: location1,
  },
  {
    id: 2,
    name: "Powai",
    address: "456 Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    phone: "+91 22 2570 3000",
    hours: "Mon-Sun: 12:00 PM - 11:00 PM",
    image: location2,
  },
  {
    id: 3,
    name: "Lower Parel",
    address: "789 High Street Phoenix, Lower Parel, Mumbai, Maharashtra 400013",
    phone: "+91 22 4918 6000",
    hours: "Mon-Sun: 12:00 PM - 11:30 PM",
    image: location3,
  },
  {
    id: 4,
    name: "Juhu",
    address: "321 Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049",
    phone: "+91 22 2660 4000",
    hours: "Mon-Sun: 12:00 PM - 11:00 PM",
    image: location4,
  },
];

export function LocationsSection() {
  return (
    <section id="locations" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-locations-title">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-locations-subtitle">
            Find your nearest Lollo Rosso location and experience exceptional dining
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
}
