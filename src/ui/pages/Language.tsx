import React from "react";
import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ChatBot from "../Component/ChatBot";

const Language = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <h1>LANGUAGE SETTING</h1>
      <button onClick={() => navigate("/help")}>Prev</button>
    </div>
    <ChatBot/>
    </div>
  );
};

export default Language;
