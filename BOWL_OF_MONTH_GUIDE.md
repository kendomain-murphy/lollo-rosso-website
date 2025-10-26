# Bowl of the Month - Monthly Update Guide

This guide explains how to update the "Bowl of the Month" section on your Lollo Rosso website each month.

## Quick Update Steps

1. **Prepare Your New Content**
   - Take or select 1 video of the featured bowl
   - Take or select 1 image of the featured bowl
   - Write the dish names, descriptions, and prices

2. **Upload Your Media Files**
   - Navigate to the `attached_assets` folder in your project
   - Upload your video file (recommended: MP4 format)
   - Upload your image file (recommended: JPG or PNG format)
   - Note the exact filenames for the next step

3. **Update the Configuration File**
   - Open the file: `client/src/config/bowlOfTheMonth.ts`
   - Follow the instructions in the file to update:
     - Month and year
     - Video bowl details (name, description, price)
     - Image bowl details (name, description, price)
     - File paths for your uploaded media

4. **Import Your Image**
   - At the top of `bowlOfTheMonth.ts`, add an import for your new image:
   ```typescript
   import newBowlImage from "@assets/your-new-image.jpg";
   ```
   - Update the `imageBowl.image` field to use this import

5. **Update Video Path**
   - Update the `videoBowl.videoUrl` field with your new video filename:
   ```typescript
   videoUrl: "/videos/your-new-video.mp4"
   ```

## Example: Updating for February 2025

### Step 1: Prepare Content
- Video: Recording of Spicy Korean Bowl being prepared
- Image: Beautiful plated shot of Thai Basil Bowl
- Names and prices decided

### Step 2: Upload Files
- Upload `february-korean-bowl.mp4` to `attached_assets/`
- Upload `february-thai-bowl.jpg` to `attached_assets/`

### Step 3: Edit bowlOfTheMonth.ts

```typescript
// Update these at the top of the file
import febImage from "@assets/february-thai-bowl.jpg";

export const bowlOfTheMonthConfig = {
  month: "February",
  year: 2025,
  
  videoBowl: {
    id: "bowl-video-feb-2025",
    name: "Spicy Korean Bowl",
    description: "Korean-style rice bowl with gochujang chicken, kimchi, and sesame",
    price: "₹699",
    image: febImage, // Fallback thumbnail
    videoUrl: "/videos/february-korean-bowl.mp4",
    category: "bowl-of-month" as const,
    hasVideo: true,
  },
  
  imageBowl: {
    id: "bowl-image-feb-2025",
    name: "Thai Basil Bowl",
    description: "Fragrant Thai basil chicken with jasmine rice and vegetables",
    price: "₹649",
    image: febImage,
    category: "bowl-of-month" as const,
    hasVideo: false,
  }
};
```

### Step 4: Save and Test
- Save the file
- The website will automatically reload
- Check that both tiles display correctly
- Verify the video plays when clicked

## File Locations

- **Configuration File**: `client/src/config/bowlOfTheMonth.ts`
- **Upload Media Here**: `attached_assets/` folder
- **Display Component**: `client/src/components/DishGallery.tsx` (no changes needed)

## Tips

- **Video Format**: Use MP4 for best browser compatibility
- **Video Size**: Keep videos under 50MB for faster loading
- **Image Size**: Recommended 1200x800 pixels or similar aspect ratio
- **Testing**: Always test on mobile and desktop after updating

## Troubleshooting

**Video not playing?**
- Check the video file is in MP4 format
- Verify the filename in `videoUrl` matches the uploaded file exactly
- Ensure the video path starts with `/videos/`

**Image not showing?**
- Check you've imported the image at the top of the file
- Verify the import path matches your uploaded filename
- Use `@assets/` prefix for files in the attached_assets folder

**Changes not appearing?**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the developer console for any error messages
- Verify you saved the bowlOfTheMonth.ts file

## Need Help?

If you encounter any issues, check:
1. File paths are correct (case-sensitive!)
2. Filenames match exactly (including extensions)
3. Files are uploaded to the correct folder
4. The configuration file syntax is correct (commas, quotes, etc.)
