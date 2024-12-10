import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NavMain() {
    const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <button onClick={() => navigate("/explore-city")}>Explore City</button>
    <button onClick={() => navigate("/plan-trip")}>Plan Trip</button>
    <button onClick={() => navigate("/booking")}>Booking</button>
    <button onClick={() => navigate("/help")}>Help</button>
    <button onClick={() => navigate("/language")}>Language</button>
  </div>
  )
}
