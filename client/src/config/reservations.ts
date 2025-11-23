export interface RestaurantLocation {
  id: string;
  name: string;
  description: string;
  thumbnailImage: string;
  reservationUrl: string;
}

export const restaurantLocations: RestaurantLocation[] = [
  {
    id: "bodakdev-ahmedabad",
    name: "Bodakdev, Ahmedabad",
    description: "Experience Asian fusion in the heart of Ahmedabad",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided
  },
  {
    id: "baroda",
    name: "Baroda",
    description: "Authentic flavors in a vibrant setting",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided
  },
  {
    id: "svp-airport",
    name: "SVP Airport",
    description: "Quick bites before your journey",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided
  },
  {
    id: "goa",
    name: "Goa",
    description: "Coastal dining with Asian flair",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided
  },
];

export function getLocationById(id: string): RestaurantLocation | undefined {
  return restaurantLocations.find(loc => loc.id === id);
}
