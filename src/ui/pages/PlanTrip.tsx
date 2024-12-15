import React, { useState } from 'react';
import axios from 'axios';
import NavMain from '../Component/NavMain';

function ItineraryPage() {
  const [formData, setFormData] = useState({
    city: '',
    budget: '',
    duration: '',
    accomodation: '',
    meal: '',
    attraction: '',
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

  const handleBook = (item, type) => {
    if (!item) {
      alert('Invalid item selected for booking.');
      return;
    }
  
    const name =
      item.property_name || // For hotels
      item['Restaurant Name'] || // For restaurants
      item['Name'] || // For attractions
      'Unknown';
  
    const price =
      item.average_price || // For hotels
      item['Average Price'] || // For restaurants
      item['Entrance Fee in INR'] || // For attractions
      'Not available';
  
    alert(`Booking ${type}: ${name} at ₹${price}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { city, budget, duration, accomodation, meal, attraction, hotel_star, hotel_facilities, cuisine, attraction_type } = formData;

      const dailyBudget = budget / duration;
      const hotelBudget = (dailyBudget * accomodation) / 100;
      const mealBudget = (dailyBudget * meal) / 100;
      const attractionBudget = (dailyBudget * attraction) / 100;

      const hotelResponse = await axios.get('http://localhost:5000/recommend/hotels', {
        params: { city, max_price: hotelBudget, star_rating: hotel_star, preferred_facilities: hotel_facilities },
      });

      const restaurantResponse = await axios.get('http://localhost:5000/recommend/restaurants', {
        params: { city, cuisine, max_price: mealBudget / 2 },
      });

      const attractionResponse = await axios.get('http://localhost:5000/recommend/attractions', {
        params: { city, attraction_type },
      });

      const itineraryData = {
        Hotels: hotelResponse.data.slice(0, 3),
        Restaurants: Array.from({ length: duration }, () => ({
          Lunch: restaurantResponse.data.slice(0, 2),
          Dinner: restaurantResponse.data.slice(2, 4),
        })),
        Attractions: Array.from({ length: duration }, () => ({
          Morning: attractionResponse.data.slice(0, 2),
          Afternoon: attractionResponse.data.slice(2, 4),
          Evening: attractionResponse.data.slice(4, 6),
          Night: attractionResponse.data.slice(6, 8),
        })),
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
      <h1>Create Your Itinerary</h1>

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
            Total Budget (₹):
            <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
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
            Accommodation (% of budget):
            <input type="number" name="accomodation" value={formData.accomodation} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Meals (% of budget):
            <input type="number" name="meal" value={formData.meal} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Attractions (% of budget):
            <input type="number" name="attraction" value={formData.attraction} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Hotel Star Rating:
            <input type="number" name="hotel_star" value={formData.hotel_star} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Preferred Hotel Facilities:
            <input type="text" name="hotel_facilities" value={formData.hotel_facilities} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Preferred Cuisine:
            <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Preferred Attraction Type:
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
              <li key={index}>
                {hotel.property_name} - ₹{hotel.average_price}
                {hotel.average_price && (
                  <button onClick={() => handleBook(hotel, 'Hotel')}>Book</button>
                )}
              </li>
            ))}
          </ul>

          <h3>Restaurants:</h3>
          {itinerary.Restaurants.map((day, index) => (
            <div key={index}>
              <h4>Day {index + 1}:</h4>
              <p>
                Lunch: {day.Lunch.map((restaurant, idx) => (
                  <span key={idx}>
                    {restaurant['Restaurant Name']} - ₹{restaurant['Average Price']}
                    {restaurant['Average Price'] && (
                      <button onClick={() => handleBook(restaurant, 'Restaurant')}>Book</button>
                    )}
                  </span>
                ))}
              </p>
              <p>
                Dinner: {day.Dinner.map((restaurant, idx) => (
                  <span key={idx}>
                    {restaurant['Restaurant Name']} - ₹{restaurant['Average Price']}
                    {restaurant['Average Price'] && (
                      <button onClick={() => handleBook(restaurant, 'Restaurant')}>Book</button>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}

          <h3>Attractions:</h3>
          {itinerary.Attractions.map((day, index) => (
            <div key={index}>
              <h4>Day {index + 1}:</h4>
              {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
                <p key={time}>
                  {time}: {day[time].map((attr, idx) => (
                    <span key={idx}>
                      {attr['Name']} - ₹{attr['Entrance Fee in INR']}
                      {attr['Entrance Fee in INR'] && (
                        <button onClick={() => handleBook(attr, 'Attraction')}>Book</button>
                      )}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItineraryPage;