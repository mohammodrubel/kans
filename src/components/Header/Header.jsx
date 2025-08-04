"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

const translations = {
  en: {
    category: "Category",
    products: "Products",
    customers: "Customers",
    contact: "Contact Us",
    searchPlaceholder: "Search products...",
    profile: "Profile",
    logout: "Logout",
    login: "Login"
  },
  ru: {
    category: "Категория",
    products: "Продукты",
    customers: "Клиенты",
    contact: "Связаться с нами",
    searchPlaceholder: "Поиск продуктов...",
    profile: "Профиль",
    logout: "Выйти",
    login: "Войти"
  },
  ar: {
    category: "فئة",
    products: "منتجات",
    customers: "العملاء",
    contact: "اتصل بنا",
    searchPlaceholder: "ابحث عن المنتجات...",
    profile: "الملف الشخصي",
    logout: "تسجيل خروج",
    login: "تسجيل الدخول"
  },
  az: {
    category: "Kateqoriya",
    products: "Məhsullar",
    customers: "Müştərilər",
    contact: "Bizimlə əlaqə",
    searchPlaceholder: "Məhsul axtar...",
    profile: "Profil",
    logout: "Çıxış",
    login: "Daxil ol"
  },
  tr: {
    category: "Kategori",
    products: "Ürünler",
    customers: "Müşteriler",
    contact: "Bize Ulaşın",
    searchPlaceholder: "Ürün ara...",
    profile: "Profil",
    logout: "Çıkış Yap",
    login: "Giriş Yap"
  },
};

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [token, setToken] = useState(null);
  const [labels, setLabels] = useState(translations.en);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const megaMenuRef = useRef(null);
  const router = useRouter();

  // Handle logout
  const logout = () => {
    removeFromLocaleStorage("accessToken");
    setToken(null);
    router.push("/login");
  };

  // Check auth token
  useEffect(() => {
    const storedToken = getFormLocaleStorage("accessToken");
    setToken(storedToken);

    const handleStorageChange = () => {
      const newToken = getFormLocaleStorage("accessToken");
      setToken(newToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${searchQuery}`);
      setSearchQuery("");
      setShowMobileSearch(false);
    }
  };

  // Improved hover handling with delay
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setHoverTimeout(setTimeout(() => setShowMegaMenu(false), 200));
  };
  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setShowMegaMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-50 border-b">
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
                className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link href="/" className="z-10 cursor-pointer hover:opacity-90">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {/* Category with MegaMenu */}
            <div
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 py-2 hover:text-green-600 transition-colors ${showMegaMenu ? "text-green-600 font-semibold" : ""
                  }`}
              >
                {labels.category}
                <svg
                  className={`w-4 h-4 transition-transform ${showMegaMenu ? "rotate-180" : ""
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
                <div className="fixed left-0 right-0 top-[64px] bg-white shadow-xl z-[9999] rounded-b-lg overflow-auto max-h-[70vh]">
                  <MegaMenu />
                </div>)}
            </div>

            <Link
              href="/products"
              className="py-2 hover:text-green-600 transition-colors"
            >
              {labels.products}
            </Link>
            <Link
              href="/customers"
              className="py-2 hover:text-green-600 transition-colors"
            >
              {labels.customers}
            </Link>
            <Link
              href="/contact-us"
              className="py-2 hover:text-green-600 transition-colors"
            >
              {labels.contact}
            </Link>
          </nav>

          {/* Desktop Search */}
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600 transition-colors"
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
              className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Google Translate */}
            <div className="hidden lg:block">
              <GoogleTranslate
                onLanguageChange={(langCode) => {
                  setLabels(translations[langCode] || translations.en);
                }}
              />
            </div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative group"
            >
              <Heart className="h-6 w-6 text-gray-600 group-hover:text-green-600" />
            </Link>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
                  <CircleUserRound size={30} className="text-gray-500 hover:text-green-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-xl border" align="end">
                {token ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/profile"
                        className="w-full px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-700"
                      >
                        {labels.profile}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <div className="px-2 pb-2">
                      <Button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white w-full"
                      >
                        {labels.logout}
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="px-2 py-2 space-y-2">
                    <Link href="/login">
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                        {labels.login}
                      </Button>
                    </Link>
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileMenu
                labels={labels}
                onLanguageChange={(langCode) => {
                  setLabels(translations[langCode] || translations.en);
                }}
                token={token}
                logout={logout}
                
                
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}