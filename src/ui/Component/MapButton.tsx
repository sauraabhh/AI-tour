import  { useState } from 'react';
import Map from '../pages/Map';

function MapButton() {
    const [showMap, setShowMap] = useState(false);

    const handleClick = () => {
        setShowMap(!showMap);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {showMap ? 'Hide Map' : 'Show Map'}
            </button>
            {showMap && <Map/>}
        </div>
    );
}

export default MapButton;
