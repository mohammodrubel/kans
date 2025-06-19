"use server"

export const getOnsaleProduct = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/on-sale', {
      cache: 'no-store'
    })
    
    console.log('Response:', res)

    // Check if the response is okay
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const data = await res.json() 
    
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
