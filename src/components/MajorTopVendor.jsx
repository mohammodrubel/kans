import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

async function MajorTopVendor() {
  const res = await fetch("https://egg.dordham.com/api/v1/sliders", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="relative z-0 group">
      <Carousel className="z-0">
        <CarouselContent className="w-full">
          {data?.data?.map((item, index) => (
            <CarouselItem key={item.id || index} className="relative md:h-[600px]">
              <Image
                src={item?.photo?.original_url}
                alt={`slider image ${index + 1}`}
                height={600}
                width={1600} // Wider for better responsiveness
                className="object-cover w-full h-full"
                priority={index === 0} // Optimize first image load
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Arrow Buttons */}
        <CarouselPrevious 
          className="left-4 hidden md:flex" 
          variant="default"
          size="lg"
        />
        <CarouselNext 
          className="right-4 hidden md:flex" 
          variant="default"
          size="lg"
        />
      </Carousel>
    </div>
  );
}

export default MajorTopVendor;