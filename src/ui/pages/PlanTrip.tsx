import React, { useState } from 'react';
import axios from 'axios';
import NavMain from '../Component/NavMain';

function Plantrip() {
  const [formData, setFormData] = useState({
    city: '',
    duration: 1,
    budget: '',
    accomodation: 30,
    meal: 30,
    attraction: 40,
    hotel_star: '',
    hotel_facilities: '',
    cuisine: '',
    attraction_type: '',
  });

  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const {
        city,
        budget,
        duration,
        accomodation,
        meal,
        attraction,
        hotel_star,
        hotel_facilities,
        cuisine,
        attraction_type,
      } = formData;

      // Calculate daily budgets
      const dailyBudget = budget / duration;
      const hotelBudget = (dailyBudget * accomodation) / 100;
      const mealBudget = (dailyBudget * meal) / 100;
      const attractionBudget = (dailyBudget * attraction) / 100;

      // Fetch recommendations from Flask API
      const hotelResponse = await axios.get('http://localhost:5000/recommend/hotels', {
        params: { city, max_price: hotelBudget, star_rating: hotel_star, preferred_facilities: hotel_facilities },
      });

      const restaurantResponse = await axios.get('http://localhost:5000/recommend/restaurants', {
        params: { city, cuisine, max_price: mealBudget / 2 },
      });

      const attractionResponse = await axios.get('http://localhost:5000/recommend/attractions', {
        params: { city, attraction_type, max_count: duration * 8 }, // Fetch more attractions
      });

      // Organize attractions based on time of day
      const categorizedAttractions = Array.from({ length: duration }, () => ({
        Morning: [],
        Afternoon: [],
        Evening: [],
        Night: [],
      }));

      attractionResponse.data.forEach((attraction) => {
        const bestTime = attraction['Best Time to visit'];
        if (bestTime) {
          for (let day = 0; day < duration; day++) {
            if (bestTime.includes('Morning')) categorizedAttractions[day].Morning.push(attraction);
            if (bestTime.includes('Afternoon')) categorizedAttractions[day].Afternoon.push(attraction);
            if (bestTime.includes('Evening')) categorizedAttractions[day].Evening.push(attraction);
            if (bestTime.includes('Night')) categorizedAttractions[day].Night.push(attraction);
          }
        }
      });

      // Add fallback for missing time slots
      categorizedAttractions.forEach((day) => {
        day.Morning = day.Morning.length > 0 ? day.Morning.slice(0, 2) : ['Not available'];
        day.Afternoon = day.Afternoon.length > 0 ? day.Afternoon.slice(0, 2) : ['Not available'];
        day.Evening = day.Evening.length > 0 ? day.Evening.slice(0, 2) : ['Not available'];
        day.Night = day.Night.length > 0 ? day.Night.slice(0, 2) : ['Not available'];
      });

      // Build itinerary
      const itineraryData = {
        Hotels: hotelResponse.data.slice(0, 3), // Top 3 hotels
        Restaurants: Array.from({ length: duration }, () => ({
          Lunch: restaurantResponse.data.slice(0, 2), // 2 lunch options per day
          Dinner: restaurantResponse.data.slice(2, 4), // 2 dinner options per day
        })),
        Attractions: categorizedAttractions,
      };

      setItinerary(itineraryData);
    } catch (err) {
      setError('Failed to generate itinerary. Please check your inputs and try again.');
      console.error(err);
    }
  };

  return (
    <div style={{ margin: '50px auto', maxWidth: '1200px' }}>
      <NavMain />
      <h1>Itinerary Planner</h1>

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
            Duration (days):
            <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Budget (₹):
            <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Accommodation %:
            <input type="number" name="accomodation" value={formData.accomodation} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Meals %:
            <input type="number" name="meal" value={formData.meal} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Attractions %:
            <input type="number" name="attraction" value={formData.attraction} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Hotel Star Rating:
            <input type="text" name="hotel_star" value={formData.hotel_star} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Hotel Facilities:
            <input type="text" name="hotel_facilities" value={formData.hotel_facilities} onChange={handleChange} />
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
            Attraction Type:
            <input type="text" name="attraction_type" value={formData.attraction_type} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Generate Itinerary</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Itinerary Display Section */}
      {itinerary && (
        <div>
          <h2>Your Itinerary</h2>
          <h3>Hotels:</h3>
          <ul>
            {itinerary.Hotels.map((hotel, index) => (
              <li key={index}>{hotel.property_name} - ₹{hotel.average_price}</li>
            ))}
          </ul>

          <h3>Restaurants:</h3>
          {itinerary.Restaurants.map((day, index) => (
            <div key={index}>
              <h4>Day {index + 1}:</h4>
              <p>
                <strong>Lunch:</strong>{' '}
                {day.Lunch.map((restaurant) => restaurant['Restaurant Name']).join(', ')}
              </p>
              <p>
                <strong>Dinner:</strong>{' '}
                {day.Dinner.map((restaurant) => restaurant['Restaurant Name']).join(', ')}
              </p>
            </div>
          ))}

          <h3>Attractions:</h3>
          {itinerary.Attractions.map((day, index) => (
            <div key={index}>
              <h4>Day {index + 1}:</h4>
              <p>
                <strong>Morning:</strong>{' '}
                {day.Morning.map((attr) => (typeof attr === 'string' ? attr : attr['Name'])).join(', ')}
              </p>
              <p>
                <strong>Afternoon:</strong>{' '}
                {day.Afternoon.map((attr) => (typeof attr === 'string' ? attr : attr['Name'])).join(', ')}
              </p>
              <p>
                <strong>Evening:</strong>{' '}
                {day.Evening.map((attr) => (typeof attr === 'string' ? attr : attr['Name'])).join(', ')}
              </p>
              <p>
                <strong>Night:</strong>{' '}
                {day.Night.map((attr) => (typeof attr === 'string' ? attr : attr['Name'])).join(', ')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Plantrip;