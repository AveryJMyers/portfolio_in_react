import '../App.css';
import React from 'react';

const buttonTypes = {
  project: "p-1 hover:bg-black hover:text-white w-1/2 transition-all duration-300 ease-in-out",
  submit: "p-1 w-1/4 hover:bg-black hover:text-white w-1/2 transition-all duration-300 ease-in-out",
};

export default function StyledButton({
  onClick,
  disabled,
  children,
  type = 'submit', 
}) {
  let buttonStyle = ` border border-black text-center items-center justify-center tyledButton font-bold  shadowOnly text-black rounded-full m-1 ${buttonTypes[type]}`;

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}