
import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import Button from "../Component/Button";


const Help = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <h1>feedback</h1>
      <Button onClick={() => navigate("/booking")}><FcPrevious/>rev</Button>
      <Button onClick={() => navigate("/language")}>Next<FcNext/></Button>
    </div>
    
    <ToggleChatbotButton/>
    </div>
  );
};

export default Help;
