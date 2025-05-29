import Image from "next/image"
import majorImage from '../assets/f.png'

export default function MajorTopVendor() {
  return (
    <div className="mt-2 mb-4 rounded-lg p-2 shadow-sm">
      <div className="rounded-lg p-2 flex justify-center">
        <div className="relative w-full h-[600px]">
          <Image
            src={majorImage}
            alt="Vendor"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </div>
  )
}
