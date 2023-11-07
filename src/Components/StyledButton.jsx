import '../App.css';
import React from 'react';

const buttonTypes = {
  project: " ",
  submit: "p-1 w-1/4  ",
};

export default function StyledButton({
  onClick,
  disabled,
  children,
  type = 'submit', 
}) {
  let buttonStyle = `styledButton font-bold  shadowOnly text-black rounded m-1 ${buttonTypes[type] || buttonTypes.submit}`;

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