
"use client";

import { getOnSaleProduct } from "@/app/api/0nSale";
import { bannerAPi } from "@/app/api/banner/bannerApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useLanguage } from "@/app/context/LanguageContext";
import useTranslation from "@/hooks/useTranslation";

const OnSaleProduct = () => {
  const [onSaleProduct, setOnSaleProduct] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const t= useTranslation();
  const { currentLang, translations } = useLanguage();

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
        setError("failed_to_load");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Helper: language অনুযায়ী নাম বের করা
  const getItemName = (item) => {
    switch (currentLang) {
      case "ru":
        return item.name_ru || item.name;
      case "ar":
        return item.name_ar || item.name;
      case "az":
        return item.name_az || item.name;
      case "tr":
        return item.name_tr || item.name;
      default:
        return item.name;
    }
  };

  const getItemDescription = (item) => {
    switch (currentLang) {
      case "ru":
        return item.description_ru || item.description;
      case "ar":
        return item.description_ar || item.description;
      case "az":
        return item.description_az || item.description;
      case "tr":
        return item.description_tr || item.description;
      default:
        return item.description;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center" >
        <p className="text-gray-500">
          {translations["loading"] || "Loading..."}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center text-red-500">
        {translations[error] || "Failed to load data"}
      </div>
    );
  }

  return (
    <div className="container mx-auto" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <div className="mb-2 p-3 bg-white rounded-2xl">
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-4">
          {/* Banner Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 items-center">
              {bannerPhoto.map((item) => (
                <div key={item.id} className="relative group w-full">
                  <Link href={item?.url || "#"} passHref>
                    <Image
                      width={500}
                      height={600}
                      className="rounded-2xl object-cover w-full h-full"
                      src={
                        item?.media?.[0]?.original_url ||
                        "/placeholder-image.jpg"
                      }
                      // alt={getItemName(item)}
                      
                       alt={item?.name || 'Banner image'}
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

          {/* Products Column */}
          <div className="lg:col-span-10">
            <h2 className="font-bold text-xl mb-4">
              {t("navigation.Sale", " On Sale")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {onSaleProduct.slice(0, 8).map((product) => (
                <Product
                  key={product.id}
                  product={{
                    ...product,
                    name: getItemName(product),
                    description: getItemDescription(product),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSaleProduct;
