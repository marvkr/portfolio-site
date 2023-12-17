import * as React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

interface ImageSliderProps {
  urls: string[];
}

export function ImageSlider({ urls }: ImageSliderProps) {
  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-background border-border";
  const inactiveStyles = "hidden text-foreground";

  return (
    <div className="group relative bg-card aspect-square overflow-hidden rounded-xl">
      <div className="absolute z-10 inset-0">
        <Button></Button>
        <Button></Button>
      </div>
      <Swiper className="h-full w-full">
        {urls.map((url, i) => (
          <SwiperSlide key={i} className="-z-10 relative h-full w-full">
            <img
              className="-z-10 h-full w-full object-cover object-center"
              src={url}
              alt="Product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
