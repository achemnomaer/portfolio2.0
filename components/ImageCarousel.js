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
    <div className="w-full max-w-full">
      <Carousel className="w-full">
        <CarouselContent className="">
          {imgs.map((img, index) => (
            <CarouselItem key={index} className="space-y-3">
              <div className="relative w-full max-w-full overflow-hidden">
                <Image 
                  src={img} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg w-full h-auto object-contain max-w-full"
                  style={{ maxWidth: '100%', height: 'auto' }}
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
    </div>
  );
}