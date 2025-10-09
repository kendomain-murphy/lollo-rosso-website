import { AwardCard } from "./AwardCard";

import award1 from "@assets/stock_images/gold_trophy_award_ce_a6e58e82.jpg";
import award2 from "@assets/stock_images/gold_trophy_award_ce_f9ab95cc.jpg";
import award3 from "@assets/stock_images/gold_trophy_award_ce_cf9ce8e9.jpg";

//todo: remove mock functionality
const awards = [
  {
    id: 1,
    year: "2024",
    title: "Best Asian Fusion Restaurant",
    organization: "Mumbai Food Awards",
    image: award1,
  },
  {
    id: 2,
    year: "2023",
    title: "Excellence in Sushi",
    organization: "Culinary Excellence India",
    image: award2,
  },
  {
    id: 3,
    year: "2023",
    title: "People's Choice Award",
    organization: "Times Food & Nightlife Awards",
    image: award3,
  },
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-awards-title">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-awards-subtitle">
            Honored to be recognized for our commitment to culinary excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {awards.map((award) => (
            <AwardCard key={award.id} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
}
