import { Link } from "react-router-dom";
import { getInitals } from "../../utils/helper";

const ProfileInfo = ({ onLogout, userInfo, navigate }) => {
  const LoginLogout = () => {
    if (localStorage.getItem("token")) {
      onLogout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex items-center gap-3">
      {localStorage.getItem("token") ? (
        <div className="hidden md:w-12 md:h-12 md:flex items-center justify-center text-slate-950 font-medium bg-slate-100 rounded-full  ">
          {getInitals(userInfo?.fullName)}
        </div>
      ) : (
        ""
      )}

      <div>
        <p className="text-sm font-medium flex justify-center ">{userInfo?.fullName}</p>
        <div className="flex items-center justify-between gap-2">
          <button className="text-xs md:text-sm text-slate-700 underline tracking-widest ">
            <Link to='/dashboard'>
              Dashboard
            </Link>
          </button>
          <button
            className="text-xs md:text-sm text-slate-700 underline tracking-widest "
            onClick={LoginLogout}
          >
            {localStorage.getItem("token") ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
