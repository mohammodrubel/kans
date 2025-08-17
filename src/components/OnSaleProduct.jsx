"use client";

import { getOnSaleProduct } from "@/app/api/0nSale";
import { bannerAPi } from "@/app/api/banner/bannerApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "./Product";
import { Skeleton } from "@/components/ui/skeleton";

const OnSaleProduct = () => {
  const [onSaleProduct, setOnSaleProduct] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [onSaleRes, bannerRes] = await Promise.all([
          getOnSaleProduct(),
          bannerAPi(),
        ]);
        setOnSaleProduct(onSaleRes?.data || []);
        setBannerPhoto(bannerRes?.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mb-2 p-3 bg-white rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Banner skeletons */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 mx-auto gap-4 h-full">
                {[...Array(2)].map((_, i) => (
                  <Skeleton key={i} className="w-full h-[200px] rounded-2xl" />
                ))}
              </div>
            </div>

            {/* Product skeletons */}
            <div className="col-span-1 md:col-span-10">
              <h2 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 px-2 sm:px-0">
                On Sale
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="h-40 w-full rounded-lg" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="mb-2 p-3 bg-white rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Banner Column - Hidden on mobile, shown on md+ */}
          <div className=" md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 mx-auto gap-4 h-full">
              {bannerPhoto.map((item) => (
                <div key={item.id} className="relative group w-full h-full">
                  <Link href={item?.url || "#"} passHref>
                    <Image
                      width={500}
                      height={600}
                      className="rounded-2xl object-cover w-full h-full max-h-[300px]"
                      src={
                        item?.media?.[0]?.original_url ||
                        "/placeholder-image.jpg"
                      }
                      alt={item?.name || "Banner image"}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
                      unoptimized
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Products Column - Full width on mobile, 10 cols on md+ */}
          <div className="col-span-1 md:col-span-10">
            <h2 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 px-2 sm:px-0">
              On Sale
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {onSaleProduct.slice(0, 8).map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSaleProduct;
