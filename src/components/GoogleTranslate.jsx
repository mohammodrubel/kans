"use client";

import { useState } from "react";

// Updated languages with flags 
const languages = [
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

export default function GoogleTranslate({ onLanguageChange }) {
  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    const selected = e.target.value;
    setLang(selected);
    if (onLanguageChange) {
      onLanguageChange(translations[selected]);
    }
  };

  return (
    <select
      onChange={handleChange}
      value={lang}
      className="border px-3 py-2 rounded-md text-sm cursor-pointer"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.flag} {l.name}
        </option>
      ))}
    </select>
  );
}
