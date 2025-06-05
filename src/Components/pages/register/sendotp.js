import React from 'react';
import logo from '../../../Components/home/images/logo.png';
import bgImage from '../../../assets/images/couples/Vector.png';

const API_BASE_URL = 'http://localhost/perfomdigi/hindu-humsfar-react/backend/'; 


const SendOtp = () => {
  return (
    <div className="reset-container">
      <div className="reset-left">
        <img src={logo} alt="Hindu Humsafar Logo" className="logo" />
        <h2 className='text-center'>Confirm Your Number</h2>
        <p className="subtitle text-center">Confirm your Number with the Otp</p>

        <form className="reset-form">
          <label>Your Number <span>*</span></label>
          <input type="Number" placeholder="Enter your Number" required />

          
          <button type="submit" className="reset-button">Send Otp</button>
        </form>
      </div>

      <div className="reset-right">
        <div className="image-overlay d-none d-lg-block">
          <img src={bgImage} alt="Side Visual" className="side-image" />
          <div className="image-text">
            <h3>Your Journey To Love Begins <span className="highlight">Here !</span></h3>
            <p>Connect With Genuine Matches Who<br />Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams</span>.</p>
          </div>
        </div>
        <style>
            {`
            .reset-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;
  background: #fff;
  padding: 10px 80px;
}

.reset-left {
  flex: 1;
  max-width: 500px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo {
  width: 160px;
  margin-bottom: 30px;
}

.reset-left h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.reset-form label {
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
}

.reset-form span {
  color: red;
}

.reset-form input {
  width: 100%;
  padding: 12px 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

.reset-button {
  width: 100%;
  padding: 12px;
  background-color: #E53D5C;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.reset-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-overlay {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  max-width: 500px;
  width: 100%;
}

.side-image {
  width: 100%;
  height: auto;
  display: block;
}

.image-text {
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  font-size: 18px;
  line-height: 1.4;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}

.image-text p {
   color:white !important;}

.image-text h3 {
  font-size: 20px;
  font-weight: 500;
   color:white !important;
}

.highlight {
  color: #ffc107;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 992px) {
  .reset-container {
    flex-direction: column;
    padding: 20px;
  }

  .reset-right, .reset-left {
    max-width: 100%;
    width: 100%;
  }

  .reset-left {
    padding: 20px;
  }

  .image-text {
    font-size: 16px;
  }
}
`}
        </style>
      </div>
    </div>
  );
};

export default SendOtp;
