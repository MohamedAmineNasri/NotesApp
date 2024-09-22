import React from "react";
import NavBar from "../NavBar/NavBar";
import UnsentMsgFormat from "./UnsentMsgFormat";

const UnsentMsg = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-screen flex flex-col  justify-center items-center space-y-7   ">
        <p className=" text-3xl tracking-widest  ">Submit A Message</p>
        <UnsentMsgFormat />
      </div>
    </>
  );
};

export default UnsentMsg;
