import  { useState } from 'react';
import Map from '../pages/Map';
import Button from './Button';
import { FaCompass } from 'react-icons/fa';

function MapButton() {
    const [showMap, setShowMap] = useState(false);

    const handleClick = () => {
        setShowMap(!showMap);
    };

    return (
        <div>
            <Button onClick={handleClick}>
                {showMap ? 'Map' : 'Map'}<FaCompass/>
            </Button>
            {showMap && <Map/>}
        </div>
    );
}

export default MapButton;
