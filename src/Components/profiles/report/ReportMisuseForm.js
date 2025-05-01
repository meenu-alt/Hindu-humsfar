import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReportMisuseForm = () => {
  const [formData, setFormData] = useState({
    misuseId: 'MH001FH1001',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle API submission here
    alert('Report submitted!');
    console.log(formData);
  };

  return (
    <div className="container my-5">
        <style>
            {`.report-heading {
  font-size: 2rem;
}

.highlight {
  color: #e53d5c;
}

.sub-text {
  color: #6c757d;
  font-size: 1rem;
}

.report-form-wrapper {
  max-width: 600px;
  background: #ffffff;
  border: 1px solid #eee;
}

textarea:focus,
input:focus {
  border-color: #e53d5c;
  box-shadow: 0 0 0 0.2rem rgba(229, 61, 92, 0.25);
}
`}
        </style>
      <div className="text-center mb-4">
        <button className="btn btn-outline-danger btn-sm mb-2">Report Abuse</button>
        <h3 className="report-heading">
          Report <span className="highlight">Misuse</span>
        </h3>
        <p className="sub-text">
          Most Trusted And Premium Matrimony Service In The World.
        </p>
      </div>

      <div className="report-form-wrapper mx-auto p-4 shadow-sm rounded">
        <h5 className="mb-3 text-uppercase fw-bold">Report</h5>
        <h6 className="mb-4 text-start fw-semibold text-dark">
          Send Your Enquiry <span className="text-danger fw-semibold ">Now</span>
        </h6>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="misuseId" className="form-label">Misuse ID:</label>
            <input
              type="text"
              className="form-control"
              name="misuseId"
              value={formData.misuseId}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Enter your phone"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              className="form-control"
              name="message"
              placeholder="Enter message"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-danger">Send Report</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportMisuseForm;
