// src/app/api/category/index.js OR /lib/server/category.js
"use server"

export const getProductCategory = async () => {
  try {
    const res = await fetch("https://egg.dordham.com/api/v1/product-categories", {
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Return a consistent fallback
    return { data: [] };
  }
};
