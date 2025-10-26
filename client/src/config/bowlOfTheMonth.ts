/**
 * BOWL OF THE MONTH CONFIGURATION
 * 
 * Update this file monthly to change the featured bowls.
 * For detailed instructions, see: BOWL_OF_MONTH_GUIDE.md
 * 
 * HOW TO UPDATE:
 * 1. Update the 'month' and 'year' fields
 * 2. For the video tile:
 *    - Update 'name', 'description', 'price'
 *    - Replace the video file in attached_assets/ folder
 *    - Update 'videoUrl' with the new video filename
 * 3. For the image tile:
 *    - Update 'name', 'description', 'price'
 *    - Replace the image file in attached_assets/ folder
 *    - Update the import path for the image
 * 
 * EXAMPLE: To update for February 2025
 * - Change month: "February"
 * - Change year: 2025
 * - Upload new video to attached_assets/february_bowl.mp4
 * - Upload new image to attached_assets/february_bowl.jpg
 * - Update the paths below
 */

import bowl1 from "@assets/stock_images/asian_rice_bowl_heal_9c81535a.jpg";
import bowl2 from "@assets/stock_images/asian_rice_bowl_heal_a1294d9c.jpg";

export const bowlOfTheMonthConfig = {
  // Update these each month
  month: "January",
  year: 2025,
  
  // Tile 1: Video Bowl
  videoBowl: {
    id: "bowl-video-jan-2025",
    name: "Teriyaki Chicken Bowl",
    description: "Grilled teriyaki chicken with fresh vegetables, edamame, and sesame rice",
    price: "₹649",
    image: bowl1, // Fallback thumbnail
    videoUrl: "/videos/bowl-of-month-jan.mp4", // Update this path to your video file
    category: "bowl-of-month" as const,
    hasVideo: true,
  },
  
  // Tile 2: Image Bowl
  imageBowl: {
    id: "bowl-image-jan-2025",
    name: "Salmon Poke Bowl",
    description: "Fresh salmon sashimi, avocado, edamame, cucumber with ponzu dressing",
    price: "₹749",
    image: bowl2, // Update this import to your new image
    category: "bowl-of-month" as const,
    hasVideo: false,
  }
};

/**
 * MONTHLY UPDATE CHECKLIST:
 * 
 * □ Update month and year
 * □ Upload new video to attached_assets/
 * □ Upload new image to attached_assets/
 * □ Update videoBowl.name
 * □ Update videoBowl.description
 * □ Update videoBowl.price
 * □ Update videoBowl.videoUrl path
 * □ Import new image at top of file
 * □ Update imageBowl.name
 * □ Update imageBowl.description
 * □ Update imageBowl.price
 * □ Update imageBowl.image to use new import
 * □ Test both tiles display correctly
 * □ Verify video plays properly
 */
