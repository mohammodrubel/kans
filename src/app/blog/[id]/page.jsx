"use client"
import { getSingleBlog } from "@/app/api/blog"
import { Calendar, MapPin, User } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page() {
    const [blog, setBlog] = useState(null)
    const [blogLoading, setBlogLoading] = useState(true)
    const [error, setError] = useState(null)
    const router = useParams()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setBlogLoading(true)
                const data = await getSingleBlog(router.id)
                setBlog(data?.data)
            } catch (err) {
                setError("Failed to fetch blog")
                console.error(err)
            } finally {
                setBlogLoading(false)
            }
        }
        fetchBlog()
    }, [router?.id])

    if (blogLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!blog) {
        return <div>Blog not found</div>
    }

   console.log(blog?.media[0].original_url)
    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Hero Image */}
                    <div className="relative h-64 md:h-80 lg:h-96">
                        <Image
                            src={blog?.media[0].original_url}
                            alt={blog.title}
                            fill={true}
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-opacity-20"></div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 md:p-8 lg:p-12">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={blog?.author?.photo?.original_url || "/placeholder.svg"}
                                    alt={`${blog.author.first_name} ${blog.author.last_name}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-1">
                                        <User className="w-4 h-4" />
                                        <span className="font-medium text-gray-900">
                                            {blog.author.first_name} {blog.author.last_name}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-gray-400">•</span>
                                        <span>{blog.author.designation}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{blog.author.address}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>June 26, 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed space-y-6">
                                <p className="text-xl text-gray-800 font-medium mb-6">
                                    Discover why incorporating apples into your daily routine can transform your health and well-being.
                                </p>

                                <p>
                                    {blog.description.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ')}
                                </p>

                           
                            </div>
                        </div>

                    </div>
                </article>

               
            </main>

        </div>
    )
}

export default Page