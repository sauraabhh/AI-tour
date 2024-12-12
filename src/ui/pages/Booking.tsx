
import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import Button from "../Component/Button";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


const Booking = () => {
  const navigate = useNavigate();
  return (
    <div>

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>

      <h1>Your Booking</h1>
      <Button onClick={() => navigate("/plan-trip")}><FcPrevious/>Prev</Button>
       <Button onClick={() => navigate("/help")}>Next<FcNext/></Button>

    </div>
    <ToggleChatbotButton/>
    </div>

  );
};

export default Booking;
