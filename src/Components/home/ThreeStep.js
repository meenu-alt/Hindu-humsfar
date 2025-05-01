import React from "react";
import Logo from "./images/logo.png";

const ThreeEasySteps = () => {
  return (
<>

<section className="comp-sec d-md-none d-lg-block">
     <div className="d-none d-lg-block easy-steps container-fluid ">
      <div className="heading">
      <h3 style={{ textAlign: "center" }}>
        Three Easy Steps To Your{" "}
        <span style={{ color: "#e91e63" }}>Life Partner</span>
      </h3>
      </div>

      <div className="three-steps row ">
        {/* Left Section - Steps */}
        <div className="left-section col-lg-5 col-sm-12 col-md-12 col-xl-5">
          <div className="steps">
            <img src={Logo} alt="Hindu Humsafar" className="logo" />
            <div className="step">
              <div className="straight-line"></div>
              <div className="circle">01</div>
              <p>Sign Up & Create Your Profile</p>
            </div>
            <div className="step">
              <div className="straight-line"></div>
              <div className="circle">02</div>
              <p>Find Compatible Matches</p>
            </div>
            <div className="step">
              <div className="straight-line"></div>
              <div className="circle">03</div>
              <p>Connect & Take The Next Step</p>
            </div>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="three-stepsr  col-lg-7 col-sm-12 col-md-12 col-xl-7">
          <div className="right-section">
            <div className="register-box">
              Registration Starts From Rs.99 Only
            </div>
            <div className="info-box">
              Introduce Yourself With Details That Matter.
            </div>
            <div className="info-box">
              <b>Browse, Filter & Discover</b> People Who Align With Your
              Values.
            </div>
            <div className="info-box">
              <b>Communicate, Meet,</b> And Take Your Love Forward.
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .three-stepsr{
         justify-content: center;
    align-items: center;
    display: flex;}
    
        .easy-steps .container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.three-steps .left-section {
  width: 40%;
  text-align: center;
  justify-content: center;
    align-items: center;
    display: flex
;
}

.three-steps .logo {
  width: 150px;
  margin-bottom: 20px;
}

.three-steps .steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.three-steps .step {
  display: contents;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
}

.three-steps .circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #d93367;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.three-stepsr .right-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
 
}

.three-stepsr .register-box {
  border: 2px solid #d93367;
  padding: 15px 20px;
  border-radius: 10px;
  color: #d93367;
  font-weight: bold;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #FAD8DE;
  box-shadow: 2px 2px 0px #E53D5C;
  border-radius: 20px;

}

.three-stepsr .info-box {
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  background: #fff;
  font-size: 14px;
  font-weight: normal;



box-sizing: border-box;

background: #FFFFFF;
border: 1px solid #FAD8DE;
border-radius: 20px;

}

b {
  font-weight: bold;
}
  .step .straight-line {
      width: 10px;
    height: 60px;
    background-color: #fcecef;
    border-radius: 10px;

}
`}
      </style>
    </div>
    <div className="d-block d-lg-none  container-fluid">
    <section className="comp-sec ">
      <div className="container">
        <h3 className="text-center mb-5">
          Three Easy Steps To Your{" "}
          <span style={{ color: "#e91e63" }}>Life Partner</span>
        </h3>

   

        {/* ===== Mobile Layout ===== */}
        <div className="d-block d-lg-none text-center">
          <img src={Logo} alt="Hindu Humsafar" className="mb-3" width="100" />
          <div className="register-box mb-4">
            Registration Starts From Rs.99 Only
          </div>

          {/* Step 1 */}
          <div className="mb-3">
          <div className="straight-line"></div>
            <div className="circle mx-auto mb-2">01</div>
            <p>Sign Up & Create Your Profile</p>
            <div className="info-box">
              Introduce Yourself With Details That Matter.
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-3">
          <div className="straight-line"></div>
            <div className="circle mx-auto mb-2">02</div>
            <p>Find Compatible Matches</p>
            <div className="info-box">
              <b>Browse, Filter & Discover</b> People Who Align With Your Values.
            </div>
          </div>

          {/* Step 3 */}
          <div>
          <div className="straight-line"></div>
            <div className="circle mx-auto mb-2">03</div>
            <p>Connect & Take The Next Step</p>
            <div className="info-box">
              <b>Communicate, Meet,</b> And Take Your Love Forward.
            </div>
          </div>
        </div>
      </div>

      {/* ===== Styles ===== */}
      <style jsx>{`
        .circle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #d93367;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .straight-line {
          width: 10px;
          height: 60px;
          background-color: #fcecef;
          border-radius: 10px;
          margin: 0 auto;
        }

        .register-box {
          border: 1px solid #fad8de;
          box-shadow: 2px 2px 0px #e53d5c;
          border-radius: 20px;
          padding: 15px 20px;
          font-weight: bold;
          color: #d93367;
        }

        .info-box {
          padding: 15px;
          border-radius: 20px;
          background: #fff;
          font-size: 14px;
          border: 1px solid #fad8de;
          margin-top: 10px;
        }
      `}</style>
    </section>
    </div>
   </section>
  </>

  );
};

export default ThreeEasySteps;
