"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import Logo from "../Logo";
import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";


const GoogleTranslate = dynamic(() => import("../GoogleTranslate"), {
  ssr: false,
});


export default function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);

  return (
    <header className="container mx-auto px-4 relative z-[9999]">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="z-10">
          <Logo />
        </Link>

        {/* Centered Desktop Navigation */}
        <nav className="absolute left-1/2 top-1/2 justify-center -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-6 text-sm font-medium">
          {/* Category with Mega Menu */}
          <div className="relative">
            <button
              className="hover:text-green-600 transition"
              onMouseEnter={() => setShowMegaMenu(true)}
            >
              Category
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

          {/* Other Links */}
          <Link href="/products" className="hover:text-green-600 transition">
            Products
          </Link>
          <Link href="/customers" className="hover:text-green-600 transition">
            Customers
          </Link>
          <Link href="/contact-us" className="hover:text-green-600 transition">
            Contact Us
          </Link>
        </nav>

        {/* Desktop CTA Button + Google Translate */}
        <div className="hidden lg:flex items-center gap-4">
          {/* <button className="bg-[#016630d8] hover:bg-[#016630] text-white px-4 py-2 rounded-md transition">
    Request Demo
  </button> */}
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
