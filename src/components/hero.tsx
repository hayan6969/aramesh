import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { AnimatedShinyTextDemo } from "./shinyText";
import { ShimmerButtonDemo } from "./shimmerButton";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <AnimatedShinyTextDemo />
        <br />
        <div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-7xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <span className="text-[150px]">Aramesh</span> <br /> Premium
              Rentals Services
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Aramesh offers serene and stylish short-term rentals, providing a
              perfect escape for travelers seeking comfort. Our thoughtfully
              designed spaces blend modern elegance with a cozy ambiance,
              ensuring a relaxing stay.
            </p>
          </div>
        </div>
        <br />
        <div className="flex w-full items-center justify-evenly">
          <a href="http://airbnb.com.sg/h/aramesh" target="_blank">
            {" "}
            <ShimmerButtonDemo text="Air Bnb" />
          </a>
          <a target="_blank" href="https://www.booking.com/hotel/pk/cozy-1br-retreat-with-balcony-view.html">
            {" "}
            <ShimmerButtonDemo text="Booking.com" />
          </a>
          <a target="_blank" href="https://wa.me/923400936354">
            <ShimmerButtonDemo text="Direct" />
          </a>
        </div>
      </div>
    </div>
  );
}
