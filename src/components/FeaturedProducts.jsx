"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Product from "./Product";
import banner from '../assets/banner3.jpg'
import Image from "next/image";

export function FeaturedProducts() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://egg.dordham.com/api/v1/products`);
                const data = await res.json();
                setProductData(data?.data || []);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        fetchProducts();
    }, []);

    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Featured Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-center gap-4">
                {/* Left side: 3 columns */}
                <div className="md:col-span-3 md:h-[500px] p-4 rounded">
                    <Image
                        width={300}
                        height={300}
                        src={banner}
                        alt="banner"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                {/* Right side: 9 columns */}
                <div className="md:col-span-9">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {productData.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="mt-5 mb-5 sm:basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                                >
                                    <Product product={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="!left-2 sm:!left-4 md:!left-6 lg:!left-8 !top-[45%] z-10" />
                        <CarouselNext className="!right-2 sm:!right-4 md:!right-6 lg:!right-8 !top-[45%] z-10" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
