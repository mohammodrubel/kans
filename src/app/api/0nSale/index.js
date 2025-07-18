"use server"

export const getOnSaleProduct = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/on-sale', {
      cache: 'force-cache'
    })
  
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const data = await res.json() 
    console.log(data)
    return data
  } catch (error) {
    console.error("Error fetching categories:", error)
    return error
  }
}
export const getSingleOnsaleProduct = async (id) => {
  try {
    const res = await fetch(`https://egg.dordham.com/api/v1/on-sale/${id}`, {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching single category:", error)
    return null
  }
}
