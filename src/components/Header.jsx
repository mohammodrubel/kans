'use client';
import React, { useState } from 'react';
import {
  Search,
  Home,
  Folder,
  Users,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const menuItems = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Partners', href: '/team' },
  ];

  return (
    <div className="relative">
      <header className="bg-white p-4 shadow-sm z-50 relative">
        <div className="container mx-auto flex items-center justify-between">
          {/* Mobile: LOGO + Menu */}
          <div className="flex items-center justify-between w-full md:hidden">
          <span className="text-[#2c5c1e] uppercase text-[24px] font-bold">🌲kans</span>
            <button
              onClick={() => setShowSidebar(true)}
              className="text-[#2c5c1e]"
              aria-label="Open sidebar"
            >
              <Menu />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center w-full justify-between">
            <div className="flex items-center">
              <span className="text-[#2c5c1e] uppercase text-[24px] font-bold">🌲kans</span>
              <nav className="ml-8 space-x-8">
                <a href="#" className="text-[#2c5c1e] text-18px font-medium">
                  About
                </a>
                <a href="#" className="text-[#2c5c1e] text-18px font-medium">
                  Projects
                </a>
                <a href="#" className="text-[#2c5c1e] text-18px font-medium">
                  Partners
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-full max-w-sm">
                <Search
                  className="text-[#2c5c1e] absolute left-3 top-1/2 transform -translate-y-1/2"
                  size={18}
                />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-[#2c5c1e]"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar - Mobile Only */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-white border-r shadow-md px-4 py-6 z-50 transition-transform duration-300',
          showSidebar ? 'translate-x-0' : '-translate-x-full',
          'md:hidden'
        )}
      >
        <div className="flex justify-between items-center mb-6">
        <span className="text-[#2c5c1e] uppercase text-2xl font-bold">🌲kans</span>
          <button
            onClick={() => setShowSidebar(false)}
            className="text-[#2c5c1e]"
            aria-label="Close sidebar"
          >
            <X />
          </button>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-xl transition-colors text-[#2c5c1e] text-18px',
                'hover:bg-gray-[#2c5c1e] hover:text-transparent text-[#2c5c1e] text-18px font-medium'
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Optional backdrop */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
}

export default Header;
