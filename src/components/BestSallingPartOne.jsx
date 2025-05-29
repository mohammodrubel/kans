import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import apple from '../assets/apple.jpg'
import Brown from '../assets/BrownOnion.jpg'
import kiwi from '../assets/kiwi.jpg'
import peper from '../assets/pepper.jpg'

function BestSallingPartOne() {
    const bestSellingProducts = [
  { name: "apple", stars: 5, favorite: true ,img:apple},
  { name: "Brown", price: "4.8", favorite: false ,img:Brown},
  { name: "kiwi", price: "0.40", favorite: false ,img:kiwi},
  { name: "peper", price: "9.90", favorite: true ,img:peper},
  { name: "apple", stars: 5, favorite: true ,img:apple},
  { name: "peper", price: "0.40", favorite: false ,img:peper},
]

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4">Best Selling</h2>
              <div className="space-y-4">
                {bestSellingProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 pb-3 border-b last:border-0">
                    <div className="w-16 h-16 bg-[#f5f5f0] rounded-md flex items-center justify-center">
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="h-10 w-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex items-center">
                        {product.stars && (
                          <div className="flex text-yellow-400 text-xs">{"★".repeat(product.stars)}</div>
                        )}
                        {product.price && <p className="text-green-700 text-sm ml-auto">${product.price}</p>}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <span className="sr-only">Add to favorites</span>
                      {product.favorite ? (
                        <span className="text-xl text-green-700">+</span>
                      ) : (
                        <span className="text-xl">○</span>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default BestSallingPartOne