import React, { useState } from 'react';
import logo from '../../../Components/home/images/logo.png'; 
import coupleImage from '../../../assets/images/couples/Vector.png'; 
// import { FcGoogle } from "react-icons/fc"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const API_BASE_URL = 'http://localhost/perfomdigi/hindu-humsfar-react/backend/application/controllers/Register_controller.php'; 


const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    looking_for: '',
    gender: '',
    mobile: '',
    pro_for: 'Self',
    religion: '',
    caste: '',
    language: 'Hindi',
    password: '',
    terms_accepted: false,
    curr_location: 'India',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState(''); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    setGeneralError('');
  };

  const handleLookingForChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      looking_for: value,
      gender: value === 'Bride' ? 'Male' : 
              value === 'Groom' ? 'Female' : ''
    }));
  };

  const validateForm = async () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Valid 10-digit mobile number is required';
    }
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.looking_for) newErrors.looking_for = 'Please select who you are looking for';
    if (!formData.gender) newErrors.gender = 'Gender is required'; // Should be auto-filled
    if (!formData.religion.trim()) newErrors.religion = 'Religion is required';
    if (!formData.caste.trim()) newErrors.caste = 'Caste is required';
    if (!formData.language.trim()) newErrors.language = 'Mother Tongue is required';
    if (!formData.pro_for) newErrors.pro_for = 'Profile for is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.terms_accepted) newErrors.terms_accepted = 'You must accept the terms and privacy policy';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    

    // try {
    //   const emailCheckResponse = await axios.post(`${API_BASE_URL}/check-email`, { email: formData.email });
    //   if (emailCheckResponse.data && !emailCheckResponse.data.status) { // Assuming backend returns {status: false, message: '...'} if taken
    //     newErrors.email = emailCheckResponse.data.message || 'This email is already registered.';
    //     setErrors(newErrors);
    //     return false;
    //   }
    // } catch (error) {
    //   console.error('Email pre-check error:', error);
    //   setGeneralError('Could not verify email availability at the moment.');
    //   // Depending on strictness, you might return false or allow proceeding, letting backend handle final check
    // }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError('');

    const isValid = await validateForm();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      
      const response = await axios.post(`${API_BASE_URL}/initiate`, formData); 

      if (response.data && response.data.status) {
        // Navigate to OTP verification page, passing mobile number (and email if needed)
        navigate('/send-otp', { 
          state: { 
            mobile: formData.mobile, 
            email: formData.email // Useful for display or resend OTP functionality on the next page
          } 
        });
      } else {
        // Handle errors from backend (e.g., validation errors, email/mobile already exists)
        if (response.data && response.data.errors) {
          setErrors(response.data.errors);
        }
        setGeneralError(response.data.message || 'Registration failed. Please review your details.');
      }
    } catch (error) {
      console.error('Registration submission error:', error);
      const backendError = error.response?.data;
      if (backendError && backendError.errors) {
        setErrors(backendError.errors);
        setGeneralError(backendError.message || "Please correct the errors below.");
      } else if (backendError && backendError.message) {
        setGeneralError(backendError.message);
      } else {
        setGeneralError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="form-section">
        <img src={logo} alt="Hindu Humsafar" className="logo-img" />
        <h2>Create your account</h2>
        <p className="subtext">Let's get started on your journey to finding a partner!</p>
        
        {generalError && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px', fontWeight:'bold' }}>{generalError}</p>}

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label> Full Name *
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </label>
            <label> Email ID *
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </label>
          </div>

          <div className="form-row">
            <label> Mobile Number *
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter 10-digit mobile" maxLength="10" />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </label>
            <label> Date of Birth *
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} max={new Date().toISOString().split("T")[0]} />
              {errors.dob && <span className="error-text">{errors.dob}</span>}
            </label>
          </div>

          <div className="form-row">
            <label> Looking For *
              <select name="looking_for" value={formData.looking_for} onChange={handleLookingForChange} >
                <option value="">Select...</option> <option value="Bride">Bride</option> <option value="Groom">Groom</option>
              </select>
              {errors.looking_for && <span className="error-text">{errors.looking_for}</span>}
            </label>
            <label> Gender *
              <select name="gender" value={formData.gender} onChange={handleChange} disabled={!!formData.looking_for} >
                <option value="">Select...</option> <option value="Male">Male</option> <option value="Female">Female</option>
              </select>
              {errors.gender && <span className="error-text">{errors.gender}</span>}
            </label>
          </div>

          <div className="form-row">
            <label> Religion *
              <input type="text" name="religion" value={formData.religion} onChange={handleChange} placeholder="E.g., Hindu, Muslim, Christian" />
              {errors.religion && <span className="error-text">{errors.religion}</span>}
            </label>
            <label> Caste *
              <input type="text" name="caste" value={formData.caste} onChange={handleChange} placeholder="Enter your caste" />
              {errors.caste && <span className="error-text">{errors.caste}</span>}
            </label>
          </div>

          <div className="form-row">
            <label> Mother Tongue *
              <input type="text" name="language" value={formData.language} onChange={handleChange} placeholder="E.g., Hindi, English, Tamil" />
              {errors.language && <span className="error-text">{errors.language}</span>}
            </label>
            <label> Create Profile For *
              <select name="pro_for" value={formData.pro_for} onChange={handleChange} >
                <option value="Self">Self</option> <option value="Son">Son</option> <option value="Daughter">Daughter</option>
                <option value="Brother">Brother</option> <option value="Sister">Sister</option> <option value="Friend">Friend</option>
                <option value="Relative">Relative</option>
              </select>
              {errors.pro_for && <span className="error-text">{errors.pro_for}</span>}
            </label>
          </div>

          <div className="form-row">
            <label style={{flexBasis: '100%'}}> Password *
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a strong password (min. 6 characters)" />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </label>
          </div>

          <div className="checkbox">  
            <input type="checkbox" id="terms" name="terms_accepted" checked={formData.terms_accepted} onChange={handleChange} />
            <label htmlFor="terms"> I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </label>
            {errors.terms_accepted && <span className="error-text" style={{ display: 'block', width: '100%', marginTop: '5px' }}>{errors.terms_accepted}</span>}
          </div>

          <button type="submit" className="create-btn" disabled={isSubmitting} >
            {isSubmitting ? 'Processing...' : 'Register & Proceed to OTP Verification'}
          </button>
        </form>

        <p className="login-text"> Already have an account? <a href="/login">Log in</a> </p>
      </div>

      <div className="image-section d-none d-lg-block">
        <img src={coupleImage} alt="Couple" />
        <div className="overlay-text">
          <h3>Your Journey To Love Begins <span className="highlight">Here!</span></h3>
          <p>Connect With Genuine Matches Who Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams.</span></p>
        </div>
      </div>
      <style>{`
        .error-text { color: red; font-size: 0.8em; margin-top: 3px; }
        .form-row { display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 15px; }
        .form-row label { flex: 1; min-width: calc(50% - 10px); display: flex; flex-direction: column; font-size: 14px; color: #333; font-weight: 500;}
        .form-row input, .form-row select { padding: 10px; margin-top: 6px; border-radius: 8px; border: 1px solid #ccc; font-size: 15px; width: 100%; box-sizing: border-box;}
        .form-row input:focus, .form-row select:focus { border-color: #ff4d6d; outline: none; box-shadow: 0 0 0 2px rgba(255, 77, 109, 0.15); }
        
        .signup-wrapper { display: flex; min-height: 100vh; font-family: 'Roboto', 'Arial', sans-serif; }
        .form-section { flex: 1.2; padding: 30px 50px; display: flex; flex-direction: column; justify-content: center; background: #fff; overflow-y: auto;}
        .logo-img { width: 150px; margin-bottom: 25px; align-self: center; }
        h2 { font-size: 24px; font-weight: 600; margin-bottom: 8px; text-align: center; color: #2c3e50; }
        .subtext { font-size: 15px; color: #555; margin-bottom: 20px; text-align: center; }
        
        .checkbox { display: flex; align-items: flex-start; gap: 8px; margin: 15px 0 20px; font-size: 13px; line-height: 1.4; }
        .checkbox input[type="checkbox"] { width: auto; margin-top: 3px; accent-color: #ff4d6d; flex-shrink: 0; }
        .checkbox label { flex-direction: row; margin-bottom: 0; font-weight: normal; color: #555; align-items: center;}
        .checkbox a { color: #ff4d6d; text-decoration: none; } .checkbox a:hover { text-decoration: underline; }
        
        .create-btn { padding: 12px; background-color: #ff4d6d; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; font-size: 16px; transition: background-color 0.2s, box-shadow 0.2s; }
        .create-btn:hover:not(:disabled) { background-color: #e03c5a; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .create-btn:disabled { background-color: #ff9aa2; cursor: not-allowed; }
        
        .login-text { text-align: center; margin-top: 25px; font-size: 14px; color: #555; }
        .login-text a { color: #ff4d6d; text-decoration: none; font-weight: bold; }
        
        .image-section { flex: 0.8; position: relative; overflow: hidden; border-top-left-radius: 30px; border-bottom-left-radius: 30px; background: #fff6f7; display: flex; align-items: center; justify-content: center; padding: 40px;}
        .image-section img { max-width: 85%; max-height: 85%; object-fit: contain; }
        .overlay-text { position: absolute; bottom: 40px; left: 40px; right: 40px; color: #333 ; text-align: center;}
        .overlay-text h3 { font-size: 22px; margin-bottom: 10px; color: #333 !important; font-weight: 600; }
        .overlay-text p { font-size: 15px; line-height: 1.5; color: #555 !important; }
        .highlight { color: #ff4d6d; font-weight: bold; }
        
        @media screen and (max-width: 992px) { .image-section { display: none; } .form-section { flex: 1; padding: 30px 25px;} .form-row label { min-width: 100%; } }
        @media screen and (max-width: 480px) { h2 {font-size: 20px;} .logo-img {width: 120px; margin-bottom: 20px;} .form-section {padding: 20px 15px;} }
      `}</style>
    </div>
  );
};

export default SignupForm;