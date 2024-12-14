import { Routes, Route } from "react-router-dom";
//import VoiceRecognition from "./pages/VoiceRecognition";
import Start from "./pages/Start";
//import QRScanner from "./components/QRScanner";
//import Main from "./pages/Main";
import ExploreCity from "./pages/ExploreCity";
import PlanTrip from "./pages/PlanTrip";
import Booking from "./pages/Booking";
import Help from "./pages/Help";
import Language from "./pages/Language";
import Qr from "./pages/Qr";
import PlanInside from "./pages/PlanInside";
import Hotel from "./Component/Hotel";
import Restraunts from "./Component/Restraunts";
import Spots from "./Component/Spots";;


const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<VoiceRecognition />} /> */}
        <Route path="/" element={<Start />} />
        <Route path="/Qr" element={<Qr/>} />
        {/* <Route path="/qr-scanner" element={<QRScanner />} />
        <Route path="/main" element={<Main />} /> */}
        <Route path="/explore-city" element={<ExploreCity />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/help" element={<Help />} />
        <Route path="/language" element={<Language />} />
        <Route path="/PlanInside" element={<PlanInside />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Restraunts" element={<Restraunts />} />
        <Route path="/Spots" element={< Spots />} />
      </Routes>
    </div>
  );
};

export default App;
