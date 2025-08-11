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
    e.stopPropagation(); // stop opening modal
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
    <Card
      key={product.id}
      className="group relative overflow-hidden py-0 border-0 shadow-sm hover:shadow-md transition-shadow h-full"
      onClick={() => setIsDetailsOpen(true)}
    >
      <div className="relative">
        {/* Discount Badge */}
        {product.discount > 0 && (
          <Badge className="absolute top-3 left-3 z-10 bg-purple-500 hover:bg-purple-500 text-white font-medium px-2  text-xs">
            -{product.discount}%
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 z-10 bg-white/80 hover:bg-white ${
            isInWishlist ? "text-red-500" : "hover:text-red-500"
          } opacity-100 transition-opacity duration-200`}
        >
          <Heart
            className="h-4 w-4 cursor-pointer"
            fill={isInWishlist ? "currentColor" : "none"}
          />
        </Button>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.photo?.[0]?.original_url || "/placeholder.svg"}
            alt={product.name}
            width={220}
            height={220}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <CardContent className="px-3 py-0 flex flex-col justify-between h-[80px]">
        {/* Product Title */}
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-1 leading-tight">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className=" mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">
              <AutoCurrencyFormatter price={product.discounted_price || product.price} />
            </span>
          </div>

          {product.discount > 0 && (
            <div className="flex items-center gap-2 text-sm">
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

      {/* Details Modal */}
      <DetailsModal
        product={product}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </Card>
  );
};

export default Product;
