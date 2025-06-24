
"use server"

export const getAllBlog = async () => {
  try {
    const res = await fetch('https://egg.dordham.com/api/v1/blogs', {
      cache: 'force-cache'
    })
    return await res.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}
