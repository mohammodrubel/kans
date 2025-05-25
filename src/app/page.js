import Advertisement from "@/components/Advertisement";
import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9f4]">
      <Header/>
      <Banner/>
      <Advertisement/>
      <Footer/>
    </div>
  );
}
