import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}
    style={{
      // display: "flex",
      // alignItems: "center",
      padding : "12px 16px",
      gap: "4px"
    }}
    >
      {children}
    </button>
  );
};

export default Button;