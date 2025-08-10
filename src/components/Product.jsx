"use client";

import { addFav, getAllFavList } from "@/app/api/wishlist";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    e.stopPropagation(); // Prevent event from bubbling up to the card
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
    <Card className="group p-3 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white max-w-sm">
      <CardContent className="p-0">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg cursor-pointer"
          onClick={() => setIsDetailsOpen(true)}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 z-10 bg-white/80 hover:bg-white ${isInWishlist ? "text-red-500" : "hover:text-red-500"
              } opacity-100 transition-opacity duration-200`}
          >
            <Heart
              className="h-4 w-4 cursor-pointer"
              fill={isInWishlist ? "currentColor" : "none"}
            />
          </Button>

          <div className="aspect-square flex items-center justify-center">
            <Image
              width={280}
              height={280}
              src={product.photo?.[0]?.original_url || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div
          className=" cursor-pointer"
          onClick={() => setIsDetailsOpen(true)}
        >
          <div className="px-2">
            <h3 className="font-semibold line-clamp-1 text-lg text-gray-900 group-hover:text-[#016630] transition-colors duration-200">
              {product.name}
            </h3>
            <AutoCurrencyFormatter price={product?.price}  discount={product.discount_price} /> 
          </div>
        </div>
      </CardContent>

      <DetailsModal
        product={product}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </Card>
  );
};

export default Product;