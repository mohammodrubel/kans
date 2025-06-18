import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

function ProductSidebar({ category }) {
  const [showCategory, setShowCategory] = useState(false);

  const data = category?.data;

  return (
    <div className='p-5 h-screen bg-white border rounded'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-medium'>Filter</h2>
        <Button className="bg-[#016630] text-white hover:bg-[#014d27]">
          <X className="w-4 h-4 mr-2" />
          Clear Filter
        </Button>
      </div>

      {/* Category Filter Toggle */}
      <div
        className='flex justify-between px-2 items-center cursor-pointer'
        onClick={() => setShowCategory(!showCategory)}
      >
        <h2 className='my-4 font-bold hover:underline m-2'>Category</h2>
        {showCategory ? <ChevronUp /> : <ChevronDown />}
      </div>

      {/* Always in DOM: animated open/close */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${showCategory ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <RadioGroup defaultValue="comfortable">
          {data?.map((item) => (
            <div key={item?.id} className="flex items-center gap-3 mb-2">
              <RadioGroupItem
                className="text-[#016630]"
                value={String(item?.id)}
                id={String(item?.id)}
              />
              <Label htmlFor={String(item?.id)}>{item?.name}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

    </div>
  );
}

export default ProductSidebar;


