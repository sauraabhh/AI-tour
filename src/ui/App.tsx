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

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<VoiceRecognition />} /> */}
        <Route path="/" element={<Start />} />
        {/* <Route path="/qr-scanner" element={<QRScanner />} />
        <Route path="/main" element={<Main />} /> */}
        <Route path="/explore-city" element={<ExploreCity />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/help" element={<Help />} />
        <Route path="/language" element={<Language />} />
      </Routes>
    </div>
  );
};

export default App;
