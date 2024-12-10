import React from "react";
import { useNavigate } from "react-router-dom";

const ExploreCity = () => {
  const navigate = useNavigate();

  return (
  <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1></h1>
      <button onClick={() => navigate("/explore-city")}>Explore city</button>
      <button onClick={() => navigate("/plan-trip")}>Plan Trip</button>
      <button onClick={() => navigate("/booking")}>Booking</button>
      <button onClick={() => navigate("/help")}>Help</button>
      <button onClick={() => navigate("/language")}>Language</button>

    </div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1></h1>
      <button onClick={() => navigate("/explore-city")}>Explore city</button>
      <button onClick={() => navigate("/plan-trip")}>Plan Trip</button>
      <button onClick={() => navigate("/booking")}>Booking</button>
      <button onClick={() => navigate("/help")}>Help</button>
      <button onClick={() => navigate("/language")}>Language</button>

    </div>
    <button onClick={() => navigate("/")}>Prev</button>
    <button onClick={() => navigate("/plan-trip")}>next</button>
  </div>     
);
};

export default ExploreCity;
