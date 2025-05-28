"use client"
import Image from "next/image"
import { Plus } from "lucide-react"

export default function ProductCard({ item }) {
  console.log(item)
  return (
    <div className=" m-4  rounded-lg p-4 flex flex-col relative">
      <Image src={item?.image} alt="Image" width={150} height={150}  />
      <h3 className="font-medium">{item?.name}</h3>
      <p className="text-[#2c5c1e] font-bold">${item?.price}</p>

      <button className="absolute bottom-4 right-4 bg-[#5a8c42] text-white p-1 rounded-md hover:bg-[#4a7a32] transition-colors">
        <span className="sr-only">Add to cart</span>
        <Plus size={16} />
      </button>
    </div>
  )
}
