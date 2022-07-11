import React from "react";
import "./inputField.scss";

export const InputField = ({ className = "", ...rest }) => {
  return (
    <div>
      <input className={`input-field ${className}`} type="text" {...rest} />
    </div>
  );
};
