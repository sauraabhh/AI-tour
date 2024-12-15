import React, { useState } from 'react';
import axios from 'axios';
import NavMain from '../Component/NavMain';

function Hotel() {
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    max_price: '',
    star_rating: '',
    preferred_facilities: '',
  });
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBook = (hotel) => {
    const name = hotel.property_name || 'Hotel Name';
    const price = hotel.average_price || 'N/A';
    alert(`Booking Hotel: ${name} at ₹${price}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset any previous error message
    try {
      const response = await axios.get('http://localhost:5000/recommend/hotels', {
        params: formData,
      });
      setHotels(response.data);
    } catch (err) {
      setError('Failed to fetch hotel recommendations');
      console.error(err);
    }
  };

  return (
    <div style={{ margin: '50px auto', maxWidth: '1200px' }}>
      <NavMain />
      <h1>Recommend Hotels</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Area:
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Max Price:
            <input
              type="number"
              name="max_price"
              value={formData.max_price}
              onChange={handleChange}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Star Rating:
            <input
              type="number"
              name="star_rating"
              value={formData.star_rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Preferred Facilities:
            <input
              type="text"
              name="preferred_facilities"
              value={formData.preferred_facilities}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          Recommend Hotels
        </button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Hotels Display Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '300px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
                {hotel.property_name || 'Hotel name not available'}
              </h2>
              <p>
                <strong>Address:</strong> {hotel.address || 'Address not available'}
              </p>
              <p>
                <strong>City:</strong> {hotel.city || 'City not available'}
              </p>
              <p>
                <strong>Price:</strong> ₹{hotel.average_price || 'N/A'}
              </p>
              <p>
                <strong>Star Rating:</strong> {hotel.hotel_star_rating || 'N/A'} ⭐
              </p>
              <p>
                <strong>Type:</strong> {hotel.property_type || 'Type not available'}
              </p>
              {hotel.average_price && (
                <button onClick={() => handleBook(hotel)}>
                  Book for ₹{hotel.average_price}
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No hotel recommendations available. Please fill out the form and click "Recommend Hotels".</p>
        )}
      </div>
    </div>
  );
}

export default Hotel;