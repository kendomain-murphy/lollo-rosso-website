import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  videoUrl?: string;
  thumbnail: string;
  platform?: string;
}

export function TestimonialCard({ 
  name, 
  review, 
  rating, 
  videoUrl, 
  thumbnail,
  platform = "Instagram"
}: TestimonialCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate h-full flex flex-col" 
      data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-muted">
        {videoUrl ? (
          <video
            src={videoUrl}
            poster={thumbnail}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={thumbnail}
            alt={`${name}'s review`}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {platform}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < rating ? "text-primary" : "text-muted-foreground/30"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="mb-4">
          <Quote className="h-6 w-6 text-primary/40 mb-2" />
          <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-review-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {review}
          </p>
        </div>
        <div className="mt-auto pt-4 border-t">
          <p className="font-semibold" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </p>
        </div>
      </div>
    </Card>
  );
}
