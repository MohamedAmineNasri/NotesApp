import React, { useState } from "react";
import Mailicon from "../../../public/icon-animation_1.gif";
import { IoIosMail } from "react-icons/io";
import Squares from "./Squares";

const UnsentMsgFormat = () => {
  const [color, setColor] = useState("#fff");
  console.log(color);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16  ">
        <div>
          <form className="flex flex-col border-4 border-slate-950 h-[403.564px] w-[358px]">
            <div className="flex justify-around p-2">
              <label htmlFor="Name" className="flex items-center text-2xl">
                To:
              </label>
              <input
                name="Name"
                type="text"
                placeholder="Enter Name"
                className="outline-none"
              />
              <div className="flex items-center justify-center ">
                <IoIosMail size={40} />
              </div>
            </div>

            <div className=" h-full p-3">
              <textarea
                placeholder="Type Your Message Here..."
                style={{ backgroundColor: color }}
                className="
            h-full w-full placeholder:text-start p-3
             text-white text-4xl outline-none"
              />
            </div>
          </form>
        </div>
        <div>
          <Squares color={color} setColor={setColor} />
        </div>
      </div>
      {/* <button className="flex  justify-center h-full w-full mt-7" >Submit Your Message</button> */}
      <button className="  mt-7 nav-button hover:drop-shadow-lg] flex w-full items-center justify-center rounded-full border border-[#0c550c] bg-[#d3e763] bg-gradient-to-tr from-[#97f163] to-[#78c048]/70 px-7 py-2.5 text-base font-bold text-slate-800 ring-lime-600 ring-offset-2 ring-offset-slate-700 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1">
        <span>Submit Your Message</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          className="ml-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default UnsentMsgFormat;
