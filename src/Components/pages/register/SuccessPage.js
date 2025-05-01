import React from 'react';
import logo from '../../../Components/home/images/logo.png';
import coupleImage from "../register/Couple-walking-together-vector.png"

const SuccessPage = () => {
  return (
    <div className="success-container">
      <header className="success-header">
        <img src={logo} alt="Hindu Humsafar" className="logo" />
      </header>
  <style>
    {`/* Reset & base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.success-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

.success-header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0    rem 2rem;
}

.logo {
  width: 160px;
  height: auto;
}

/* Main content */
.success-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.success-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 1rem;
}

.success-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000;
}

.success-subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.success-button {
  background-color: #E53D5C;
  color: white;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.success-button:hover {
  background-color: #c73658;
}

/* Responsive layout */
@media (max-width: 768px) {
  .logo {
    width: 130px;
  }

  .success-title {
    font-size: 1.5rem;
  }

  .success-button {
    padding: 0.7rem 2rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .success-content {
    margin-top: 2rem;
  }

  .success-image {
    max-width: 240px;
  }

  .success-title {
    font-size: 1.3rem;
  }

  .success-button {
    width: 100%;
    max-width: 300px;
  }
}
`}
  </style>
      <main className="success-content">
        <img src={coupleImage} alt="Couple" className="success-image" />
        <h2 className="success-title">Created Successfully</h2>
        <p className="success-subtitle">Account created successfully</p>
        <button className="success-button">Start Your Journey</button>
      </main>
    </div>
  );
};

export default SuccessPage;
