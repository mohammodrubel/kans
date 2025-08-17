"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import { Skeleton } from "@/components/ui/skeleton";

export function FeaturedProducts() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const plugin = useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://egg.dordham.com/api/v1/products`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProductData(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Featured Products
        </h2>

        {isLoading ? (
          <div className="flex gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2 w-40">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : productData.length === 0 ? (
          <div>No products available</div>
        ) : (
          <Carousel
            plugins={[plugin]}
            className="w-full"
            onMouseEnter={plugin.stop}
            onMouseLeave={plugin.reset}
          >
            <CarouselContent>
              {productData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="mt-2 mb-2 basis-1/2 md:basis-1/3 xl:basis-1/5 2xl:basis-1/7"
                >
                  <Product product={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!left-2 sm:!left-4 md:!left-6 lg:!left-8 !top-[45%] z-10" />
            <CarouselNext className="!right-2 sm:!right-4 md:!right-6 lg:!right-8 !top-[45%] z-10" />
          </Carousel>
        )}
      </div>
    </div>
  );
}
