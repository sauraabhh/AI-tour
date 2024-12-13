import "./InsideCity.css"; // Importing the CSS file
import MapButton from "./MapButton";

function InsideCity() {
  return (
    <div className="inside-city-container">
      <h1>PLACES INSIDE CITY </h1>
      <div id="city-cards">
        <div className="city-cards">
          <div id="place-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Red_Fort_in_Delhi_03-2016_img1.jpg" alt="" />  
          </div>
          <h1>RED FORT</h1>
        </div>
        <div className="city-cards">
          <div id="place-card">
            <img src="https://imgs.search.brave.com/-A9e4lBiJANxnNjuYfKFj9WxV-vYHakPecWo91sh3J4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcHJp/bnQvOC82L2JyZWFr/L2ltYWdlcy9hcnR3/b3JraW1hZ2VzL21l/ZGl1bS8yL3F1dHVi/LW1pbmFyLW11cmFs/aS1haXRoYWwtcGhv/dG9ncmFwaHkuanBn" alt="" />  
          </div>
          <h1>QUTUB MINAR</h1>
        </div>
        <div className="city-cards">
          <div id="place-card">
            <img src="https://t3.ftcdn.net/jpg/04/33/20/76/360_F_433207671_t6srTMIC3DdOnv5Wc1iL9SyoDn1fzGLj.jpg" alt="" />  
          </div>
          <h1>JAMA MASJID</h1>
        </div>
        <div className="city-cards">
          <div id="place-card">
            <img src="https://www.iskconcolumbus.com/images/iskcon-columbus.jpg" alt="" />  
          </div>
          <h1>ISCKON TEMPLE</h1>
        </div>
      </div>
      <  MapButton />

    </div>
  );
}

export default InsideCity;