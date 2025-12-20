import barodaImage from "@assets/0K4A1897_1763893027474.jpg";
import bodakdevImage from "@assets/LR_Bodakdev-2_1763893254032.jpg";
import vijayCrossRoadImage from "@assets/LR_Navrangpura_1763894160041.jpg";
import adaniShantigramImage from "@assets/DSCF1135_1763894263112.jpeg";

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
  'reservations.petpooja.com',
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
    name: "Alembic City, Baroda",
    description: "Authentic flavors in a vibrant setting with exciting brunch and beverage selections.",
    thumbnailImage: barodaImage,
    reservationUrl: "https://tinyurl.com/56pjkufs",
  },
  {
    id: "vijay-cross-road",
    name: "Vijay Cross Road, Ahmedabad",
    description: "Exclusive vegetarian delights in a refined setting",
    thumbnailImage: vijayCrossRoadImage,
    reservationUrl: "https://tinyurl.com/626kz7f6",
  },
  {
    id: "adani-shantigram",
    name: "Adani Shantigram",
    description: "Outdoor seating with delightful breakfast and brunch offerings",
    thumbnailImage: adaniShantigramImage,
    reservationUrl: "https://tinyurl.com/8jy9urmb",
  },
];

export function getLocationById(id: string): RestaurantLocation | undefined {
  return restaurantLocations.find(loc => loc.id === id);
}
