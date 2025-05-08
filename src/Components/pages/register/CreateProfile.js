import React, { useEffect, useState } from 'react';
import axios from "axios";
import Select from "react-select";
import logo from '../../../Components/home/images/logo.png';
import coupleImage from '../../../assets/images/couples/Vector.png';

const CreateProfile = () => {
  // Form data state
  const [formData, setFormData] = useState({
    description: "Hello, I am Ankit. Welcome to my profile. My mother tongue is Hindi. If you like my profile then send me Interest.",
    caste: null,
    country: null,
    manglik: "No",
    maritalStatus: "Single",
    height: "",
    weight: "",
    bodyType: "",
    physicalStatus: "",
    eatingHabits: "",
    drinkingHabits: "",
    smokingHabits: "",
    highestEducation: "",
    educationQualification: "",
    occupation: "",
    employedIn: "",
    annualIncome: "",
    organizationName: "",
    sisters: "",
    brothers: "",
    gothra: null,
    maternalGothra: null,
    familyStatus: "",
    familyType: "",
    familyBelongsTo: "",
    livingWithParents: "",
    state: null,
    city: null,
    pincode: ""
  });

  // Options data state
  const [options, setOptions] = useState({
    caste: [],
    gothra: [],
    cities: [],
    countries: [],
    income: [],
    message: [],
    states: []
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all dropdown options
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await axios.get(
          "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/caste.php"
        );

        if (!response.data.success) {
          throw new Error(response.data.error || "Failed to fetch options");
        }

        // Transform all options to ensure they're arrays
        const transformedOptions = {
          caste: Array.isArray(response.data.data.caste) ? response.data.data.caste : [],
          gothra: Array.isArray(response.data.data.gothra) ? response.data.data.gothra : [],
          cities: Array.isArray(response.data.data.cities) ? response.data.data.cities : [],
          countries: Array.isArray(response.data.data.countries) ? response.data.data.countries : [],
          income: Array.isArray(response.data.data.income) ? response.data.data.income : [],
          message: Array.isArray(response.data.data.message) ? response.data.data.message : [],
          states: Array.isArray(response.data.data.states) ? response.data.data.states : []
        };

        setOptions(transformedOptions);
      } catch (err) {
        console.error("Error fetching options:", err);
        setError(err.message);
        // Initialize with empty arrays if request fails
        setOptions({
          caste: [],
          gothra: [],
          cities: [],
          countries: [],
          income: [],
          message: [],
          states: []
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchOptions();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (name, selectedOption) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  if (isLoading) {
    return <div className="loading">Loading options...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className='create-profile-wrapper'>
      <img src={logo} alt="Hindu Humsafar" className="create-profile-logo" />
      
      <div className='container'>
        <div className="create-profile-container">
          {/* Left Side Form */}
          <div className="create-profile-form-side">
            <h1 className="create-profile-heading">Create Profile</h1>
            <p className="create-profile-subheading">Start your journey here</p>

            <form className="create-profile-form" onSubmit={handleSubmit}>
              {/* Section 1: Basic Details */}
              <h3 className="form-section-title">Basic Details</h3>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea 
                  className="form-textarea" 
                  name="description"
                  placeholder="Write something about yourself..."
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">  
                <div className="form-group">
                  <label className="form-label">Sub Caste</label>
                  <Select
                    options={options.caste.map(caste => ({ 
                      label: caste, 
                      value: caste 
                    }))}
                    value={formData.caste}
                    onChange={(selected) => handleSelectChange("caste", selected)}
                    placeholder="Select Caste"
                    isDisabled={options.caste.length === 0}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Current Location *</label>
                  <Select
                    options={options.countries.map(country => ({ 
                      label: country, 
                      value: country 
                    }))}
                    value={formData.country}
                    onChange={(selected) => handleSelectChange("country", selected)}
                    placeholder="Select Country"
                    isDisabled={options.countries.length === 0}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Manglik Dosha</label>
                  <select 
                    className="form-select" 
                    name="manglik"
                    value={formData.manglik}
                    onChange={handleInputChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Marital Status *</label>
                  <select 
                    className="form-select" 
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                  >
                    <option value="Single">Single</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Height (in feet) *</label>
                  <select 
                    className="form-select" 
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Height</option>
                    {Array.from({length: 24}, (_, i) => 4 + (i * 0.5)).map(height => (
                      <option key={height} value={height}>{height} ft</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Weight (in Kg)</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    name="weight"
                    placeholder="Enter weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Section 2: Education & Career */}
              <h3 className="form-section-title">Education & Career</h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Highest Education *</label>
                  <select 
                    className="form-select" 
                    name="highestEducation"
                    value={formData.highestEducation}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="Ph.D.">Ph.D.</option>
                    <option value="Diploma">Diploma</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Education Qualification</label>
                  <select 
                    className="form-select" 
                    name="educationQualification"
                    value={formData.educationQualification}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Occupation *</label>
                  <select 
                    className="form-select" 
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Employed In</label>
                  <select 
                    className="form-select" 
                    name="employedIn"
                    value={formData.employedIn}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Private">Private</option>
                    <option value="Government">Government</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Unemployed">Unemployed</option>
                  </select>
                </div>
              </div>

              {/* Section 3: Family Details */}
              <h3 className="form-section-title">Family Details</h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Gothra</label>
                  <Select
                    options={options.gothra.map(gothra => ({ 
                      label: gothra, 
                      value: gothra 
                    }))}
                    value={formData.gothra}
                    onChange={(selected) => handleSelectChange("gothra", selected)}
                    placeholder="Select Gothra"
                    isDisabled={options.gothra.length === 0}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Gothra (Maternal)</label>
                  <Select
                    options={options.gothra.map(gothra => ({ 
                      label: gothra, 
                      value: gothra 
                    }))}
                    value={formData.maternalGothra}
                    onChange={(selected) => handleSelectChange("maternalGothra", selected)}
                    placeholder="Select Maternal Gothra"
                    isDisabled={options.gothra.length === 0}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Current State *</label>
                  <Select
                    options={options.states.map(state => ({ 
                      label: state, 
                      value: state 
                    }))}
                    value={formData.state}
                    onChange={(selected) => handleSelectChange("state", selected)}
                    placeholder="Select State"
                    isDisabled={options.states.length === 0}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Current City</label>
                  <Select
                    options={options.cities.map(city => ({ 
                      label: city, 
                      value: city 
                    }))}
                    value={formData.city}
                    onChange={(selected) => handleSelectChange("city", selected)}
                    placeholder="Select City"
                    isDisabled={options.cities.length === 0}
                  />
                </div>
              </div>

              <button type="submit" className="create-btn">Submit</button>
            </form>
          </div>

          {/* Right Side Image */}
          <div className="create-profile-image-side d-none d-lg-block">
            <img src={coupleImage} alt="Couple" className="couple-image" />
            <div className="image-overlay">
              <h2 className="overlay-heading">
                Your Journey To Love Begins <span className="highlight">Here!</span>
              </h2>
              <p className="overlay-text">
                Connect With Genuine Matches Who Share Your <span className="highlight">Values</span> And <span className="highlight">Dreams</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        /* Main Layout */
        .create-profile-wrapper {
          min-height: 100vh;
          background-color: #fff;
        }

        .create-profile-logo {
          max-width: 180px;
          margin: 20px;
        }

        .create-profile-container {
          display: flex;
          height: calc(100vh - 80px);
          overflow: hidden;
        }

        /* Form Side Styles */
        .create-profile-form-side {
          width: 60%;
          padding: 40px;
          overflow-y: auto;
          background-color: #fff;
        }

        .create-profile-heading {
          font-size: 2rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .create-profile-subheading {
          color: #666;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .create-profile-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-section-title {
          margin-top: 2rem;
          color: #E53D5C;
          font-size: 1.3rem;
          font-weight: 600;
        }

        /* Form Elements */
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #333;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 0.8rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #E53D5C;
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .form-row {
          display: flex;
          gap: 1.5rem;
        }

        .form-row > .form-group {
          flex: 1;
        }

        /* Image Side Styles */
        .create-profile-image-side {
          width: 40%;
          position: relative;
          background-color: #F8E1E7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .couple-image {
          width: 100%;
          max-width: 300px;
          margin-bottom: 20px;
        }

        .image-overlay {
          text-align: center;
          max-width: 400px;
        }

        .overlay-heading {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .overlay-text {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        .highlight {
          color: #E53D5C;
          font-weight: 600;
        }

        .create-btn {
          padding: 12px;
          background-color: #ff4d6d;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          margin-top: 2rem;
        }

        .loading, .error {
          padding: 2rem;
          text-align: center;
          font-size: 1.2rem;
        }

        .error {
          color: #E53D5C;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .create-profile-container {
            flex-direction: column;
            height: auto;
          }
          
          .create-profile-form-side,
          .create-profile-image-side {
            width: 100%;
          }
          
          .form-row {
            flex-direction: column;
            gap: 1rem;
          }
            .css-13cymwt-control {
            border-color: #dee2e6 !important ;
            }
          .css-13cymwt-control:hover {
            border-color: #dee2e6 !important ;
            }
        }
        `}
      </style>
    </div>
  );
};

export default CreateProfile;