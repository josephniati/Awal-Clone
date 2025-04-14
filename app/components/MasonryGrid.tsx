import React from 'react';

const images = [
  '/first.jpg',
  '/second.jpg',
  '/third.jpg',
  '/fourth.jpg',
  '/fourth.jpg',
  '/fourth.jpg',
];

const MasonryGrid = () => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4'>
      {images.map((src, index) => (
        <div key={index} className='mb-4 break-inside-avoid'>
          <img
            src={src}
            alt={`image-${index}`}
            className='w-full object-cover rounded-lg'
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
