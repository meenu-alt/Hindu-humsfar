import React from 'react';
import logo from '../../../Components/home/images/logo.png';
import coupleImage from '../../../assets/images/couples/Vector.png';

const ForgotPassword = () => {
  return (
    <div className="forgot-wrapper">
      <div className="forgot-container">
        <div className="forgot-left">
          <img src={logo} alt="Logo" className="forgot-logo" />
          <h2 className="forgot-title">Forgot your password?</h2>
          <p className="forgot-subtitle">No worries, we’ll send you 4-digit code.</p>

          <form className="forgot-form">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="forgot-btn">Get a 4-digit Code</button>
          </form>

          <p className="remember-link">
            Remembered your password? <a href="#">Log in</a>
          </p>
        </div>

        <div className="forgot-right d-none d-lg-block">
          <img src={coupleImage} alt="Scenery" className="forgot-image" />
          <div className="image-overlay">
            <h2>Your Journey To Love Begins <span className="highlight">Here !</span></h2>
            <p className='text-light'>
              Connect With Genuine Matches Who <br />
              Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams</span>.
            </p>
          </div>
        </div>
        <style>
            {`
            /* Outer wrapper */
.forgot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
}

/* Container with fixed max-width */
.forgot-container {
  display: flex;
  width: 90%;
  max-width: 1000px;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Left side (form) */
.forgot-left {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.forgot-logo {
  width: 160px;
  margin-bottom: 30px;
}

.forgot-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.forgot-subtitle {
  color: #666;
  margin-bottom: 30px;
}

.forgot-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.forgot-form input {
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.forgot-btn {
  background-color: #e53d5c;
  color: white;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.remember-link {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #666;
}

.remember-link a {
  color: #e53d5c;
  text-decoration: none;
  font-weight: 500;
}

/* Right side (image and overlay text) */
.forgot-right {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
}

.forgot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: white;
  padding: 20px;
}

.image-overlay h2 {
  font-size: 1.2rem;
  font-weight: 600;
}

.image-overlay p {
  font-size: 1rem;
  margin-top: 10px;
}

.highlight {
  color: #ffc107;
}

/* Responsive */
@media (max-width: 768px) {
  .forgot-container {
    flex-direction: column;
    height: auto;
    max-height: unset;
  }

  .forgot-right {
    height: 250px;
    border-radius: 0;
  }

  .image-overlay {
    bottom: 10px;
    left: 10px;
  }

  .image-overlay h2 {
    font-size: 1.2rem;
  }

  .image-overlay p {
    font-size: 0.9rem;
  }
    p {
    font-size: 14px !important;
}
}
`}
        </style>
      </div>
    </div>
  );
};

export default ForgotPassword;
