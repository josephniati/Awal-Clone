"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface ImageSlide {
  image: string;
  artistName: string;
  video?: boolean;
}

const ImageSlides: ImageSlide[] = [
  { image: "/artists/brittany/brittany-3.jpeg", artistName: "Just Brittany" },
  { image: "/artists/octane/octane-2.jpeg", artistName: "I-Octane" },
  { image: "/artists/tray/tray-1.jpg", artistName: "Tray Bills" },
  { image: "/artists/drew/drew-1.jpeg", artistName: "Drew Sidora" },
  { image: "/artists/nikki/nikki-1.jpg", artistName: "Nikki Natural" },
  { image: "/artists/brittany/brittany-9.jpeg", artistName: "Just Brittany" },
  { image: "/artists/tray/tray-3.jpg", artistName: "Tray Bills" },
  { image: "/artists/drew/drew-2.jpeg", artistName: "Drew Sidora" },
  { image: "/artists/nikki/nikki-2.jpg", artistName: "Nikki Natural" },
  { image: "/artists/octane/octane-3.jpeg", artistName: "I-Octane" },
];

export default function Slider() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for reverse

  const moveToNextSlide = useCallback(() => {
    setExpandedIndex((prevIndex) => {
      // Calculate the next index based on the current direction
      const nextIndex = prevIndex + direction;

      // Check if we've reached the end or beginning
      if (nextIndex >= ImageSlides.length - 1 || nextIndex <= 0) {
        // Reverse the direction
        setDirection((prevDirection) => prevDirection * -1);
      }

      // Apply boundary conditions
      if (nextIndex >= ImageSlides.length) {
        return ImageSlides.length - 1; // Don't exceed the array bounds
      } else if (nextIndex < 0) {
        return 0; // Don't go below 0
      }

      return nextIndex;
    });
  }, [direction]);

  // Set up the interval for automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveToNextSlide();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [moveToNextSlide]);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <div className="w-screen bg-black overflow-hidden">
      <div
        className="w-full h-full flex items-center justify-center p-4 py-10 relative"
        style={{
          backgroundImage: `url(${ImageSlides[expandedIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-0" />

        {/* Slider panels */}
        <div className="flex w-full max-w-7xl h-[50vh] gap-3 z-10 relative">
          {ImageSlides.map((panel: ImageSlide, index: number) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                relative h-full cursor-pointer overflow-hidden
                transition-all duration-300 ease-in-out
                rounded-2xl ${
                  expandedIndex === index
                    ? "w-[60%]"
                    : "w-[10%] hover:brightness-110"
                }
                min-w-[40px]
              `}
            >
              <Image
                src={panel.image}
                alt={`Slider image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              {expandedIndex === index && (
                <p className="text-white capitalize absolute bottom-2 left-4 text-xl bg-black/50 p-2 px-8 rounded-md font-saira font-bold">
                  {panel.artistName}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
