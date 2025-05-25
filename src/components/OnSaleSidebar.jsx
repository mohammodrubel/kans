import Image from "next/image"
import img1 from '../assets/sale.jpg'
import img2 from '../assets/sale2.jpg'


export default function OnSaleSidebar() {
  return (
    <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-bold text-xl mb-4">On Sale</h2>
      <div className="space-y-4">
        <div className="bg-[#f8f9f4] rounded-lg p-4 flex justify-center">
          <Image
            src={img1}
            alt="Pineapple"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="bg-[#f8f9f4] rounded-lg p-4 flex justify-center">
          <Image
            src={img2}
            alt="Orange"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
