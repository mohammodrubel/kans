
"use server"

export const getbestproduct = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/best-selling', {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

export const getbestSingle = async (id) => {
  try {
    const res = await fetch(`https://egg.dordham.com/api/v1/best-selling/${id}`, {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching single category:", error)
    return null
  }
}
