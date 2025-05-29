import React from 'react'

function Categories() {
    const categories = [
        { name: "Fruits", icon: "🍎" },
        { name: "Vegetables", icon: "🥦" },
        { name: "Grains & Seeds", icon: "🌾" },
        { name: "Nuts", icon: "🥜" },
        { name: "Dairy Products", icon: "🥛" },
        { name: "Meat", icon: "🥩" },
        { name: "Seafood", icon: "🐟" },
        { name: "Beverages", icon: "🥤" },
    ]

    return (
        <>
            {categories.map((category, index) => (
                <li key={index}>
                    <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                        <span className="w-6 h-6 mr-2 flex items-center justify-center text-green-600">
                            {category.icon}
                        </span>
                        {category.name}
                    </a>
                </li>
            ))}
        </>
    )
}

export default Categories