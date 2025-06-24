"use client";
import { megaMenuAPi } from "@/app/api/menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MegaMenu() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await megaMenuAPi();
                if (!response?.data) {
                    throw new Error("No data received from API");
                }
                setData(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch menu");
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) return <div className="p-4 text-center">Loading menu...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
    if (!data?.length) return <div className="p-4 text-center">No menu items found</div>;

    return (
        <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg">
            {data.map((item) => (
                <div key={item.id} className="group">
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition">
                        <Link href={`/products?id=${item?.id}`} className="flex gap-2">
                            {item.photo?.original_url && (
                                <Image
                                    alt={`${item.name} category`}
                                    src={item.photo.original_url}
                                    width={30}
                                    height={30}
                                    className="rounded-full object-cover"
                                />
                            )}
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}