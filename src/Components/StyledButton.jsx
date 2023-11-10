
import React from 'react';

const buttonTypes = {
  project: "p-1 hover:bg-black hover:text-white w-1/2 transition-all duration-300 ease-in-out",
  submit: "p-1 w-1/4 hover:bg-black hover:text-white w-1/2 transition-all duration-300 ease-in-out",
};

export default function StyledButton({
  onClick,
  disabled,
  children,
  redirect,
  type = 'submit', 
}) {
  let buttonStyle = ` border border-black text-center items-center justify-center tyledButton text-sm font-bold  shadowOnly text-black rounded-full m-1 ${buttonTypes[type]}`;



  const handleButtonClick = () => {
    if (redirect) {
      window.location.href = redirect;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={buttonStyle}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}