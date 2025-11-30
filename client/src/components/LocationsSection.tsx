import { LocationCard } from "./LocationCard";

import location1 from "@assets/LR_Bodakdev_Interior_1764489943807.jpg";
import location2 from "@assets/0K4A1895_1761491772704.jpg";
import location3 from "@assets/LR_SVP_Airport_1764490592610.jpg";
import location4 from "@assets/LR_Navrangpura_1764492819834.jpg";
import location5 from "@assets/LR_Shantigram_Interior_1764491162000.jpg";

const locations = [
  {
    id: 1,
    name: "Bodakdev, Ahmedabad",
    address: "Lollo Rosso, One World Capital, Off. Rajpath Rangoli Rd, Bodakdev, Ahmedabad, Gujarat",
    phone: "+91 79 4897 7329",
    hours: "Mon-Sun: 11:30 AM - 11:30 PM",
    image: location1,
    mapsUrl: "https://www.google.com/maps/search/Lollo+Rosso+Ahmedabad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7037779135!2d72.41493108359375!3d23.020181900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Baroda",
    address: "Lollo Rosso, Baroda, Gujarat",
    phone: "+91 87807 23783",
    hours: "Mon-Sun: 11:00 AM - 11:00 PM",
    image: location2,
    mapsUrl: "https://www.google.com/maps/search/Lollo+Rosso+Baroda",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118571.8291254677!2d73.10322308515625!3d22.30731710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc4c0a08d5f83%3A0x5c07f5ddfae2d71!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "SVP Airport",
    address: "Lollo Rosso, Sardar Vallabhbhai Patel International Airport, Ahmedabad",
    phone: "+91 92652 07250",
    hours: "Daily: 6:00 AM - 10:00 PM",
    image: location3,
    mapsUrl: "https://www.google.com/maps/search/Lollo+Rosso+SVP+Airport+Ahmedabad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.066743774816!2d72.62984007489855!3d23.07224791489968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3d5cb0f3a7%3A0x3d8f7c5c9ff0b0e6!2sSardar%20Vallabhbhai%20Patel%20International%20Airport!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },

  {
    id: 5,
    name: "Adani Shantigram",
    address: "Lollo Rosso, Lakeside, Adani Shantigram Township, Near Vaishnodevi Circle, SG Highway, Ahmedabad",
    phone: "+91 79 4897 7330",
    hours: "Mon-Sun: 9:30 AM - 11:00 PM",
    image: location5,
    mapsUrl: "https://www.google.com/maps/search/Lollo+Rosso+Adani+Shantigram+Ahmedabad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6882438461387!2d72.44964507489888!3d23.10082701508089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0d0d0d0d0d%3A0x0d0d0d0d0d0d0d0d!2sAdani%20Shantigram%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },
  {
    id: 4,
    name: "Vijay Cross Rd, Ahmedabad",
    address: "Lollo Rosso, Aeon Complex, near Vijay Cross Rd, Navrangpura, Ahmedabad",
    phone: "+91 79 4890 7329",
    hours: "Mon-Sun: 12:00 PM - 11:00 PM",
    image: location4,
    mapsUrl: "https://www.google.com/maps/search/Lollo+Rosso+Vijay+Cross+Road+Ahmedabad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9088543461387!2d72.54964507489888!3d23.03082701508089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f0b57fb0c7%3A0x9dcb81fd1e58c78e!2sVijay%20Cross%20Roads%2C%20Navrangpura%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
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
