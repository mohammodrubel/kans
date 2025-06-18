"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";

function Categories({ data }) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-green-700 w-full">
          Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {data?.map((category, index) => (
          <DropdownMenuItem
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            {category?.photo?.thumbnail
              ? (
                <Image
                  src={category.photo.thumbnail}
                  width={20}
                  height={20}
                  className="rounded-full"
                  alt="category photo"
                />
              )
              : (
                <div className="w-5 h-5 rounded-full bg-gray-200" /> // or use a default icon
              )}
            <span>{category.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Categories;
