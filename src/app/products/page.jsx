'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Product from '@/components/Product'
import ProductHeader from '@/components/ProductHeader'
import ProductSidebar from '@/components/ProductSidebar'
import { getProductCategory } from '../api/category'
import { getProduct } from '../api/product'
import { useLanguage } from '../context/LanguageContext'

function Page() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { currentLang } = useLanguage()

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

  // Update URL query when user changes search input
  useEffect(() => {
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

  // Fetch categories and products
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
        setProductData(data?.data || [])
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingProduct(false)
      }
    }

    fetchCategory()
    fetchProduct()
  }, [search, selectCategory, id, page, limit])

  const getItemName = (item) => {
    switch (currentLang) {
      case 'ru':
        return item.name_ru || item.name
      case 'ar':
        return item.name_ar || item.name
      case 'az':
        return item.name_az || item.name
      case 'tr':
        return item.name_tr || item.name
      default:
        return item.name
    }
  }

  const getItemDescription = (item) => {
    switch (currentLang) {
      case 'ru':
        return item.description_ru || item.description
      case 'ar':
        return item.description_ar || item.description
      case 'az':
        return item.description_az || item.description
      case 'tr':
        return item.description_tr || item.description
      default:
        return item.description
    }
  }

  return (
    <div className="container mx-auto px-5" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <ProductHeader
        search={search}
        setSearch={setSearch}
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
                ${productData.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}
                ${productData.length <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}
                ${productData.length <= 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-4'}
              `}
            >
              {productData.length > 0 ? (
                productData.map((item) => (
                  <Product
                    key={item.id}
                    product={{
                      ...item,
                      name: getItemName(item),
                      description: getItemDescription(item),
                    }}
                  />
                ))
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
