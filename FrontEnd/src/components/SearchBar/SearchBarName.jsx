import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const SearchBarName = ({ value, onChange,onClearSearch, handleSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="mx-auto  md:w-3/4 flex items-center justify-center px-4 bg-slate-100  rounded-3xl ">
      <input
        type="text"
        placeholder="Search for a name..."
        className="w-full text-sm bg-transparent my-3 py-[11px] border border-slate-700 outline-none placeholder:text-center rounded-3xl"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <IoMdClose
          size={22}
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}
      <IoSearch
        size={22}
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBarName;
