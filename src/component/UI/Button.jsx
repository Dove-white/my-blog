import React from "react";

export const Button = ({ name, type, onClick }) => {
  return (
    <div className="mt-3">
      <button
        className="bg-[#cc45e4] py-1 px-3 rounded-sm text-white"
        type={type}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};
