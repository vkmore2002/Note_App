import React from "react";
import Cards from "./Cards";

const AllNotes = ({ notes, setNotes }) => {
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.noteId !== id));
  };

  const editNotes = (id, title, description) => {
    setNotes(
      notes.map((note) => {
        if (note.noteId === id) {
          return {
            ...note,
            title: title,
            description: description,
          };
        }
        return note;
      })
    );
  };

  return (
    <div className="flex gap-6 flex-wrap justify-center p-6">
      {notes.map((note) => {
        return (
          <Cards
            key={note.noteId}
            note={note}
            deleteNote={deleteNote}
            editNotes={editNotes}
          />
        );
      })}
    </div>
  );
};

export default AllNotes;
