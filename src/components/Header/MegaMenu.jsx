import { Baby, Candy, Cannabis, Carrot, CookingPot, Croissant, Drumstick, EggFried, GlassWater, Milk, Snowflake, Sprout, Utensils, Wheat } from "lucide-react";
import Link from "next/link";

export default function FoodMegaMenu() {
    return (
        <div className="w-[900px] grid grid-cols-4 gap-6 p-6 bg-white rounded-lg shadow-lg">
            {/* Fresh & Frozen */}
            <div>
                <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                    <EggFried size={20} />
                    Fresh & Frozen
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3 border rounded">
                        <Link href="/eggs" className="flex items-center gap-2 hover:text-green-600">
                            <EggFried size={20} />
                            Eggs & Egg Products
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/dairy" className="flex items-center gap-2 hover:text-green-600">
                            <Milk size={20} />
                            Dairy Products
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/meat-poultry" className="flex items-center gap-2 hover:text-green-600">
                            <Drumstick size={20} />
                            Meat & Poultry
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/frozen" className="flex items-center gap-2 hover:text-green-600">
                            <Snowflake size={20} />
                            Frozen & Ready-to-Eat
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Pantry Staples */}
            <div>
                <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                    <Wheat size={20} />
                    Pantry Staples
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3 border rounded">
                        <Link href="/grains-cereals" className="flex items-center gap-2 hover:text-green-600">
                            <Wheat size={20} />
                            Grains & Cereals
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/vegetables-fruits" className="flex items-center gap-2 hover:text-green-600">
                            <Carrot size={20} />
                            Fruits & Vegetables
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/oils-fats" className="flex items-center gap-2 hover:text-green-600">
                            <CookingPot size={20} />
                            Oils & Fats
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/dry-pulses" className="flex items-center gap-2 hover:text-green-600">
                            <Sprout size={20} />
                            Dry Food & Pulses
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Snacks & Beverages */}
            <div>
                <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                    <GlassWater size={20} />
                    Snacks & Beverages
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3 border rounded">
                        <Link href="/snacks" className="flex items-center gap-2 hover:text-green-600">
                            <Candy size={20} />
                            Confectionery & Snacks
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/bakery" className="flex items-center gap-2 hover:text-green-600">
                            <Croissant size={20} />
                            Bakery & Pastry
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/beverages" className="flex items-center gap-2 hover:text-green-600">
                            <GlassWater size={20} />
                            Beverages
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/baby-food" className="flex items-center gap-2 hover:text-green-600">
                            <Baby size={20} />
                            Baby Food
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Misc Essentials */}
            <div>
                <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                    <Utensils size={20} />
                    Essentials
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3 border rounded">
                        <Link href="/canned-food" className="flex items-center gap-2 hover:text-green-600">
                            <Cannabis size={20} />
                            Canned & Preserved
                        </Link>
                    </li>
                    <li className="p-3 border rounded">
                        <Link href="/spices" className="flex items-center gap-2 hover:text-green-600">
                            <CookingPot size={20} />
                            Spices & Condiments
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
