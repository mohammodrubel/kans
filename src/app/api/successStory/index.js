// src/app/api/category/index.js or /lib/server/category.js
"use server"

export const getProductSuccessStory= async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/success-stories', {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

