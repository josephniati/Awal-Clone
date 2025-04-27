"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export interface ImageSlide {
  image: string;
  artistName: string;
  video?: boolean;
  instagram?: string;
}

const ImageSlides: ImageSlide[] = [
  {
    image: "/artists/brittany/brittany-3.jpeg",
    artistName: "Just Brittany",
    instagram: "https://www.instagram.com/QueenJustBrittany",
  },
  {
    image: "/artists/octane/octane-2.jpeg",
    artistName: "I-Octane",
    instagram: "https://www.instagram.com/realioctane",
  },
  {
    image: "/artists/tray/tray-1.jpg",
    artistName: "Tray Bills",
    instagram: "https://www.instagram.com/TrayMFBills",
  },
  {
    image: "/artists/drew/drew-1.jpeg",
    artistName: "Drew Sidora",
    instagram: "https://www.instagram.com/DrewSidora",
  },
  {
    image: "/artists/nikki/nikki-1.jpg",
    artistName: "Nikki Natural",
    instagram: "https://www.instagram.com/NikkiNatural",
  },
  {
    image: "/artists/brittany/brittany-9.jpeg",
    artistName: "Just Brittany",
    instagram: "https://www.instagram.com/QueenJustBrittany",
  },
  {
    image: "/artists/tray/tray-3.jpg",
    artistName: "Tray Bills",
    instagram: "https://www.instagram.com/TrayMFBills",
  },
  {
    image: "/artists/drew/drew-2.jpeg",
    artistName: "Drew Sidora",
    instagram: "https://www.instagram.com/DrewSidora",
  },
  {
    image: "/artists/nikki/nikki-2.jpg",
    artistName: "Nikki Natural",
    instagram: "https://www.instagram.com/NikkiNatural",
  },
  {
    image: "/artists/octane/octane-3.jpeg",
    artistName: "I-Octane",
    instagram: "https://www.instagram.com/realioctane",
  },
];

export default function Slider() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for reverse
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Calculate how many panels to show based on screen size
  const displayPanels = useCallback(() => {
    if (isMobile) {
      // On mobile, only show 3 panels: current, previous, and next
      return ImageSlides.filter((_, idx) => {
        const diff = Math.abs(idx - expandedIndex);
        return (
          diff <= 1 ||
          (expandedIndex === 0 && idx === 2) ||
          (expandedIndex === ImageSlides.length - 1 &&
            idx === ImageSlides.length - 3)
        );
      });
    }
    return ImageSlides;
  }, [expandedIndex, isMobile]);

  const visiblePanels = displayPanels();

  return (
    <div className="w-screen bg-black overflow-hidden">
      <div
        className="w-full flex items-center justify-center p-2 py-6 md:p-4 md:py-10 relative"
        style={{
          backgroundImage: `url(${ImageSlides[expandedIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "50vh" : "auto",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-0" />

        {/* Slider panels */}
        <div
          ref={sliderRef}
          className="flex w-full max-w-7xl h-[30vh] md:h-[50vh] gap-1 md:gap-3 z-10 relative overflow-x-auto scrollbar-hide"
        >
          {visiblePanels.map((panel: ImageSlide, index: number) => {
            // Get the actual index from the original array
            const actualIndex = ImageSlides.findIndex(
              (slide) => slide.image === panel.image
            );
            return (
              <div
                key={actualIndex}
                onClick={() => handleClick(actualIndex)}
                className={`
                  relative h-full cursor-pointer overflow-hidden
                  transition-all duration-300 ease-in-out
                  rounded-xl md:rounded-2xl
                  ${
                    expandedIndex === actualIndex
                      ? "w-[70%] md:w-[60%]"
                      : "w-[15%] md:w-[10%] hover:brightness-110"
                  }
                  min-w-[30px] md:min-w-[40px]
                `}
              >
                <a
                  href={panel.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                  onClick={(e) => {
                    if (expandedIndex === actualIndex) {
                      e.stopPropagation();
                    }
                  }}
                >
                  <Image
                    src={panel.image}
                    alt={`Slider image ${actualIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl md:rounded-2xl"
                    priority={expandedIndex === actualIndex}
                  />
                  {expandedIndex === actualIndex && (
                    <p className="text-white capitalize absolute bottom-1 md:bottom-2 left-2 md:left-4 text-sm md:text-xl bg-black/50 p-1 md:p-2 px-3 md:px-8 rounded-md font-saira font-bold truncate max-w-[90%]">
                      {panel.artistName}
                    </p>
                  )}
                </a>
              </div>
            );
          })}
        </div>

        {/* Navigation dots for mobile */}
        {isMobile && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
            {ImageSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  expandedIndex === idx ? "bg-white scale-125" : "bg-white/50"
                }`}
                onClick={() => handleClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
