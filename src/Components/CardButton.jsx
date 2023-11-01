import '../App.css';
import '../styles.css'
import React, { useState, useEffect } from 'react';

export default function CardButton({
  onClick,
  disabled,
  children,
  backgroundColor,
  textColor,
  flipped,
}) {
  // Initialize the buttonStyle with the default CSS classes
  let cardButtonStyle = "font-bold  boxShadow  ";

  // Update the buttonStyle if 'flipped' prop is true
  if (flipped) {
    cardButtonStyle += " rotate-270"; // Add a space here
  }

  // Apply custom background color if provided
  if (backgroundColor) {
    cardButtonStyle += ` bg-${backgroundColor}`;
  }

  // Apply custom text color if provided
  if (textColor) {
    cardButtonStyle += ` text-${textColor}`;
  }

  return (
    <button className={cardButtonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
