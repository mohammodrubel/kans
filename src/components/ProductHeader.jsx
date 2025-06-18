import { Search } from 'lucide-react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

function ProductHeader() {
  return (
    <div>
      <div className="relative p-5 border rounded-2xl flex items-center gap-5">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 text-[#016630] caret-[#016630] focus:outline-none focus:ring-2 focus:ring-[#016630] focus:border-[#016630] focus:shadow-md focus:shadow-[#016630]/30"
          />
        </div>

        {/* Select Dropdown */}
        <Select>
          <SelectTrigger className="w-[180px] text-[#016630] caret-[#016630] focus:outline-none focus:ring-2 focus:ring-[#016630] focus:border-[#016630] focus:shadow-md focus:shadow-[#016630]/30">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Default</SelectLabel>
              <SelectItem value="hight-to-low">Price: High to Low</SelectItem>
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="atoz">Name: A to Z</SelectItem>
              <SelectItem value="ztoA">Name: Z to A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ProductHeader;
