"use client"
import { getbestproduct } from '@/app/api/bestSale'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function BestSallingPartOne() {
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

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
      <h2 className="font-bold text-lg mb-4">Best Selling</h2>
      <div className="space-y-4">
        {bestProductData.map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            <div className="flex items-center gap-3 pb-3 border-b last:border-0">
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
                <div className="flex items-center">
                  {product.stars && (
                    <div className="flex text-yellow-400 text-xs">{"★".repeat(product.stars)}</div>
                  )}
                  {product.price && <p className="text-green-700 text-sm ml-auto">${product.price}</p>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestSallingPartOne