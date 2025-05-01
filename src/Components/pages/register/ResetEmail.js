import React from 'react';
import logo from '../../../Components/home/images/logo.png';

const ResetEmail = () => {
  return (
    <div className="reset-email-wrapper">
        <style>
            {`/* Wrapper to center everything */
.reset-email-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* Main card */
.reset-email-card {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  text-align: center;
}

/* Logo */
.reset-logo {
  width: 180px;
  margin-bottom: 20px;
}

/* Title */
.reset-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Body */
.reset-body {
  text-align: left;
  margin-top: 10px;
}

.reset-body p {
  font-size: 1rem;
  margin: 10px 0;
  color: #333;
}

.reset-btn {
  background-color: #e53d5c;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
}

/* Footer */
.reset-footer {
  text-align: center;
  margin-top: 40px;
  color: #666;
  font-size: 0.9rem;
}

.reset-footer a {
  color: #e53d5c;
  text-decoration: none;
  font-weight: 500;
}

.reset-footer-logo {
  width: 140px;
  margin-top: 20px;
}

.reset-copy {
  margin-top: 8px;
}

/* Responsive */
@media (max-width: 600px) {
  .reset-email-card {
    padding: 20px;
  }

  .reset-logo {
    width: 140px;
  }

  .reset-btn {
    font-size: 0.95rem;
    padding: 10px;
  }
}
`}
        </style>
      <div className="reset-email-card">
        <img src={logo} alt="Hindu Humsafar Logo" className="reset-logo" />

        <h2 className="reset-title">Reset your password</h2>

        <div className="reset-body">
          <p><strong>Hey John,</strong></p>
          <p>
            Need to reset your password? No problem! Just click the button below and
            you’ll be on your way. If you did not make this request, please ignore this email.
          </p>

          <button className="reset-btn">Reset your password</button>
        </div>
      </div>

      <div className="reset-footer">
        <p>
          Problems or questions? Call us on 2222222222 <br />
          or email <a href="mailto:support@hinduhumsafar.com">support@hinduhumsafar.com</a>
        </p>
        <img src={logo} alt="Hindu Humsafar Logo Small" className="reset-footer-logo" />
        <p className="reset-copy">2025 © Hindu Humsafar | All rights reserved</p>
      </div>
    </div>
  );
};

export default ResetEmail;
