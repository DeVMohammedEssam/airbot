import React from "react";

const Input = ({ className, type = "text", placeholder, name }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};
export default Input;
