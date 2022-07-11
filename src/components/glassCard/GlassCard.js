import React from "react";
import "./glassCard.scss";

export const GlassCard = ({ children, className = "" }) => {
  return <div className={`glassCard ${className}`}>{children}</div>;
};
