"use client";

import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { IMAGES } from "@/constants/LandingPageImages";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === IMAGES.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? IMAGES.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative h-screen">
      <Link
        href="/post-add"
        className="absolute z-20 w-[100px] h-[40px] bg-amber-500 flex justify-center items-center bottom-[70px] right-[60px]
      text-black text-[20px] font-normal uppercase hover:bg-orange-500 cursor-pointer"
      >
        buy ad
      </Link>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute z-20 inset-y-1/2 left-0 cursor-pointer text-white ml-[60px]
        w-[62px] h-[62px] bg-black opacity-30 rounded-[76px]"
      />
      <div className="h-screen flex overflow-hidden relative">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="absolute z-10 h-screen w-full"
        >
          {IMAGES.map((image, index) => {
            if (index === currentSlide) {
              return (
                <img
                  key={index}
                  src={image.imageURL}
                  className="imageCover absolute z-10"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute z-20 right-0 inset-y-1/2 cursor-pointer text-white mr-[60px]
        w-[62px] h-[62px] bg-black opacity-30 rounded-[76px]"
      />
    </div>
  );
}
