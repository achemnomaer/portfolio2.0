import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ImageCarousel({ imgs, project }) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="">
        {imgs.map((img, index) => (
          <CarouselItem key={index} className="space-y-3">
            <div className="relative">
              <Image 
                src={img} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg"
              />
            </div>
            {project.imageCaptions && project.imageCaptions[index] && (
              <p className="text-sm text-gray-400 text-center px-4">
                {project.imageCaptions[index]}
              </p>
            )}
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