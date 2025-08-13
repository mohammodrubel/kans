"use client";
import React, { useEffect, useState } from "react";

const localeCurrencyMap = {
  "en-US": { currency: "USD", locale: "en-US", prefix: "USD: " },
  "ru-RU": { currency: "RUB", locale: "ru-RU", prefix: "RUB: " },
  "ar-SA": { currency: "SAR", locale: "ar-SA", prefix: "SAR: " },
  "az-AZ": { currency: "AZN", locale: "az-AZ", prefix: "AZN: " },
  "tr-TR": { currency: "TRY", locale: "tr-TR", prefix: "TRY: " },
  "es-ES": { currency: "EUR", locale: "es-ES", prefix: "EUR: " },
  "fr-FR": { currency: "EUR", locale: "fr-FR", prefix: "EUR: " },
  "de-DE": { currency: "EUR", locale: "de-DE", prefix: "EUR: " },
  "ja-JP": { currency: "JPY", locale: "ja-JP", prefix: "JPY: " },
  "zh-CN": { currency: "CNY", locale: "zh-CN", prefix: "CNY: " }
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

const AutoCurrencyFormatter = ({ price, discount }) => {
  const [prefix, setPrefix] = useState("");
  const [normalPrice, setNormalPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");

  useEffect(() => {
    const formatPrice = (priceValue) => {
      const storedLocale = localStorage.getItem("selected_locale") || "az-AZ";
      const currencyData = localeCurrencyMap[storedLocale] || localeCurrencyMap["en-US"];

      const rate = mockRates[currencyData.currency] ?? 1;
      const convertedPrice = priceValue * rate;

      const formatter = new Intl.NumberFormat(currencyData.locale, {
        style: "currency",
        currency: currencyData.currency,
        currencyDisplay: "narrowSymbol"
      });

      const parts = formatter.formatToParts(convertedPrice);
      const numericValue = parts
        .filter(part => part.type !== "currency")
        .map(part => part.value)
        .join("")
        .trim();

      const currencySymbol = parts.find(part => part.type === "currency")?.value || "";

      return { prefix: currencyData.prefix, value: `${currencySymbol}${numericValue}` };
    };

    if (price) {
      const { prefix, value } = formatPrice(price);
      setPrefix(prefix);
      setNormalPrice(value);
    }
    if (discount) {
      const { value } = formatPrice(discount);
      setDiscountPrice(value);
    }

    const handleChange = () => {
      if (price) {
        const { prefix, value } = formatPrice(price);
        setPrefix(prefix);
        setNormalPrice(value);
      }
      if (discount) {
        const { value } = formatPrice(discount);
        setDiscountPrice(value);
      }
    };

    window.addEventListener("currencyChange", handleChange);
    window.addEventListener("storage", handleChange);

    return () => {
      window.removeEventListener("currencyChange", handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, [price, discount]);

  if (!price) return null;

  return (
    <div className="price-container font-bold">
      {discount ? (
        <div className="flex items-center gap-2">
          <span>{prefix}</span>
          <div className="flex flex-col">
            <del className="original-price line-through mx-1 text-gray-600">{normalPrice}</del>
          <span className="discount-price">{discountPrice}</span>
          </div>
        </div>
      ) : (
        <span className="normal-price">{`${prefix}${normalPrice}`}</span>
      )}
    </div>
  );
};

export default AutoCurrencyFormatter;
