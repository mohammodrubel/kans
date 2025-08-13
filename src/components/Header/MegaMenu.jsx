"use client";
import { megaMenuAPi } from "@/app/api/menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MegaMenu() {
  const [data, setData] = useState([]);
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

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (loading)
    return (
      <div className="p-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((item) => (
          <div key={item.id} className="group">
            <Link
              href={`/products?id=${item.id}`}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              {item.photo?.original_url && (
                <div className="flex-shrink-0">
                  <Image
                    alt={item.name ? `${item.name} category` : "Category image"}
                    src={item.photo.original_url}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
                </div>
              )}
              <div>
                <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-600">
                  {item.name}
                </span>
                {item.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}