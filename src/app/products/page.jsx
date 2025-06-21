'use client'

import Product from '@/components/Product'
import ProductHeader from '@/components/ProductHeader'
import ProductPagination from '@/components/ProductPagination'
import ProductSidebar from '@/components/ProductSidebar'
import { useEffect, useState } from 'react'
import { getProductCategory } from '../api/category'
import { getProduct } from '../api/product'

function Page({ children }) {
  const [categoryData, setCategoryData] = useState(null)
  const [categoryLoading, setCategoryLoading] = useState(true)
  const [productData, setProductData] = useState(null)
  const [loadingProduct, setLoadingProduct] = useState(true)
  const [search, setSearch] = useState('')
  const [selectCategory, setSelectCategory] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8)

  const metaData = [
    { name: 'search', value: search },
    { name: 'category', value: selectCategory },
    { name: 'limit', value: limit },
    { page: 'page', value: page }
  ]
console.log(selectCategory)
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
        const data = await getProduct(metaData)
        setProductData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingProduct(false)
      }
    }

    fetchCategory()
    fetchProduct()
  }, [search, selectCategory])

  const products = productData?.data || []

  return (
    <div className="container mx-auto px-5">
      <ProductHeader search={search} setSearch={setSearch} categoryData={categoryData}setSelectCategory={setSelectCategory} />

      <div className="flex gap-5 mt-5">
        <div className="hidden w-[300px] md:block">
          <ProductSidebar category={categoryData} setSelectCategory={setSelectCategory} />
        </div>

        <div className="flex-1">
          <div
            className={`grid gap-4 justify-center
              grid-cols-1
              ${products.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}
              ${products.length <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}
              ${products.length <= 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-4'}
            `}
          >
            {products.length > 0 ? (
              products.map((item) => (
                <Product key={item?.id} product={item} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page
