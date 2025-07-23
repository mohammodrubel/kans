"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "../Logo";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { CircleUserRound, Heart, Search } from "lucide-react";
import {
  getFormLocaleStorage,
  removeFromLocaleStorage,
} from "@/utils/localeStoratge";

const GoogleTranslate = dynamic(() => import("../GoogleTranslate"), {
  ssr: false,
});

const translations = {
  en: {
    category: "Category",
    products: "Products",
    customers: "Customers",
    contact: "Contact Us",
    searchPlaceholder: "Search products...",
  },
  bn: {
    category: "বিভাগ",
    products: "পণ্য",
    customers: "গ্রাহক",
    contact: "যোগাযোগ করুন",
    searchPlaceholder: "পণ্য খুঁজুন...",
  },
  fr: {
    category: "Catégorie",
    products: "Produits",
    customers: "Clients",
    contact: "Contactez-nous",
    searchPlaceholder: "Rechercher des produits...",
  },
};

export default function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [labels, setLabels] = useState(translations.en);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [token, setToken] = useState(getFormLocaleStorage("accessToken"));

  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const logout = () => {
    removeFromLocaleStorage("accessToken");
    setToken(null);
    router.push("/login");
  };

  useEffect(() => {
    const checkToken = () => {
      const storedToken = getFormLocaleStorage("accessToken");
      setToken(storedToken);
    };

    window.addEventListener("storage", checkToken);
    const interval = setInterval(checkToken, 1000);

    return () => {
      window.removeEventListener("storage", checkToken);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-[9999]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="z-10 cursor-pointer hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-8 text-sm font-medium">
            <div className="relative">
              <button
                className={`hover:text-green-600 transition-colors duration-200 ${
                  showMegaMenu ? "text-green-600 font-semibold" : ""
                }`}
                onMouseEnter={() => setShowMegaMenu(true)}
              >
                {labels.category}
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
                  <div className="absolute top-full mt-2 w-screen max-w-[1200px] px-4">
                    <div onMouseLeave={() => setShowMegaMenu(false)}>
                      <MegaMenu />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/products" className="hover:text-green-600 transition-colors duration-200">
              {labels.products}
            </Link>
            <Link href="/customers" className="hover:text-green-600 transition-colors duration-200">
              {labels.customers}
            </Link>
            <Link href="/contact-us" className="hover:text-green-600 transition-colors duration-200">
              {labels.contact}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search (Desktop only) */}
            <div className="hidden lg:flex items-center border rounded-lg overflow-hidden transition-all duration-200 border-gray-300">
              <Input
                type="text"
                placeholder={labels.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none cursor-text hover:bg-gray-50 transition-colors w-64"
              />
              <Button
                onClick={handleSearch}
                className="rounded-none bg-green-600 hover:bg-green-700 text-white px-4 cursor-pointer active:scale-95 transition-transform"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Google Translate (Desktop only) */}
            <div className="hidden lg:block">
              <GoogleTranslate onLanguageChange={(newLabels) => setLabels(newLabels)} />
            </div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative group"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-green-600 transition-colors" />
            </Link>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <CircleUserRound
                    size={30}
                    className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 shadow-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
                align="end"
              >
                {token ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/profile"
                        className="w-full px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-700 my-1" />
                    <div className="px-2 pb-2">
                      <Button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white w-full active:scale-95 transition-transform"
                      >
                        Logout
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="px-2 py-2 mt-4 space-y-2">
                    <Link href="/login">
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full active:scale-95 transition-transform">
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
