"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { PhoneCall } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"




export function DetailsModal({ product, isOpen, onClose }) {
    const [selectImage, setSelectImage] = useState("")

    if (!product) return null
    const descrioption = `survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl min-w-[310] md:min-w-[800px]  max-h-[95vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-gray-100 py-4 relative">
                        <Image className="rounded-2xl text-center mx-auto" width={300} height={300} src={selectImage || product?.photo[0].original_url} alt="image" />
                        <Badge className="bg-red-500 absolute top-7 left-5 mx-5">New</Badge>
                        <div className="flex p-4 justify-between gap-4">
                            {
                                product?.photo?.map((item, index) => <Image onClick={() => setSelectImage(item?.original_url)} key={index} className="mt-2 rounded-2xl" width={100} height={100} src={item?.original_url} alt="gallery for product" />)
                            }
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <DialogTitle className="text-2xl font-bold py-2">{product?.name}</DialogTitle>
                            <p>{product?.description || descrioption}</p>
                            <h2 className="mt-4 text-2xl font-bold text-green-500"><span className="text-gray-700!">Price :</span> ${product?.price}</h2>
                            <div className="flex gap-5 mt-10">
                                <Button className="px-8 bg-[#016630]">  <PhoneCall /> Call Us</Button>
                                <Button className="px-8 bg-[#016630]">Send Inquiry</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
