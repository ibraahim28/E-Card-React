import React from "react";

function ImageWrapper({src}) {
    return(
        <div className="Image-wrapper">
            <img className="aspect-video w-48 h-auto  " src={src} />
        </div>
    )
}

export default ImageWrapper;