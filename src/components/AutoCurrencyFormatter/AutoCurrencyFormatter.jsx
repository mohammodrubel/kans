"use client";
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const BASE_CURRENCY = "AZN"; // Your database price is in AZN

const localeCurrencyMap = {
  "en-US": { currency: "USD", locale: "en-US", symbol: "$" },
  "ru-RU": { currency: "RUB", locale: "ru-RU", symbol: "₽" },
  "ar-SA": { currency: "SAR", locale: "ar-SA", symbol: "﷼" },
  "az-AZ": { currency: "AZN", locale: "az-AZ", symbol: "₼" },
  "tr-TR": { currency: "TRY", locale: "tr-TR", symbol: "₺" },
  "es-ES": { currency: "EUR", locale: "es-ES", symbol: "€" },
  "fr-FR": { currency: "EUR", locale: "fr-FR", symbol: "€" },
  "de-DE": { currency: "EUR", locale: "de-DE", symbol: "€" },
  "ja-JP": { currency: "JPY", locale: "ja-JP", symbol: "¥" },
  "zh-CN": { currency: "CNY", locale: "zh-CN", symbol: "¥" },
  "tg-TJ": { currency: "TJS", locale: "tg-TJ", symbol: "ЅМ" },
};

const AutoCurrencyFormatter = ({ price, discount }) => {
  const [formattedPrice, setFormattedPrice] = useState({
    normal: "",
    discount: "",
    symbol: "",
  });

  const [exchangeRates, setExchangeRates] = useState({});
  const [currentLocale, setCurrentLocale] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("selected_locale") || "az-AZ"
      : "az-AZ"
  );

  // Poll for locale changes every second
  useEffect(() => {
    const interval = setInterval(() => {
      const newLocale = localStorage.getItem("selected_locale") || "az-AZ";
      setCurrentLocale((prevLocale) =>
        prevLocale !== newLocale ? newLocale : prevLocale
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getCurrencyData = () =>
    localeCurrencyMap[currentLocale] || localeCurrencyMap["en-US"];

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/fde1c82e9340652b282a2ac2/latest/USD"
      );
      const data = await response.json();
      if (data.conversion_rates) {
        setExchangeRates(data.conversion_rates); // ✅ Fix: use conversion_rates
      }
    } catch (err) {
      console.error("Exchange rate fetch failed", err);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const formatPrice = useCallback(
    (amountAZN) => {
      const { currency, locale, symbol } = getCurrencyData();

      // Get USD→Target and USD→AZN rates from the API
      const usdToTarget = exchangeRates[currency] || 1;
      const usdToAzn = exchangeRates[BASE_CURRENCY] || 1;

      // Convert from AZN → Target currency
      const converted = (amountAZN / usdToAzn) * usdToTarget;

      const formatted = new Intl.NumberFormat(locale, {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(converted);

      return { symbol, value: formatted };
    },
    [exchangeRates, currentLocale]
  );

  useEffect(() => {
    if (!price || Object.keys(exchangeRates).length === 0) return;

    const normal = formatPrice(price);
    const discountVal = discount ? formatPrice(discount) : null;

    setFormattedPrice({
      normal: normal.value,
      discount: discountVal?.value || "",
      symbol: normal.symbol,
    });
  }, [price, discount, exchangeRates, currentLocale, formatPrice]);

  return (
    <div className="price-container font-bold">
      {discount ? (
        <div className="flex items-center gap-2">
          <span>{formattedPrice.symbol}</span>
          <div className="flex flex-col">
            <del className="original-price line-through mx-1 text-gray-600">
              {formattedPrice.normal}
            </del>
            <span className="discount-price">{formattedPrice.discount}</span>
          </div>
        </div>
      ) : (
        <span className="normal-price">
          {formattedPrice.symbol} {formattedPrice.normal}
        </span>
      )}
    </div>
  );
};

AutoCurrencyFormatter.propTypes = {
  price: PropTypes.number.isRequired, // Stored in AZN
  discount: PropTypes.number,
};

export default AutoCurrencyFormatter;
