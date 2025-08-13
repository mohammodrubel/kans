'use client'

import { getOnSaleProduct } from '@/app/api/0nSale'
import { bannerAPi } from '@/app/api/banner/bannerApi'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Product from './Product'

const OnSaleProduct = () => {
  const [onSaleProduct, setOnSaleProduct] = useState([])
  const [bannerPhoto, setBannerPhoto] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [onSaleRes, bannerRes] = await Promise.all([
          getOnSaleProduct(),
          bannerAPi()
        ])
        setOnSaleProduct(onSaleRes?.data || [])
        setBannerPhoto(bannerRes?.data || [])
      } catch (err) {
        console.error(err)
        setError('Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center text-red-500">
        {error}
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <div className="mb-2 p-3 bg-white rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Banner Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-5 items-center">
              {bannerPhoto.map((item) => (
                <div key={item.id} className="relative group w-full">
                  <Link href={item?.url || '#'} passHref>
                    <Image
                      width={500}
                      height={600}
                      className="rounded-2xl object-cover w-full h-full"
                      src={item?.media?.[0]?.original_url || '/placeholder-image.jpg'}
                      alt={item?.name || 'Banner image'}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-image.jpg'
                      }}
                      unoptimized
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-10">
            <h2 className="font-bold text-xl mb-4">On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {onSaleProduct.slice(0, 8).map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OnSaleProduct
