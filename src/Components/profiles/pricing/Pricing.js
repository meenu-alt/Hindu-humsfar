import React from "react";

const PricingPlanCard = () => {
  return (
    <div className="pricing-section container text-center py-5">
        <style>
            {`/* PricingPlanCard.css */
.badge{
 display: inline-block;
  background-color: #fce4ec;
  color: #333;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;}
.pricing-section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2rem;
}

.description {
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 0.95rem;
  color: #666;
}

.pricing-card {
  max-width: 350px;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  background: #fff;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.card-subtitle {
  font-size: 0.9rem;
}

.price {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
  .bg-warning {
    --bs-bg-opacity: 1;
    background-color: #F9EBB2;
}
`}
        </style>
      <div className="badge  text-dark mb-3">Pricing</div>
      <h3 className="title">
        Get Started<br />
        Pick Your <span className="text-danger">Plan Now</span>
      </h3>
      <p className="description">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
      </p>

      <div className="card mx-auto pricing-card shadow-sm">
        <div className="card-body">
          <span className="badge bg-warning text-dark mb-2">Most Popular Plan</span>
          <h5 className="card-title">Premium</h5>
          <p className="card-subtitle mb-3 text-muted" style={{color: "#A16304"}}>Printer Took A Type And Scrambled</p>
          <button className="btn btn-danger w-100 mb-3">Get Started</button>
          <h4 className="price">₹99/- <span className="text-muted">Annually</span></h4>

          <ul className="list-unstyled text-start mt-4">
            <li className="feature"><i className="text-success me-2">✔</i> Free User Profile Can View</li>
            <li className="feature"><i className="text-success me-2">✔</i> Unlimited Profiles View /Mo</li>
            <li className="feature"><i className="text-success me-2">✔</i> View Contact Details</li>
            <li className="feature"><i className="text-success me-2">✔</i> Start Messaging</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;
