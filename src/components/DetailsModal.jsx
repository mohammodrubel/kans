"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Heart, PhoneCall, RotateCcw, Share2, Shield, ShoppingCart, Truck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"




export function DetailsModal({ product, isOpen, onClose }) {
    const [selectImage, setSelectImage] = useState("")

    if (!product) return null
    const descrioption = `survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    

    return (
        <div className="mx-5">
            <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl min-w-[310] md:min-w-[800px]  max-h-[95vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
                    <div className="bg-gray-100 py-4 relative">
                        <Image className="rounded-2xl text-center mx-auto" width={300} height={300} src={selectImage || product?.photo[0].original_url} alt="image" />
                        <Badge className="bg-red-500 absolute top-7 left-5 mx-5">New</Badge>
                        <div className="grid px-4 text-center mx-auto grid-cols-2 sm:grid-cols-3 gap-4">
                            {
                                product?.photo?.map((item, index) => <Image onClick={() => setSelectImage(item?.original_url)} key={index} className="mt-2 text-center mx-auto rounded-2xl" width={100} height={100} src={item?.original_url} alt="gallery for product" />)
                            }
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <DialogTitle className="text-2xl font-bold py-2">{product?.name}</DialogTitle>
                            <p>{product?.description || descrioption}</p>
                            <h2 className="mt-4 text-2xl font-bold text-green-500"><span className="text-gray-700!">Price :</span> ${product?.price}</h2>
                            <div className="flex gap-5 mt-10">
                                <Button className="px-8 bg-[#016630]">Send Inquiry</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                    <div className="flex gap-3">
                        <Button size="lg" className="flex-1 bg-[#016630] hover:bg-[#016630]">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Call Now
                        </Button>
                        <Button variant="outline" size="lg"><Heart /></Button>
                        <Button variant="outline" size="lg"><Share2 className="w-4 h-4" /></Button>
                    </div>

                    {/* Shipping Info */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <Truck className="w-6 h-6 text-primary" />
                            <div>
                                <p className="font-semibold text-sm">Free Shipping</p>
                                <p className="text-xs text-muted-foreground">Orders over $50</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Shield className="w-6 h-6 text-primary" />
                            <div>
                                <p className="font-semibold text-sm">2 Year Warranty</p>
                                <p className="text-xs text-muted-foreground">Full coverage</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <RotateCcw className="w-6 h-6 text-primary" />
                            <div>
                                <p className="font-semibold text-sm">30-Day Returns</p>
                                <p className="text-xs text-muted-foreground">No questions asked</p>
                            </div>
                        </div>
                    </div>

            </DialogContent>
        </Dialog>
        </div>
    )
}
