import React, { useState } from "react";
import ImageWrapper from "./img-wrapper";
import AboutInfo from "./about";
import Price from "./price";

function Card({data}) {
  // const [state, setState] = useState(data);
  return (
    <>
        <div key={data.id} className="card relative bg-[#2C363F] m-2 flex flex-col items-center  rounded-lg p-2 h-96">
          <ImageWrapper src={data.image} />
          <AboutInfo title={data.title} desc={data.description} />
          <Price price = {data.price} />
        </div>
      
    </>
  );
}

export default Card;
