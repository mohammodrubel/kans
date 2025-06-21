"use client";
import { megaMenuAPi } from "@/app/api/menu";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FoodMegaMenu() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const mainData = await megaMenuAPi();
                setData(mainData);
            } catch (error) {
                console.error("Error fetching menu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    const existChildren = data?.data?.filter((item) => item.sub_category?.length > 0);

    return loading ? (
        <p className="text-center text-gray-500">Loading...</p>
    ) : (
        <div className="w-[1000px] grid grid-cols-4 gap-6 p-6 bg-white rounded-lg shadow-lg">
            {existChildren?.map((item) => (
                <div key={item.id}>
                    <div className="font-medium text-green-700">{item.name}</div>
                    <ul className="pl-4 text-gray-600 text-sm mt-2 space-y-2">
                        {item.sub_category.map((children) => (
                            <li className="flex items-center gap-2" key={children.id}>
                                {children.photo?.original_url && (
                                    <Image
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                        src={children.photo.original_url}
                                        alt="image"
                                    />
                                )}
                                <span className="p-2 font-[16px]">{children.sub_category}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
