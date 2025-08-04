"use client";
import { CircleUserRound, Heart, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GoogleTranslate from "../GoogleTranslate";
import MegaMenu from "./MegaMenu";

export default function MobileMenu({
  labels,
  onLanguageChange,
  token,
  logout,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="lg:hidden relative z-[100]">
      {/* Top buttons */}
      <div className="flex items-end gap-4 relative z-[100]">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="p-2 text-gray-600 hover:text-green-600"
  >
    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
</div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-16 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <button
                  onClick={() => setShowMegaMenu(!showMegaMenu)}
                  className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg"
                >
                  <span>{labels.category}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      showMegaMenu ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showMegaMenu && (
                  <div className="mt-2 pl-4 animate-scaleIn origin-top">
                    <MegaMenu />
                  </div>
                )}
              </div>

              <Link
                href="/products"
                className="block p-3 hover:bg-gray-50 rounded-lg"
              >
                {labels.products}
              </Link>
              <Link
                href="/customers"
                className="block p-3 hover:bg-gray-50 rounded-lg"
              >
                {labels.customers}
              </Link>
              <Link
                href="/contact-us"
                className="block p-3 hover:bg-gray-50 rounded-lg"
              >
                {labels.contact}
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between p-3">
                <GoogleTranslate onLanguageChange={onLanguageChange} />
              </div>

              <Link
                href="/wishlist"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg"
              >
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </Link>

              {token ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg"
                  >
                    <CircleUserRound className="h-5 w-5" />
                    <span>{labels.profile}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full mt-4 p-3 bg-red-500 text-white rounded-lg"
                  >
                    {labels.logout}
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block mt-4 p-3 bg-green-600 text-white text-center rounded-lg"
                >
                  {labels.login}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
