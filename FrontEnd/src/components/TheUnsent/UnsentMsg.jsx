import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import UnsentMsgFormat from "./UnsentMsgFormat";
import axiosInstance from "../../utils/axiosInstance";

const UnsentMsg = () => {
  const [userInfo, setUserInfo] = useState(null);
  //Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };



  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);
  return (
    <>
      <NavBar
        userInfo={userInfo}

      />
      <div className="w-full h-screen flex flex-col  justify-center items-center space-y-7   ">
        <p className=" text-3xl tracking-widest  ">Submit A Message</p>
        <UnsentMsgFormat />
      </div>
    </>
  );
};

export default UnsentMsg;
