import { Play, Award, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    console.log("Playing about us video");
  };

  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence across India",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Trained in authentic Asian culinary traditions",
    },
    {
      icon: Heart,
      title: "Fresh Ingredients",
      description: "Sourced daily from premium suppliers",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            About Lollo Rosso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">Bringing authentic Asian flavors to India with passion and precision</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card">
            {!isVideoPlaying ? (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="group"
                    data-testid="button-play-about-video"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-10 w-10 text-primary-foreground fill-current ml-1" />
                    </div>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-semibold">Watch Our Story</p>
                    <p className="text-xs text-muted-foreground">Discover the journey of Lollo Rosso</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <div className="text-center p-8">
                  <Play className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground" data-testid="text-video-placeholder">
                    Video player would appear here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload your restaurant video to showcase your story
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-bold mb-4 text-[28px]" data-testid="text-about-heading">Perfecting the Art of Fusion — A Journey Through World Flavors.</h3>
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="text-about-description-1">Founded with a passion for authentic Asian cuisine, Lollo Rosso has become India's premier destination for exquisite bowl meals, sushi, and dimsums. Our journey began with a simple vision: to bring the diverse flavors of Asia to one exceptional dining experience.</p>
                <p data-testid="text-about-description-2">
                  Each dish is crafted with meticulous attention to detail, using traditional techniques 
                  passed down through generations, combined with contemporary culinary innovation. We 
                  source only the freshest ingredients to ensure every meal is a celebration of flavor.
                </p>
                <p data-testid="text-about-description-3">Today, with multiple locations across Ahmedabad & Baroda we continue to serve thousands of guests who appreciate the artistry and authenticity of Global fusion cuisine.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-about-feature-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-serif text-xl font-bold mb-2" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
