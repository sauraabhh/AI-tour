import React from "react";
import { useNavigate } from "react-router-dom";

const ExploreCity = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Explore the City</h1>
      <button onClick={() => navigate("/plan-trip")}>Plan Trip</button>
      <button onClick={() => navigate("/booking")}>Booking</button>
      <button onClick={() => navigate("/help")}>Help</button>
      <button onClick={() => navigate("/language")}>Language</button>
    </div>
  );
};

export default ExploreCity;
