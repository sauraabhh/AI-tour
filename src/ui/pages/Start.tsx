import React from "react";
import { useNavigate } from "react-router-dom";


const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-full w-full overflow-hidden flex justify-end items-end">
        <img
          src='src\ui\images\taaj.png'
          alt="Taaj"
          className="h-full w-full object-cover"
        />
        <div
          className="w-24 h-24 rounded-full mr-5 mb-5 bg-black cursor-pointer"
          onClick={() => navigate("/explore-city")}
        ></div>
      </div>
    </div>
  );
};

export default Start;
