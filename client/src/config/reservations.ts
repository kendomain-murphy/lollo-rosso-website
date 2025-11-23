import barodaImage from "@assets/0K4A1897_1763893027474.jpg";
import bodakdevImage from "@assets/LR_Bodakdev-2_1763893254032.jpg";

export interface RestaurantLocation {
  id: string;
  name: string;
  description: string;
  thumbnailImage: string;
  reservationUrl: string;
}

// Whitelist of allowed domains for reservation URLs
const ALLOWED_DOMAINS = [
  'tinyurl.com',
  'tiny.one',
];

export function isValidReservationUrl(url: string): boolean {
  if (!url) return false;
  
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

export const restaurantLocations: RestaurantLocation[] = [
  {
    id: "bodakdev-ahmedabad",
    name: "Bodakdev, Ahmedabad",
    description: "Experience Asian fusion in the heart of Ahmedabad",
    thumbnailImage: bodakdevImage,
    reservationUrl: "https://tinyurl.com/46fpmufr",
  },
  {
    id: "baroda",
    name: "Baroda",
    description: "Authentic flavors in a vibrant setting",
    thumbnailImage: barodaImage,
    reservationUrl: "https://tinyurl.com/56pjkufs",
  },
  {
    id: "vijay-cross-road",
    name: "Vijay Cross Road",
    description: "Exclusive vegetarian delights in a refined setting",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided - must be from tinyurl.com or tiny.one
  },
  {
    id: "adani-shantigram",
    name: "Adani Shantigram",
    description: "Outdoor seating with delightful breakfast offerings",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided - must be from tinyurl.com or tiny.one
  },
];

export function getLocationById(id: string): RestaurantLocation | undefined {
  return restaurantLocations.find(loc => loc.id === id);
}
