"use client"
import { getSingleBlog } from "@/app/api/blog"
import { Calendar, MapPin, User } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

function BlogPage() {
    const [blog, setBlog] = useState(null)
    const [blogLoading, setBlogLoading] = useState(true)
    const [error, setError] = useState(null)
    const params = useParams()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setBlogLoading(true)
                if (!params?.id) {
                    throw new Error("Blog ID not found")
                }
                const data = await getSingleBlog(params.id)
                if (!data?.data) {
                    throw new Error("Blog data not found")
                }
                setBlog(data.data)
            } catch (err) {
                setError(err.message || "Failed to fetch blog")
                console.error(err)
            } finally {
                setBlogLoading(false)
            }
        }
        fetchBlog()
    }, [params?.id])

    if (blogLoading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center">{error}</div>
    }

    if (!blog) {
        return <div className="min-h-screen flex items-center justify-center">Blog not found</div>
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Hero Image - Only render if media exists */}
                    {blog?.media?.[0]?.original_url && (
                        <div className="relative h-64 md:h-80 lg:h-96">
                            <Image
                                src={blog.media[0].original_url}
                                alt={blog.title || "Blog image"}
                                fill={true}
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-opacity-20"></div>
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="p-6 md:p-8 lg:p-12">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        {/* Author Info - Only render if author exists */}
                        {blog?.author && (
                            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    {blog.author?.photo?.original_url ? (
                                        <Image
                                            src={blog.author.photo.original_url}
                                            alt={`${blog.author.first_name || ''} ${blog.author.last_name || ''}`}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <User className="w-6 h-6 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                        <div className="flex items-center space-x-1">
                                            <User className="w-4 h-4" />
                                            <span className="font-medium text-gray-900">
                                                {blog.author.first_name} {blog.author.last_name}
                                            </span>
                                        </div>
                                        {blog.author.designation && (
                                            <>
                                                <span className="text-gray-400">•</span>
                                                <span>{blog.author.designation}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                        {blog.author.address && (
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{blog.author.address}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>June 26, 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed space-y-6">
                                {blog.description && (
                                    <p className="text-xl text-gray-800 font-medium mb-6">
                                        {blog.description.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ')}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default BlogPage