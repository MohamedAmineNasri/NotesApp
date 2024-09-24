import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axiosInstance from "../../utils/axiosInstance";
import Hero from "../../components/Hero Section/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchBarName from "../../components/SearchBar/SearchBarName";
import UnSentMsgCard from "../../components/Cards/UnSentMsgCard";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [allNotes, setAllNotes] = useState([]);

  const [isSearch, setIsSearch] = useState(false);

  const [allMessages, setAllMessages] = useState([]);
  console.log(allMessages);
  //Get all unsent messages
  const getAllMessages = async () => {
    try {
      const response = await axiosInstance.get("/get-all-message");
      if (response.data && response.data.messages) {
        setAllMessages(response.data.messages);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again");
    }
  };

  //Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again");
    }
  };
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
  //Search for a Note
  const onSearchNote = async (query) => {
    try {
      const response = await axiosInstance.get("/search-notes/", {
        params: { query },
      });
      if (response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false), getAllNotes();
  };

  useEffect(() => {
    getAllNotes();
    getUserInfo();
    getAllMessages();
    return () => {};
  }, []);

  return (
    <>
      <NavBar
        userInfo={userInfo}
        onSearchNote={onSearchNote}
        handleClearSearch={handleClearSearch}
        getAllNotes={getAllNotes}
      />
      <Hero />
      <SearchBarName />
      <UnSentMsgCard allMessages={allMessages} />
    </>
  );
};

export default HomePage;
