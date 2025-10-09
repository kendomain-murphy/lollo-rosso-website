import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface AwardCardProps {
  year: string;
  title: string;
  organization: string;
  image: string;
}

export function AwardCard({ year, title, organization, image }: AwardCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-award-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6 text-center">
        <div className="flex justify-center mb-3">
          <Trophy className="h-8 w-8 text-primary" />
        </div>
        <div className="text-sm font-semibold text-primary mb-2" data-testid={`text-award-year-${title.toLowerCase().replace(/\s+/g, '-')}`}>{year}</div>
        <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-award-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
        <p className="text-sm text-muted-foreground" data-testid={`text-award-org-${title.toLowerCase().replace(/\s+/g, '-')}`}>{organization}</p>
      </div>
    </Card>
  );
}
