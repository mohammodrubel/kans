import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const countries = [
  { name: "English", locale: "en-US", flag: "🇺🇸", currency: "USD" },
  { name: "Русский", locale: "ru-RU", flag: "🇷🇺", currency: "RUB" },
  { name: "العربية", locale: "ar-SA", flag: "🇸🇦", currency: "SAR" },
  { name: "Azərbaycanca", locale: "az-AZ", flag: "🇦🇿", currency: "AZN" },
  { name: "Türkçe", locale: "tr-TR", flag: "🇹🇷", currency: "TRY" },
  { name: "Español", locale: "es-ES", flag: "🇪🇸", currency: "EUR" },
  { name: "Français", locale: "fr-FR", flag: "🇫🇷", currency: "EUR" },
  { name: "Deutsch", locale: "de-DE", flag: "🇩🇪", currency: "EUR" },
  { name: "日本語", locale: "ja-JP", flag: "🇯🇵", currency: "JPY" },
  { name: "中文", locale: "zh-CN", flag: "🇨🇳", currency: "CNY" },
];

export function LanguageDropdown() {
  const [selectedLocale, setSelectedLocale] = useState(countries[0]);

  useEffect(() => {
    const savedLocale = localStorage.getItem("selected_locale");
    if (savedLocale) {
      const matched = countries.find((c) => c.locale === savedLocale);
      if (matched) setSelectedLocale(matched);
    }
  }, []);

  const handleChange = (country) => {
    setSelectedLocale(country);
    localStorage.setItem("selected_locale", country.locale);
    window.dispatchEvent(new Event("currencyChange"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <div className="flex items-center space-x-1">
            <Globe className="h-4 w-4" />
            {/* <span>{selectedLocale.locale}</span> */}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.locale}
            onClick={() => handleChange(country)}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <span>{country.flag}</span>
              <span>{country.locale}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}