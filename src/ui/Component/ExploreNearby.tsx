import './ExploreNearby.css';
import MapButton from './MapButton'

function ExploreNearby() {
  return (
      <div className="inside-city-container">
      <h1>PLACES NEARBY CITY </h1>

      <div className="cards-container">
        <div className="card">
          <img src="https://imgs.search.brave.com/hPqFUXlGeFpiJ5l8uk98mwDWKQDKhyelDZJHN3_zsg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d29ybGRhdGxhcy5j/b20vci93NzY4L3Vw/bG9hZC82Zi9jNy82/MS8xLXRyb3BpY2Fs/LWFuZC1kcnktZGVj/aWR1b3VzLmpwZw" alt="Card 1" />
          <div className="content">
            <h3>Sultanpur National Park</h3>
            {/* <p>Explore this amazing place and its attractions.<br/>
              Distance (From New Delhi Railway Station):4.5km</p> */}
          </div>
        </div>

        <div className="card">
          <img src="https://static.toiimg.com/photo/msid-86454434,width-96,height-65.cms" alt="Card 2" />
          <div className="content">
            <h3>Mathura and Vrindavan</h3>
            {/* <p>Akshardham Temple is dedicated to Lord Swaminarayan.<br/>
            Distance (From New Delhi Railway Station):10km</p> */}
          </div>
        </div>

        <div className="card">
          <img src="https://media.gettyimages.com/id/151140053/photo/jim-corbett-national-park.jpg?s=612x612&w=0&k=20&c=ibx8Oaz6gNyYBMXkjPLMES83ziDzXUGn0QX7CovwE-E=" alt="Card 3" />
          <div className="content">
            <h3>Jim Corbett National Park</h3>
            {/* <p>Humayun's tomb is a fine specimen of the great Mughal architecture, which was inspired by Persian architecture.<br/>Distance (From New Delhi Railway Station):8km</p> */}
          </div>
        </div>
        <div className="card">
          <img src="https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/places/istock_54866450_india_shimla.jpg?q=79&w=1920&h=685" alt="Card 3" />
          <div className="content">
            <h3>Shimla</h3>
            {/* <p>The Red Fort or the Lal Qila is one of the best historical places in Delhi situated on the western bank of the River Yamuna. <br/>Distance (From New Delhi Railway Station):4km</p> */}
          </div>
        </div>
      </div>

      < MapButton />
    </div>
    
  )
}

export default ExploreNearby