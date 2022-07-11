import React from "react";
import "./button.scss";

export const Button = ({ label = "", className = "", ...rest }) => {
  return (
    <button className={`n-button ${className}`} {...rest}>
      {label}
    </button>
  );
};
