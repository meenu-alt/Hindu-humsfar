import React, { useState } from 'react';
import logo from '../../../Components/home/images/logo.png';
import couple from '../../../assets/images/couples/Vector.png';

const OTP = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    console.log('Verification code:', fullCode);
    // Add your verification logic here
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        <img src={logo} alt="Hindu Humsafar" style={{ maxWidth: '150px', margin: '0 auto', display: 'block' }} />
        <h1>Verify your Number</h1>
        <p className="verification-text">
          We sent you a 4 digit code to your phone <span className="phone-number">+90123456677</span>
        </p>

        <form onSubmit={handleSubmit} className="verification-form">
          <div className="code-input-group">
            <label>Enter Code</label>
            <div className="code-inputs">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  maxLength={1}
                  pattern="\d*"
                  inputMode="numeric"
                  required
                /> 
              ))}
            </div>
          </div>
          <button type="submit" className="verify-btn">Verify</button>
        </form>
      </div>

      <div className="hero-section d-none d-lg-block">
  <div className="hero-image-wrapper">
    <img src={couple} alt="Couple" className="hero-image" />
    <div className="overlay-text">
      <h2>Your Journey To Love Begins <span className="highlight">Here!</span></h2>
      <p>Connect With Genuine Matches Who Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams</span>.</p>
    </div>
  </div>
</div>


      <style>{`
      .hero-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.overlay-text {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 1rem;
  background-color: rgb(0 0 0 / 0%);
  border-radius: 8px;
  width:100%;
}

.overlay-text h2,
.overlay-text p {
  margin: 0.5rem 0;
  color:white !important;
}

.highlight {
  color: #ff6b81;
  font-weight: bold;
}

        .verification-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          min-height: auto;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }

        .verification-card {
          flex: 1;
          min-width: 350px;
          max-width: 450px;
          background: white;
          padding: 2.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 1.8rem;
          margin: 1.5rem 0 1rem;
          color: #333;
          text-align: center;
        }

        .verification-text {
          color: #666;
          margin-bottom: 2rem;
          font-size: 1rem;
          text-align: center;
        }

        .phone-number {
          font-weight: 500;
          color: #E53D5C;
        }

        .verification-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .code-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .code-input-group label {
          font-weight: 500;
          font-size: 0.9rem;
          color: #333;
          text-align: center;
        }

        .code-inputs {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .code-inputs input {
          width: 50px;
          height: 50px;
          text-align: center;
          font-size: 1.2rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .code-inputs input:focus {
          outline: none;
          border-color: #E53D5C;
          box-shadow: 0 0 0 2px rgba(255, 71, 87, 0.2);
        }

        .verify-btn {
          padding: 0.8rem;
          background: #E53D5C;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
          width: 100%;
        }

        .verify-btn:hover {
          background: #ff6b81;
        }

        .hero-section {
          flex: 1;
          min-width: 350px;
          max-width: 500px;
          padding: 2rem;
          text-align: center;
        }

        .hero-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .hero-section p {
          color: #666;
          line-height: 1.6;
        }

        .highlight {
          color: #E53D5C;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .verification-container {
            flex-direction: column;
            padding: 1rem;
          }

          .verification-card {
            width: 100%;
            padding: 1.5rem;
            margin-top:25%;
          }

          .hero-section {
            margin-top: 2rem;
          }

          .code-inputs {
            gap: 0.5rem;
          }

          .code-inputs input {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default OTP;
