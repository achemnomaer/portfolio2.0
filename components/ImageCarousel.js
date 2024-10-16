import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ImageCarousel({ imgs }) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="">
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <Image src={img} alt="project image" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
