import React from 'react';

const Reservations = () => {
  // Static data for hotels, restaurants, and activities
  const listings = {
    hotels: [
      { id: 1, name: "Sunshine Hotel", description: "A luxurious stay by the beach.", image: "/images/hotel1.jpg" },
      { id: 2, name: "Mountain View Resort", description: "A peaceful retreat in the mountains.", image: "/images/hotel2.jpg" },
    ],
    restaurants: [
      { id: 1, name: "The Gourmet Table", description: "Fine dining with a gourmet experience.", image: "/images/res1.jpg" },
      { id: 2, name: "Seafood Delight", description: "Fresh and delicious seafood by the ocean.", image: "/images/res2.jpg" },
    ],
    activities: [
      { id: 1, name: "Scuba Diving Adventure", description: "Explore the underwater world with a certified guide.", image: "/images/scuba.jpg" },
      { id: 2, name: "Mountain Hiking", description: "Trek through scenic mountain trails.", image: "/images/hike.jpg" },
    ]
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Reservations</h2>
        <p>Make reservations for hotels, restaurants, and exciting leisure activities with ease.</p>

        {/* Hotels Listings */}
        <div className="listings-section">
          <h3>Hotels</h3>
          <div className="row">
            {listings.hotels.map((hotel) => (
              <div key={hotel.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={hotel.image} alt={hotel.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{hotel.name}</h5>
                    <p className="card-text">{hotel.description}</p>
                    <button className="btn btn-primary">Reserve Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants Listings */}
        <div className="listings-section mt-5">
          <h3>Restaurants</h3>
          <div className="row">
            {listings.restaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={restaurant.image} alt={restaurant.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.description}</p>
                    <button className="btn btn-primary">Reserve Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Listings */}
        <div className="listings-section mt-5">
          <h3>Activities</h3>
          <div className="row">
            {listings.activities.map((activity) => (
              <div key={activity.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={activity.image} alt={activity.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{activity.name}</h5>
                    <p className="card-text">{activity.description}</p>
                    <button className="btn btn-primary">Reserve Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
