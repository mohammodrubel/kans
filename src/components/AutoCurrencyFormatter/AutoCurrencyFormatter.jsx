


"use client";

import { useEffect, useState } from "react";

const countries = [
  { name: "English", locale: "en-US", currency: "USD" },
  { name: "Русский", locale: "ru-RU", currency: "RUB" },
  { name: "العربية", locale: "ar-SA", currency: "AED" },
  { name: "Azərbaycanca", locale: "az-AZ", currency: "AZN" },
  { name: "Türkçe", locale: "tr-TR", currency: "TRY" },
];

export default function AutoCurrencyFormatter({ price }) {
  const [currency, setCurrency] = useState("USD");

  const updateCurrency = () => {
    const savedLocale = localStorage.getItem("selected_locale");
    const matched = countries.find((c) => c.locale === savedLocale);
    setCurrency(matched?.currency || "USD");
  };

  useEffect(() => {
    updateCurrency();
    window.addEventListener("currencyChange", updateCurrency);
    return () => window.removeEventListener("currencyChange", updateCurrency);
  }, []);

  if (!price) return null;

  let value = 0;
  if (typeof price === "number" || typeof price === "string") {
    value = Number(price);
  } else if (typeof price === "object") {
    if (currency === "USD") value = Number(price.USD || 0);
    else if (price.converted) value = Number(price.converted[currency] || 0);
    else value = Number(price[currency] || 0);
  }

  return (
    <span>
      {new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
      }).format(value)}
    </span>
  );
}

// ✅ Helper function to get numeric price for calculations
export function getPriceInCurrency(price) {
  const savedLocale = localStorage.getItem("selected_locale") || "en-US";
  const matched = countries.find((c) => c.locale === savedLocale);
  const currency = matched?.currency || "USD";

  if (!price) return 0;

  if (typeof price === "number" || typeof price === "string") return Number(price);
  if (typeof price === "object") {
    if (currency === "USD") return Number(price.USD || 0);
    else if (price.converted) return Number(price.converted[currency] || 0);
    else return Number(price[currency] || 0);
  }
  return 0;
}


