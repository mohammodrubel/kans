"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import banner from '../assets/banner3.jpg';
import Product from "./Product";
import CategoriesWarpar from "./CategoriesWarpar";

export function FeaturedProducts() {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState  (null);

    const plugin = useMemo(() => Autoplay({ delay: 2000, stopOnInteraction: true }), []);

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
        <div className="container mx-auto  py-10">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-center gap-4">
                {/* Left side: 3 columns */}
                <div className="md:col-span-3 md:h-[500px] p-4 rounded relative">
                    {/* <Image
                        fill
                        src={banner}
                        alt="banner"
                        className="object-cover rounded"
                        priority
                    /> */}
                    <CategoriesWarpar/>
                </div>

                {/* Right side: 9 columns */}
                <div className="md:col-span-9">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Featured Products</h2>

                    {isLoading ? (
                        <div>Loading products...</div>
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
                                        className="mt-5 mb-5 sm:basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
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
        </div>
    );
}