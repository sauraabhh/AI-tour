// import { useNavigate } from "react-router-dom";
import React from "react";
import NavMain from "../Component/NavMain";
// import ToggleChatbotButton from "../Component/ToggleChatbotButton";
// import Button from "../Component/Button";
// import { FcNext, FcPrevious } from "react-icons/fc";
import "./Plan.css" ;
import "./Plan";
import { useNavigate } from 'react-router';



const PlanTrip = () => {
  const navigate = useNavigate()
  return (
    <div style={{display:"flex" , flexDirection:"column", justifyContent:"center"}} id="plan-page">
    

    < NavMain/>
    <h1 style={{textAlign:"center" ,marginTop : "15px"}}>PLAN TRIP</h1>
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

        <div id="last-partition" className="last-partition" >
            <div className="last-partition2">
                <label htmlFor="no-of-persons">Number of Persons</label>
            <div className="input-group">
                {/* <button type="button" id="decrease-persons">&#9660;</button> */}
                <input type="number" id="no-of-persons" min="0"/>
                {/* <button type="button" id="increase-persons">&#9650;</button> */}
            </div>
            </div>

            <div className="last-partition2">
            <label htmlFor="no-of-rooms">Number of Rooms</label>
            <div className="input-group">
                {/* <button type="button" id="decrease-rooms">&#9660;</button> */}
                <input type="number" id="no-of-rooms" min="0"/>
                {/* <button type="button" id="increase-rooms">&#9650;</button> */}
            </div>
            </div>

            <div style={{display: "flex", marginTop: "10px", marginLeft : "50px", gap: "65px", alignItems : "center"}}>
                <h2 style={{fontSize:"20px"}}>Budget </h2>
                <input type="text" style={{borderRadius: "8px"}} placeholder="Enter your Budget" />
                </div>




        </div>
        
    </div>

`    <div style={{display : "flex" , flexDirection: "column" , justifyContent : "center" , alignItems : "center"}}>
        <h1>FILTER BY</h1>
        <div id="filterby">
            <div style={{marginRight: "40px"}} className="left-filterby">
                <div>
                <h1 style={{fontSize: "25px", marginLeft : "10px" , marginTop :"8px"}}>Preference :</h1>
                <div>
                    <div style={{display: "flex", alignItems:"center", justifyContent: "space-between", gap:"20px", marginTop :"30px" ,marginLeft : "10px"}}>
                        <h2 style={{fontSize:"20px"}}>Hotel Facility: </h2>
                        <input type="text" placeholder="Wifi/Transport" />
                    </div>

    
                </div>
                </div>



                <div style={{marginLeft : "10px"}}>
                    <div style={{display: "flex", justifyContent: "space-between",alignItems:"center" , gap:"20px"}}>
                        <h2 style={{fontSize:"20px"}}>Hotel Rating: </h2>
                        <input type="text" style={{marginTop: "20px"}} placeholder="Enter Here" />
                    </div>

                </div>



                <div style={{display: "flex", justifyContent: "space-between",marginTop: "10px", marginLeft : "10px", gap: "65px", alignItems : "center"}}>
                <h2 style={{fontSize:"20px"}}>Cuisine :</h2>
                <input type="text" style={{borderRadius: "8px"}} placeholder="Cuisine Type" />
                </div>

                
                
            </div>
            <div style={{marginRight:"20px"}} className="right-filterby">
            <h1 style={{fontSize: "25px", marginLeft : "10px" , marginTop :"8px",marginBottom :"30px"}}>Allocation :</h1>

                <div style={{display: "flex", alignItems: "center" , justifyContent: "space-between" , gap : "15px"}}>
                    <h1 style={{fontSize : "18px"}}>Accomodation </h1>
                    <input type="text" placeholder="in %" />
                </div>


                <div style={{display: "flex", alignItems: "center" , justifyContent: "space-between" , gap : "15px"}}>
                    <h1 style={{fontSize : "18px"}}>Meal </h1>
                    <input type="text" placeholder="in %" />
                </div>

                <div style={{display: "flex", alignItems: "center" , justifyContent: "space-between" , gap : "15px"}}>
                    <h1 style={{fontSize : "18px"}}>Attraction Typ </h1>
                    <input type="text" placeholder="in %" />
                </div>



            </div>
        </div>
        
    </div>

    <button style={{
        height:"20px", width:"120px",border: "none" , backgroundColor:"#007bff" ,color: "white", marginTop : "10px" , borderRadius:"12px"
    }}

    onClick={() => navigate("/PlanInside")}    
    >Click To Proceed</button>
  
    </div>


    
  );
};

export default PlanTrip;
