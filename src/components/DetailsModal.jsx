"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Heart, RotateCcw, Share2, Shield, Truck, X } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
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

export function DetailsModal({ 
  product, 
  open, 
  onOpenChange,
  isInWishlist,
  onToggleFavorite
}) {
  const [selectedImage, setSelectedImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (product?.photo?.length > 0) {
      setSelectedImage(product.photo[0].original_url)
    }
  }, [product])

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

  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-6xl min-w-[310px] md:min-w-[800px] max-h-[95vh] overflow-y-auto"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        {/* Close Button */}
        <DialogClose asChild>
          <button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            onClick={(e) => { 
              e.stopPropagation()
              onOpenChange(false)
            }}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogClose>

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
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(item.original_url)
                      }}
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
                <AutoCurrencyFormatter price={product.discounted_price || product.price} />
              </h2>
              {product.discount > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  <AutoCurrencyFormatter price={product.price} />
                </span>
              )}
            </div>
            
            {renderDynamicContent()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center mx-4 mt-4">
          <TooltipProvider>
            <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="tel:+994772171111" 
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
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
                  <a 
                    href="tel:+971543627166" 
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
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
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(e);
            }}
            disabled={isLoading}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className="h-4 w-4"
              fill={isInWishlist ? "currentColor" : "none"}
            />
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
  )
}