import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <Card 
      className="overflow-hidden hover-elevate h-full relative group" 
      data-testid={`card-testimonial-${id}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-muted">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={thumbnail}
            className="w-full h-full object-cover cursor-pointer"
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={handleVideoClick}
            data-testid={`video-${id}`}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={thumbnail}
            alt="Video testimonial"
            className="w-full h-full object-cover"
          />
        )}

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/30 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                videoRef.current?.play();
              }}
              className="bg-background/95 backdrop-blur-sm rounded-full p-6 hover-elevate active-elevate-2 transition-transform hover:scale-110 pointer-events-auto"
              data-testid={`button-play-${id}`}
            >
              <Play className="h-12 w-12 text-primary fill-primary" />
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
