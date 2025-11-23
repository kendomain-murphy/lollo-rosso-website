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
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided - must be from tinyurl.com or tiny.one
  },
  {
    id: "baroda",
    name: "Baroda",
    description: "Authentic flavors in a vibrant setting",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided - must be from tinyurl.com or tiny.one
  },
  {
    id: "svp-airport",
    name: "SVP Airport",
    description: "Quick bites before your journey",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided - must be from tinyurl.com or tiny.one
  },
  {
    id: "goa",
    name: "Goa",
    description: "Coastal dining with Asian flair",
    thumbnailImage: "", // Will be updated with actual image
    reservationUrl: "", // TinyURL to be provided - must be from tinyurl.com or tiny.one
  },
];

export function getLocationById(id: string): RestaurantLocation | undefined {
  return restaurantLocations.find(loc => loc.id === id);
}
