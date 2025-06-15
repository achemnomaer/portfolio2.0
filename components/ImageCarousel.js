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
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem key={index} className="space-y-3">
              {/* Image */}
              <div
                className="relative w-full max-w-full bg-gray-900 rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={img.src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="object-contain p-4"
                  fill
                />
              </div>

              {/* Caption */}
              {img.caption && (
                <p className="text-sm text-gray-400 text-center px-4">
                  {img.caption}
                </p>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
