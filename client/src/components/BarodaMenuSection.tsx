import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
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

export function BarodaMenuSection() {
  const [activeTab, setActiveTab] = useState("main-menu");
  
  // Main Menu state (placeholder - will be populated when images are uploaded)
  const mainMenuSwiperRef = useRef<SwiperType | null>(null);
  const [mainMenuCurrentPage, setMainMenuCurrentPage] = useState(0);
  const mainMenuPages: string[] = []; // Will be populated with uploaded images
  
  // Lolloccino-Beverages state (placeholder)
  const lolloccinoSwiperRef = useRef<SwiperType | null>(null);
  const [lolloccinoCurrentPage, setLolloccinoCurrentPage] = useState(0);
  const lolloccinoPages: string[] = []; // Will be populated with uploaded images
  
  // Afternoon Selection state (placeholder)
  const afternoonSwiperRef = useRef<SwiperType | null>(null);
  const [afternoonCurrentPage, setAfternoonCurrentPage] = useState(0);
  const afternoonPages: string[] = []; // Will be populated with uploaded images
  
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

  return (
    <section id="baroda-menu" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-baroda-menu-title">
            Baroda Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-baroda-menu-subtitle">
            Explore our delicious selection at Lollo Rosso Baroda
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" data-testid="tabs-baroda-menu">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-list-baroda">
            <TabsTrigger value="main-menu" data-testid="tab-baroda-main-menu">
              Main Menu
            </TabsTrigger>
            <TabsTrigger value="lolloccino-beverages" data-testid="tab-baroda-lolloccino">
              Lolloccino-Beverages
            </TabsTrigger>
            <TabsTrigger value="afternoon-selection" data-testid="tab-baroda-afternoon">
              Afternoon Selection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main-menu" data-testid="content-baroda-main-menu">
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-baroda-main-menu-title">
                Main Menu
              </h3>
              <p className="text-muted-foreground" data-testid="text-baroda-main-menu-description">
                Menu images will be available shortly
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="lolloccino-beverages" data-testid="content-baroda-lolloccino">
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-baroda-lolloccino-title">
                Lolloccino-Beverages
              </h3>
              <p className="text-muted-foreground" data-testid="text-baroda-lolloccino-description">
                Menu images will be available shortly
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="afternoon-selection" data-testid="content-baroda-afternoon">
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-baroda-afternoon-title">
                Afternoon Selection
              </h3>
              <p className="text-muted-foreground" data-testid="text-baroda-afternoon-description">
                Menu images will be available shortly
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-full max-h-full w-screen h-screen m-0 p-0 bg-black/95">
          <DialogHeader className="sr-only">
            <DialogTitle>Menu Viewer</DialogTitle>
            <DialogDescription>Swipe to navigate pages, pinch to zoom</DialogDescription>
          </DialogHeader>
          
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white"
            data-testid="button-modal-close"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>

          <div className="h-full flex flex-col">
            <Swiper
              effect={'flip'}
              grabCursor={true}
              zoom={true}
              modules={[EffectFlip, Navigation, Pagination, Zoom]}
              className="menu-modal-swiper flex-1"
              onSwiper={(swiper) => {
                modalSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setModalPage(swiper.activeIndex);
              }}
              initialSlide={modalPage}
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
                      data-testid={`img-modal-baroda-menu-page-${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => modalSwiperRef.current?.slidePrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white"
              data-testid="button-modal-prev"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-foreground" />
            </button>

            <button
              onClick={() => modalSwiperRef.current?.slideNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white"
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
