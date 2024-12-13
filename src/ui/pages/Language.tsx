import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import Button from "../Component/Button";
import { FcDown, FcPrevious } from "react-icons/fc";
import "./Language.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Language = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <NavMain />
        <div className="container">
          <h1>Select Your Language</h1>
          <select>
            <option value="" disabled selected>
              Select your language
              <IoMdArrowDropdown />
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="mr">Marathi</option>
            <option value="bn">Bengali</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="gu">Gujarati</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="pa">Punjabi</option>
          </select>

          <div
            className="flex items-center justify-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Button>Submit</Button>
          </div>
        </div>

        <div
          className="flex items-center justify-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1px",
          }}
        >
          <Button onClick={() => navigate("/help")}>
            <FcPrevious />
            Prev
          </Button>
        </div>
      </div>
      <ToggleChatbotButton />
    </div>
  );
};

export default Language;
