import React from "react";
import "./button.css";

interface ButtonProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button {...props} type="button" className={"button"}>
      {label}
    </button>
  );
};
