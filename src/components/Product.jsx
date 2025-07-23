"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { DetailsModal } from "./DetailsModal";
// import { addFav, getAllFavList } from "@/app/api/wishlist";
import { getFormLocaleStorage } from "@/utils/localeStoratge";
import { toast } from "sonner";
import { addFav, getAllFavList } from "@/app/api/wishlist";

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

  const toggleFavorite = async () => {
    try {
      if (!token) return toast.error("Please login first.");

      const res = await addFav({ product_id: product.id }, token);
      if (res?.status) {
        toast.success(res.message || (isInWishlist ? "Removed from wishlist" : "Added to wishlist"));
        console.log(res)
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
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
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

        <div className="flex justify-between items-center my-5">
          <div className="px-2 space-y-2">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-[#016630] transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-gray-500 font-medium">${product.price}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-3 hover:bg-gray-50"
            onClick={() => setIsDetailsOpen(true)}
          >
            Details
          </Button>
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
