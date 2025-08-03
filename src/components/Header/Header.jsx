"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getFormLocaleStorage, removeFromLocaleStorage } from "@/utils/localeStoratge";
import { Heart, Search, X, CircleUserRound } from "lucide-react";
import Logo from "../Logo";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const GoogleTranslate = dynamic(() => import("../GoogleTranslate"), {
  ssr: false,
});

// Your existing translations
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
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  const [token, setToken] = useState(getFormLocaleStorage("accessToken"));
  const [labels, setLabels] = useState(translations.en);
  const router = useRouter();

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${searchQuery}`);
      setSearchQuery("");
      setShowMobileSearch(false);
    }
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-[9999] border-b">
      <div className="container mx-auto px-4">
        {/* Mobile Search */}
        {showMobileSearch && (
          <div className="lg:hidden flex items-center py-3 gap-2">
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder={labels.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                autoFocus
              />
              <button
                type="submit"
                className="p-2 bg-green-600 text-white rounded-full"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="z-10 cursor-pointer hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Navigation - Using your existing structure */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium">
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

          {/* Desktop Search - Integrated into header */}
          <form 
            onSubmit={handleSearch}
            className="hidden lg:flex flex-1 mx-8 max-w-xl"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder={labels.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-green-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setShowMobileSearch(true)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* GoogleTranslate with your existing implementation */}
            <div className="hidden lg:block">
              <GoogleTranslate onLanguageChange={(newLabels) => setLabels(newLabels)} />
            </div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative group"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-green-600 transition-colors" />
            </Link>

            {/* User Dropdown - Your existing implementation */}
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

            {/* Mobile Menu Button - Pass labels and setLabels as props */}
            <div className="lg:hidden">
              <MobileMenu labels={labels} onLanguageChange={setLabels} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}