import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar({
  onChange,
  onFocus,
  showLabel,
  dark = true,
}: {
  onFocus: () => void;
  showLabel: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dark?: boolean;
}) {
  return (
    <div className="flex">
      <label
        className={`relative text-lg ${dark ? "" : "text-custom-blue-0"}`}
        onFocus={onFocus}
        onBlur={onFocus}
      >
        <span
          className={`absolute right-1 
          ${showLabel ? "" : "visually-hidden"}
          ${dark ? "text-custom-blue-3" : "text-custom-blue-0"}`}
        >
          Ma recherche...
        </span>
        <input
          onChange={onChange}
          type="text"
          className={`rounded bg-transparent text-right text-lg focus:outline-none ${dark ? "text-custom-blue-3" : "text-custom-blue-0"}`}
        />
      </label>
      <button
        type="button"
        className={
          "flex items-center rounded-full p-2 hover:bg-custom-blue-4 hover:bg-opacity-15"
        }
      >
        <FaMagnifyingGlass
          className={`size-4 ${dark ? "text-custom-blue-4" : "text-custom-blue-0"}`}
        />
      </button>
    </div>
  );
}
export default SearchBar;
