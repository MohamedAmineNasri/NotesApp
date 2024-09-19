import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = ({ userInfo }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear()
    navigate("/login");
  };
  const [searchQuery, SetSearchQuery] = useState("");

  const handleSearch = () => {};
  const onClearSearch = () => {
    SetSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-3xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          SetSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default NavBar;
