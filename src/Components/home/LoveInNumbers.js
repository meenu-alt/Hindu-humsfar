import React from "react";
import impactImage from "./images/loveinnumbers.jpg"; 

const LoveInNumbers = () => {
  return (
    <div className="container">
         <h3 style={{textAlign: "center"}}>
        <span style={{color: "#E53D5C"}}>Love In Numbers</span> – Our Impact So Far
        </h3>
        <div className="love-numbers-section">
        <style>
            {`
            .love-numbers-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  font-family: Arial, sans-serif;
}

.stats {
  margin-top: 20px;
}



.stat-item h4 {
  font-size: 18px;
   
   font-weight: 600;
}

.stat-item p {
  font-size: 14px;
  color: #555;
}

.image-containerr {
  flex: 1;
  text-align: right;
}

.image-containerr img {
  max-width: 100%;
  border-radius: 10px;
}
  hr{
  color:#E53D5C;    
  border:2px solid #E53D5C;
  max-width: 86%;
  }
`}
        </style>
       
    <div className="row">
    <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 d-block d-lg-none">
    <div className="image-containerr ">
        <img src={impactImage} alt="Hindu Humsafar" />
    </div>
    </div>
    <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
    <div className="content">
        
        <div className="stats">
          <div className="stat-item">
            <h4>570+ Happy Couples Matched</h4>
            <p>Bringing Hearts Together, One Match At A Time.</p>
            <hr/>
          </div>
          <div className="stat-item">
            <h4>3800+ Verified Members</h4>
            <p>Join A Trusted Community Of Genuine Profiles Looking For Serious Relationships.</p>
            <hr/>
          </div>
          <div className="stat-item">
            <h4>228 Beautiful Marriages</h4>
            <p>From A Simple Match To A Lifetime Of Togetherness.</p>
            <hr/>
          </div>
          <div className="stat-item">
            <h4>19,000+ Hours Of Meaningful Conversations</h4>
            <p>Every Connection Starts With A Conversation – Find Yours Today!</p>
            <hr/>
          </div>
        </div>
      </div>
    </div>
   
    <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6  d-none d-lg-block">
    <div className="image-containerr">
        <img src={impactImage} alt="Hindu Humsafar" />
    </div>
    </div>
    </div>
      
    </div>
    </div>
    
  );
};

export default LoveInNumbers;
