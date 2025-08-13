"use client";

import { addFav, getAllFavList } from "@/app/api/wishlist";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFormLocaleStorage } from "@/utils/localeStoratge";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AutoCurrencyFormatter from "./AutoCurrencyFormatter/AutoCurrencyFormatter";
import { DetailsModal } from "./DetailsModal";

const Product = ({ product }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const token = getFormLocaleStorage("accessToken");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (token) {
          const response = await getAllFavList(token);
          const data = Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response)
            ? response
            : [];
          setIsInWishlist(data.some(item => item.product_id === product.id));
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setIsInWishlist(false);
      }
    };

    fetchWishlist();
  }, [token, product.id]);

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    try {
      if (!token) return toast.error("Please login first.");

      const res = await addFav({ product_id: product.id }, token);
      if (res?.status) {
        toast.success(res.message || (isInWishlist ? "Removed from wishlist" : "Added to wishlist"));
        setIsInWishlist(prev => !prev);
      } else {
        toast.error("Failed to update wishlist.");
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  return (
    <>
      <Card
        key={product.id}
        className="group !shadow-none !border-none py-0 relative overflow-hidden duration-300 h-full flex flex-col bg-white"
        onClick={() => setIsDetailsOpen(true)}
      >
        <div className="relative">
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 z-10 bg-purple-500 hover:bg-purple-500 text-white font-medium px-2 py-1 text-xs sm:top-3 sm:left-3">
              -{product.discount}%
            </Badge>
          )}

          <Button
            size="icon"
            variant="ghost"
            onClick={toggleFavorite}
            className={`absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 transition-colors duration-200 ${
              isInWishlist ? "text-red-500" : "text-gray-400 hover:text-red-500"
            }`}
          >
            <Heart
              className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer"
              fill={isInWishlist ? "currentColor" : "none"}
            />
          </Button>

          <div className="aspect-square overflow-hidden bg-gray-50">
            <Image
              src={product.photo?.[0]?.original_url || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
        </div>

        <CardContent className="!py-0 sm:p-3 flex flex-col gap-1">
          <h3 className="font-medium text-gray-900 line-clamp-1 leading-tight text-sm sm:text-base">
            {product.name}
          </h3>
          
          <div className="flex flex-col">
            <div className="font-semibold text-base sm:text-lg text-gray-900">
              <AutoCurrencyFormatter price={product.discounted_price || product.price} />
            </div>

            {product.discount > 0 && (
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <span className="text-gray-400 line-through">
                  <AutoCurrencyFormatter price={product.price} />
                </span>
                <span className="text-green-600 font-medium">
                  Save {(Number(product.price) - Number(product.discounted_price)).toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <DetailsModal
        product={product}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        isInWishlist={isInWishlist}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default Product;