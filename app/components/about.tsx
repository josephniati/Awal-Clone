'use client';

import React, { useState } from 'react';
import { Button } from './button';

export const About = () => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className='h-fit w-full bg-about bg-cover flex justify-center items-center'>
      <div className='m-12 w-[80%] mx-auto bg-primary-purple-light flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 gap-12'>
        <h2 className='text-primary-white'>Get to know us</h2>

        {showText && (
          <p className='text-primary-white'>
            Our mission is to preserve life&apos;s most special moments. Whether
            it&apos;s a wedding, a birthday, or even a regular day, our pictures
            capture the energy of life, so you can look back and relive
            everything again.
          </p>
        )}

        <Button
          text={showText ? 'Hide Info' : 'About Us'}
          onClick={toggleText}
        />
      </div>
    </div>
  );
};
