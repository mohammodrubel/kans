import BestSallingPartOne from "@/components/BestSallingPartOne"
import BestSallingPartTwo from "@/components/BestSallingPartTwo"
import Categories from "@/components/Categories"
import FeaturedProducts from "@/components/FeaturedProducts"
import { Footer } from "@/components/Footer"
import MajorTopVendor from "@/components/MajorTopVendor"
import OnSale from "@/components/OnSale"
import OnSaleProduct from "@/components/OnSaleProduct"
import Promotion from "@/components/Promotion"
import Review from "@/components/Review/Review"
import Team from "@/components/Team/Team"
import Image from "next/image"
import banner from '../assets/demo.jpg'
import { ModalForStart } from "@/components/ModalForStart"

export default function Home() {
   
  return (
    <>
    <ModalForStart/>
      <div className="min-h-screen bg-[#f9f9f5]">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <ul className="space-y-3">
              <Categories/>
              </ul>
            </div>

            <OnSale />
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="font-bold text-lg mb-4">Major Top Vendor</h2>
              
              <div className=" rounded-lg p-2 mt-4">
                <Image
                  src={banner}
                  alt="Vendor"
                  width={300}
                  height={300}
                  className="h-auto w-auto mt-5"
                />
                <Image
                  src={banner}
                  alt="Vendor"
                  width={300}
                  height={300}
                  className="h-auto w-auto mt-5"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7">
            {/* Hero Banner */}
            <div className="bg-[#e8f4e8] rounded-lg overflow-hidden mb-6 relative">
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
      <Review/>
      <Promotion/>
      <Team/>
    </div>
    </>
  )
}

// Data




