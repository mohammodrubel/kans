"use client";

import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";

function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);

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

      {/* Mobile Menu Overlay */}
      {openMenu && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpenMenu(false)}></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <Logo/>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-black" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-black" onClick={() => setOpenMenu(false)}>
              products
            </Link>
            <Link href="/customers" className="text-gray-700 hover:text-black" onClick={() => setOpenMenu(false)}>
              Customers
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-black" onClick={() => setOpenMenu(false)}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
