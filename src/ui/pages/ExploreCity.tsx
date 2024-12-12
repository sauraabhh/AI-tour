import { useState } from 'react';
import Navbar from '../Component/Navbar';
import About from '../Component/About';
import InsideCity from '../Component/InsideCity';
import ExploreNearby from '../Component/ExploreNearby';
import Adventures from '../Component/Adventures';
import NavMain from '../Component/NavMain';
import { useNavigate } from 'react-router';
import ToggleChatbotButton from '../Component/ToggleChatbotButton';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import Button from '../Component/Button';


function ExploreCity() {
    const [currentPage, setCurrentPage] = useState<string>('page1');
    const navigate = useNavigate();

    function renderPage() {
        switch (currentPage) {
            case 'About':
                return <About/>
            case 'InsideCity':
                return <InsideCity/>;
            case 'ExploreNearby':
                return <ExploreNearby/>;
            case 'Adventures':
                return <Adventures/>;
            default:
                return <About/>;
        }
    }

    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <NavMain/>
            <Navbar setPage={setCurrentPage} />
            <div>
                {renderPage()}
            </div>
            <Button onClick={() => navigate("/")}><FcPrevious/>Prev</Button>
            <Button onClick={() => navigate("/plan-trip")}>Next<FcNext/></Button>
        </div>
        <ToggleChatbotButton/>
        </div>  
    );
}

export default ExploreCity;
