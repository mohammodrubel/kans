"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "az", name: "Azerbaijani", flag: "🇦🇿" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
];

const translations = {
  en: {
    category: "Category",
    products: "Products",
    customers: "Customers",
    contact: "Contact Us",
  },
  ru: {
    category: "Категория",
    products: "Продукты",
    customers: "Клиенты",
    contact: "Связаться с нами",
  },
  ar: {
    category: "الفئة",
    products: "المنتجات",
    customers: "العملاء",
    contact: "اتصل بنا",
  },
  az: {
    category: "Kateqoriya",
    products: "Məhsullar",
    customers: "Müştərilər",
    contact: "Bizimlə əlaqə",
  },
  tr: {
    category: "Kategori",
    products: "Ürünler",
    customers: "Müşteriler",
    contact: "Bize Ulaşın",
  },
};

export default function LanguageSwitcher({ onLanguageChange }) {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    if (onLanguageChange) {
      onLanguageChange(translations[langCode]);
    }
    setIsOpen(false); // Close the menu after selection
  };

  return (
    <div className="flex items-center gap-6">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-sm hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            >
              <span className="text-lg">{currentLanguage?.flag}</span> 
              <span>{currentLanguage?.code.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-48 rounded-lg shadow-lg border border-gray-100"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          sideOffset={5}
        >
          {languages.map((language) => (
            <DropdownMenuItem 
              key={language.code}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="text-xl">{language.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{language.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}