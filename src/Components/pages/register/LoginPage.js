import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../../Components/home/images/logo.png';
import loginImage from '../../../assets/images/couples/Vector.png';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/perfomdigi/hindu-humsfar-react/backend/login_controller/login", {
   
      });
      
      console.log('Response:', response.data);
      // You can redirect or store token here if login is successful
    } catch (error) {
      console.error('Login error:', error); 
    }
  };
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-left">
            <img src={logo} alt="Hindu Humsafar Logo" className="login-logo" />
            <h2 className="login-title text-center" style={{fontWeight: "100"}}>Welcome Back</h2>
            <p className="login-subtitle text-center">Login to your account</p>

            <button className="google-btn">
              <FcGoogle size={20} />
              Login with Google
            </button>

            <div className="divider">
              <span>Or</span>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email or Username *</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your email or username"
          required
        />
      </div>

      <div className="form-group">
        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>

              <div className="form-footer">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="login-btn">Login</button>
            </form>

            <p className="create-account">
              Don't have an account? <a href="#">Create account</a>
            </p>
          </div>

          <div className="login-right d-none d-lg-block">
            <img src={loginImage} alt="Couple" className="login-image" />
            <div className="image-overlay">
              <h2 className='text-light'>Your Journey To Love Begins <span className="highlight">Here</span></h2>
              <p>
                Connect With Genuine Matches Who <br />
                Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Container Styles */
        
        .page-container {
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          padding: 20px;
        }
        
        .login-container {
          width: 100%;
          max-width: 1200px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        /* Main layout */
        .login-wrapper {
          display: flex;
          height: 100%;
          width: 100%;
          font-family: 'Segoe UI', sans-serif;
        }
        
        /* Left side (Form) */
        .login-left {
          flex: 1;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #fff;
        }
        
        .login-logo {
          width: 160px;
          margin-bottom: 30px;
        }
        
        .login-title {
          font-size: 2rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 8px;
        }
        
        .login-subtitle {
          color: #666;
          margin-bottom: 30px;
          font-size: 1rem;
        }
        
        .google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border: 1px solid #ddd;
          padding: 12px;
          gap: 10px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          margin-bottom: 24px;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }
        
        .google-btn:hover {
          background-color: #f9f9f9;
          border-color: #ccc;
        }
        
        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 20px 0;
          color: #999;
          font-size: 0.9rem;
        }
        
        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #eee;
        }
        
        .divider span {
          padding: 0 12px;
        }
        
        /* Form Styles */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #444;
        }
        
        .login-form input {
          padding: 14px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 1rem;
          transition: border 0.2s ease;
        }
        
        .login-form input:focus {
          outline: none;
          border-color: #e53d5c;
          box-shadow: 0 0 0 2px rgba(229, 61, 92, 0.1);
        }
        
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          margin-top: 5px;
        }
        
        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
        }
        
        .forgot-password {
          text-decoration: none;
          color: #e53d5c;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .forgot-password:hover {
          color: #c2314b;
        }
        
        .login-btn {
          padding: 14px;
          background-color: #e53d5c;
          color: #fff;
          border: none;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
          font-size: 1rem;
          transition: background-color 0.2s ease;
        }
        
        .login-btn:hover {
          background-color: #c2314b;
        }
        
        .create-account {
          margin-top: 24px;
          font-size: 0.95rem;
          color: #666;
          text-align: center;
        }
        
        .create-account a {
          color: #e53d5c;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .create-account a:hover {
          color: #c2314b;
          text-decoration: underline;
        }
        
        /* Right side (Image & Text) */
        .login-right {
          flex: 1;
          background-color: #fce6ea;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
        }
        
        .login-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 40px;
        }
        
        .image-overlay {
          position: absolute;
          color: #333;
          text-align: center;
          padding: 20px;
          max-width: 80%;
          bottom: 40px;
        }
        
        .image-overlay h2 {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        
        .image-overlay p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
        }
        
        .highlight {
          color: #e53d5c;
          font-weight: 600;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .login-left {
            padding: 40px;
          }
          
          .login-title {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .login-wrapper {
            flex-direction: column;
          }
          
          .login-right {
            min-height: 300px;
          }
          
          .image-overlay h2 {
            font-size: 1.5rem;
          }
          
          .image-overlay p {
            font-size: 0.95rem;
          }
        }
        
        @media (max-width: 480px) {
          .login-left {
            padding: 30px;
          }
          
          .login-title {
            font-size: 1.6rem;
          }
          
          .form-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;