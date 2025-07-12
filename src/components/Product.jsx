"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { DetailsModal } from "./DetailsModal";
// import DetailsModal from "./DetailsModal";

const Product = ({ product }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetails = () => setIsDetailsOpen(true);

  return (
    // <>
      <Card className="group p-3 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white max-w-sm">
        <CardContent className="p-0">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white hover:text-red-500 opacity-0 group-hover:opacity-100"
            >
              <Heart className="h-4 w-4" />
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
            <div className="px-2 space-y-3">
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-[#016630] transition-colors duration-200">
                {product.name}
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="px-3 hover:bg-gray-50"
              onClick={openDetails}
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

    // </>
  );
};

export default Product;
