import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from './newsletter.jpg'; // Ensure this matches the actual file name or path

const NewsletterSubscription = () => {
  return (
    <div className="newsletter-section">
      <style>
        {`
          .newsletter-section {
            background: #f54874;
            border-radius: 20px;
            padding: 50px 30px;
            margin: 40px 0;
            color: #fff;
          }

          .newsletter-image {
            width: 50%;
            height: auto;
          }

          .newsletter-title {
            font-size: 1.6rem;
            font-weight: 600;
            color: white;
            margin-bottom: 20px;
          }

          .newsletter-form-wrapper {
            background: white;
            border-radius: 50px;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            max-width: 400px;
            margin-bottom: 10px;
          }

          .newsletter-form input {
            border: none;
            outline: none;
            padding: 10px 15px;
            border-radius: 50px;
            flex: 1;
          }

          .subscribe-btn {
            background: black;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: 500;
            white-space: nowrap;
          }

          .newsletter-desc {
            font-size: 0.85rem;
            color: white;
          }

          @media (max-width: 768px) {
            .newsletter-title {
              font-size: 1.2rem;
            }

            .newsletter-form-wrapper {
              flex-direction: column;
              align-items: stretch;
              border-radius: 20px;
            }

            .subscribe-btn {
              width: 100%;
              margin-top: 10px;
              border-radius: 20px;
            }
          }
        `}
      </style>

      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img src={Image} alt="Subscribe" className="newsletter-image" />
          </Col>
          <Col md={7}>
            <h4 className="newsletter-title">
              Subscribe to our newsletter for the<br />latest updates and insights.
            </h4>
            <div className="newsletter-form-wrapper">
              <Form className="newsletter-form w-100 d-flex">
                <Form.Control type="email" placeholder="Enter your email" />
                <Button className="subscribe-btn">Subscribe</Button>
              </Form>
            </div>
            <p className="newsletter-desc">
              Stay ahead with the latest updates, insights, and events from Macrot Megatrons.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsletterSubscription;
