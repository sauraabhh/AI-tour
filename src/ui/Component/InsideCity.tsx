import "./InsideCity.css"; // Importing the CSS file
// import MapButton from "./MapButton";
import { useNavigate } from 'react-router';


function InsideCity() {
  const navigate = useNavigate()
  return (
    <div className="inside-city-container">
      <h1>PLACES INSIDE CITY </h1>
      <div onClick={() => navigate("/Hotel")}  id="city-cards">
        <div className="city-cards">
          <div id="place-card">
            <img src="https://media.gettyimages.com/id/1204811865/photo/beds-in-hotel-room-at-tourist-resort.jpg?s=612x612&w=0&k=20&c=OELpUtSrRnH1L6lX9vG3QmxdR8-p_bHWF51b1Dg4lxs=" alt="" />
          </div>
          <h1>Hotels</h1>
        </div>
        <div onClick={() => navigate("/Restraunts")}  className="city-cards">
          <div id="place-card">
            <img src="https://media.istockphoto.com/id/1062672350/photo/restaurant-patio-in-center-city-district-of-philadelphia-pennsylvania-usa.jpg?s=612x612&w=0&k=20&c=c-Ic4EbKk0pY9jDAzqPZpATRwnT5n5s1aQyZpWFMY7I=" alt="" />
          </div>
          <h1>Restraunts</h1>
        </div>
        <div onClick={() => navigate("/spots")}  className="city-cards">
          <div id="place-card">
            <img src="https://www.pandotrip.com/wp-content/uploads/2018/06/Plitvice-Lakes-National-Park-in-Croatia.jpg" alt="" />
          </div>
          <h1>Attraction Spot</h1>
        </div>
        
      </div>
      {/* <  MapButton /> */}

    </div>
  );
}

export default InsideCity;