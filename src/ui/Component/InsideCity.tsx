import "./InsideCity.css"; // Importing the CSS file

function InsideCity() {
  return (
    <div className="inside-city-container">
      <h1>PLACES INSIDE CITY </h1>

      <div className="cards-container">
        <div className="card">
          <img src="https://th.bing.com/th/id/OIP.B7OU6_FK0BuILQhGfQ0NTwHaE5?rs=1&pid=ImgDetMain" alt="Card 1" />
          <div className="content">
            <h3>India Gate</h3>
            <p>Explore this amazing place and its attractions.<br/>
              Distance (From New Delhi Railway Station):4.5km</p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.trawell.in/admin/images/upload/078212528Delhi_Akhardham_Temple_Main.jpg" alt="Card 2" />
          <div className="content">
            <h3>Akshardham Temple</h3>
            <p>Akshardham Temple is dedicated to Lord Swaminarayan.<br/>
            Distance (From New Delhi Railway Station):10km</p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.trawell.in/admin/images/upload/07821263Delhi_Humayuns_Tomb_Main.jpg" alt="Card 3" />
          <div className="content">
            <h3>Humayun's Tomb</h3>
            <p>Humayun's tomb is a fine specimen of the great Mughal architecture, which was inspired by Persian architecture.<br/>Distance (From New Delhi Railway Station):8km</p>
          </div>
        </div>
        <div className="card">
          <img src="https://www.trawell.in/admin/images/upload/078212987Delhi_Red_Fort_Main.jpg" alt="Card 3" />
          <div className="content">
            <h3>Red Fort</h3>
            <p>The Red Fort or the Lal Qila is one of the best historical places in Delhi situated on the western bank of the River Yamuna. <br/>Distance (From New Delhi Railway Station):4km</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default InsideCity;