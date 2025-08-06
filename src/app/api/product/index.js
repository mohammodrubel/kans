// src/app/api/category/index.js or /lib/server/category.js
"use server"

export const getProduct = async (args = []) => {
  const queryString = new URLSearchParams(
    args.reduce((acc, { name, value }) => {
      if (value) acc[name] = value;
      return acc;
    }, {})
  ).toString();

  try {
    const res = await fetch(`https://egg.dordham.com/api/v1/products/?${queryString}`, {
      cache: 'store',
    });

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await fetch(`https://egg.dordham.com/api/v1/products/${id}`, {
      cache: 'no-store'
    })
    console.log(res)
    return await res.json()
  } catch (error) {
    console.error("Error fetching single category:", error)
    return null
  }
}
