import React, { useState } from "react";
import Mailicon from "../../../public/icon-animation_1.gif";
import { IoIosMail } from "react-icons/io";
import Squares from "./Squares";
import axiosInstance from "../../utils/axiosInstance";
import Toast from "../ToastMessage/Toast";
import TagInput from "../Input/TagInput";

const UnsentMsgFormat = () => {
  const [color, setColor] = useState("#fff");

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [towho, setTowho] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const addNewMessage = async () => {
    try {
      console.log({ towho, message, tags, colorcode: color }); // Debugging line
      const response = await axiosInstance.post("/create-message", {
        towho,
        message,
        tags,
        colorcode: color,
      });
      if (response.data && response.data.messageunsent) {
        showToastMessage("Note Added Successfully");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddMessage = () => {
    if (!towho) {
      setError("Please Enter To Who ");
      return;
    }
    if (!message) {
      setError("Please Enter The Message");
      return;
    }
    if (!color) {
      setError("Please Enter The Color");
      return;
    }
    setError("");

    addNewMessage();
    setTowho("");
    setMessage("");
    setTags("");
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message,
      type,
    });
  };
  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16  ">
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col border-4 border-slate-950 h-[500px] w-[358px]"
          >
            <div className="flex justify-around p-2">
              <label htmlFor="Name" className="flex items-center text-2xl">
                To:
              </label>
              <input
                name="Name"
                type="text"
                placeholder="Enter Name"
                className="outline-none"
                value={towho}
                onChange={(e) => setTowho(e.target.value)}
              />
              <div className="flex items-center justify-center ">
                <IoIosMail size={40} />
              </div>
            </div>

            <div className=" h-full p-3">
              <textarea
                placeholder="Type Your Message Here..."
                style={{ backgroundColor: color === "#fff" ? "#000" : color }}
                className="
                h-full w-full placeholder:text-start p-3
                text-white text-4xl outline-none"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center">
              <label htmlFor="tags" className="input-label ">
                TAGS
                <TagInput tags={tags} setTags={setTags} />
              </label>
            </div>
            {error && <p className="text-red-500 text-xs pt-4 "> {error} </p>}
          </form>
        </div>
        <div className="flex justify-center items-center my-4">
          <Squares color={color} setColor={setColor} />
        </div>
      </div>
      {/* <button className="flex  justify-center h-full w-full mt-7" >Submit Your Message</button> */}
      <button
        className="mt-7 nav-button hover:drop-shadow-lg flex w-full items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-7 py-2.5 text-base font-bold text-white ring-blue-600 ring-offset-2 ring-offset-slate-700 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1"
        onClick={handleAddMessage}
      >
        <span>Submit Your Message</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="ml-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </button>
      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default UnsentMsgFormat;
