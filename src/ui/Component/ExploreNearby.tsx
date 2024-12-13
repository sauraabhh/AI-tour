import './ExploreNearby.css';
import MapButton from './MapButton'

function ExploreNearby() {
  return (
    <div className="inside-city-container">
    <h1>PLACES NEARBY CITY </h1>
    <div id="city-cards">
      <div className="city-cards">
        <div id="place-card">
          <img src="https://static.toiimg.com/photo/msid-86454434,width-96,height-65.cms" alt="" />  
        </div>
        <h1>MATHURA-VRINDAVAN</h1>
      </div>
      <div className="city-cards">
        <div id="place-card">
          <img src="https://cdn.audleytravel.com/700/501/79/1328411-hawa-mahal-jaipur.jpg" alt="" />  
        </div>
        <h1>HAWA-MAHAL</h1>
      </div>
      <div className="city-cards">
        <div id="place-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Nainital_lake_in_the_morning.jpg" alt="" />  
        </div>
        <h1>NAINITAL</h1>
      </div>
      <div className="city-cards">
        <div id="place-card">
          <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2014/08/Kasauli.jpg" alt="" />  
        </div>
        <h1>KASAULI</h1>
      </div>
    </div>
  
  <  MapButton />
  </div>
    
  )
}

export default ExploreNearby