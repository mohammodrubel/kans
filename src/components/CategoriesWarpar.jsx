"use server"

import Categories from "./Categories"

const CategoriesWarpar = async()=> {
    const res = await fetch(`https://egg.dordham.com/api/v1/product-categories`,{
        cache: "no-store"  
    })
    const data =await res.json() 
  return <Categories data={data?.data} />
}

export default CategoriesWarpar