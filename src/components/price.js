import React from "react";

function Price({price}) {
    return(
        <div className="price-div mt-5 flex flex-col items-center absolute bottom-5 right-2/4 translate-x-1/2 gap-4 w-full ">
            <p className="text-lg font-medium ">${price}</p>
            <div className="button-div flex justify-center items-center gap-4 w-full">
            <button role="button" className="bg-transparent border-emerald-400 border-2 text-white px-3 py-2 text-lg w-1/2 rounded-full font-medium hover:bg-emerald-400 hover:text-black transition-all duration-200">Buy Now</button>
            <button role="button" className="bg-emerald-400 text-black px-3 py-2 rounded-none text-lg font-medium hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-colors duration-200 sm:text-sm md:text-base lg:text-lg">Add to cart</button>
            </div>
        </div>
    )
}

export default Price