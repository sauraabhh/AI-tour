import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";


const Language = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <NavMain/>
      <div className="container">
        <h1>Select Your Language</h1>
        <select>
            <option value="" disabled selected>Select your language</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
        </select>
        <button>Submit</button>
    </div>
      <button onClick={() => navigate("/help")}>Prev</button>
    </div>
    <ToggleChatbotButton/>
    </div>
  );
};

export default Language;
