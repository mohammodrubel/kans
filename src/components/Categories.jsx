"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from "react";

function Categories() {
  const categories = [
    { name: "Fresh Eggs & Egg Products", icon: "🍽️" },
    { name: "Dairy Products", icon: "🥛" },
    { name: "Meat & Poultry", icon: "🥩" },
    { name: "Grains & Cereals", icon: "🌾" },
    { name: "Fruits & Vegetables", icon: "🥦" },
    { name: "Oils & Fats", icon: "🧈" },
    { name: "Confectionery & Snacks", icon: "🍬" },
    { name: "Bakery & Pastry Products", icon: "🥐" },
    { name: "Beverages", icon: "🥤" },
    { name: "Canned & Preserved Foods", icon: "🥫" },
    { name: "Dry Food & Pulses", icon: "🌰" },
    { name: "Spices, Herbs & Condiments", icon: "🧂" },
    { name: "Frozen & Ready-to-Eat Foods", icon: "❄️" },
    { name: "Baby Food & Nutrition Products", icon: "🍼" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-green-700 w-full">
        Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {categories.map((category, index) => (
          <DropdownMenuItem
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Categories;
