import React from "react";
import { Container } from "react-bootstrap";

const HowToUse = () => {
  return (
    <Container className="privacy-policy-container">
      <div className="policy-header">
        <div className="text-center">
          <div className="badge">How To Use</div>
        </div>

        <div className="headingg">
          <h3 className="text-center">
            How To <span style={{ color: "#E53D5C" }}>Use</span>
          </h3>
        </div>
      </div>

      <div className="intro-section">
        <p className="lead">
          Most Trusted And Premium Matrimony Service in The World.
        </p>
      </div>

      <style>
        {`
        .badge {
          display: inline-block;
          background-color: #fce4ec;
          color: #333;
          padding: 5px 15px;
          border-radius: 5px;
          font-size: 14px;
          margin-bottom: 10px;
        }
          .privacy-policy-container{
          margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
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

        .policy-content {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin-bottom: 40px;
        }

        .policy-content p {
          margin-bottom: 15px;
          font-size: 14px;
          text-align: left;
        }

        @media (max-width: 768px) {
          .intro-section .lead {
            font-size: 14px;
          }
          .policy-content p {
            font-size: 13px;
          }
        }
        `}
      </style>

      <div className="policy-content">
        <p>
          <strong>Registration</strong>
          <br />
          Sign up with your email id and phone number after u will get the OTP
          fill up the basic registration form so that you can login any time you
          want. Your phone number and password will be required for login. After
          the completion of basic registration, you will be allotted with a
          Hindu Humsafar user ID i.e. MH1234 which will be used in place of your
          name to maintain your privacy.
        </p>

        <p>
          <strong>Profile Details</strong>
          <br />
          After successful completion of the registration and sign up, Profile
          Page will get open where you can add your photos (Max 06) and fill up
          you’re all the other necessary information regarding your sub caste,
          education, family details, career, work etc. you are requested to
          kindly fill your all the details so that your match can go through
          with your all details.
        </p>

        <p>
          <strong>Partner Profile</strong>
          <br />
          As per your choice you can set the basic searching criteria for your
          desired match i.e. age, height, marital status, state etc and all
          other information which you required. You can edit your desired
          partners profile anytime required.
        </p>

        <p>
          <strong>Desired Partner Matches</strong>
          <br />
          On this page you will get all your desired matches at one place. There
          will be 20 profiles on each page.
        </p>

        <p>
          <strong>Recently Joined Matches</strong>
          <br />
          On this page you will get all the recently joined matches at one
          place. There will be 20 profiles on each page.
        </p>

        <p>
          <strong>Messaging</strong>
          <br />
          If you want to send interest to any profile just open the match
          profile and click on the send interest button. Your interest will be
          sent to the desired match and if your desired match accepts your
          proposal then both of you can start messaging each other on the
          messaging page.
        </p>

        <p>
          <strong>Notifications</strong>
          <br />
          Members will get notification on the bell icon page by website or if a
          member gets any interest from his or her matches.
        </p>

        <p>
          <strong>Contact Us</strong>
          <br />
          Members can contact us via contact us form provided at the footer bar.
          Members can provide with their basic details in the form and click on
          the submit button. Your query may be answered typically within weeks.
        </p>

        <p>
          <strong>Report Misuse</strong>
          <br />
          If any member faces any problem by any other member, he or she can
          report the misuse on the form provided at the footer bar. Just fill
          your basic details and if necessary, send the screenshot of the
          problem. If it is found that there is some problem, then the opponent
          member ID will be blocked by Hindu Humsafar without any notification.
        </p>

        <p>
          <strong>Hide / Delete Profile</strong>
          <br />
          Additionally, whenever you feel that your purpose of creating
          registration with Hindu Humsafar is completed or you want to take a
          break or busy in some other work you can anytime hide your profile,
          delete your profile and if you want to change password then you can do
          so.
        </p>

        <p>
          We wish you for your Happy Marriage Life ahead and bright future :-)
        </p>
      </div>

      <div className="policy-footer">
        <p>Thanks & Regards,</p>
        <p>The Hindu Humsafar Team</p>
        <p>
          <strong>Note:</strong> HinduHumsafar is owned by Mr. Nitin Rawat
          (registered under MSME)
        </p>
      </div>
    </Container>
  );
};

export default HowToUse;
