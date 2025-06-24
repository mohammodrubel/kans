"use client"
import { getbestproduct } from '@/app/api/bestSale'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import apple from '../assets/apple.jpg'
import Brown from '../assets/BrownOnion.jpg'
import kiwi from '../assets/kiwi.jpg'
import { Button } from './ui/button'

function BestSallingPartTwo() {
    const secondBestSellingProducts = [
        { name: "Apple", price: "5.28", stars: 5, img: apple },
        { name: "Brown", price: "2.28", img: Brown },
        { name: "kiwi", price: "8.82", img: kiwi },
    ]
    const [bestProductData, setBestProductData] = useState([])
    const [bestProductLoading, setBestProductLoading] = useState(false)

    useEffect(() => {
        const fetchBestSaleProduct = async () => {
            try {
                const res = await getbestproduct()
                const data = await res
                console.log(data)
                setBestProductData(data?.data || [])
                setBestProductLoading(false)
            } catch (error) {
                console.log(error)
            } finally {
                setBestProductLoading(false)
            }
        }

        fetchBestSaleProduct()
    }, [])

console.log(bestProductData)
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Best Selling</h2>
            <div className="space-y-4">
                {bestProductData.slice(0,2).map((product, index) => (
                    <div key={index} className="flex items-center gap-3 pb-3 border-b last:border-0">
                        <div className="w-16 h-16 bg-[#f5f5f0] rounded-md flex items-center justify-center">
                            <Image
                                src={product.photo[0].original_url}
                                alt={product.name}
                                width={50}
                                height={50}
                                className="h-10 w-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-green-700 text-sm">${product.price} g</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart className="h-5 w-5" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSallingPartTwo