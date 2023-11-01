import React from 'react';

function HoverButton({ buttonText }) {
  return (
    <button className="btn relative w-32 h-10 text-lg font-semibold border-0 cursor-pointer transition duration-200 hover:bg-transparent">
      {buttonText} {/* Display the custom text */}
      <svg className="border-container absolute inset-0 w-full h-full">
        <rect className="border-line w-full h-full fill-transparent stroke-5 stroke-dasharray-0 100 transition-dasharray-750" pathLength="100"></rect>
      </svg>
    </button>
  );
}

export default HoverButton;
