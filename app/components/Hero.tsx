"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const Hero = ({
  videoSrc,
  imageSrc,
  title,
  subtitle,
  ctaText,
  ctaLink,
  onCtaClick,
}: HeroProps) => {
  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      {/* Background video or image */}
      {videoSrc ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-6 h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FFC700] font-mono tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl mb-6 font-mono">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            target="_blank"
            onClick={onCtaClick}
            className="bg-white text-black font-mono px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition min-w-[300px]"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
