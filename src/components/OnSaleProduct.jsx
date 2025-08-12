'use client'

import { useEffect, useState } from 'react'
import Product from './Product'
import { getOnSaleProduct } from '@/app/api/0nSale'

const OnSaleProduct = () => {
    const [onSaleProduct, setOnSaleProduct] = useState([])
    const [onSaleProductLoading, setOnSaleProductLoading] = useState(true)

    useEffect(() => {
        const fetchOnSaleProduct = async () => {
            try {
                const res = await getOnSaleProduct()
                const data = await res
                setOnSaleProduct(data?.data || [])
                setOnSaleProductLoading(false)
            } catch (error) {
                console.log(error)
            } finally {
                setOnSaleProductLoading(false)
            }
        }

        fetchOnSaleProduct()
    }, [])


    return (
        <div className="mb-2 p-3 bg-white rounded-2xl">
            <h2 className="font-bold text-xl mb-2">On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto">
                {onSaleProduct?.slice(0, 6).map((product) => (
                    <Product key={product?.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default OnSaleProduct
