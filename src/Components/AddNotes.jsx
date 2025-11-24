import React, { useState } from "react";

const AddNotes = ({ setNotes, notes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log("Title:", title);
  console.log("Description: ", description);
  console.log(notes);

  const handleAddNote = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill both title and description");
      return;
    }

    const Note = {
      title,
      description,
    };

    setNotes([...notes, Note]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="flex flex-col justify-center border rounded-2xl gap-4 w-96 mx-auto my-10 p-8 bg-[#647FBC] shadow-lg hover:shadow-2xl transition-all duration-300">
        <input
          type="text"
          id="title"
          placeholder="Enter the title..."
          value={title}
          className="border rounded-sm bg-[#AED6CF]"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="description"
          id="description"
          value={description}
          className="border rounded-sm bg-[#AED6CF]"
          placeholder="Add something??"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          onClick={handleAddNote}
          className="bg-[#A9B5C2] hover:bg-blue-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-full w-20 m-auto"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
