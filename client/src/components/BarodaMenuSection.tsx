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

import mainMenuPage1 from "@assets/LR-Baroda-Menu-01_1763295173582.jpg";
import mainMenuPage2 from "@assets/LR-Baroda-Menu-02_1763295173591.jpg";
import lolloccinoPage1 from "@assets/LR-Baroda-Beverage Menu-01_1763897205211.jpg";
import lolloccinoPage2 from "@assets/LR-Baroda-Beverage Menu-02_1763897205209.jpg";
import afternoonPage1 from "@assets/LR-Baroda-Afternoon Menu-01_1762864669895.jpg";
import afternoonPage2 from "@assets/LR-Baroda-Afternoon Menu-02_1762864669893.jpg";

export function BarodaMenuSection() {
  const [activeTab, setActiveTab] = useState("main-menu");
  
  // Main Menu state
  const mainMenuSwiperRef = useRef<SwiperType | null>(null);
  const [mainMenuCurrentPage, setMainMenuCurrentPage] = useState(0);
  const mainMenuPages: string[] = [mainMenuPage1, mainMenuPage2];
  
  // Lolloccino-Beverages state
  const lolloccinoSwiperRef = useRef<SwiperType | null>(null);
  const [lolloccinoCurrentPage, setLolloccinoCurrentPage] = useState(0);
  const lolloccinoPages: string[] = [lolloccinoPage1, lolloccinoPage2];
  
  // Afternoon Selection state
  const afternoonSwiperRef = useRef<SwiperType | null>(null);
  const [afternoonCurrentPage, setAfternoonCurrentPage] = useState(0);
  const afternoonPages: string[] = [afternoonPage1, afternoonPage2];
  
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

  // Update hash when tab is manually changed
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.location.hash = `baroda-menu-${value}`;
  };

  // Render menu viewer or placeholder
  const renderMenuViewer = (
    menuPages: string[],
    swiperRef: React.MutableRefObject<SwiperType | null>,
    currentPage: number,
    setCurrentPage: (page: number) => void,
    title: string,
    testIdPrefix: string
  ) => {
    if (menuPages.length === 0) {
      return (
        <Card className="p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4" data-testid={`text-${testIdPrefix}-title`}>
            {title}
          </h3>
          <p className="text-muted-foreground" data-testid={`text-${testIdPrefix}-description`}>
            Menu images will be available shortly
          </p>
        </Card>
      );
    }

    return (
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
                      left: index === menuPages.length - 1 ? "0" : "auto",
                      background: index === 0 
                        ? "linear-gradient(to left, rgba(0,0,0,0.2), transparent)"
                        : index === menuPages.length - 1
                        ? "linear-gradient(to right, rgba(0,0,0,0.2), transparent)"
                        : "none"
                    }}
                  />
                  <img
                    src={page}
                    alt={`${title} Page ${index + 1}`}
                    className="w-full h-auto object-contain"
                    data-testid={`img-${testIdPrefix}-page-${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
            data-testid={`button-${testIdPrefix}-prev`}
          >
            <ChevronLeft className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all"
            data-testid={`button-${testIdPrefix}-next`}
          >
            <ChevronRight className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
          </button>

          <button
            onClick={() => openModal(menuPages, currentPage)}
            className="absolute top-2 right-2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all md:hidden"
            data-testid={`button-${testIdPrefix}-maximize`}
            title="View full screen"
          >
            <Maximize2 className="h-5 w-5 text-foreground" />
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
              data-testid={`button-${testIdPrefix}-dot-${index}`}
            />
          ))}
        </div>

        <div className="text-center mt-4 md:mt-6">
          <p className="text-sm md:text-base font-medium text-foreground" data-testid={`text-${testIdPrefix}-page-indicator`}>
            Page {currentPage + 1} of {menuPages.length}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="baroda-menu" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-baroda-menu-title">
            Bodakdev, Ahmedabad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[16px]" data-testid="text-baroda-menu-subtitle">Explore our delicious selection at Lollo Rosso Bodakdev. Savor our thoughtfully curated menu, perfectly complemented by signature beverages from Lolloccino.</p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full" data-testid="tabs-baroda-menu">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-list-baroda">
            <TabsTrigger value="main-menu" data-testid="tab-baroda-main-menu">
              Main Menu
            </TabsTrigger>
            <TabsTrigger value="lolloccino-beverages" data-testid="tab-baroda-lolloccino">Lolloccino</TabsTrigger>
            <TabsTrigger value="afternoon-selection" data-testid="tab-baroda-afternoon">Midday Menu</TabsTrigger>
          </TabsList>

          <TabsContent value="main-menu" data-testid="content-baroda-main-menu">
            {renderMenuViewer(
              mainMenuPages,
              mainMenuSwiperRef,
              mainMenuCurrentPage,
              setMainMenuCurrentPage,
              "Main Menu",
              "baroda-main-menu"
            )}
          </TabsContent>

          <TabsContent value="lolloccino-beverages" data-testid="content-baroda-lolloccino">
            {renderMenuViewer(
              lolloccinoPages,
              lolloccinoSwiperRef,
              lolloccinoCurrentPage,
              setLolloccinoCurrentPage,
              "Lolloccino",
              "baroda-lolloccino"
            )}
          </TabsContent>

          <TabsContent value="afternoon-selection" data-testid="content-baroda-afternoon">
            {renderMenuViewer(
              afternoonPages,
              afternoonSwiperRef,
              afternoonCurrentPage,
              setAfternoonCurrentPage,
              "Midday Menu",
              "baroda-afternoon"
            )}
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
