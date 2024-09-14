import React from "react";
import TagInput from "../../components/Input/TagInput";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="input-label">
          TITLE
        </label>
        <input
          type="text"
          id="title"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Enter the title of your note here..."
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="content" className="input-label">Content</label>
        <textarea
          type="text"
          id="content"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded "
          placeholder="Content"
          rows={10}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="tags" className="input-label ">
          TAGS
          <TagInput />
        </label>
      </div>

      <button className="btn-primary font-medium mt-5 p-3 ">ADD</button>
    </div>
  );
};

export default AddEditNotes;
