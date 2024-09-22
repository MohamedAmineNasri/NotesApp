import { Link, useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = ({ userInfo, onSearchNote, handleClearSearch, getAllNotes }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [searchQuery, SetSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    } else {
      getAllNotes();
    }
  };
  const onClearSearch = () => {
    SetSearchQuery("");
    handleClearSearch();
  };

  return (
    <div
      className="bg-white md:px-6 py-2 drop-shadow md:flex md:items-center md:justify-between
      flex items-center gap-3 
    "
    >
      <h2 className="text-3xl font-medium text-black py-2 cursor-pointer">
        <Link to='/'>Notes</Link>
      </h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          SetSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo
        userInfo={userInfo}
        onLogout={onLogout}
        navigate={navigate}
      />
    </div>
  );
};

export default NavBar;
