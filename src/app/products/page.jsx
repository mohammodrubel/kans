"use client"

import Product from '@/components/Product'
import ProductHeader from '@/components/ProductHeader'
import ProductPagination from '@/components/ProductPagination'
import ProductSidebar from '@/components/ProductSidebar'
import { useEffect, useState } from 'react'
import { getProductCategory } from '../api/category'
import { getProduct } from '../api/product'


function Layout({ children }) {
    const [categoryData, setCategoryData] = useState(null)
    const [categoryLoading, setCategoryLoading] = useState(true)
    const [productData, setProductData] = useState(null)
    const [loadingProduct, setLoadingProduct] = useState(true)

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const data = await getProductCategory()
                setCategoryData(data)
            } catch (error) {
                console.error(error)
            } finally {
                setCategoryLoading(false)
            }
        }

        const fetchProduct = async () => {
            try {
                const data = await getProduct()
                setProductData(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingProduct(false)
            }
        }

        fetchCategory()
        fetchProduct()
    }, [])

    return (
        <div className='container mx-auto px-5'>
            <ProductHeader />
            <div className='flex gap-5 mt-5'>
                <div className='hidden w-[350px] md:block'>
                    <ProductSidebar category={categoryData} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
                    {
                        productData?.data?.map((item) => (
                            <Product key={item?.id} product={item} />
                        ))
                    }
                </div>
            </div>
            <div className='mt-10 mb-10'><ProductPagination /></div>
        </div>
    )
}

export default Layout
