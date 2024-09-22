import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import moment from "moment";
import Toast from "../../components/ToastMessage/Toast";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import AddNoteImage from "../../../public/AddNote.png";
import NotFoundImage from "../../../public/notfound.svg";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [userInfo, setUserInfo] = useState(null);

  const [allNotes, setAllNotes] = useState([]);

  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (noteDetail) => {
    setOpenAddEditModal({ isShown: true, data: noteDetail, type: "edit" });
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

  //Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpexted error occurred. Please try again");
    }
  };

  //Delete note
  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId);

      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully", "delete");
        getAllNotes();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log("An unexpexted error occurred. Please try again");
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

  //Update isPinned
  const updateIsPinned = async (noteData) => {
    const noteId = noteData._id
    try {
      const respone =  await axiosInstance.put('/update-note-pinned/'+noteId, {
        isPinned: !noteData.isPinned
      } )
      if(respone.data && respone.data.note) {
        showToastMessage('Note Pin Is Updated Successfully')
        getAllNotes()
      }
    } catch (error) {
      if(error.response && error.respone.data && error.respone.data.message) {
        console.log(error)
      }
    }
  }

  const handleClearSearch = () => {
    setIsSearch(false), getAllNotes();
  };


  useEffect(() => {
    getAllNotes();
    getUserInfo();
    return () => {};
  }, []);

  return (
    <div className="md:relative h-screen	">
      <NavBar
        userInfo={userInfo}
        onSearchNote={onSearchNote}
        handleClearSearch={handleClearSearch}
        getAllNotes={getAllNotes}
      />
      <div className="container mx-auto">
        {allNotes.length > 0 ? (
          <div className="grid  gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allNotes.map((item, index) => {
              return (
                <NoteCard
                  key={item._id}
                  title={item.title}
                  date={moment(item.createdOn).format("DD MMM YYYY")}
                  content={item.content}
                  tags={item.tags}
                  isPinned={item.isPinned}
                  onEdit={() => handleEdit(item)}
                  onDelete={() => deleteNote(item)}
                  onPinNote={() => updateIsPinned(item)}
                />
              );
            })}
          </div>
        ) : (
          <EmptyCard
            imageSrc={isSearch ? NotFoundImage : AddNoteImage}
            message={
              isSearch
                ? `Oops! No Notes found matching your search.`
                : `
            Start creating your first note! Click the 'Add' button to jot down your thoughts, ideas, and reminders. Let's get started!
            `
            }
          />
        )}
      </div>
     <div className=" ">
     <button
        className=" fixed w-16 h-16 flex items-center justify-center rounded-2xl  bg-primary hover:bg-blue-600  right-1 md:right-10 md:bottom-5 bottom-3  "
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className="text-[32px] text-white " />
      </button>
     </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        contentLabel=""
        className="  w-full max-w-[600px] max-h-[80vh] bg-white rounded-md   p-5 overflow-auto"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({
              isShown: false,
              type: "add",
              data: null,
            });
          }}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>
      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default Home;
