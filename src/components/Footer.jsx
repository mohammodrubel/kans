"use client"
import {
  Facebook,
  Send,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  ArrowUpRight,
  Info,
  CreditCard,
  RotateCcw,
  UserCheck,
  FileText,
  Shield,
  HelpCircle,
  Store,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-pink-500 flex items-center">
                <Logo/>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-slate-600">© 2021-2025 WEE HUB GENERAL TRADING LLC</p>
              <p className="text-sm text-slate-500">All rights reserved</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Stay in the loop with WEE news and offers</p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Facebook className="w-4 h-4 text-blue-600" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Send className="w-4 h-4 text-blue-500" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </Button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800 flex items-center">
              <Info className="w-4 h-4 mr-2" />
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                  <FileText className="w-3 h-3 mr-2" />
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                  <Shield className="w-3 h-3 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                  <HelpCircle className="w-3 h-3 mr-2" />
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">Customer</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                  <Phone className="w-3 h-3 mr-2" />
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                  <CreditCard className="w-3 h-3 mr-2" />
                  Payment Method
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                  <RotateCcw className="w-3 h-3 mr-2" />
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Seller Section & Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-800 flex items-center">
                <Store className="w-4 h-4 mr-2" />
                Seller
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                  >
                    <UserCheck className="w-3 h-3 mr-2" />
                    Log in as Seller
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors">
                    Seller Agreement
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-colors">
                    Start selling on WEE
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <a
                  href="mailto:help@wee.ae"
                  className="flex items-center text-sm font-medium text-slate-800 hover:text-pink-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  help@wee.ae
                </a>
                <p className="text-xs text-slate-500 ml-6">customer service</p>
              </div>

              <div className="space-y-2">
                <a
                  href="mailto:mp@wee.ae"
                  className="flex items-center text-sm font-medium text-slate-800 hover:text-pink-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  mp@wee.ae
                </a>
                <p className="text-xs text-slate-500 ml-6">partner support</p>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get in touch via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
