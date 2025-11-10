import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

interface TestimonialCardProps {
  id: number;
  videoUrl?: string;
  thumbnail: string;
  platform?: string;
}

export function TestimonialCard({ 
  id,
  videoUrl, 
  thumbnail,
  platform = "Instagram"
}: TestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Card 
      className="overflow-hidden hover-elevate h-full relative group" 
      data-testid={`card-testimonial-${id}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-muted">
        {videoUrl ? (
          <>
            <video
              src={videoUrl}
              poster={thumbnail}
              className="w-full h-full object-cover"
              playsInline
              preload="metadata"
              onPlay={handlePlay}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/30">
                <button
                  onClick={(e) => {
                    const video = e.currentTarget.parentElement?.previousElementSibling as HTMLVideoElement;
                    video?.play();
                  }}
                  className="bg-background/95 backdrop-blur-sm rounded-full p-6 hover-elevate active-elevate-2 transition-transform hover:scale-110"
                  data-testid={`button-play-${id}`}
                >
                  <Play className="h-12 w-12 text-primary fill-primary" />
                </button>
              </div>
            )}
          </>
        ) : (
          <img
            src={thumbnail}
            alt="Video testimonial"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {platform}
        </div>
      </div>
    </Card>
  );
}
