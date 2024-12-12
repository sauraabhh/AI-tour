import "./InsideCity.css"; // Importing the CSS file
import MapButton from "./MapButton";

function InsideCity() {
  return (
    <div className="inside-city-container">
      <h1>PLACES INSIDE CITY </h1>
      <div id="city-cards">
        <div className="city-cards">
          <div id="place-card">
            
          </div>
          <h1>PLACES</h1>
        </div>
        <div className="city-cards">
          <div id="place-card">
            
          </div>
          <h1>PLACES</h1>
        </div>
        <div className="city-cards">
          <div id="place-card">
            
          </div>
          <h1>PLACES</h1>
        </div>
        <div className="city-cards">
          <div id="place-card">
            
          </div>
          <h1>PLACES</h1>
        </div>
      </div>
      <  MapButton />

    </div>
  );
}

export default InsideCity;