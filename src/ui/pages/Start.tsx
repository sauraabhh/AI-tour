import { useNavigate } from "react-router-dom";
import './Start.css'

const Start = () => {
  const navigate = useNavigate();

  return (
    <div id="mainpage"  >
      <div id="Start">
      <button
          className="w-24 h-24 rounded-full mr-5 mb-5 bg-black cursor-pointer"
          onClick={() => navigate("/explore-city")}
        >Start</button>
      </div>
      {/* <div >
        <img
          src='src\ui\images\taaj.png'
          alt="Taaj"
          id="img-1"
          className="h-full w-full object-cover"
        />
        <button
          className="w-24 h-24 rounded-full mr-5 mb-5 bg-black cursor-pointer"
          onClick={() => navigate("/explore-city")}
        >Start</button>
      </div> */}
      
    </div>
  );
};

export default Start;
