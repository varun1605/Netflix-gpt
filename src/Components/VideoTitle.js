import React from "react";

function VideoTitle(props) {
  // const {title,overview}=props
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{props.title}</h1>
      <p className="py-6 text-lg w-1/4 text-white ">{props.overview}</p>
      <div>
        <button className="bg-white  p-4  px-12  text-xl text-black   rounded-lg hover:bg-slate-200">
          Play
        </button>
        <button className="bg-white  p-4 mx-2  px-12 text-xl text-black bg-opacity-55 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
