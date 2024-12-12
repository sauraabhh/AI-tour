import './ExploreNearby.css';
import MapButton from './MapButton'

function ExploreNearby() {
  return (
    <div className="inside-city-container">
    <h1>PLACES NEARBY CITY </h1>
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
    
  )
}

export default ExploreNearby