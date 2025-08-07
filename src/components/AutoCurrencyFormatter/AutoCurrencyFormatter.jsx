"use client";
import React, { useEffect, useState } from "react";

const localeCurrencyMap = {
  "en-US": { currency: "USD", locale: "en-US", prefix: "USD: " },  // $
  "ru-RU": { currency: "RUB", locale: "ru-RU", prefix: "RUB: " },  // ₽
  "ar-SA": { currency: "SAR", locale: "ar-SA", prefix: "SAR: " },  // ﷼
  "az-AZ": { currency: "AZN", locale: "az-AZ", prefix: "AZN: " },  // ₼
  "tr-TR": { currency: "TRY", locale: "tr-TR", prefix: "TRY: " },  // ₺
  "es-ES": { currency: "EUR", locale: "es-ES", prefix: "EUR: " },  // €
  "fr-FR": { currency: "EUR", locale: "fr-FR", prefix: "EUR: " },  // €
  "de-DE": { currency: "EUR", locale: "de-DE", prefix: "EUR: " },  // €
  "ja-JP": { currency: "JPY", locale: "ja-JP", prefix: "JPY: " },  // ¥
  "zh-CN": { currency: "CNY", locale: "zh-CN", prefix: "CNY: " }   // ¥
};

const mockRates = {
  USD: 0.59,
  EUR: 0.52,
  JPY: 80.0,
  CNY: 4.0,
  AZN: 1,
  RUB: 50.0,
  SAR: 2.0,
  TRY: 10.0
};

const AutoCurrencyFormatter = ({ price }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleCurrencyChange = () => {
      const storedLocale = localStorage.getItem("selected_locale") || "az-AZ";
      const currencyData = localeCurrencyMap[storedLocale] || localeCurrencyMap["en-US"];
      
      const rate = mockRates[currencyData.currency] ?? 1;
      const convertedPrice = price * rate;

      // Format with currency symbol but exclude it from the formatted string
      const formatter = new Intl.NumberFormat(currencyData.locale, {
        style: "currency",
        currency: currencyData.currency,
        currencyDisplay: "narrowSymbol", // Only shows the symbol (€, $, ¥)
      });

      // Extract the symbol and formatted number
      const parts = formatter.formatToParts(convertedPrice);
      const numericValue = parts
        .filter(part => part.type !== "currency")
        .map(part => part.value)
        .join("")
        .trim();

      // Combine prefix + symbol + value (e.g., "EUR: €7.02")
      const currencySymbol = parts.find(part => part.type === "currency")?.value || "";
      setDisplayText(`${currencyData.prefix}${currencySymbol}${numericValue}`);
    };

    handleCurrencyChange();

    window.addEventListener("currencyChange", handleCurrencyChange);
    window.addEventListener("storage", handleCurrencyChange);

    return () => {
      window.removeEventListener("currencyChange", handleCurrencyChange);
      window.removeEventListener("storage", handleCurrencyChange);
    };
  }, [price]);

  return <>{displayText}</>;
};

export default AutoCurrencyFormatter;