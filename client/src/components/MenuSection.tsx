import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import menuPage1 from "@assets/LR_Navrangpura_Menu_Pg1_1761483365586.avif";
import menuPage2 from "@assets/LR_Navrangpura_Menu_Pg2_1761483365588.avif";

export function MenuSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState("navrangpura");
  const menuPages = [menuPage1, menuPage2];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % menuPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + menuPages.length) % menuPages.length);
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
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
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-muted/20 to-muted/40 shadow-2xl" style={{ perspective: "2000px" }}>
                <div className="relative w-full" style={{ minHeight: "600px" }}>
                  {menuPages.map((page, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
                        index === currentPage 
                          ? "opacity-100 z-10" 
                          : index < currentPage 
                            ? "opacity-0 z-0" 
                            : "opacity-0 z-5"
                      }`}
                      style={{
                        transform: index === currentPage 
                          ? "translateX(0) rotateY(0deg)" 
                          : index < currentPage 
                            ? "translateX(-100%) rotateY(-15deg)" 
                            : "translateX(100%) rotateY(15deg)",
                        transformOrigin: index < currentPage ? "right center" : "left center",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="relative w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
                        <div 
                          className={`absolute inset-y-0 w-8 z-20 pointer-events-none transition-opacity duration-300 ${
                            index === currentPage ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            right: index === 0 ? "0" : "auto",
                            left: index === 1 ? "0" : "auto",
                            background: index === 0 
                              ? "linear-gradient(to left, rgba(0,0,0,0.15), transparent)"
                              : "linear-gradient(to right, rgba(0,0,0,0.15), transparent)"
                          }}
                        />
                        <img
                          src={page}
                          alt={`Menu Page ${index + 1}`}
                          className="w-full h-auto object-contain"
                          style={{ 
                            maxHeight: "none",
                            minHeight: "600px",
                          }}
                          data-testid={`img-menu-page-${index + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  data-testid="button-menu-prev"
                >
                  <ChevronLeft className="h-7 w-7 text-foreground" />
                </button>

                <button
                  onClick={nextPage}
                  disabled={currentPage === menuPages.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center border-2 shadow-2xl hover:bg-white hover:scale-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  data-testid="button-menu-next"
                >
                  <ChevronRight className="h-7 w-7 text-foreground" />
                </button>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {menuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`transition-all ${
                      index === currentPage
                        ? "w-12 h-3 bg-foreground rounded-full"
                        : "w-3 h-3 bg-foreground/40 rounded-full hover:bg-foreground/70"
                    }`}
                    data-testid={`button-menu-dot-${index}`}
                  />
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-base font-medium text-foreground" data-testid="text-page-indicator">
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
