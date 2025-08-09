"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Heart, RotateCcw, Share2, Shield, ShoppingCart, Truck } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { addFav, getAllFavList } from "@/app/api/wishlist"
import { toast } from "sonner"
import AutoCurrencyFormatter from "./AutoCurrencyFormatter/AutoCurrencyFormatter"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ReactMarkdown from 'react-markdown'

function SafeHTMLRenderer({ html, className = "" }) {
  return (
    <div 
      className={`prose prose-sm max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  )
}

export function DetailsModal({ product, isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState("")
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key)
    }
    return null
  }

  const token = getFromLocalStorage("accessToken")

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (token && product) {
          setIsLoading(true)
          const response = await getAllFavList(token)
          const data = Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response)
              ? response
              : []

          setIsInWishlist(data.some(item => item.product_id === product.id))
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error)
        setIsInWishlist(false)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWishlist()
  }, [token, product?.id])

  const toggleFavorite = async () => {
    try {
      if (!token) {
        toast.error("Please login first.")
        return
      }

      if (!product) return

      setIsLoading(true)
      const res = await addFav({ product_id: product.id }, token)
      if (res?.status) {
        toast.success(
          res.message || (isInWishlist ? "Removed from wishlist" : "Added to wishlist")
        )
        setIsInWishlist(prev => !prev)
      } else {
        toast.error("Failed to update wishlist.")
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error)
      toast.error("An error occurred while updating wishlist.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!product) return null

  const formatDescription = (description) => {
    if (!description) {
      return `
        <p>This product has no description yet. Here's some default information:</p>
        <ul>
          <li>High-quality materials</li>
          <li>Manufacturer warranty included</li>
          <li>Free shipping available</li>
        </ul>
      `
    }

    // Basic formatting transformations
    return description
      .replace(/\n\n/g, '</p><p>')
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/^- (.*?)(?=\n|$)/gm, '<li>$1</li>')
      .replace(/<li>.*?<\/li>/gs, match => `<ul>${match}</ul>`)
  }

  const renderDynamicContent = () => {
    // If you have structured metadata from your API
    if (product.metadata?.sections) {
      return (
        <div className="mt-6 space-y-6">
          {product.metadata.sections.map((section, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {section.title}
              </h3>
              {section.isMarkdown ? (
                <ReactMarkdown className="prose prose-sm max-w-none text-gray-600">
                  {section.content}
                </ReactMarkdown>
              ) : (
                <SafeHTMLRenderer 
                  html={formatDescription(section.content)}
                  className="text-gray-600"
                />
              )}
            </div>
          ))}
        </div>
      )
    }

    // Fallback to regular description
    return (
      <div className="mt-4">
        {product.isMarkdown ? (
          <ReactMarkdown className="prose prose-sm max-w-none text-gray-600">
            {product.description}
          </ReactMarkdown>
        ) : (
          <SafeHTMLRenderer 
            html={formatDescription(product.description)}
            className="text-gray-600"
          />
        )}
      </div>
    )
  }

  return (
    <div className="mx-5">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl min-w-[310px] md:min-w-[800px] max-h-[95vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
            <div className="py-4 relative">
              {product.photo?.length > 0 && (
                <>
                  <Image
                    className="rounded-2xl text-center mx-auto"
                    width={300}
                    height={300}
                    src={selectedImage || product.photo[0].original_url}
                    alt={product.name}
                    priority
                  />
                  <Badge className="bg-red-500 absolute top-7 left-5 mx-5">
                    New
                  </Badge>
                  <div className="grid px-4 text-center mx-auto grid-cols-2 sm:grid-cols-3 gap-4">
                    {product.photo.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(item.original_url)}
                        className="mt-2 focus:outline-none"
                        aria-label={`View product image ${index + 1}`}
                      >
                        <Image
                          className="rounded-2xl text-center mx-auto"
                          width={100}
                          height={100}
                          src={item.original_url}
                          alt={`Product thumbnail ${index + 1}`}
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="space-y-4">
              <DialogTitle className="text-2xl font-bold">
                {product.name}
              </DialogTitle>
              
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-green-500">
                  <AutoCurrencyFormatter price={product?.price} />
                </h2>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    <AutoCurrencyFormatter price={product.originalPrice} />
                  </span>
                )}
              </div>
              
              {renderDynamicContent()}
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="flex-1 bg-[#016630] hover:bg-[#015a2a] h-12">
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 h-12">
                  Quick Buy
                </Button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center mx-4 mt-4">
            <TooltipProvider>
              <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="tel:+994772171111" className="flex-1">
                      <Button
                        size="lg"
                        className="w-full bg-white text-black border shadow-lg hover:bg-gray-100 flex items-center justify-center"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[16px]">🇦🇿</span>
                          <span className="text-sm font-medium">Call Now</span>
                        </div>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Azerbaijan</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="tel:+971543627166" className="flex-1">
                      <Button
                        size="lg"
                        className="w-full bg-white text-black border shadow-lg hover:bg-gray-100 flex items-center justify-center"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[16px]">🇦🇪</span>
                          <span className="text-sm font-medium">Call Now</span>
                        </div>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>United Arab Emirates</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
            <Button
              className="mx-4"
              variant="outline"
              size="lg"
              onClick={toggleFavorite}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className="h-4 w-4"
                fill={isInWishlist ? "currentColor" : "none"}
              />
            </Button>
            <Button variant="outline" size="lg" aria-label="Share product">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over $50</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">2 Year Warranty</p>
                <p className="text-xs text-muted-foreground">Full coverage</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RotateCcw className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">No questions asked</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}