import { useNavigate } from "react-router-dom";
import NavMain from "../Component/NavMain";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import Button from "../Component/Button";
import { FcNext, FcPrevious } from "react-icons/fc";
import "./Qr.css"; // Import the CSS

const Qr = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <NavMain />
        <h1>Scan the Qr to get 360 degree view</h1>
        <div className="image-container">
          <img
            src="https://consumerhelp.guide/wp-content/uploads/2017/05/vr-headset-768x712.jpeg"
            alt="VR 1"
          />
          <img
            src="src\\ui\\images\\image.png"
            alt="QR Code"
            className="qr-code"
          />
          <img
            src="https://blogs.bmj.com/bmj/files/2019/10/virtual_reality_2.jpg"
            alt="VR 2"
          />
        </div>
        <div className="bottom-buttons">
          <Button onClick={() => navigate("/")}>
            <FcPrevious /> Prev
          </Button>
          <Button onClick={() => navigate("/explore-city")}>
            Next <FcNext />
          </Button>
          {/* <ToggleChatbotButton  /> */}
        </div>
      </div>
    </div>
  );
};

export default Qr;
