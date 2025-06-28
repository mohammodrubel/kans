"use client"
import { getAllBlog } from '@/app/api/blog'
import { useEffect, useState } from 'react'
import { CarouselPlugin } from '../Slider'

function Review() {
    const [blog, setBlog] = useState([])
    const [blogLoading, setBlogLoading] = useState(true)
    console.log(blog)
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getAllBlog()
                setBlog(data)
                console.log(data,'fetch data')
            } catch (error) {
                console.error(error)
            } finally {
                setBlogLoading(false)
            }
        }
        fetchBlog()
    }, [])

    return (
        <div>
            <CarouselPlugin data={blog?.data} />
        </div>
    )
}

export default Review