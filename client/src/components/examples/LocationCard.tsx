import { LocationCard } from "../LocationCard";
import { ThemeProvider } from "../ThemeProvider";
import locationImage from "@assets/stock_images/modern_restaurant_ex_f278a98c.jpg";

export default function LocationCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-md">
        <LocationCard
          name="Bandra West"
          address="123 Linking Road, Bandra West, Mumbai, Maharashtra 400050"
          phone="+91 22 2640 5000"
          hours="Mon-Sun: 12:00 PM - 11:00 PM"
          image={locationImage}
        />
      </div>
    </ThemeProvider>
  );
}
