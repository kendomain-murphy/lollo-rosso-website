import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import menuPage1 from "@assets/LR_Navrangpura_Menu_Pg1_1761485687851.jpg";
import menuPage2 from "@assets/LR_Navrangpura_Menu_Pg2_1761485687853.jpg";

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("navrangpura");
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const menuPages = [menuPage1, menuPage2];

  return (
    <section id="menu" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-menu-title">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-menu-subtitle">
            Explore our delicious selection at your nearest Ahmedabad location
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" data-testid="tabs-menu-locations">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-list-menu">
            <TabsTrigger value="bodakdev" data-testid="tab-bodakdev">
              Bodakdev
            </TabsTrigger>
            <TabsTrigger value="navrangpura" data-testid="tab-navrangpura">
              Navrangpura
            </TabsTrigger>
            <TabsTrigger value="adani-shantigram" data-testid="tab-adani-shantigram">
              Adani Shantigram
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bodakdev" data-testid="content-bodakdev">
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-bodakdev-title">
                Bodakdev Menu
              </h3>
              <p className="text-muted-foreground" data-testid="text-bodakdev-description">
                Coming soon - Full menu will be available shortly
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="navrangpura" data-testid="content-navrangpura">
            <div className="relative">
              <div className="relative rounded-lg overflow-visible shadow-2xl menu-swiper-container">
                <Swiper
                  effect={'flip'}
                  grabCursor={true}
                  modules={[EffectFlip, Navigation, Pagination]}
                  className="menu-swiper"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setCurrentPage(swiper.activeIndex);
                  }}
                  flipEffect={{
                    slideShadows: true,
                    limitRotation: true,
                  }}
                  style={{
                    minHeight: '400px',
                  }}
                >
                  {menuPages.map((page, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full bg-white rounded-lg shadow-xl overflow-y-auto min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
                        <div 
                          className="absolute inset-y-0 w-4 md:w-8 z-20 pointer-events-none"
                          style={{
                            right: index === 0 ? "0" : "auto",
                            left: index === 1 ? "0" : "auto",
                            background: index === 0 
                              ? "linear-gradient(to left, rgba(0,0,0,0.2), transparent)"
                              : "linear-gradient(to right, rgba(0,0,0,0.2), transparent)"
                          }}
                        />
                        <img
                          src={page}
                          alt={`Menu Page ${index + 1}`}
                          className="w-full h-auto object-contain"
                          data-testid={`img-menu-page-${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-menu-prev"
                >
                  <ChevronLeft className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-menu-next"
                >
                  <ChevronRight className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>
              </div>

              <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                {menuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => swiperRef.current?.slideTo(index)}
                    className={`transition-all ${
                      index === currentPage
                        ? "w-8 md:w-12 h-2 md:h-3 bg-foreground rounded-full"
                        : "w-2 md:w-3 h-2 md:h-3 bg-foreground/40 rounded-full hover:bg-foreground/70"
                    }`}
                    data-testid={`button-menu-dot-${index}`}
                  />
                ))}
              </div>

              <div className="text-center mt-4 md:mt-6">
                <p className="text-sm md:text-base font-medium text-foreground" data-testid="text-page-indicator">
                  Page {currentPage + 1} of {menuPages.length}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="adani-shantigram" data-testid="content-adani-shantigram">
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-adani-shantigram-title">
                Adani Shantigram Menu
              </h3>
              <p className="text-muted-foreground" data-testid="text-adani-shantigram-description">
                Coming soon - Full menu will be available shortly
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
