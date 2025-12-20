import { Award, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

import lolloccinoVideo from "@assets/Lolloccino_1766229590098.mp4";
import airportVideo from "@assets/LR_Airport_1766229590105.mp4";
import shantigramVideo from "@assets/LR_Shantigram_Opening_1766229590109.mp4";

import gyroBowlDoodle from "@assets/Gyro_bowl_TWI_1766231096307.png";
import dimsumsDoodle from "@assets/Korean_dimsums_TWI_1766231096317.png";
import saladDoodle from "@assets/Zucchini_salad_TWI_1766231096320.png";
import sushiDoodle from "@assets/Kombu_tempura_sushi_TWI_1766231398817.png";

const floatingDoodles = [
  { src: gyroBowlDoodle, className: "left-0 top-[10%]", delay: "0s", animation: "floatDoodle" },
  { src: dimsumsDoodle, className: "left-[5%] bottom-[15%]", delay: "1.5s", animation: "floatDoodle" },
  { src: saladDoodle, className: "right-0 top-[20%]", delay: "0.8s", animation: "floatDoodle" },
  { src: gyroBowlDoodle, className: "right-[8%] bottom-[10%]", delay: "2s", animation: "floatDoodle" },
  { src: sushiDoodle, className: "left-[2%] top-[45%]", delay: "0.5s", animation: "floatHorizontal" },
];

const videos = [
  { id: 0, src: lolloccinoVideo, title: "Lolloccino" },
  { id: 1, src: airportVideo, title: "SVP Airport" },
  { id: 2, src: shantigramVideo, title: "Shantigram Opening" },
];

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const handleVideoEnd = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
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
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 md:mb-6" data-testid="text-about-title">
            About Lollo Rosso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">Bringing authentic Global flavors to India with passion and precision</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          <div className="relative">
            {floatingDoodles.map((doodle, index) => (
              <img
                key={index}
                src={doodle.src}
                alt=""
                className={`absolute w-10 h-10 md:w-12 md:h-12 object-contain opacity-70 pointer-events-none hidden md:block ${doodle.className}`}
                style={{
                  animation: `${doodle.animation} ${doodle.animation === 'floatHorizontal' ? '6s' : '4s'} ease-in-out infinite`,
                  animationDelay: doodle.delay,
                  zIndex: 1,
                }}
              />
            ))}
            <style>{`
              @keyframes floatDoodle {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                25% { transform: translateY(-8px) rotate(3deg); }
                50% { transform: translateY(-4px) rotate(-2deg); }
                75% { transform: translateY(-10px) rotate(2deg); }
              }
              @keyframes floatHorizontal {
                0%, 100% { transform: translateX(0px) translateY(0px); }
                25% { transform: translateX(12px) translateY(-3px); }
                50% { transform: translateX(20px) translateY(0px); }
                75% { transform: translateX(10px) translateY(3px); }
              }
            `}</style>
            <div className="relative flex items-center justify-center" style={{ minHeight: "420px", zIndex: 10 }}>
              {videos.map((video, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + videos.length) % videos.length;
                const isNext = index === (activeIndex + 1) % videos.length;
                
                let transform = "translateX(100%) scale(0.7)";
                let zIndex = 0;
                let opacity = 0;
                
                if (isActive) {
                  transform = "translateX(0) scale(1)";
                  zIndex = 30;
                  opacity = 1;
                } else if (isPrev) {
                  transform = "translateX(-30%) scale(0.75)";
                  zIndex = 10;
                  opacity = 0.5;
                } else if (isNext) {
                  transform = "translateX(30%) scale(0.75)";
                  zIndex = 10;
                  opacity = 0.5;
                }

                return (
                  <div
                    key={video.id}
                    className="absolute w-[50%] sm:w-[45%] md:w-[55%] lg:w-[55%] max-w-[260px] cursor-pointer transition-all duration-500 ease-out"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                    }}
                    onClick={() => !isActive && setActiveIndex(index)}
                    data-testid={`video-card-${index}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: "9/16" }}>
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={video.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        data-testid={`video-player-${index}`}
                      />
                      {isActive && (
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                            <p className="text-sm font-semibold">{video.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                data-testid="button-video-prev"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                    data-testid={`dot-indicator-${index}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                data-testid="button-video-next"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6 mt-4 lg:mt-0">
            <div>
              <h3 className="font-serif font-bold mb-4 md:mb-6 text-2xl md:text-[28px]" data-testid="text-about-heading">Perfecting the Art of Fusion — A Journey Through World Flavors.</h3>
              <div className="space-y-4 md:space-y-5 text-muted-foreground">
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

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
