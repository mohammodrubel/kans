import { Apple, Baby, Bone, Candy, Carrot, ChefHat, Coffee, Drumstick, Dumbbell, Fish, GlassWater, Globe, Grape, IceCream, Leaf, Milk, Wheat } from "lucide-react";
import Link from "next/link";

export default function FoodMegaMenu() {
    return (
        <div className="w-[900px] grid grid-cols-4 gap-6 p-6 bg-white rounded-lg shadow-lg">
            {/* Fresh Produce */}
            <div>
                <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <Apple size={20} />
                    Fresh Produce
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3">
                        <Link href="/fruits-vegetables" className=" flex items-center gap-2 hover:text-green-600">
                            <Carrot size={20} />
                            Fruits & Vegetables
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/fish-seafood" className="flex items-center gap-2 hover:text-green-600">
                            <Fish size={20} />
                            Fish & Seafood
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/meat-products" className="flex items-center gap-2 hover:text-green-600">
                            <Drumstick size={20} />
                            Meat Products
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/dairy" className="flex items-center gap-2 hover:text-green-600">
                            <Milk size={20} />
                            Dairy Products
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Pantry Staples */}
            <div>
                <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <Wheat size={20} />
                    Pantry Staples
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3">
                        <Link href="/grains-rice" className="flex items-center gap-2 hover:text-green-600">
                            <Wheat size={20} />
                            Grains & Rice
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/oil-vinegar" className="flex items-center gap-2 hover:text-green-600">
                            <Grape size={20} />
                            Olive Oil & Vinegar
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/pet-food" className="flex items-center gap-2 hover:text-green-600">
                            <Bone size={20} />
                            Pet Food
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/sports-nutrition" className="flex items-center gap-2 hover:text-green-600">
                            <Dumbbell size={20} />
                            Sports Nutrition
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Beverages & Snacks */}
            <div>
                <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <Coffee size={20} />
                    Beverages & Snacks
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3">
                        <Link href="/tea-coffee" className="flex items-center gap-2 hover:text-green-600">
                            <Coffee size={20} />
                            Tea & Coffee
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/drinks" className="flex items-center gap-2 hover:text-green-600">
                            <GlassWater size={20} />
                            Soft Drinks & Juice
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/snacks" className="flex items-center gap-2 hover:text-green-600">
                            <Candy size={20} />
                            Confectionery & Snacks
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/baby-food" className="flex items-center gap-2 hover:text-green-600">
                            <Baby size={20} />
                            Baby Food
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Specialty Foods */}
            <div>
                <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <ChefHat size={20} />
                    Specialty Foods
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="p-3">
                        <Link href="/gourmet" className="flex items-center gap-2 hover:text-green-600">
                            <ChefHat size={20} />
                            Gourmet Food
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/organic" className="flex items-center gap-2 hover:text-green-600">
                            <Leaf size={20} />
                            Organic & Health Food
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/frozen" className="flex items-center gap-2 hover:text-green-600">
                            <IceCream size={20} />
                            Frozen Food
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/ethnic" className="flex items-center gap-2 hover:text-green-600">
                            <Globe size={20} />
                            Ethnic Food
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}