// src/app/api/category/index.js or /lib/server/category.js
"use server"

export const getProductCategory = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/product-categories', {
      cache: 'force-cache'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

export const getSingleProductCategory = async (id) => {
  try {
    const res = await fetch(`https://egg.dordham.com/api/v1/product-categories/${id}`, {
      cache: 'force-cache'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching single category:", error)
    return null
  }
}
