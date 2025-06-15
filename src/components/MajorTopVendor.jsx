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
    <div>
      <Carousel>
        <CarouselContent className="w-full">
          {data?.data?.map((item, index) => (
            <CarouselItem key={item.id || index} className="relative h-[600px]">
              <Image
                src={item?.photo?.original_url}
                alt={`slider image ${index + 1}`}
                height={600}
                width={600}
                className="object-cover w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MajorTopVendor;
