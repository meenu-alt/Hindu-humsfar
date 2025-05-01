import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactImage from './contact.png';

const Contact = () => {
  return (
    <section className="contact-section">
       <div className="contact-hero-section py-5">
      <Container className="text-center">
        <div className="heading mb-3">Contact Us</div>
        <h3 className="text-center">
          WE ARE HERE TO <span className="highlight">ASSIST YOU</span>
        </h3>
        <p className="contact-subtitle">
          Most Trusted And Premium Matrimony Service In The World.
        </p>
      </Container>
    </div>
      <Container>
        <Row className="mb-5 mt-4">
          <Col md={5}>
            <div className="contact-box p-4 shadow-sm">
              <h3 className="contact-heading mb-3">Contact Us</h3>
              <p className="contact-text">For any inquiries, assistance, or feedback related to your experience on:</p>
              <ul className="list-unstyled contact-list mt-4">
                <li><FaPhoneAlt className="me-2" /> +91 8088010188</li>
                <li><FaEnvelope className="me-2" /> hinduhumsafar@gmail.com</li>
                <li><FaMapMarkerAlt className="me-2" /> 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</li>
              </ul>
            </div>
          </Col>
          <Col md={7}>
            <div className="info-box ps-md-5 ">
              <div className='heading'>
              <h3 className="info-title">Need Any <span>Assistance?</span></h3>
              </div>
             
              <p>
                Whether you’re seeking support with your profile, need help navigating the platform, or have questions regarding our services, our dedicated team is here to help.
              </p>
              <p>
                We aim to provide you with the best matrimonial experience and will respond promptly to ensure all your needs are met. Your journey towards finding the perfect match is important to us.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center enquiry-form-box g-4">
          <Col md={4}>
            <img
              src={ContactImage}
              alt="Contact Representation"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
          <Col md={8}>
            <div className=" p-4 shadow-sm">
              <h5 className="mb-3">Let's Talk</h5>
              <h6 className="mb-4">Send Your Enquiry <span>Now</span></h6>
              <Form>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone" />
                </Form.Group>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="enquiry-btn w-100" type="submit">Send Enquiry</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <style>
        {`

        .form-label {
    margin-bottom: 0.5rem;
    color: black;
}
    .contact-hero-section {
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 60px;
}

.contact-label {
  display: inline-block;
  background-color: #fce4ec; /* Light pink */
  color: #c2185b; /* Deep pink */
  font-size: 14px;
  padding: 5px 12px;
  border-radius: 5px;
  font-weight: 500;
}

.contact-title {
  font-size: 28px;
  font-weight: bold;
  color: #000;
}

.contact-title .highlight {
  color: #e91e63; /* Highlighted pink */
}

.contact-subtitle {
  font-size: 16px;
  color: #444;
  margin-top: 10px;
}
.contact-section {
  padding: 60px 0;
  background-color: #fff;
}

.contact-box {
  border-radius: 10px;
  background: #f9f9f9;
}

.contact-heading {
  color: #E53D5C;
}

.contact-text {
  color: #333;
  font-size: 15px;
}

.contact-list li {
  margin-bottom: 10px;
  font-size: 15px;
  color: #444;
  display: flex;
  align-items: center;
}



.info-box .info-title span {
  color: #E53D5C;
}

.info-box p {
  color: #555;
  font-size: 15px;
}

.enquiry-form-box {
  background: #f9f9f9;
  border-radius: 10px;
}

.enquiry-form-box h6 span {
  color: #E53D5C;
}

.enquiry-btn {
  background-color: #E53D5C;
  border: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.enquiry-btn:hover {
  background-color: #d63350;
}
`}
      </style>
    </section>
  );
};

export default Contact;
