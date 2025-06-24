"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";

function Categories({ data }) {

  return (
    <>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3 text-green-600">Categories</h3>
          <ul className="space-y-2 text-sm">
            {
              data?.map((item,index)=> <li key={item?.id} className="flex mt-2">
                {item?.photo?.thumbnail
              ? (
                <Image
                  src={item.photo.thumbnail}
                  width={20}
                  height={20}
                  className="rounded-full"
                  alt="category photo"
                />
              )
              : (
                <div className="w-5 h-5 rounded-full bg-gray-200" /> 
              )}
                <div className="mx-2">{item?.name}</div>
              </li>)
            }
          </ul>
        </CardContent>
      </Card>
    </>
  );
}

export default Categories;
