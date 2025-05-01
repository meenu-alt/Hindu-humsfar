import React from 'react';
import { Container } from 'react-bootstrap';

const TermsOfUse = () => {
  return (
    <Container className="terms-container">
      <div className="terms-header">
      <div className="text-center">
      <div className="badge">Terms Of Use</div>
</div>
      
      <div className="headingg">
      <h3 className="text-center">Terms Of <span style={{color: "#E53D5C"}}> Use</span>  </h3>
      </div>
      </div>
      
      <div className="intro-section">
        <p className="lead">Most Trusted And Premium Matrimony Service in The World.</p>
      </div>
      <style>
        {`
        ol li {
            list-style: decimal;
            }
        .badge {
  display: inline-block;
  background-color: #fce4ec;
  color: #333;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}
  .terms-container {
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.terms-header {
  text-align: center;
}

.terms-header h1 {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.intro-section {
  text-align: center;
  margin-bottom: 30px;
}

.intro-section .lead {
  font-size: 16px;
  font-weight: normal;
  color: #333;
  font-style: italic;
}

.terms-content {
  margin-bottom: 40px;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.section h3 {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin: 20px 0 10px 0;
}

.section p {
  margin-bottom: 15px;
  font-size: 14px;
  text-align: left;
}

.section ol {
  margin-bottom: 20px;
  padding-left: 20px;
}

.section ol li {
  margin-bottom: 8px;
  font-size: 14px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .terms-container {
    padding: 15px;
  }
  
  .terms-header h1 {
    font-size: 20px;
  }
  
  .section h2 {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .terms-header h1 {
    font-size: 18px;
  }
  
  .intro-section .lead {
    font-size: 14px;
  }
  
  .section p, .section ol li {
    font-size: 13px;
  }
}`}
      </style>
      <div className="terms-content">
        <div className="section">
          <h2>ELIGIBILITY</h2>
          <p>
            Users must be at least 21 years of age to create an account on Hindu Humsafar and for using the service. 
            Any one if eligible can create an account and use the services.
          </p>
        </div>
        
        <div className="section">
          <h2>ACCOUNT TERMINATION</h2>
          <p>
            Hindu Humsafar is continually endeavouring to enhance the services and present to you extra usefulness that 
            you will discover connecting with your match. This implies we may include new item highlights or improvements 
            every once in a while and expel a few highlights, and if these activities don't tangibly influence your rights 
            or commitments, we may even suspend the service altogether if we found uncontrollable issues at hand, for example 
            wellbeing or security concerns keep us from doing as such.
          </p>
          
          <p>
            Users may end up his records whenever for any reason, by adhering to the directions in 'settings' in the service. 
            Hindu Humsafar may end the user record whenever without notice on the off chance that the user has damaged the 
            criteria and policy. Hindu Humsafar cannot be held liable for actions by its members which are illegal, or which 
            incur criminal penalties, including but not limited to the following:
          </p>
          
          <ol>
            <li>All types of scams.</li>
            <li>Prostitution.</li>
            <li>Business by any third party.</li>
            <li>Identity theft.</li>
            <li>Gambling.</li>
            <li>Pornographic materials.</li>
            <li>Objectionable messages sent to matches or other users.</li>
          </ol>
          
          <p>
            Hindu Humsafar cannot be held responsible for any failure, interruption or poor performance of the user's internet 
            provider services or any case/situation beyond Hindu Humsafar control. In the event of any misuse or abuse of Hindu 
            Humsafar application Hindu Humsafar reserves all the rights to block or cancel the users account immediately without 
            user's permission. Hindu Humsafar is the sole authority for interpretation of these terms. Hindu Humsafar shall not 
            be liable for any loss or damage by uneventful happenings. Hindu Humsafar shall not be liable for any indirect, 
            incidental or consequential damages arising at or in connection with the application. Hindu Humsafar will provide its 
            best possible efforts to secure user's data but ultimate risk is with the person who ever uses the application services.
          </p>
          
          <p>
            Though Hindu Humsafar strives to encourage a respectful user experience through features like the double opt-in that 
            allows users to communicate via messaging if they have both indicated interest in one another, Hindu Humsafar is not 
            responsible for the conduct of any user on or off the service. Immediately after registration you are agreed to use 
            caution in all interaction with other users, particularly if you decide to communicate off the service or meet the person. 
            Be safe.
          </p>
        </div>
        
        <div className="section">
          <h2>REFUND AND CANCELLATION POLICY</h2>
          
          <h3>Minimum Registration charges starts from Rs.99/-</h3>
          <p>
            Hindu Humsafar.com is committed to providing a secure and successful matrimony experience for its users. 
            As part of our commitment, we have established a non-cancellation refund policy to ensure transparency and 
            fairness in our refund process.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TermsOfUse;