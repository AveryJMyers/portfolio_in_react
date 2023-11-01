import '../App.css';
import React, { useState, useEffect } from 'react';

export default function StyledButton({
  onClick,
  disabled,
  children,
  dark,
  outline,
  hover,
  flipped,
  redirect,
}) {
  // Initialize the buttonStyle with the default CSS classes
  let buttonStyle = "styledButton font-bold p-1 rounded m-1";

  // Update the buttonStyle if 'flipped' prop is true
  if (flipped) {
    buttonStyle += " rotate-270"; // Add a space here
  }

  // Add a separate class for hover effect if 'hover' prop is true
  if (hover) {
    buttonStyle += "scaleHover transition-all ease-in-out duration-300";
  }
  if (outline){
    buttonStyle += "outlineAnimation"
  }

  const handleButtonClick = () => {
    if (redirect) {
      // Redirect to the specified URL when the button is clicked
      window.location.href = redirect;
    } else if (onClick) {
      // Call the provided onClick function if it exists
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