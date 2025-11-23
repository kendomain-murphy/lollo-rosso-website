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
    reservationUrl: "https://reservations.petpooja.com/form/d368eb99600297c3f7b55267a664b2f7d5428e49741b19c969e86c53c010bae0bb3e84384c4327823fe14add1d238c9a5c3ac983f315ee9b8c8eb8dd9340e05e7b8764e3f6d41705fa993dacda05581ea1cdf7326cc11af9d21aca125ea27d5f",
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
    thumbnailImage: vijayCrossRoadImage,
    reservationUrl: "https://tinyurl.com/626kz7f6",
  },
  {
    id: "adani-shantigram",
    name: "Adani Shantigram",
    description: "Outdoor seating with delightful breakfast offerings",
    thumbnailImage: adaniShantigramImage,
    reservationUrl: "https://tinyurl.com/8jy9urmb",
  },
];

export function getLocationById(id: string): RestaurantLocation | undefined {
  return restaurantLocations.find(loc => loc.id === id);
}
