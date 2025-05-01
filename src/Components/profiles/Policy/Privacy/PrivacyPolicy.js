import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy-container">
      <div className="policy-header">
      <div className="text-center">
      <div className="badge">Policy</div>
</div>
      
        <div className="headingg">
      <h3 className="text-center">Privacy<span style={{color: "#E53D5C"}}> Policy</span>  </h3>
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
  .privacy-policy-container {
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
      <div className="policy-content">
        <p>
          We welcome that you put trust in us when you furnish us with your data, and we don't trifle with this. 
          Hindu Humsafar is a unit of Mr. Nitin Rawat (registered under MSME). We don't compromise with your security. 
          We structure most of our items and administration in view of your protection. We include specialists from 
          different fields, including legitimate, security, building, item plan and others to settle on beyond any 
          doubt that no choice is taken without regard for your protection.
        </p>
        
        <p>
          We endeavour to be straight forward in the way we process your information. Since we utilize a considerable 
          lot of the equivalent online administrations you do, we realize that lacking data and excessively convoluted 
          dialect are normal issues in security arrangements.
        </p>
        
        <p>
          We adopt the correct inverse strategy; we have composed our privacy policy and related reports in plain dialect. 
          We really need you to pursue our arrangements and comprehend our protection rehearsals. Hindu Humsafar, is very 
          concerned with the protection of user's personal data and the protection of user's privacy. Hindu Humsafar, 
          work hard to keep user information secure.
        </p>
        
        <p>
          Hindu Humsafar does not compromise with user's privacy. Your privacy is the top priority. Hindu Humsafar never 
          shares or sells users data with anyone. All data is stored safely, and physical intruders cannot get access to 
          user data. Be careful when accessing your account from a public or shared computer so that others can't view or 
          record your password or personal information.
        </p>
        
        <p>
          There is a limit to an online matrimonial provider's ability to check the backgrounds of users and verify the 
          information they provide. They cannot do a check on every user for any criminal activities. And a person can 
          become a problem without having a record. Therefore, don't get a false sense of security because you are on a 
          website; do your own research to learn more about someone and make informed decisions before you decide to meet. 
          Check to see if the person you're interested in is on other social networking sites.
        </p>
        
        <p>
          There is no reason for anyone to ask you for money or your financial information, whatever sad story they tell you. 
          Always keep your bank and account information private. Stop all contact immediately and report the matter to the 
          website. Trust your instincts and immediately stop communicating with anyone who makes you feel uncomfortable. 
          Never feel embarrassed to report a problem to the website service provider. You are helping them and other users.
        </p>
        
        <p>
          Though Hindu Humsafar strives to encourage a respectful user experience through features like the double opt-in 
          that allows users to communicate via messaging if they have both indicated interest in one another, Hindu Humsafar 
          is not responsible for the conduct of any user on or off the service. You agree to use caution in all interaction 
          with other users, particularly if you decide to communicate off the service or meet the person.
        </p>
      </div>
      
      <div className="policy-footer">
        <p>Thanks & Regards</p>
        <p>The Hindu Humsafar Team</p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;