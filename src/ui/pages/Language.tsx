import React from "react";
import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";

const Language = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <h1>LANGUAGE SETTING</h1>
      <button onClick={() => navigate("/help")}>Prev</button>
    </div>
    <ToggleChatbotButton/>
    </div>
  );
};

export default Language;
