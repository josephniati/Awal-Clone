'use client';

import { useState } from 'react';
import Image from 'next/image';

const sliding = [
  { image: '/first.jpg' },
  { image: '/second.jpg' },
  { image: '/third.jpg' },
  { image: '/fourth.jpg' },
  { image: '/img-5.jpg' },
  { image: '/img-6.jpg' },
  { image: '/img-7.jpg' },
  { image: '/img-8.jpg' },
];

export default function Slider() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <div className='w-screen h-screen bg-black overflow-hidden'>
      <div
        className='w-full h-full flex items-center justify-center p-4 relative'
        style={{
          backgroundImage: `url(${sliding[expandedIndex].image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-0' />

        {/* Slider panels */}
        <div className='flex w-full max-w-7xl h-[50vh] gap-3 z-10 relative'>
          {sliding.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                relative h-full cursor-pointer overflow-hidden
                transition-all duration-300 ease-in-out
                rounded-2xl ${
                  expandedIndex === index
                    ? 'w-[60%]'
                    : 'w-[10%] hover:brightness-110'
                }
                min-w-[40px]
              `}
            >
              <Image
                src={panel.image}
                alt={`Slider image ${index + 1}`}
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
