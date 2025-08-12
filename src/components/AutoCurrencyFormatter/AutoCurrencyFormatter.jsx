"use client";

import React, { useEffect, useState } from "react";

// Hardcoded mock exchange rates (AZN → other currencies)
const localeCurrencyMap = {
  "en-US": { currency: "USD", locale: "en-US" },  // English (United States)
  "ru-RU": { currency: "RUB", locale: "ru-RU" },  // Russian (Russia)
  "ar-SA": { currency: "SAR", locale: "ar-SA" },  // Arabic (Saudi Arabia)
  "az-AZ": { currency: "AZN", locale: "az-AZ" },  // Azerbaijani (Azerbaijan)
  "tr-TR": { currency: "TRY", locale: "tr-TR" },   // Turkish (Turkey)
  "es-ES": { currency: "EUR", locale: "es-ES" },   // Spanish (Spain)
  "fr-FR": { currency: "EUR", locale: "fr-FR" },   // French (France)
  "de-DE": { currency: "EUR", locale: "de-DE" },   // German (Germany)
  "ja-JP": { currency: "JPY", locale: "ja-JP" },   // Japanese (Japan)
  "zh-CN": { currency: "CNY", locale: "zh-CN" }    // Chinese (China)
};

const mockRates = {
  USD: 0.59,
  EUR: 0.52,
  JPY: 80.0,
  CNY: 4.0,
  AZN: 1,
  RUB: 50.0,    // Russian Ruble
  SAR: 2.0,     // Saudi Riyal
  TRY: 10.0     // Turkish Lira
};
const AutoCurrencyFormatter = ({ price }) => {
  const [selectedLocale, setSelectedLocale] = useState("az-AZ");
  const [formattedPrice, setFormattedPrice] = useState("");

  useEffect(() => {
    // On mount read from localStorage
    const storedLocale = localStorage.getItem("selected_locale");
    if (storedLocale && localeCurrencyMap[storedLocale]) {
      setSelectedLocale(storedLocale);
    }

    // Listen to custom event + storage event for changes
    const handleCurrencyChange = () => {
      const newLocale = localStorage.getItem("selected_locale");
      if (newLocale && localeCurrencyMap[newLocale]) {
        setSelectedLocale(newLocale);
      }
    };

    window.addEventListener("currencyChange", handleCurrencyChange);
    window.addEventListener("storage", handleCurrencyChange);

    return () => {
      window.removeEventListener("currencyChange", handleCurrencyChange);
      window.removeEventListener("storage", handleCurrencyChange);
    };
  }, []);

  useEffect(() => {
    const { currency, locale } = localeCurrencyMap[selectedLocale] || localeCurrencyMap["en-US"];
    const rate = mockRates[currency] ?? 1;
    const convertedPrice = price * rate;

    const formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(convertedPrice);

    setFormattedPrice(formatted);
  }, [selectedLocale, price]);

  return <div className="mb-2"><strong>Price: {formattedPrice}</strong></div>;
};

export default AutoCurrencyFormatter;
