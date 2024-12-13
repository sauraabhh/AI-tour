// import { useNavigate } from "react-router-dom";
import React from "react";
import NavMain from "../Component/NavMain";
// import ToggleChatbotButton from "../Component/ToggleChatbotButton";
// import Button from "../Component/Button";
// import { FcNext, FcPrevious } from "react-icons/fc";
import "./Plan.css" ;
import "./Plan"


const PlanTrip = () => {
  // const navigate = useNavigate();
  return (
    <div id="plan-page">
    < NavMain/>

    <div className="container">
        <div className="partition">
            <label htmlFor="departure-city">TO</label>
            <input type="text" id="departure-city" placeholder="Enter city & country"/>
        </div>

        <div className="partition">
            <label htmlFor="arrival-city">FROM</label>
            <input type="text" id="arrival-city" placeholder="Enter city & country"/>
        </div>

        <div className="partition">
            <label htmlFor="departure-date">Departure Date</label>
            <input type="date" id="departure-date" min="2024-01-01" max="2025-12-31"/>
        </div>

        <div className="partition">
            <label htmlFor="arrival-date">Arrival Date</label>
            <input type="date" id="arrival-date" min="2024-01-01" max="2025-12-31"/>
        </div>

        <div style={{display: "flex"}} className="partition">
            <label htmlFor="no-of-persons">Number of Persons</label>
            <div className="input-group">
                {/* <button type="button" id="decrease-persons">&#9660;</button> */}
                <input type="number" id="no-of-persons" min="0"/>
                {/* <button type="button" id="increase-persons">&#9650;</button> */}
            </div>

            <label htmlFor="no-of-rooms">Number of Rooms</label>
            <div className="input-group">
                {/* <button type="button" id="decrease-rooms">&#9660;</button> */}
                <input type="number" id="no-of-rooms" min="0"/>
                {/* <button type="button" id="increase-rooms">&#9650;</button> */}
            </div>
        </div>
    </div>
  
    </div>


    
  );
};

export default PlanTrip;
