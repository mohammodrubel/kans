import Image from "next/image";
import majorImage from "../assets/f.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

function MajorTopVendor() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="w-full">
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index} className="relative h-[600px]">
              <Image
                src={majorImage}
                alt={`slider image ${index + 1}`}
                fill
                className="object-contain"
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
