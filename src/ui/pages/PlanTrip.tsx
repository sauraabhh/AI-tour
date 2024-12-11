import { useNavigate } from "react-router-dom";
import NavMain from "../Component/NavMain";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";

const PlanTrip = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <h1>Plan Your Trip</h1>
      <button onClick={() => navigate("/explore-city")}>Prev</button>
      <button onClick={() => navigate("/booking")}>Next</button>
    </div>
    <ToggleChatbotButton/>
    </div>
  );
};

export default PlanTrip;
