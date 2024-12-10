import React from 'react'
import { useNavigate } from 'react-router';

function Map() {
  const navigate = useNavigate();
  return (
    <div>Map
      <button onClick={() => navigate("/explore-city")}>Back</button>
    </div>
  )
}

export default Map