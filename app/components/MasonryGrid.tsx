import React from "react";
import { ImageSlide } from "./Slider";

const images: ImageSlide[] = [
  {
    image: "/artists/brittany/brittany-1.png",
    artistName: "Just Brittany",
    instagram: "https://www.instagram.com/QueenJustBrittany",
  },
  {
    image: "/artists/octane/octane-1.jpeg",
    artistName: "I-Octane",
    instagram: "https://www.instagram.com/realioctane",
  },
  {
    image: "/artists/nikki/nikki-3.jpg",
    artistName: "Nikki Natural",
    instagram: "https://www.instagram.com/NikkiNatural",
  },
  {
    image: "/artists/drew/drew-3.jpeg",
    artistName: "Drew Sidora",
    instagram: "https://www.instagram.com/DrewSidora",
  },
  {
    image: "/artists/brittany/brittany-2.jpeg",
    artistName: "Just Brittany",
    instagram: "https://www.instagram.com/QueenJustBrittany",
  },
  {
    image: "/artists/tray/tray-2.jpg",
    artistName: "Tray Bills",
    instagram: "https://www.instagram.com/TrayMFBills",
  },
  {
    image: "/artists/tray/tray-3.jpg",
    artistName: "Tray Bills",
    instagram: "https://www.instagram.com/TrayMFBills",
  },
  {
    image:
      "https://res.cloudinary.com/dpssbzpp1/video/upload/v1744991582/LV4MIN_Clip_x6oiw9.mp4",
    artistName: "Drew Sidora",
    video: true,
    instagram: "https://www.instagram.com/DrewSidora",
  },
];

const MasonryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 px-4">
      {images.map((src: ImageSlide, index: number) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg"
        >
          <a
            href={src.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            {src.video ? (
              <video
                src={src.image}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <img
                src={src.image}
                alt={`image-${index}`}
                className="w-full h-full object-contain rounded-lg"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <p className="text-white capitalize bg-black/50 p-2 px-8 rounded-md font-saira font-bold text-xl">
                {src.artistName}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
