import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../../Components/home/images/logo.png';
import coupleImage from '../../../assets/images/couples/Vector.png';
import apiConfig from '../../../config/api';

const SignupForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    looking_for: '',
    gender: '',
    hobbies: '',
    education: '',
    family: '',
    pro_for: 'Self',
    religion: '',
    language: '',
    country: '',
    state: '',
    city: '',
    password: '',
    terms_accepted: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleLookingForChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      looking_for: value,
      gender: value === 'Bride' ? 'Male' : (value === 'Groom' ? 'Female' : '')
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.looking_for) newErrors.looking_for = 'This field is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.religion) newErrors.religion = 'Religion is required';
    if (!formData.language) newErrors.language = 'Mother tongue is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.terms_accepted) newErrors.terms_accepted = 'You must accept terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const payload = new FormData();
    for (let key in formData) {
      // The backend expects 'pwd' instead of 'password'
      if (key === 'password') {
        payload.append('pwd', formData[key]);
      } else {
        payload.append(key, formData[key]);
      }
    }

    const response = await axios.post(
      'http://localhost/perfomdigi/hindu-humsfar-react/backend/application/controllers/Register_controller/register',
      payload
    );

    console.log(response.data);

    if (response.data.status) {
      navigate('/registration-success');
    } else {
      setErrors({
        api: response.data.message || 'Registration failed',
        ...(response.data.errors || {})
      });
    }
  } catch (error) {
    console.error('Registration error:', error);
    setErrors({
      api: error.response?.data?.message || 'Something went wrong. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};


  // console.log(formData)
  return (
    <div className="signup-wrapper">
      <div className="form-section">
        <img src={logo} alt="Hindu Humsafar" className="logo-img" />
        <h2>Create your account</h2>
        <p className="subtext">Let's get started with your 30 days free trial</p>

        {errors.api && <div className="error-message" style={{color: 'red', marginBottom: '15px'}}>{errors.api}</div>}

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Full Name *
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
              />
              {errors.name && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.name}</span>}
            </label>
            <label>
              Email ID *
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
              />
              {errors.email && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.email}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Date of Birth *
              <input 
                type="date" 
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.dob}</span>}
            </label>
            <label>
              Looking For *
              <select 
                name="looking_for"
                value={formData.looking_for}
                onChange={handleLookingForChange}
              >
                <option value="">Select</option>
                <option value="Bride">Bride</option>
                <option value="Groom">Groom</option>
              </select>
              {errors.looking_for && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.looking_for}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Gender *
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.gender}</span>}
            </label>
            <label>
              Hobbies
              <input 
                type="text" 
                name="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                placeholder="Enter your Hobbies"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Education *
              <select 
                name="education"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="Ph.D.">Ph.D.</option>
                <option value="Diploma">Diploma</option>
              </select>
            </label>
            <label>
              Family *
              <select 
                name="family"
                value={formData.family}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Nuclear Family">Nuclear Family</option>
                <option value="Extended Family">Extended Family</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Create Profile For *
              <select 
                name="pro_for"
                value={formData.pro_for}
                onChange={handleChange}
              >
                <option value="Self">Self</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Friend">Friend</option>
              </select>
            </label>
            <label>
              Religion *
              <input 
                type="text" 
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                placeholder="Enter your religion" 
              />
              {errors.religion && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.religion}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Mother Tongue *
              <input 
                type="text" 
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Enter your mother tongue" 
              />
              {errors.language && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.language}</span>}
            </label>
            <label>
              Country *
              <input 
                type="text" 
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country" 
              />
              {errors.country && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.country}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              State *
              <input 
                type="text" 
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state" 
              />
            </label>
            <label>
              City *
              <input 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city" 
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Password *
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password" 
              />
              {errors.password && <span className="field-error" style={{color: 'red', fontSize: '12px'}}>{errors.password}</span>}
            </label>
          </div>

          <div className="checkbox">  
            <input 
              type="checkbox" 
              id="terms" 
              name="terms_accepted"
              checked={formData.terms_accepted}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              I hereby agree to all the contents of the <span style={{color: "#ff4d6d", display:"contents", margin: "0 5px"}}> Terms of Use </span> and <span style={{color: "#ff4d6d", display:"contents", margin: "0 5px"}}> Privacy Policy </span>
            </label>
            {errors.terms_accepted && <div className="field-error" style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.terms_accepted}</div>}
          </div>

          <button 
            type="submit" 
            className="create-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>

      <div className="image-section d-none d-lg-block">
        <img src={coupleImage} alt="Couple" />
        <div className="overlay-text">
          <h3>Your Journey To Love Begins <span className="highlight">Here !</span></h3>
          <p>Connect With Genuine Matches Who Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams.</span></p>
        </div>
      </div>
      <style>
        {`
        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
        }

        .form-row label {
          flex: 1;
        }

        .signup-wrapper {
          display: flex;
          min-height: 100vh;
          font-family: 'Arial', sans-serif;
        }
        
        .form-section {
          flex: 1;
          padding: 40px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .logo-img {
          width: 180px;
          margin-bottom: 40px;
        }
        
        h2 {
          font-size: 28px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .subtext {
          font-size: 16px;
          color: #555;
          margin-bottom: 25px;
          text-align: center;
        }
        
        .form label {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          margin-bottom: 15px;
          color: #333;
        }
        
        .form input, .form select {
          padding: 10px;
          margin-top: 6px;
          border-radius: 15px;
          border: 1px solid #ccc;
          font-size: 15px;
        }
        
        .checkbox {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 10px 0 20px;
          font-size: 14px;
        }
        
        .checkbox input {
          margin-top: 5px;
        }
        
        .create-btn {
          padding: 12px;
          background-color: #ff4d6d;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
        }
        
        .create-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        
        .login-text {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        
        .login-text a {
          color: #ff4d6d;
          text-decoration: none;
          font-weight: bold;
        }
        
        .image-section {
          flex: 1;
          position: relative;
          overflow: hidden;
          border-top-left-radius: 40px;
          border-bottom-left-radius: 40px;
        }
        
        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .overlay-text {
          position: absolute;
          bottom: 50px;
          left: 30px;
          color: white;
          max-width: 80%;
          text-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
        }
        
        .overlay-text h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: white !important;
        }
        
        .overlay-text p {
          font-size: 16px;
          line-height: 1.4;
          color: white !important;
        }
        
        .highlight {
          color: #ffc107;
        }
        
        .checkbox label {
          display: flex;
          font-size: 14px;
          flex-direction: inherit;
          margin-bottom: 15px;
          color: #333;
        }
        
        @media screen and (max-width: 900px) {
          .signup-wrapper {
            flex-direction: column;
          }
        
          .image-section {
            height: 300px;
            border-radius: 0;
          }
        
          .overlay-text {
            bottom: 20px;
            left: 20px;
          }
        
          .form-section {
            padding: 30px 20px;
          }
        }
        `}
      </style>
    </div>
  );
};

export default SignupForm;