import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination, Zoom } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/zoom';

import menuPage1 from "@assets/LR_Navrangpura_Menu_Pg1_1761485687851.jpg";
import menuPage2 from "@assets/LR_Navrangpura_Menu_Pg2_1761485687853.jpg";
import bodakdevPage1 from "@assets/LR-Bodakdev-Menu-01_1762864151527.jpg";
import bodakdevPage2 from "@assets/LR-Bodakdev-Menu-02_1762864151529.jpg";
import shantigramPage1 from "@assets/LR-Shantigram Menu_1_1762793197030.jpg";
import shantigramPage2 from "@assets/LR-Shantigram_Menu-2_1762793197033.jpg";

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("navrangpura");
  
  // Navrangpura menu state
  const navrangpuraSwiperRef = useRef<SwiperType | null>(null);
  const [navrangpuraCurrentPage, setNavrangpuraCurrentPage] = useState(0);
  const navrangpuraMenuPages = [menuPage1, menuPage2];
  
  // Bodakdev menu state
  const bodakdevSwiperRef = useRef<SwiperType | null>(null);
  const [bodakdevCurrentPage, setBodakdevCurrentPage] = useState(0);
  const bodakdevMenuPages = [bodakdevPage1, bodakdevPage2];
  
  // Shantigram menu state
  const shantigramSwiperRef = useRef<SwiperType | null>(null);
  const [shantigramCurrentPage, setShantigramCurrentPage] = useState(0);
  const shantigramMenuPages = [shantigramPage1, shantigramPage2];
  
  // Modal state
  const modalSwiperRef = useRef<SwiperType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPage, setModalPage] = useState(0);
  const [modalMenuPages, setModalMenuPages] = useState<string[]>([]);

  const openModal = (menuPages: string[], currentPage: number) => {
    setModalMenuPages(menuPages);
    setModalPage(currentPage);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#menu-navrangpura') {
        setActiveTab('navrangpura');
      } else if (hash === '#menu-bodakdev') {
        setActiveTab('bodakdev');
      } else if (hash === '#menu-adani-shantigram') {
        setActiveTab('adani-shantigram');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when tab is manually changed
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.location.hash = `menu-${value}`;
  };

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

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full" data-testid="tabs-menu-locations">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-list-menu">
            <TabsTrigger value="bodakdev" data-testid="tab-bodakdev">
              Bodakdev
            </TabsTrigger>
            <TabsTrigger value="navrangpura" data-testid="tab-navrangpura">
              Navrangpura
            </TabsTrigger>
            <TabsTrigger value="adani-shantigram" data-testid="tab-adani-shantigram">
              Shantigram
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bodakdev" data-testid="content-bodakdev">
            <div className="relative">
              <div className="relative rounded-lg overflow-visible shadow-2xl menu-swiper-container">
                <Swiper
                  effect={'flip'}
                  grabCursor={true}
                  modules={[EffectFlip, Navigation, Pagination]}
                  className="menu-swiper"
                  onSwiper={(swiper) => {
                    bodakdevSwiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setBodakdevCurrentPage(swiper.activeIndex);
                  }}
                  flipEffect={{
                    slideShadows: true,
                    limitRotation: true,
                  }}
                  style={{
                    minHeight: '400px',
                  }}
                >
                  {bodakdevMenuPages.map((page, index) => (
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
                          alt={`Bodakdev Menu Page ${index + 1}`}
                          className="w-full h-auto object-contain"
                          data-testid={`img-bodakdev-menu-page-${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  onClick={() => bodakdevSwiperRef.current?.slidePrev()}
                  className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-bodakdev-menu-prev"
                >
                  <ChevronLeft className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => bodakdevSwiperRef.current?.slideNext()}
                  className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-bodakdev-menu-next"
                >
                  <ChevronRight className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => openModal(bodakdevMenuPages, bodakdevCurrentPage)}
                  className="absolute top-2 right-2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all md:hidden"
                  data-testid="button-bodakdev-menu-maximize"
                  title="View full screen"
                >
                  <Maximize2 className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                {bodakdevMenuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => bodakdevSwiperRef.current?.slideTo(index)}
                    className={`transition-all ${
                      index === bodakdevCurrentPage
                        ? "w-8 md:w-12 h-2 md:h-3 bg-foreground rounded-full"
                        : "w-2 md:w-3 h-2 md:h-3 bg-foreground/40 rounded-full hover:bg-foreground/70"
                    }`}
                    data-testid={`button-bodakdev-menu-page-${index + 1}`}
                  >
                    <span className="sr-only">Page {index + 1}</span>
                  </button>
                ))}
              </div>

              <div className="text-center mt-4 md:mt-6 text-sm text-muted-foreground" data-testid="text-bodakdev-page-indicator">
                Page {bodakdevCurrentPage + 1} of {bodakdevMenuPages.length}
              </div>
            </div>
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
                    navrangpuraSwiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setNavrangpuraCurrentPage(swiper.activeIndex);
                  }}
                  flipEffect={{
                    slideShadows: true,
                    limitRotation: true,
                  }}
                  style={{
                    minHeight: '400px',
                  }}
                >
                  {navrangpuraMenuPages.map((page, index) => (
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
                          alt={`Navrangpura Menu Page ${index + 1}`}
                          className="w-full h-auto object-contain"
                          data-testid={`img-navrangpura-menu-page-${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  onClick={() => navrangpuraSwiperRef.current?.slidePrev()}
                  className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-navrangpura-menu-prev"
                >
                  <ChevronLeft className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => navrangpuraSwiperRef.current?.slideNext()}
                  className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-navrangpura-menu-next"
                >
                  <ChevronRight className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => openModal(navrangpuraMenuPages, navrangpuraCurrentPage)}
                  className="absolute top-2 right-2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all md:hidden"
                  data-testid="button-navrangpura-menu-maximize"
                  title="View full screen"
                >
                  <Maximize2 className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                {navrangpuraMenuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navrangpuraSwiperRef.current?.slideTo(index)}
                    className={`transition-all ${
                      index === navrangpuraCurrentPage
                        ? "w-8 md:w-12 h-2 md:h-3 bg-foreground rounded-full"
                        : "w-2 md:w-3 h-2 md:h-3 bg-foreground/40 rounded-full hover:bg-foreground/70"
                    }`}
                    data-testid={`button-navrangpura-menu-dot-${index}`}
                  />
                ))}
              </div>

              <div className="text-center mt-4 md:mt-6">
                <p className="text-sm md:text-base font-medium text-foreground" data-testid="text-navrangpura-page-indicator">
                  Page {navrangpuraCurrentPage + 1} of {navrangpuraMenuPages.length}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="adani-shantigram" data-testid="content-adani-shantigram">
            <div className="relative">
              <div className="relative rounded-lg overflow-visible shadow-2xl menu-swiper-container">
                <Swiper
                  effect={'flip'}
                  grabCursor={true}
                  modules={[EffectFlip, Navigation, Pagination]}
                  className="menu-swiper"
                  onSwiper={(swiper) => {
                    shantigramSwiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setShantigramCurrentPage(swiper.activeIndex);
                  }}
                  flipEffect={{
                    slideShadows: true,
                    limitRotation: true,
                  }}
                  style={{
                    minHeight: '400px',
                  }}
                >
                  {shantigramMenuPages.map((page, index) => (
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
                          alt={`Shantigram Menu Page ${index + 1}`}
                          className="w-full h-auto object-contain"
                          data-testid={`img-shantigram-menu-page-${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  onClick={() => shantigramSwiperRef.current?.slidePrev()}
                  className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-shantigram-menu-prev"
                >
                  <ChevronLeft className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => shantigramSwiperRef.current?.slideNext()}
                  className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
                  data-testid="button-shantigram-menu-next"
                >
                  <ChevronRight className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </button>

                <button
                  onClick={() => openModal(shantigramMenuPages, shantigramCurrentPage)}
                  className="absolute top-2 right-2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all md:hidden"
                  data-testid="button-shantigram-menu-maximize"
                  title="View full screen"
                >
                  <Maximize2 className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                {shantigramMenuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => shantigramSwiperRef.current?.slideTo(index)}
                    className={`transition-all ${
                      index === shantigramCurrentPage
                        ? "w-8 md:w-12 h-2 md:h-3 bg-foreground rounded-full"
                        : "w-2 md:w-3 h-2 md:h-3 bg-foreground/40 rounded-full hover:bg-foreground/70"
                    }`}
                    data-testid={`button-shantigram-menu-dot-${index}`}
                  />
                ))}
              </div>

              <div className="text-center mt-4 md:mt-6">
                <p className="text-sm md:text-base font-medium text-foreground" data-testid="text-shantigram-page-indicator">
                  Page {shantigramCurrentPage + 1} of {shantigramMenuPages.length}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] h-[95vh] p-0 gap-0 flex flex-col overflow-hidden" data-testid="dialog-menu-viewer">
          <DialogHeader className="sr-only">
            <DialogTitle>Menu Viewer</DialogTitle>
            <DialogDescription>View and zoom the menu. Pinch to zoom, swipe to navigate between pages.</DialogDescription>
          </DialogHeader>
          
          <div className="absolute top-2 right-2 z-50">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-xl hover:bg-white hover:scale-110 transition-all"
              data-testid="button-modal-close"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <Swiper
              effect={'flip'}
              grabCursor={true}
              zoom={true}
              modules={[EffectFlip, Navigation, Pagination, Zoom]}
              className="h-full w-full"
              initialSlide={modalPage}
              onSwiper={(swiper) => {
                modalSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setModalPage(swiper.activeIndex);
              }}
              flipEffect={{
                slideShadows: true,
                limitRotation: true,
              }}
            >
              {modalMenuPages.map((page, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container w-full h-full flex items-center justify-center bg-muted/20">
                    <img
                      src={page}
                      alt={`Menu Page ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      data-testid={`img-modal-menu-page-${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => modalSwiperRef.current?.slidePrev()}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
              data-testid="button-modal-prev"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-foreground" />
            </button>

            <button
              onClick={() => modalSwiperRef.current?.slideNext()}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
              data-testid="button-modal-next"
            >
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-foreground" />
            </button>
          </div>

          <div className="py-4 bg-background/95 backdrop-blur-sm border-t">
            <div className="flex justify-center gap-3">
              {modalMenuPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => modalSwiperRef.current?.slideTo(index)}
                  className={`transition-all ${
                    index === modalPage
                      ? "w-10 h-3 bg-foreground rounded-full"
                      : "w-3 h-3 bg-foreground/40 rounded-full hover:bg-foreground/70"
                  }`}
                  data-testid={`button-modal-dot-${index}`}
                />
              ))}
            </div>
            <p className="text-center mt-2 text-sm font-medium text-foreground" data-testid="text-modal-page-indicator">
              Page {modalPage + 1} of {modalMenuPages.length}
            </p>
            <p className="text-center mt-1 text-xs text-muted-foreground">
              Pinch to zoom • Swipe to navigate
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
