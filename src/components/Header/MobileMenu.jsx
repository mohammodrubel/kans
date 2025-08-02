"use client";

import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { languages, translations } from "../translations.js";

function MobileMenu({ labels, onLanguageChange }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");



  const handleChangeLanguage = (lang) => {
    setSelectedLang(lang);
    onLanguageChange(translations[lang]);
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="lg:hidden p-4 z-50">
        {openMenu ? (
          <X className="w-6 h-6" onClick={() => setOpenMenu(false)} />
        ) : (
          <AlignJustify className="w-6 h-6" onClick={() => setOpenMenu(true)} />
        )}
      </div>

      {/* Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${openMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-6 space-y-6">
          <Logo />

          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {labels?.products || "Products"}
            </Link>
            <Link
              href="/customers"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {labels?.customers || "Customers"}
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {labels?.contact || "Contact us"}
            </Link>
          </nav>

          {/* Language selector */}
          {/* Language selector */}
          <div className="border-t pt-4 mt-4">
            <label htmlFor="language-select" className="block mb-2 font-semibold">
              Select Language:
            </label>
            <select
              id="language-select"
              className="w-full p-2 border rounded"
              value={selectedLang}
              onChange={(e) => handleChangeLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;
