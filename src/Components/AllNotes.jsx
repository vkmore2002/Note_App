import React from "react";
import Cards from "./Cards";

const AllNotes = ({ notes }) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center p-6">
      {notes.map((note, index) => {
        return <Cards key={index} note={note} />;
      })}
    </div>
  );
};

export default AllNotes;
