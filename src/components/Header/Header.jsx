"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import useTranslation from "@/hooks/useTranslation"; // ADD THIS

import Logo from "../Logo";
import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";

const GoogleTranslate = dynamic(() => import("../GoogleTranslate"), {
  ssr: false,
});

export default function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  
  // ADD TRANSLATION HOOK
  const t = useTranslation();

  return (
    <header className="container mx-auto px-4 relative z-[9999]">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 top-1/2 justify-center -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-6 text-sm font-medium">
          <div className="relative">
            <button
              className="hover:text-green-600 transition"
              onMouseEnter={() => setShowMegaMenu(true)}
            >
              {/* USE TRANSLATION FUNCTION */}
              {t("header.category", "Category")}
            </button>

            {showMegaMenu && (
              <div
                className="fixed left-0 right-0 flex justify-center z-[9999]"
                onMouseEnter={() => setMegaMenuHover(true)}
                onMouseLeave={() => {
                  setMegaMenuHover(false);
                  setShowMegaMenu(false);
                }}
              >
                <div
                  className="absolute top-full mt-2 w-screen max-w-[1200px] px-4"
                  onMouseLeave={() => {
                    if (!megaMenuHover) {
                      setShowMegaMenu(false);
                    }
                  }}
                >
                  <div onMouseLeave={() => setShowMegaMenu(false)}>
                    <MegaMenu />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/products" className="hover:text-green-600 transition">
            {/* USE TRANSLATION FUNCTION */}
            {t("navigation.products", "Products")}
          </Link>
          <Link href="/customers" className="hover:text-green-600 transition">
            {/* USE TRANSLATION FUNCTION */}
            {t("navigation.customers", "Customers")}
          </Link>
          <Link href="/contact-us" className="hover:text-green-600 transition">
            {/* USE TRANSLATION FUNCTION */}
            {t("header.contact", "Contact Us")}
          </Link>
        </nav>

        {/* Google Translate */}
        <div className="hidden lg:flex items-center gap-4">
          {/* REMOVE onLanguageChange PROP */}
          <GoogleTranslate />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}