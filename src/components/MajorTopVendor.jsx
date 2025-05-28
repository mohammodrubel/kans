import Image from "next/image"
import majorImage from '../assets/slider.png'
export default function MajorTopVendor() {
  return (
    <div className="mt-2 mb-4 rounded-lg p-2 shadow-sm">
      <div className="rounded-lg p-2 flex justify-center">
        <Image
          src={majorImage}
          alt="Vendor"
          width={1400}
          height={700}
          className="object-contain"
        />
      </div>
    </div>
  )
}
