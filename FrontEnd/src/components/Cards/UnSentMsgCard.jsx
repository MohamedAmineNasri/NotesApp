import React from "react";
import TagInput from "../Input/TagInput";
import { IoIosMail } from "react-icons/io";

const MessageCard = ({ msg }) => {
  return (
    <div className="flex flex-col border-4 border-slate-950 h-[500px] w-[358px]">
      <div className="flex justify-around p-2">
        <label htmlFor="Name" className="flex items-center text-2xl">
          To:
        </label>
        <span className="text-2xl">{msg.towho}</span>{" "}
        {/* Displaying the name */}
        <div className="flex items-center justify-center ">
          <IoIosMail size={40} />
        </div>
      </div>

      <div className="h-full p-3">
        <textarea
          readOnly
          placeholder="Type Your Message Here..."
          className="h-full w-full placeholder:text-start p-3 text-4xl outline-none"
          style={{ backgroundColor: msg.colorcode }}
          value={msg.message || "This is a test message to be sent later."} // Use the 'value' prop instead of children
        />
      </div>

      <div className="flex justify-around items-center pb-4">
        {msg.tags.map((item) => `#${item} `)}
      </div>
    </div>
  );
};

const UnSentMsgCard = ({ allMessages }) => {
  return (
    <div className="flex justify-center items-center m-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">
        {allMessages.map((msg, index) => (
          <MessageCard key={index} msg={msg} />
        ))}
      </div>
    </div>
  );
};

export default UnSentMsgCard;
