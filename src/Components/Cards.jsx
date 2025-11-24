import React from "react";

const Cards = ({ note }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[300px] hover:shadow-2xl transition-all duration-300 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
        {note?.title}
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed">
        {note?.description}
      </p>
    </div>
  );
};

export default Cards;
