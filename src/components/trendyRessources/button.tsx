import React, { ReactElement } from "react";
import { filterType } from "@/components/trendyRessources/index";

interface Props {
  icon?: ReactElement;
  text: string;
  onClick: (value: filterType) => void;
  value: filterType;
  active: filterType;
}
function Button({ icon, text, onClick, value, active }: Props) {
  const handleClick = () => {
    onClick(value);
    console.log(value);
    console.log(active);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1 rounded p-2 hover:opacity-70 ${
        active === value
          ? "bg-custom-blue-4 text-white"
          : "bg-white text-custom-blue-4"
      }`}
    >
      {icon ? icon : null} {text}
    </button>
  );
}

export default Button;
