import { getInitals } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center text-slate-950 font-medium bg-slate-100 rounded-full  ">
        {getInitals("Hadil Ayari")}
      </div>

      <div>
        <p className="text-sm font-medium">Hadil Ayari</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
