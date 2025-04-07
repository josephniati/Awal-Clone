'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  videoSrc,
  imageSrc,
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Background video or image */}
      {videoSrc ? (
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt='Hero Background'
          layout='fill'
          objectFit='cover'
          priority
        />
      ) : null}

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 z-10' />

      {/* Content */}
      <div className='relative z-20 flex flex-col items-center justify-center text-center text-white px-6 h-full'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>{title}</h1>
        {subtitle && <p className='text-lg md:text-2xl mb-6'>{subtitle}</p>}
        {ctaText && (
          <button
            onClick={onCtaClick}
            className='bg-white text-black px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition'
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
