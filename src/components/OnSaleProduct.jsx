'use client'

import { useEffect, useState } from 'react'
import Product from './Product'
import { getOnSaleProduct } from '@/app/api/0nSale'
import Image from 'next/image'
import banner1 from '../assets/bnr1.jpg'
import banner2 from '../assets/bnr2.jpg'

const OnSaleProduct = () => {
  const [onSaleProduct, setOnSaleProduct] = useState([])
  const [onSaleProductLoading, setOnSaleProductLoading] = useState(true)

  useEffect(() => {
    const fetchOnSaleProduct = async () => {
      try {
        const res = await getOnSaleProduct()
        const data = await res
        setOnSaleProduct(data?.data || [])
      } catch (error) {
        console.log(error)
      } finally {
        setOnSaleProductLoading(false)
      }
    }

    fetchOnSaleProduct()
  }, [])

  return (
    <div className="container mx-auto">
      <div className="mb-2 p-3 bg-white rounded-2xl">

        {/* parent grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-3">
            {/* <h1 className='text-2xl font-medium text-gray-800'>Major Top Vendor</h1> */}
            <div className="w-full flex-col h-full gap-5 rounded-xl flex items-center justify-center">
              <Image width={600} height={600} className='rounded-2xl' src={banner1} alt='banner' />
              <Image width={600} height={600} className='rounded-2xl' src={banner2} alt='banner' />
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-bold text-xl mb-4">On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {onSaleProduct?.slice(0, 8).map((product) => (
                <Product key={product?.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnSaleProduct
