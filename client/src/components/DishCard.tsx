import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface DishCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: "bowls" | "sushi" | "dimsums" | "bowl-of-month";
  hasVideo?: boolean;
}

export function DishCard({ name, description, price, image, hasVideo }: DishCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-transform duration-300 hover:scale-[1.02]" data-testid={`card-dish-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {hasVideo && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] hover:bg-background/30 transition-colors group"
            onClick={() => console.log(`Play video for ${name}`)}
            data-testid={`button-play-video-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-primary-foreground fill-current ml-1" />
            </div>
          </button>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold" data-testid={`text-dish-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</h3>
          <span className="text-lg font-semibold text-primary" data-testid={`text-dish-price-${name.toLowerCase().replace(/\s+/g, '-')}`}>{price}</span>
        </div>
        <p className="text-sm text-muted-foreground" data-testid={`text-dish-description-${name.toLowerCase().replace(/\s+/g, '-')}`}>{description}</p>
      </div>
    </Card>
  );
}
