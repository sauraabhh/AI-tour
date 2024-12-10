import React from "react";
import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ChatBot from "../Component/ChatBot";

const Booking = () => {
  const navigate = useNavigate();
  return (
    <div>

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>

      <h1>Your Booking</h1>
      <button onClick={() => navigate("/plan-trip")}>Prev</button>
       <button onClick={() => navigate("/help")}>Next</button>

    </div>
    <ChatBot/>
    </div>

  );
};

export default Booking;
