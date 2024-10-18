import React, { useState } from "react";

const Input = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
    className="mb-5 p-2 border-none w-1/3"
      type="text"
      placeholder="Search..."
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      value={searchQuery}
    />
  );
};

export default Input;
