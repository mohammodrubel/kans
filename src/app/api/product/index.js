// src/app/api/category/index.js or /lib/server/category.js
"use server"

export const getProduct = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/products', {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

export const getSingleProduct = async (id) => {
  try {
    const res = await fetch(`https://egg.dordham.com/api/v1/products/${id}`, {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching single category:", error)
    return null
  }
}
