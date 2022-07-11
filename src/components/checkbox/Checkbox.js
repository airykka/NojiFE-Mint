import React, { useEffect, useState } from "react";
import "./checkbox.scss";

export const Checkbox = ({ className = "", onChange = () => {}, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(rest?.checked);

    return () => {};
  }, [rest?.checked]);

  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className="noji-checkbox">
      {isChecked ? (
        <CheckedBox />
      ) : (
        <span className={`${className}  noji-check`}></span>
      )}
      <input type="checkbox" {...rest} onChange={handleChange} />
    </div>
  );
};

const CheckedBox = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V15C0 16.3261 0.526784 17.5979 1.46447 18.5355C2.40215 19.4732 3.67392 20 5 20H15C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15V5C20 3.67392 19.4732 2.40215 18.5355 1.46447C17.5979 0.526784 16.3261 0 15 0H5ZM13.73 8.684C13.8198 8.58813 13.8899 8.47552 13.9362 8.35257C13.9825 8.22963 14.0041 8.09877 13.9998 7.96747C13.9956 7.83617 13.9655 7.707 13.9113 7.58732C13.8571 7.46765 13.7799 7.35982 13.684 7.27C13.5881 7.18018 13.4755 7.11011 13.3526 7.06381C13.2296 7.01751 13.0988 6.99588 12.9675 7.00015C12.8362 7.00442 12.707 7.03451 12.5873 7.08871C12.4677 7.1429 12.3598 7.22014 12.27 7.316L9.187 10.606L7.664 9.253C7.46446 9.08712 7.20825 9.0053 6.9495 9.02482C6.69075 9.04434 6.44972 9.16368 6.27732 9.35762C6.10493 9.55156 6.01467 9.80492 6.02562 10.0642C6.03657 10.3234 6.14787 10.5683 6.336 10.747L8.586 12.747C8.78069 12.9199 9.03515 13.0101 9.29529 12.9983C9.55543 12.9866 9.80072 12.8738 9.979 12.684L13.729 8.684H13.73Z"
        fill="#FFE2C7"
      />
    </svg>
  );
};
