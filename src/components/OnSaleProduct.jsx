'use client'

import { getOnSaleProduct } from '@/app/api/0nSale'
import { bannerAPi } from '@/app/api/banner/bannerApi'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Product from './Product'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const OnSaleProduct = () => {
  const [onSaleProduct, setOnSaleProduct] = useState([])
  const [onSaleProductLoading, setOnSaleProductLoading] = useState(true)

  const [bannerPhoto, setBannerPhoto] = useState([])
  const [bannerLoading, setBannerLoading] = useState(true)

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

  console.log(bannerPhoto)
  useEffect(() => {
    const BannerPhotoFetch = async () => {
      try {
        const res = await bannerAPi()
        const data = await res
        console.log(data)
        setBannerPhoto(data?.data || [])
      } catch (error) {
        console.log(error)
      } finally {
        setBannerLoading(false)
      }
    }

    BannerPhotoFetch()
  }, [])



  return (
    <div className="container mx-auto">
      <div className="mb-2 p-3 bg-white rounded-2xl">

        {/* parent grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-2">
            {/* <h1 className='text-2xl font-medium text-gray-800'>Major Top Vendor</h1> */}
           <div className="w-full flex-col h-full gap-5 rounded-xl flex items-center justify-center">
      {bannerPhoto?.map((item) => (
        <Tooltip key={item.id || '#'}>
          <TooltipTrigger asChild>
            <div className="relative group">
              <Link 
                href={item?.url || '#'} 
                passHref
                className="block relative w-full h-full"
              >
                <Image
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover w-full h-full"
                  src={item?.media[0]?.original_url || '/placeholder-image.jpg'}
                  alt={item?.name || 'Banner image'}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center" className="bg-black text-white">
            <p className="font-medium">{item?.name || 'No name available'}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-bold text-xl mb-4">On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
