import React from 'react';

const Passes = () => {
  const passes = [
    {
      id: 1,
      name: "Daily Pass",
      description: "Enjoy unlimited access for a single day.",
      price: "€3",
      image: "/images/dailypass.png", // Ensure this image exists in the public folder
    },
    {
      id: 2,
      name: "Weekly Pass",
      description: "Best for short-term visitors. Valid for 7 days.",
      price: "€15",
      image: "/images/weekly.png", // Ensure this image exists in the public folder
    },
    {
      id: 3,
      name: "Monthly Pass",
      description: "Unlimited access for an entire month.",
      price: "€50",
      image: "/images/monthly.jpg", // Ensure this image exists in the public folder
    },
  ];

  return (
    <div className="container">
      <div className="card">
        <h2 className="text-center my-4">Passes</h2>
        <p className="text-center">
          Discover our affordable passes! Select a pass and enjoy exclusive benefits.
        </p>

        {/* Pass Listings */}
        <div className="row">
          {passes.map((pass) => (
            <div key={pass.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <img
                  src={pass.image}
                  alt={pass.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{pass.name}</h5>
                  <p className="card-text">{pass.description}</p>
                  <h6 className="text-primary">{pass.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Passes;
