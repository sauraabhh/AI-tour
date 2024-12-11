
import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";


const Help = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <h1>feedback</h1>
      <button onClick={() => navigate("/booking")}>Prev</button>
      <button onClick={() => navigate("/language")}>Next</button>
    </div>
    
    <ToggleChatbotButton/>
    </div>
  );
};

export default Help;
