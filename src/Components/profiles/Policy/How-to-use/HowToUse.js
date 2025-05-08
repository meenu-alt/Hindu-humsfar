import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const HowToUse = () => {
  const [howToUseContent, setHowToUseContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/how-to-use.php")
      .then((response) => {
        if (response.data.length > 0) {
          setHowToUseContent(response.data[0].how_to_use_desc);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container className="privacy-policy-container">
      <div className="policy-header text-center">
        <div className="badge">How To Use</div>
        <h3>
          How To <span style={{ color: "#E53D5C" }}>Use</span>
        </h3>
      </div>

  

      <div
        className="policy-content"
        dangerouslySetInnerHTML={{ __html: howToUseContent }}
      ></div>

      <style>
        {`
        h4{
        font-size: 18px !important;
    font-weight: bold !important;
    color: #000 !important;
    margin-bottom: 15px !important;
    text-transform: uppercase !important;
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
    </Container>
  );
};

export default HowToUse;
