"use client"

import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "./ui/button"

export function CarouselPlugin({ data }) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="container py-10 mx-auto">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2  xl:basis-1/3">
                            <div className="p-1">
                                <Card className="py-0 rounded-2xl gap-2">
                                    <div className="relative">
                                        <Image src={item?.Image} className="rounded-2xl" width={500} height={500} alt="image" />
                                        <div className="absolute top-[85%] bg-white shadow rounded-2xl right-[20px]">
                                            <Image src={item?.shortImage} className="rounded-2xl" width={80} height={100} alt="image" />
                                        </div>
                                    </div>
                                    <div className="font-bold px-5 text-[20px]">{item?.placeName}</div>
                                    <CardContent className="py-0 font-medium my-0">
                                        <span className="">{item?.description.slice(0, 100)}</span>
                                    </CardContent>
                                    <CardContent className="flex items-center justify-between bg-[#F4F4F4] gap-2 py-4">
                                        <div>

                                            <Image src={item?.User?.image} className="rounded-full" width={60} height={60} alt="image" />
                                            <div>
                                                <div className="text-[20px] font-bold">{item?.User?.userName}</div>
                                                <div className="text-gray-500">{item?.User?.position}</div>
                                            </div>
                                        </div>
                                        <Button className="bg-[#f8f3f3] hover:bg-[#f8f3f3] cursor-pointer shadow text-gray-700 capitalize">{item?.User?.placeName}</Button>

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
