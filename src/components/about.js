import React from "react";

function AboutInfo ({title, desc}) {
    return (
        <div className="about-info line-clamp-6">
        <h1 className="text-lg text-emerald-400 font-semibold">{title}</h1>
        <p className="text-sm text-slate-400">{desc}</p>
        </div>
    )
}

export default AboutInfo;