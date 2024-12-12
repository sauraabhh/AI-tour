import { useNavigate } from "react-router-dom";
import "./NavMain.css"

export default function NavMain() {
    const navigate = useNavigate();
  return (
    <div id='nav' style={{display : "flex" , gap : "120px" , justifyContent : "space-between" , alignItems : "center"  }}>
    <div id="nav-1">
      <h1>RAHAGIRI</h1>
    </div>
    <div id="nav-button">
      <button id='button-1' onClick={() => navigate("/explore-city")}>Explore City</button>
      <button id='button-1' onClick={() => navigate("/plan-trip")}>Plan Trip</button>
      <button id='button-1' onClick={() => navigate("/booking")}>Booking</button>
      <button id='button-1' onClick={() => navigate("/help")}>Help & Support</button>
      <button id='button-1' onClick={() => navigate("/language")}>Language</button>
    </div>
  </div>
  )
}