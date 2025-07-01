"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  // Load Google Translate widget
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=en";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Force language names in English (override localized names)
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select && select.options.length > 1) {
        const englishNameMap = {
          en: "English",
          bn: "Bengali",
          fr: "French",
          de: "German",
          hi: "Hindi",
          ar: "Arabic",
          es: "Spanish",
          id: "Indonesian",
          "zh-CN": "Chinese (Simplified)",
          ru: "Russian",
          "es-419": "Spanish (Latin America)",
        };

        for (let i = 0; i < select.options.length; i++) {
          const option = select.options[i];
          const code = option.value;
          if (englishNameMap[code]) {
            option.text = englishNameMap[code];
          }
        }

        clearInterval(interval); // once done
      }
    }, 500);
  }, []);

  // Hide Google branding and apply custom style
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-logo-link, .goog-te-gadget span {
        display: none !important;
      }

      .goog-te-gadget {
        font-size: 0 !important;
      }

      .goog-te-combo {
        font-size: 14px !important;
        padding: 6px 12px !important;
        border-radius: 6px !important;
        border: 1px solid #ccc !important;
        background-color: white !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="relative z-50">
      <div
        id="google_translate_element"
        className="inline-block text-sm bg-white rounded-md border border-gray-300 px-3 py-[6px] shadow-sm hover:shadow-md transition"
      />
    </div>
  );
}
