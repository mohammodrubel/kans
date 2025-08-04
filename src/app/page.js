
import Customar from "@/components/Customar/Customar"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import KeyFeatchers from "@/components/KeyFeatchers"
import Promotion from "@/components/Promotion"
import Review from "@/components/Review/Review"
import SlickCarousel from "@/components/SlickCarousel"
import Team from "@/components/Team/Team"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function Home() {
 
  return (
    <>
    {/* <ModalForStart/> */}
    {/* <Currency/> */}
      <div className="min-h-screen bg-[#f9f9f5]">
      <SlickCarousel/>
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





