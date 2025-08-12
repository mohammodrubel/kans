"use client";

import { useLanguage } from "@/app/context/LanguageContext";



const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "az", name: "Azarbazan" },
  { code: "tr", name: "Turkish" },
  
];

export default function GoogleTranslate() {
  const { currentLang, isLoading, changeLanguage } = useLanguage();

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={currentLang}
      disabled={isLoading}
      className="border px-3 py-2 rounded-md text-sm"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {isLoading && currentLang === l.code ? "Loading..." : l.name}
        </option>
      ))}
    </select>
  );
}