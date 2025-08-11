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
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "ar", name: "Arabic", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "az", name: "Azerbaijani", flag: "https://flagcdn.com/w40/az.png" },
  { code: "tr", name: "Turkish", flag: "https://flagcdn.com/w40/tr.png" },
];

export default function GoogleTranslate({ onLanguageChange }) {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
    setIsOpen(false);
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
              <img 
                src={currentLanguage?.flag} 
                alt={currentLanguage?.name} 
                className="w-5 h-4 object-cover"
              />
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
              <img 
                src={language.flag} 
                alt={language.name} 
                className="w-6 h-4 object-cover"
              />
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