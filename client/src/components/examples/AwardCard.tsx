import { AwardCard } from "../AwardCard";
import { ThemeProvider } from "../ThemeProvider";
import awardImage from "@assets/stock_images/gold_trophy_award_ce_a6e58e82.jpg";

export default function AwardCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-md">
        <AwardCard
          year="2024"
          title="Best Asian Fusion Restaurant"
          organization="Mumbai Food Awards"
          image={awardImage}
        />
      </div>
    </ThemeProvider>
  );
}
