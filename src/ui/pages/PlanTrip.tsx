import React from "react";
import { useNavigate } from "react-router-dom";

const PlanTrip = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Plan Your Trip</h1>
      <button onClick={() => navigate("/")}>Prev</button>
      <button onClick={() => navigate("/booking")}>Next</button>
    </div>
  );
};

export default PlanTrip;
