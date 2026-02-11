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
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = async () => {
    if (videoRef.current && !isPlaying) {
      setIsLoading(true);
      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Video play failed:", error);
        setIsLoading(false);
      }
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        playVideo();
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
            onPlay={() => {
              setIsPlaying(true);
              setIsLoading(false);
            }}
            onPause={() => setIsPlaying(false)}
            onCanPlay={() => setIsLoading(false)}
            onWaiting={() => setIsLoading(true)}
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
                playVideo();
              }}
              disabled={isLoading}
              className="bg-background/95 backdrop-blur-sm rounded-full p-6 hover-elevate active-elevate-2 transition-transform hover:scale-110 pointer-events-auto disabled:opacity-70"
              data-testid={`button-play-${id}`}
            >
              {isLoading ? (
                <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <Play className="h-12 w-12 text-primary fill-primary" />
              )}
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
