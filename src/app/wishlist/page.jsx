"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const initialWishlistItems = [
    {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        originalPrice: 99.99,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.5,
        reviewCount: 128,
        inStock: true,
        category: "Electronics",
    },
    {
        id: "2",
        name: "Premium Coffee Maker",
        price: 149.99,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.8,
        reviewCount: 89,
        inStock: true,
        category: "Kitchen",
    },
    {
        id: "3",
        name: "Ergonomic Office Chair",
        price: 299.99,
        originalPrice: 399.99,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.3,
        reviewCount: 256,
        inStock: false,
        category: "Furniture",
    },
    {
        id: "4",
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.6,
        reviewCount: 342,
        inStock: true,
        category: "Wearables",
    },
    {
        id: "5",
        name: "Portable Bluetooth Speaker",
        price: 59.99,
        originalPrice: 79.99,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.4,
        reviewCount: 167,
        inStock: true,
        category: "Electronics",
    },
]

export default function WishlistTablePage() {
    const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)

    if (wishlistItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-16">
                    <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
                    <p className="text-gray-600 mb-6">Start adding items you love to your wishlist</p>
                    <Button>Continue Shopping</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>
            <Card className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left font-medium text-gray-700">Product</th>
                            <th className="px-6 py-3 text-left font-medium text-gray-700">Category</th>
                            <th className="px-6 py-3 text-left font-medium text-gray-700">Price</th>
                            <th className="px-6 py-3 text-left font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {wishlistItems.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded border"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">{item.name}</div>
                                        <div className="text-gray-500 text-xs">#{item.id}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="secondary">{item.category}</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-900 font-medium">${item.price}</div>
                                    {item.originalPrice && (
                                        <div className="text-gray-500 text-sm line-through">
                                            ${item.originalPrice}
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <Button variant="outline" className="text-sm">View Details</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}
