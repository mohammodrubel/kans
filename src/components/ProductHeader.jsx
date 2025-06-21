import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ResponsiveProductSidebar from "./ResponsiveProductSidebar";

function ProductHeader({ search, setSearch, categoryData ,setSelectCategory}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (value) => {
    setSortValue(value);
    onSortChange?.(value);
  };

  return (
    <div className="relative">
      <div className="p-5 border rounded-2xl flex items-center gap-5">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setSidebarOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu className="text-gray-600" />
        </button>

        {/* Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 text-[#016630] caret-[#016630] focus:outline-none focus:ring-2 focus:ring-[#016630] focus:border-[#016630] focus:shadow-md focus:shadow-[#016630]/30"
            aria-label="Search products"
          />
        </div>

        {/* Select Dropdown */}
        <div className="hidden md:block">
          <Select onValueChange={handleSortChange} value={sortValue}>
            <SelectTrigger className="w-[180px] text-[#016630] caret-[#016630] focus:outline-none focus:ring-2 focus:ring-[#016630] focus:border-[#016630] focus:shadow-md focus:shadow-[#016630]/30">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>
                <SelectItem value="high-to-low">Price: High to Low</SelectItem>
                <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                <SelectItem value="atoz">Name: A to Z</SelectItem>
                <SelectItem value="ztoa">Name: Z to A</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg">
            <ResponsiveProductSidebar search={search} setSearch={setSearch} categoryData={categoryData} setSelectCategory={setSelectCategory} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductHeader;