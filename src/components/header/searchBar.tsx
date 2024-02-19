import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar({
  onChange,
  onFocus,
  showLabel,
}: {
  onFocus: () => void;
  showLabel: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <label className="relative text-lg" onFocus={onFocus} onBlur={onFocus}>
        <span
          className={`absolute right-1 text-custom-blue-3 ${
            showLabel ? "" : "visually-hidden"
          }`}
        >
          Ma recherche...
        </span>
        <input
          onChange={onChange}
          type="text"
          className="rounded bg-transparent text-right text-lg text-custom-blue-3 focus:outline-none"
        />
      </label>
      <button
        type="button"
        className="flex items-center rounded-full p-2 hover:bg-custom-blue-4 hover:bg-opacity-15"
      >
        <FaMagnifyingGlass className="text-custom-blue-4 size-4" />
      </button>
    </>
  );
}
export default SearchBar;
