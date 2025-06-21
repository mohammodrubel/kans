"use server"

export const megaMenuAPi = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/product-categories-with-sub-categories', {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}
