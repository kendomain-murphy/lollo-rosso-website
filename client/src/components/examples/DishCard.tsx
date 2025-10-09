import { DishCard } from "../DishCard";
import { ThemeProvider } from "../ThemeProvider";
import sushiImage from "@assets/stock_images/fresh_sushi_platter__5ce826ac.jpg";

export default function DishCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-md">
        <DishCard
          name="Dragon Roll"
          description="Premium sushi roll with fresh salmon, avocado, and special sauce"
          price="₹899"
          image={sushiImage}
          category="sushi"
          hasVideo={true}
        />
      </div>
    </ThemeProvider>
  );
}
