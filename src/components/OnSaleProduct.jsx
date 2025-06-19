'use client'
import { getOnsaleProduct } from '@/app/api/0nSale'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import apple from '../assets/apple.jpg'
import Brown from '../assets/BrownOnion.jpg'
import kiwi from '../assets/kiwi.jpg'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import Product from './Product'

const OnSaleProduct = () => {
    const [onSaleProduct, setOnSaleProduct] = useState([])
    const [onSaleProductLoading, setOnSaleProductLoading] = useState(true)

    useEffect(() => {
        const fetchOnSaleProduct = async () => {
            try {
                const res = await getOnsaleProduct()
                const data = await res
                console.log(data)
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
    
console.log(onSaleProduct)
    return (
        <div className="mb-2 p-3 bg-white rounded-2xl">
            <h2 className="font-bold text-xl mb-2">On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {onSaleProduct?.slice(0,3).map((product, index) => <Product key={product?.id} product={product}/>)}
            </div>
        </div>
    )
}

export default OnSaleProduct
