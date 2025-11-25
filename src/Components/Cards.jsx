import React from "react";
import { useState } from "react";

const Cards = ({ note, deleteNote, editNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);

  const handleSave = () => {
    editNotes(note.noteId, title, description);
    setIsEditing(false);
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-lg p-6 w-auto hover:shadow-2xl transition-all duration-300 border border-gray-200 space-x-30">
      <div>
        {isEditing ? (
          <div>
            <input
              type="text"
              id="title"
              placeholder="Edit the title?"
              value={title}
              className="border rounded-sm bg-[#AED6CF] w-full"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              name="description"
              id="description"
              value={description}
              className="border rounded-sm bg-[#AED6CF] w-full"
              placeholder="Edit Description?"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
              {note?.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              {note?.description}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleSave()}
              className="bg-green-500 hover:bg-green-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-full w-20 m-auto"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-500 hover:bg-blue-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-full w-20 m-auto"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-green-500 hover:bg-green-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-full w-20 m-auto"
            >
              Edit
            </button>
            <button
              onClick={() => deleteNote(note.noteId)}
              className="bg-blue-500 hover:bg-blue-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-full w-20 m-auto"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
