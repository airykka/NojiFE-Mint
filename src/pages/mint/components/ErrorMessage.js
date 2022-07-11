import React from "react";

export const ErrorMessage = ({ message = "Something went wrong" }) => {
  return <p className="error-message">{message}</p>;
};
