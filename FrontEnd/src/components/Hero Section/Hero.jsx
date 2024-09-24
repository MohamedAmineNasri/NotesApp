import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center uppercase font-semibold gap-x-2 text-[32px] sm:text-[64px] lg:text-[72px]">
        <span style={{ fontSize: "1.5em" }} className="pr-4">
          For
        </span>
        <TypeAnimation
          sequence={["Notes", 2000, "Thoughts", 2000, "Memories", 2000]}
          speed={50}
          style={{ fontSize: "1.5em" }}
          repeat={Infinity}
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#89CFF0] to-[#A7D8DE]"
        />
      </div>
      <div>
        <p className="flex justify-center items-center font-bold text-balance px-5 text-center">
          A sanctuary for your private notes—share your thoughts anonymously,
          while keeping your personal reflections secure.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Link to='/theunsentmsg' className="border border-slate-900 w-2/5 p-2 m-3 bg-[#2776b6] text-white hover:bg-[#33a2fd] text-center">
          {/* <Link to='/theunsentmsg'>Submit Your Message</Link> */}
          Submit Your Message
        </Link>
      </div>
    </div>
  );
};

export default Hero;
