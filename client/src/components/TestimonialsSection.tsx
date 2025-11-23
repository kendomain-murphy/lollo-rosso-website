import { useRef } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    videoUrl: "/videos/testimonials/testimonial-1.mp4",
    thumbnail: "/videos/testimonials/posters/testimonial-1.jpg",
    platform: "Instagram",
  },
  {
    id: 2,
    videoUrl: "/videos/testimonials/airport-testimonial.mp4",
    thumbnail: "/videos/testimonials/posters/airport-testimonial.jpg",
    platform: "Instagram",
  },
  {
    id: 3,
    videoUrl: "/videos/testimonials/kids-testimonial-1.mp4",
    thumbnail: "/videos/testimonials/posters/kids-testimonial-1.jpg",
    platform: "Google",
  },
  {
    id: 4,
    videoUrl: "/videos/testimonials/kids-testimonial-2.mp4",
    thumbnail: "/videos/testimonials/posters/kids-testimonial-2.jpg",
    platform: "Instagram",
  },
  {
    id: 5,
    videoUrl: "/videos/testimonials/morning-afternoon-night.mp4",
    thumbnail: "/videos/testimonials/posters/morning-afternoon-night.jpg",
    platform: "Instagram",
  },
];

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-title">
            Love ❤️ from our guests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            See what our customers are saying about their Lollo Rosso experience
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-10 px-4">
            <Button
              variant="outline"
              size="icon"
              className="pointer-events-auto rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
              onClick={() => swiperRef.current?.slidePrev()}
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="pointer-events-auto rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
              onClick={() => swiperRef.current?.slideNext()}
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
