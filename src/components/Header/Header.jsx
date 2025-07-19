"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
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
import { CircleUserRound, Heart } from "lucide-react";

const GoogleTranslate = dynamic(() => import("../GoogleTranslate"), {
  ssr: false,
});

export default function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="container mx-auto px-4 relative py-2 z-[9999]">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="z-10 cursor-pointer">
          <Logo />
        </Link>

        {/* Centered Desktop Navigation */}
        <nav className="absolute left-1/2 top-1/2 justify-center -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-6 text-sm font-medium">
          <div className="relative">
            <button
              className="hover:text-green-600 transition cursor-pointer"
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

          <Link href="/products" className="hover:text-green-600 transition cursor-pointer">
            Products
          </Link>
          <Link href="/customers" className="hover:text-green-600 transition cursor-pointer">
            Customers
          </Link>
          <Link href="/contact-us" className="hover:text-green-600 transition cursor-pointer">
            Contact Us
          </Link>
        </nav>

        {/* Desktop CTA Area */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Input + Button */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none cursor-pointer"
            />
            <Button
              onClick={handleSearch}
              type="submit"
              className="rounded-none bg-green-600 hover:bg-green-700 text-white px-4 cursor-pointer"
            >
              Search
            </Button>
          </div>

          {/* Wishlist Icon */}
          <Heart className="cursor-pointer text-gray-600 hover:text-green-600 transition" />

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound size={30} className="text-gray-500 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full cursor-pointer">
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden cursor-pointer">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
