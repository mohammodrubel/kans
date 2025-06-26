import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

function ProductSidebar({ category,setSelectCategory }) {
  const data = category?.data;

  return (
    <div className='p-5 h-screen bg-white border rounded'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-medium'>Filter</h2>
      </div>

      {/* Category Filter */}
      <div className='px-2 mt-4'>
        <h2 className='font-bold mb-2'>Category</h2>
        <RadioGroup defaultValue="comfortable">
          {data?.map((item) => (
            <div key={item?.id} className="flex items-center gap-3 mb-2">
              <RadioGroupItem
              onClick={()=>setSelectCategory(item?.id)}
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
