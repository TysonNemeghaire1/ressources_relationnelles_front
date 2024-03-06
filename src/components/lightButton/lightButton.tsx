import React, { ReactElement } from "react";

interface Props {
  icon?: ReactElement;
  text: string;
  onClick: (value: "na") => void;
  value:  "na";
  active:  "na";
}
function Button({ icon, text, onClick, value, active }: Props) {
  const handleClick = () => {
    console.log("btn");
    onClick(value);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex uppercase items-center px-10 m-2 gap-1 rounded p-2 hover:opacity-70 ${
        active === value
          ? "bg-custom-blue-0 text-custom-blue-3"
          : "text-custom-blue-4"
      }`}
    >
      {icon ? icon : null} {text}
    </button>
  );
}

export default Button;
