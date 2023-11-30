
import React from 'react';



export default function StyledButton({
  onClick,
  disabled,
  children,
  redirect,
  type = 'submit', 
}) {
 let buttonTypes = {
    project: "project p-1 hover:bg-black hover:text-white w-1/2 transition-all duration-300 ease-in-out",
    submit: "submit p-1 w-1/4 hover:bg-black hover:text-white w-1/2 transition-all duration-300 ease-in-out",
  };
  let buttonStyle = `border shadow text-center uppercase items-center justify-center styledButton text-sm font-bold  shadowOnly text-black rounded-full m-1 ${buttonTypes[type]}`;




  const handleButtonClick = (e) => {
    if (redirect) {
      window.open(redirect, '_blank');
      e.preventDefault();
    } else if (onClick) {
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