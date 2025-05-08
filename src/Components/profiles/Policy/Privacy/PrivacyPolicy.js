import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  const [privacyPolicycontent, setPrivacyPolicy ] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/privacy-policy.php")
    .then((response) =>{
      if (response.data.length > 0) {
        setPrivacyPolicy(response.data[0].privacy_policy_desc);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    });
  }, []);

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
        h4{
        font-size:16px !important;}
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
      <div className="policy-content" dangerouslySetInnerHTML={{__html:privacyPolicycontent }}>
        
      </div>
      
      {/* <div className="policy-footer">
        <p>Thanks & Regards</p>
        <p>The Hindu Humsafar Team</p>
      </div> */}
    </Container>
  );
};

export default PrivacyPolicy;