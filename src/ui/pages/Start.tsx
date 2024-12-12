import { useNavigate } from "react-router-dom";
import './Start.css'
import Button from "../Component/Button";
import { MdOutlineNotStarted } from "react-icons/md";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div id="mainpage"  >
      <div id="Start">
      <Button className="w-24 h-24 rounded-full mr-5 mb-5 bg-black cursor-pointer"
          onClick={() => navigate("/explore-city")}
        >Start <MdOutlineNotStarted /></Button>
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
