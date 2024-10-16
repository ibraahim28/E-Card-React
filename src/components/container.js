import React from "react";
import Card from "./card";

function Container() {
  return (
    <div className="bg-[#264653] box-border overflow-x-hidden">

      <h2 className="font-bold text-emerald-400 text-center text-3xl sm:text-xl md:text-xl lg:text-2xl p-5">
        E-Commerce Cards with React and Tailwind
      </h2>
      

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8 gap-3 overflow-x-hidden">
        <Card />
      </div>
    </div>
  );
}

export default Container;
