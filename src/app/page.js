
import BestSallingPartOne from "@/components/BestSallingPartOne"
import BestSallingPartTwo from "@/components/BestSallingPartTwo"
import CategoriesWarpar from "@/components/CategoriesWarpar"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import KeyFeatchers from "@/components/KeyFeatchers"
import MajorTopVendor from "@/components/MajorTopVendor"
import { ModalForStart } from "@/components/ModalForStart"
import OnSaleProduct from "@/components/OnSaleProduct"
import Promotion from "@/components/Promotion"
import Review from "@/components/Review/Review"
import Team from "@/components/Team/Team"
import { ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import banner from '../assets/sale2.png'
import Customar from "@/components/Customar/Customar"


export default function Home() {
 
  return (
    <>
    <ModalForStart/>
      <div className="min-h-screen bg-[#f9f9f5]">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <ul className="space-y-3">
              <CategoriesWarpar/>
              </ul>
            </div>

            {/* <OnSale /> */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="font-bold text-lg mb-4">Major Top Vendor</h2>
              
                <div className=" rounded-lg mx-auto text-center p-2 mt-4">
                <Image
                  src={banner}
                  alt="Vendor"
                  width={300}
                  height={400}
                  className="h-auto mx-auto text-center w-full mt-5"
                /> 
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Hero Banner */}
            <div className="bg-[#e8f4e8] z-0! rounded-lg overflow-hidden mb-6 relative">
              <MajorTopVendor />
            </div>

            {/* On Sale Section */}
            <OnSaleProduct />
            {/* Promotional Banners */}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <BestSallingPartOne/>
            <BestSallingPartTwo/>
          </div>
        </div>
      </div>
      <FeaturedProducts/>
      <Customar/>
      <Review/>
      <KeyFeatchers/>
      <Promotion/>
      <Team/>
    </div>
    </>
  )
}

// Data




