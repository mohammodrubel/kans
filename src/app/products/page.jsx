'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Product from '@/components/Product'
import ProductHeader from '@/components/ProductHeader'
import ProductSidebar from '@/components/ProductSidebar'
import { getProductCategory } from '../api/category'
import { getProduct } from '../api/product'
// import { getProduct } from '../api/product'

function Page() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const searchQuery = searchParams.get('search') || ''
  const id = searchParams.get('id') || ''

  const [search, setSearch] = useState(searchQuery)
  const [selectCategory, setSelectCategory] = useState('')
  const [categoryData, setCategoryData] = useState(null)
  const [categoryLoading, setCategoryLoading] = useState(true)
  const [productData, setProductData] = useState([])
  const [loadingProduct, setLoadingProduct] = useState(true)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8)

  // Sync local search state when URL search param changes
  useEffect(() => {
    setSearch(searchQuery)
  }, [searchQuery])

  // Update URL query when user changes search input (debounce recommended)
  useEffect(() => {
    // Update URL with new search param (reset page to 1 if needed)
    const params = new URLSearchParams(window.location.search)
    if (search) {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    params.set('page', '1') // reset page on new search

    router.replace(`?${params.toString()}`, { scroll: false })
  }, [search])

  const metaData = [
    { name: 'search', value: search },
    { name: 'category', value: selectCategory || id },
    { name: 'limit', value: limit },
    { name: 'page', value: page },
  ]

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
    const data = await getProduct(metaData);
    console.log(data?.data, 'frontend');
    setProductData(data?.data || []); 
  } catch (error) {
    console.error(error);
  } finally {
    setLoadingProduct(false);
  }
}

    fetchCategory()
    fetchProduct()
  }, [search, selectCategory, id, page, limit])

  const products = productData || []

  return (
    <div className="container mx-auto px-5">
      <ProductHeader
        search={search}
        setSearch={setSearch}          // Pass both state and setter down
        categoryData={categoryData}
        setSelectCategory={setSelectCategory}
      />

      <div className="flex gap-5 mt-5">
        <div className="hidden w-[300px] md:block">
          <ProductSidebar
            category={categoryData}
            setSelectCategory={setSelectCategory}
          />
        </div>

        <div className="flex-1">
          {loadingProduct ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : (
            <div
              className={`grid gap-4 justify-center
                grid-cols-1
                ${products.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}
                ${products.length <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}
                ${products.length <= 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-4'}
              `}
            >
              {products.length > 0 ? (
                products.map((item) => <Product key={item?.id} product={item} />)
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No products found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page
