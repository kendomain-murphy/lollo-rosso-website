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

import thumb1 from "@assets/stock_images/modern_restaurant_ex_f278a98c.jpg";
import thumb2 from "@assets/stock_images/modern_restaurant_ex_2872d1ef.jpg";
import thumb3 from "@assets/stock_images/modern_restaurant_ex_ae672835.jpg";
import thumb4 from "@assets/stock_images/modern_restaurant_ex_de10af84.jpg";
import thumb5 from "@assets/stock_images/fresh_sushi_platter__5ce826ac.jpg";

const testimonials = [
  {
    id: 1,
    thumbnail: thumb1,
    platform: "Instagram",
  },
  {
    id: 2,
    thumbnail: thumb2,
    platform: "Instagram",
  },
  {
    id: 3,
    thumbnail: thumb3,
    platform: "Google",
  },
  {
    id: 4,
    thumbnail: thumb4,
    platform: "Zomato",
  },
  {
    id: 5,
    thumbnail: thumb5,
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
