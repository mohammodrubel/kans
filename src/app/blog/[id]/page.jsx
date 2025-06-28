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

                                <p>
                                    Eating an apple daily can reduce the risk of diabetes and even contribute to healthier skin. Whether
                                    eaten raw, baked, or juiced, apples are versatile and easy to include in any diet. Their natural
                                    sweetness makes them a great alternative to sugary snacks, helping you maintain energy levels and
                                    support a balanced, healthy lifestyle.
                                </p>

                                {/* Key Benefits Section */}
                                <div className="bg-green-50 rounded-lg p-6 my-8">
                                    <h3 className="text-xl font-semibold text-green-800 mb-4">Key Health Benefits</h3>
                                    <ul className="space-y-2 text-green-700">
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>Rich in fiber, vitamin C, and antioxidants</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>Supports heart health and reduces chronic disease risk</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>Helps with weight management</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>Promotes digestive health and gut bacteria</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>May reduce diabetes risk and improve skin health</span>
                                        </li>
                                    </ul>
                                </div>

                                <p>
                                    The versatility of apples makes them an excellent choice for any meal or snack. From fresh apple
                                    slices with nut butter to baked apple desserts, there are countless ways to enjoy this nutritious
                                    fruit while reaping its health benefits.
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Nutrition</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Health</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Wellness</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Diet</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Fruits</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Author Bio Card */}
                <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                    <div className="flex items-start space-x-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={blog?.author?.photo?.original_url || "/placeholder.svg"}
                                alt={`${blog.author.first_name} ${blog.author.last_name}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                {blog.author.first_name} {blog.author.last_name}
                            </h4>
                            <p className="text-green-600 text-sm font-medium mb-2">{blog.author.designation}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Passionate about creating user-centered designs and promoting healthy lifestyle choices. Based in{" "}
                                {blog.author.address}, Liam combines his expertise in UI/UX with a deep interest in nutrition and
                                wellness.
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                <span>{blog.author.email}</span>
                                <span>•</span>
                                <span>{blog.author.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Page