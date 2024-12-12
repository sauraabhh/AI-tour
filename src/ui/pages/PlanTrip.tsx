import { useNavigate } from "react-router-dom";
import NavMain from "../Component/NavMain";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import Button from "../Component/Button";
import { FcNext, FcPrevious } from "react-icons/fc";

const PlanTrip = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <h1>Plan Your Trip</h1>
      <Button onClick={() => navigate("/explore-city")}><FcPrevious/>Prev</Button>
      <Button onClick={() => navigate("/booking")}>Next<FcNext/></Button>
    </div>
    <ToggleChatbotButton/>
    </div>
  );
};

export default PlanTrip;
