import '../App.css';
import React, { useState, useEffect } from 'react';

export default function StyledButton({
  onClick,
  disabled,
  children,
  standard,
  flipped
}) {
  // Initialize the buttonStyle with the default CSS classes
  let buttonStyle = "bg-blue hover:bg-blue-700  text-white font-bold py-2 px-4 rounded";

  // Update the buttonStyle if 'flipped' prop is true
  if (flipped) {
    buttonStyle += " rotate-270"; // Add a space here
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