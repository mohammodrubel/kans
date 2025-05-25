import Image from "next/image"
import { Star, Plus, Heart } from "lucide-react"
import img1 from '../assets/sale.png'
import img2 from '../assets/sale2.png'
import img3 from '../assets/sale3.png'
import img4 from '../assets/sale4.png'
import img5 from '../assets/sale5.png'

export default function BestSellingSection() {
  const topProducts = [
    { name: "Eggs", price: "$4.48 g", rating: 5, icon: "plus", image: img1 },
    { name: "Pistachios", price: "$4.48 g", rating: 0, icon: "plus", image: img2 },
    { name: "Mangoes", price: "$0.40 x", rating: 0, icon: "circle", image: img3 },
    { name: "Cashews", price: "$9.90", rating: 0, icon: "plus", image: img4 },
  ]

  const bottomProducts = [
    { name: "Bestkelus", price: "", rating: 5, icon: "heart", image: img5 },
    { name: "Eggs", price: "$2.28 g", rating: 0, icon: "circle", image: img1 },
    { name: "Apple", price: "$8.82 g", rating: 0, icon: "heart", image: img2 },
  ]

  return (
    <>
      <div className="bg-white mt-2 rounded-lg p-4 shadow-sm">
        <h2 className="font-bold text-xl mb-4">Best Selling</h2>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={index} className="flex items-center gap-3 border-b pb-3 last:border-0">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-[#2c5c1e] text-sm font-bold">{product.price}</p>
                {product.rating > 0 && (
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
              </div>
              <button className="text-[#2c5c1e]">
                {product.icon === "plus" && <Plus size={16} />}
                {product.icon === "circle" && <div className="w-4 h-4 rounded-full border border-gray-300"></div>}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
        <h2 className="font-bold text-xl mb-4">Best Selling</h2>
        <div className="space-y-4">
          {bottomProducts.map((product, index) => (
            <div key={index} className="flex items-center gap-3 border-b pb-3 last:border-0">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                {product.price && <p className="text-[#2c5c1e] text-sm font-bold">{product.price}</p>}
                {product.rating > 0 && (
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
              </div>
              <button className={product.icon === "heart" ? "text-gray-400 hover:text-red-500" : ""}>
                {product.icon === "heart" && <Heart size={16} />}
                {product.icon === "circle" && <div className="w-4 h-4 rounded-full border border-gray-300"></div>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
