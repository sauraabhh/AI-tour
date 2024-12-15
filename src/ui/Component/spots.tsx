import React, { useState } from 'react';
import axios from 'axios';
import NavMain from '../Component/NavMain';

function Attraction() {
  const [formData, setFormData] = useState({
    city: '',
    time_of_visit: '',
    attraction_type: ''
  });
  const [attractions, setAttractions] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/recommend/attractions', {
        params: formData
      });
      setAttractions(response.data);
      console.log(response.data)
    } catch (err) {
      setError('Failed to fetch attraction recommendations');
      console.error(err);
    }
  };

  return (
    <div style={{ margin: "50px auto", maxWidth: "1200px" }}>
      <NavMain />
      <h1>Recommend Attractions</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Time of Visit:
            <input type="text" name="time_of_visit" value={formData.time_of_visit} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Attraction Type:
            <input type="text" name="attraction_type" value={formData.attraction_type} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Recommend Attractions</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Attractions Display Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {attractions.length > 0 ? (
  attractions.map((attraction, index) => (
    <div key={index} style={{ border: '1px solid #ccc', padding: '16px', maxWidth: '300px' }}>
      <h2>{attraction['Name'] || 'Attraction name not available'}</h2>
      <p><strong>Type:</strong> {attraction['Type'] || 'Type not available'}</p>
      <p><strong>Rating:</strong> {attraction['Google review rating'] || 'N/A'} ⭐</p>
      <p><strong>Entrance Fee:</strong> ₹{attraction['Entrance Fee in INR'] || 'N/A'}</p>
      <p><strong>Best Time to Visit:</strong> {attraction['Best Time to visit'] || 'Time not available'}</p>
      <p><strong>Weekly Off:</strong> {attraction['Weekly Off'] || 'Not available'}</p>
      <p><strong>Time Needed:</strong> {attraction['time needed to visit in hrs']} hrs</p>
    </div>
  ))
) : (
  <p>No attraction recommendations available. Please try again.</p>
)}
      </div>
    </div>
  );
}

export default Attraction;