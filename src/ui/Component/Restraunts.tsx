import React, { useState } from 'react';
import axios from 'axios';
import NavMain from '../Component/NavMain';

function Restaurants() {
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    cuisine: '',
    max_price: ''
  });
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/recommend/restaurants', {
        params: formData
      });
      setRestaurants(response.data);
    } catch (err) {
      setError('Failed to fetch restaurant recommendations');
      console.error(err);
    }
  };

  return (
    <div style={{ margin: "50px auto", maxWidth: "1200px" }}>
      <NavMain />
      <h1>Recommend Restaurants</h1>

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
            Area:
            <input type="text" name="area" value={formData.area} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Cuisine:
            <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Max Price:
            <input type="number" name="max_price" value={formData.max_price} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Recommend Restaurants</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Restaurants Display Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {restaurants.length > 0 ? (
  restaurants.map((restaurant, index) => (
    <div key={index} style={{ border: '1px solid #ccc', padding: '16px', maxWidth: '300px' }}>
      <h2>{restaurant['Restaurant Name'] || 'Restaurant name not available'}</h2>
      <p><strong>Area:</strong> {restaurant['Area'] || 'Area not available'}</p>
      <p><strong>Cuisine:</strong> {restaurant['Cuisine'] || 'Cuisine not available'}</p>
      <p><strong>Price:</strong> ₹{restaurant['Average Price'] || 'N/A'}</p>
      <p><strong>Pure Veg:</strong> {restaurant['Pure Veg'] === 'Yes' ? 'Yes' : 'No'}</p>
      <p><strong>Rating:</strong> {restaurant['Rating'] || 'Rating not available'} ⭐</p>
     
    </div>
  ))
) : (
  <p>No restaurant recommendations available. Please try again.</p>
)}
      </div>
    </div>
  );
}

export default Restaurants;