"use client"
import { useEffect, useState } from 'react';

function Currency() {
  const countries = [
    { name: "English", locale: "en-US", currency: "USD" },
    { name: "Русский", locale: "ru-RU", currency: "RUB" },      // Russian
    { name: "العربية", locale: "ar-SA", currency: "SAR" },      // Arabic
    { name: "Azərbaycanca", locale: "az-AZ", currency: "AZN" }, // Azerbaijani
    { name: "Türkçe", locale: "tr-TR", currency: "TRY" },       // Turkish
    { name: "Español", locale: "es-ES", currency: "EUR" },
    { name: "Français", locale: "fr-FR", currency: "EUR" },
    { name: "Deutsch", locale: "de-DE", currency: "EUR" },
    { name: "日本語", locale: "ja-JP", currency: "JPY" },
    { name: "中文", locale: "zh-CN", currency: "CNY" },
  ];

  // Map of locale to flag image URLs
  const flagImageUrls = {
    "en-US": "https://flagcdn.com/w20/us.png",
    "ru-RU": "https://flagcdn.com/w20/ru.png",
    "ar-SA": "https://flagcdn.com/w20/sa.png",
    "az-AZ": "https://flagcdn.com/w20/az.png",
    "tr-TR": "https://flagcdn.com/w20/tr.png",
    "es-ES": "https://flagcdn.com/w20/es.png",
    "fr-FR": "https://flagcdn.com/w20/fr.png",
    "de-DE": "https://flagcdn.com/w20/de.png",
    "ja-JP": "https://flagcdn.com/w20/jp.png",
    "zh-CN": "https://flagcdn.com/w20/cn.png"
  };

  const [isModalOpen, setIsModalOpen] = useState(true);
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

    // Trigger currency update event for other components
    window.dispatchEvent(new Event("currencyChange"));

    setIsModalOpen(false);
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-xl w-full shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Select Language / Currency</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {countries.map((country) => (
                <button
                  key={country.locale}
                  onClick={() => handleChange(country)}
                  className={`flex items-center p-3 border rounded-lg hover:border-black transition ${
                    selectedLocale.locale === country.locale
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <img 
                    src={flagImageUrls[country.locale]} 
                    alt={`${country.name} flag`} 
                    className="w-6 h-4 object-cover mr-3"
                  />
                  <div className="text-left">
                    <div className="font-medium">{country.name}</div>
                    <div className="text-sm text-gray-500">{country.currency}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Currency;