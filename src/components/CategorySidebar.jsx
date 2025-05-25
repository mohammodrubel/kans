export default function CategorySidebar() {
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
      <div className="bg-white mt-2 rounded-lg p-4 shadow-sm">
        <h2 className="font-bold text-xl mb-4">Categories</h2>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#2c5c1e]">
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  