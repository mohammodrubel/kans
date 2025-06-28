

"use server"

export const getAllCustomers= async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/customers', {
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}
