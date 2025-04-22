import React from 'react';

type Props = {
  text?: string;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ text, className = '', onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-purple-dark transition-colors duration-200 ${className}`}
    >
      {text}
    </button>
  );
};
