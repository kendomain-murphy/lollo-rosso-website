import { useState } from "react";
import { DishCard } from "./DishCard";
import { Button } from "@/components/ui/button";
import { bowlOfTheMonthConfig } from "@/config/bowlOfTheMonth";

import sushi1 from "@assets/stock_images/fresh_sushi_platter__5ce826ac.jpg";
import sushi2 from "@assets/stock_images/fresh_sushi_platter__df06bffe.jpg";
import sushi3 from "@assets/stock_images/fresh_sushi_platter__ec629e7b.jpg";
import bowl1 from "@assets/stock_images/asian_rice_bowl_heal_9c81535a.jpg";
import bowl2 from "@assets/stock_images/asian_rice_bowl_heal_a1294d9c.jpg";
import bowl3 from "@assets/stock_images/asian_rice_bowl_heal_f146d037.jpg";
import dimsum1 from "@assets/stock_images/steamed_dumplings_di_89c2ddce.jpg";
import dimsum2 from "@assets/stock_images/steamed_dumplings_di_6a9e073e.jpg";
import dimsum3 from "@assets/stock_images/steamed_dumplings_di_5183efc2.jpg";
import lolloccino1 from "@assets/DSCF0236_1761590394289.jpeg";
import lolloccino2 from "@assets/DSCF0411_1761590394291.jpeg";
import lolloccino3 from "@assets/DSCF0883_1761590394294.jpeg";
import lolloccino4 from "@assets/DSCF1135_1761590394296.jpeg";

//todo: remove mock functionality
const dishes = [
  {
    id: 1,
    name: "Dragon Roll",
    description: "Premium sushi roll with fresh salmon, avocado, and special sauce",
    price: "₹899",
    image: sushi1,
    category: "sushi" as const,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Rainbow Platter",
    description: "Assorted sushi selection with tuna, salmon, and yellowtail",
    price: "₹1,299",
    image: sushi2,
    category: "sushi" as const,
  },
  {
    id: 3,
    name: "Signature Roll",
    description: "Chef's special creation with premium ingredients",
    price: "₹999",
    image: sushi3,
    category: "sushi" as const,
  },
  {
    id: 4,
    name: "Steamed Dimsums",
    description: "Traditional handmade dumplings with pork and vegetables",
    price: "₹499",
    image: dimsum1,
    category: "dimsums" as const,
  },
  {
    id: 5,
    name: "Prawn Har Gow",
    description: "Delicate crystal skin dumplings filled with fresh prawns",
    price: "₹599",
    image: dimsum2,
    category: "dimsums" as const,
    hasVideo: true,
  },
  {
    id: 6,
    name: "Mixed Dimsum Platter",
    description: "Assortment of steamed and pan-fried dumplings",
    price: "₹699",
    image: dimsum3,
    category: "dimsums" as const,
  },
  {
    id: 7,
    name: "Classic Cappuccino",
    description: "Rich espresso with perfectly steamed milk and velvety foam",
    price: "₹299",
    image: lolloccino1,
    category: "lolloccino" as const,
    hasVideo: true,
  },
  {
    id: 8,
    name: "Iced Caramel Latte",
    description: "Smooth espresso with caramel syrup and cold milk over ice",
    price: "₹349",
    image: lolloccino2,
    category: "lolloccino" as const,
  },
  {
    id: 9,
    name: "Matcha Green Tea Latte",
    description: "Premium Japanese matcha blended with creamy milk",
    price: "₹399",
    image: lolloccino3,
    category: "lolloccino" as const,
  },
  {
    id: 10,
    name: "Signature Mocha",
    description: "Rich chocolate and espresso blend topped with whipped cream",
    price: "₹379",
    image: lolloccino4,
    category: "lolloccino" as const,
  },
];

type Category = "bowl-of-month" | "sushi" | "dimsums" | "lolloccino";

export function DishGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("bowl-of-month");

  const getFilteredDishes = () => {
    if (selectedCategory === "bowl-of-month") {
      return [bowlOfTheMonthConfig.videoBowl, bowlOfTheMonthConfig.imageBowl];
    }
    return dishes.filter((dish) => dish.category === selectedCategory);
  };

  const filteredDishes = getFilteredDishes();

  const categories: { value: Category; label: string }[] = [
    { value: "bowl-of-month", label: "Bowl of the Month" },
    { value: "sushi", label: "Sushi" },
    { value: "dimsums", label: "Dimsums" },
    { value: "lolloccino", label: "Lolloccino" },
  ];

  return (
    <section id="menu" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-menu-title">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-menu-subtitle">
            Discover our carefully crafted menu featuring the finest ingredients and authentic flavors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              data-testid={`button-filter-${category.value}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
