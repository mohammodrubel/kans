"use client";

import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "bn", name: "Bengali" },
  { code: "fr", name: "French" },
];

const translations = {
  en: {
    category: "Category",
    products: "Products",
    customers: "Customers",
    contact: "Contact Us",
  },
  bn: {
    category: "বিভাগ",
    products: "পণ্য",
    customers: "গ্রাহক",
    contact: "যোগাযোগ করুন",
  },
  fr: {
    category: "Catégorie",
    products: "Produits",
    customers: "Clients",
    contact: "Contactez-nous",
  },
};

export default function GoogleTranslate({ onLanguageChange }) {
  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    const selected = e.target.value;
    setLang(selected);
    onLanguageChange(translations[selected]);
  };

  return (
    <select
      onChange={handleChange}
      value={lang}
      className="border px-3 py-2 rounded-md text-sm"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ))}
    </select>
  );
}
