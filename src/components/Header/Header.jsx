"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getFormLocaleStorage, removeFromLocaleStorage } from "@/utils/localeStoratge";
import { CircleUserRound, Heart, Search, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import DesktopNavigatoin from "./DesktopNavigatoin";
import MobileMenu from "./MobileMenu";
import UserDropDown from "./UserDropDown";
import Currency from "../Currency/Currency";
import { LanguageDropdown } from "../HeaderCurrency";

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
  const [token, setToken] = useState(null);
  const router = useRouter()
  // Handle logout
  const logout = () => {
    removeFromLocaleStorage("accessToken");
    setToken(null);
    router.push("/login");
  };

  const [labels, setLabels] = useState(translations.en);



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
          <DesktopNavigatoin labels={labels} />

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
            {/* currency  */}
            <LanguageDropdown/>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative group"
            >
              <Heart className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
            </Link>

            {/* User dropdown */}
            <UserDropDown labels={labels} />

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