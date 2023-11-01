import '../App.css';
import React, { useState, useEffect } from 'react';

export default function StyledButton({
  onClick,
  disabled,
  children,
  dark,
  flipped
}) {
  // Initialize the buttonStyle with the default CSS classes
  let buttonStyle = "styledButton font-bold p-1 hoverShadow   rounded m-1 transition-all ease-in-out duration-300 hover:scale-105";

  // Update the buttonStyle if 'flipped' prop is true
  if (flipped) {
    buttonStyle += " rotate-270"; // Add a space here
  }
  if (dark) {
    buttonStyle+= ""
  }

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