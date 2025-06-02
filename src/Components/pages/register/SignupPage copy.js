import React , {useState} from 'react';
import logo from '../../../Components/home/images/logo.png';
import coupleImage from '../../../assets/images/couples/Vector.png';
import { FcGoogle } from "react-icons/fc";


const SignupForm = () => {
  

  const [lookingFor, setlookingFor] = useState('');
  const [gender, setGender] = useState('');


  const handleLookingForChange = (e) => {
    const value = e.target.value;
    setlookingFor (value);

    if (value === 'Bride') {
      setGender('Male');
    }
    else if ( value === 'Groom'){
      setGender('Female');
    }
    else{
      setGender('');
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="form-section">
        <img src={logo} alt="Hindu Humsafar" className="logo-img" />
        <h2>Create your account</h2>
        <p className="subtext">Let's get started with your 30 days free trial</p>
{/* 
        <button className="google-btn">
        <FcGoogle />
          Sign up with Google
        </button>

        <div className="divider"><span>or</span></div> */}

       <form className="form">

  <div className="form-row">
    <label>
      Full Name *
      <input type="text" placeholder="Enter your name" />
    </label>
    <label>
      Email ID *
      <input type="email" placeholder="Enter your email" />
    </label>
  </div>

  <div className="form-row">
   
    <label>
      Date of Birth *
      <input type="date" />
    </label>
    <label >
      Looking For *
      <select value={lookingFor} onChange={handleLookingForChange}>
        <option value="">Select</option>
        <option value="Bride">Bride</option>
        <option value="Groom">Groom</option>
      </select>
    </label>
  </div>
  <div className="form-row">
 
  <label>
      Gender *
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </label>
        <label>
      Hobbies
    
    <input type="text" placeholder="Enter your Hobbies"/>
  </label>
  </div>

  <div className="form-row">

  <label>
    Education *
      <select >
                    <option value="">Select</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="Ph.D.">Ph.D.</option>
                    <option value="Diploma">Diploma</option>
                  </select>
  </label>
  <label>
    Family *
      <select >
                    <option value="">Select</option>
                    <option value="Nuclear Family">Nuclear Family</option>
                    <option value="Extended Family">Extended Family</option>
                  </select>
  </label>

  </div>
  <div className="form-row">
    <label>
      Create Profile For *
      <select >
        <option value="">Select</option>
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
      <input type="text" placeholder="Enter your religion" />
    </label>
  </div>

  <div className="form-row">
    <label>
      Mother Tongue *
      <input type="text" placeholder="Enter your mother tongue" />
    </label>
    <label>
      Country *
      <input type="text" placeholder="Enter your country" />
    </label>
  </div>

  <div className="form-row">
    <label>
      State *
      <input type="text" placeholder="Enter your state" />
    </label>
    <label>
      City *
      <input type="text" placeholder="Enter your city" />
    </label>
  </div>

  <div className="form-row">
    <label>
      Password *
      <input type="password" placeholder="Enter your password" />
    </label>
  </div>

  <div className="checkbox">  
    <input type="checkbox" id="terms" />
    <label htmlFor="terms">
      I hereby agree to all the contents of the <span style={{color: "#ff4d6d", display:"contents", margin: "0 5px"}}> Terms of Use </span> and <span style={{color: "#ff4d6d", display:"contents", margin: "0 5px"}}> Privacy Policy </span>
    </label>
  </div>

  <button type="submit" className="create-btn">Create Account</button>
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
  
  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .google-btn img {
    width: 20px;
  }
  
  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0;
    color: #aaa;
    font-size: 14px;
  }
  
  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #ccc;
  }
  
  .form label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 15px;
    color: #333;
  }
  
  .form input {
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
  
  .checkbox a {
    color: #ff4d6d;
    text-decoration: none;
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
    color: white ;
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
.checkbox label{
    display: flex;
    font-size: 14px;
    flex-direction: inherit;
    margin-bottom: 15px;
    color: #333;
}
  /* Responsive */
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
    .form select {
  padding: 10px;
  margin-top: 6px;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-size: 15px;
}

  `}
      </style>
    
    </div>
  );
};

export default SignupForm;
