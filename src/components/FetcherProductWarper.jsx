import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

const FetcherProductWarper = async()=> {
    const res = await fetch(`https://egg.dordham.com/api/v1/products`,{
        cache:'no-cache' 
    })
    const data =await res.json()
  return <FeaturedProducts data={data?.data} />
}

export default FetcherProductWarper