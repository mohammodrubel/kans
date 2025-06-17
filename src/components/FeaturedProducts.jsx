"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Product from "./Product";

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
        <div>
            <div className="relative container my-10 mx-auto">
                i just i to use a simple banner like width 400px 
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {productData.map((item,index) => (
                            <CarouselItem key={index} className="mt-5 mb-5 sm:basis-1/1 md:basis-1/2 xl:basis-1/3 2xl:basis-1/5">
                                <Product product={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="!left-2 sm:!left-4 md:!left-6 lg:!left-8 !top-[45%] z-10" />
                    <CarouselNext className="!right-2 sm:!right-4 md:!right-6 lg:!right-8 !top-[45%] z-10" />
                </Carousel>
            </div>
        </div>
    );
}
