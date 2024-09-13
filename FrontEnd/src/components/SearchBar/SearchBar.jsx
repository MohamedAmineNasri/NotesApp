import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-3/5 flex items-center px-4 bg-slate-100 rounded-md ">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-sm bg-transparent py-[11px] outline-none placehoder: text-center"
        value={value}
        onChange={onChange}
      />
      {value && (<IoMdClose size={22} className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3" onClick={onClearSearch} />)}
      <IoSearch size={22} className="text-slate-400 cursor-pointer hover:text-black" onClick={handleSearch}  />
    </div>
  );
};

export default SearchBar;
