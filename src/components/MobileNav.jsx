"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Trigger Button */}
      <button onClick={toggleMenu} className="md:hidden p-2">
        <Menu className="text-[#2c5c1e]" size={24} />
      </button>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 p-2 text-[#2c5c1e] bg-transparent border-0"
        >
          <X size={24} />
        </button>

        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center py-8 space-y-6">
          <h1 className="text-[#2c5c1e] font-bold text-2xl">KENS</h1>
          <nav className="space-y-4">
            <a href="#" className="text-[#2c5c1e] font-semibold text-lg block">
              About
            </a>
            <a href="#" className="text-[#2c5c1e] font-semibold text-lg block">
              Projects
            </a>
            <a href="#" className="text-[#2c5c1e] font-semibold text-lg block">
              Partners
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
