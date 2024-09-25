import { Link, useNavigate, useLocation } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = ({ userInfo, onSearchNote, handleClearSearch, getAllNotes }) => {
  const navigate = useNavigate();
  const location = useLocation();
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
      flex items-center  gap-3   
    "
    >
      <h2 className="text-3xl font-medium text-black py-2 cursor-pointer   ">
        <Link to="/" className="flex justify-center items-center">
          <div>
            <img src="public/logoHD.png" alt="logo" className="h-[50px]" />
          </div>
          <div className="text-sm md:text-2xl">ThoughtStream</div>
        </Link>
      </h2>

      {/* Only show SearchBar if not on the '/' page */}
      {localStorage.getItem("token") && location.pathname !== "/" ? (
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            SetSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      ) : (
        ""
      )}

      <div className="flex justify-end w-3/5">
        <ProfileInfo
          userInfo={userInfo}
          onLogout={onLogout}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default NavBar;
