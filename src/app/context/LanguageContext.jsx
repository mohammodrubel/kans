"use client";

import { createContext, useState, useEffect, useRef, useContext } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("en");
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const translationCache = useRef({});

  useEffect(() => {
    const controller = new AbortController();

    const fetchTranslations = async (lang) => {
      setIsLoading(true);
      
      try {
        // Check cache first
        if (translationCache.current[lang]) {
          setTranslations(translationCache.current[lang]);
          setIsLoading(false);
          return;
        }

        // Fetch from API
        const res = await fetch(
          `https://egg.dordham.com/api/v1/lang/${lang}`,
          { signal: controller.signal }
        );
        
        // Verify JSON response
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("API returned non-JSON response");
        }
        
        const data = await res.json();
        
        if (data.success && data.translations) {
          // Cache and set translations
          translationCache.current[lang] = data.translations;
          setTranslations(data.translations);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Translation error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations(currentLang);

    return () => controller.abort();
  }, [currentLang]);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <LanguageContext.Provider value={{
      currentLang,
      translations,
      isLoading,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}