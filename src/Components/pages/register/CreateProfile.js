import React, {useEffect, useState} from 'react';
import logo from '../../../Components/home/images/logo.png';
import coupleImage from '../../../assets/images/couples/Vector.png';
import axios from "axios";
import Select from "react-select";

const CreateProfile = () => {

    // caste data
    const [casteOptions, setCasteOptions] = useState([]);
    const [gothraOptions, setGothraOptions] = useState([]);
    const [citiesOptions, setCitiesOptions] = useState([]);
    const [CountriesOptions, setCountriesOptions] = useState([]);
    const [IncomeOptions, setIncomeOptions] = useState([]);
    const [MessageOptions, setMessageOptions] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/caste.php"
        )
        .then((response) => {
          const data = response.data;
          setCasteOptions(data.caste || []);
        setGothraOptions(data.gothra || []);
        setCityOptions(data.cities || []);
        setCountriesOptions(data.countries || []);
        setIncomeOptions(data.income || []);
        setMessageOptions(data.message || []);
        })
        .catch((error) => {
          console.error("Error fetching caste data:", error);
        });
    }, []);
    
      const [formData, setFormData] = useState({
        gender: "male",
        lookingFor: "female",
        religion: "Hindu",
        caste: "Select Caste",
        minAge: 25,
        maxAge: 46,
      });
    // caste data
  return (
<>
<div className='d-none d-lg-block'>
    <div className="create-profile-wrapper">
      <img src={logo} alt="Hindu Humsafar" className="create-profile-logo" />
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
  }

/* Button Styles */
.submit-btn {
  margin-top: 1;

  /* Mobile responsiveness */
  @media (max-width: 575.98px) {
    .create-profile-container {
    padding: 0 1rem;
    width: 100%;
        display: flex;
    height: auto !important;
    overflow: hidden;
  }
  }
@media (max-width: 768px) {
  .create-profile-container {
    padding: 0 1rem;
    width: 100%;
        display: flex;
    height: auto !important;
    overflow: hidden;
  }

  .create-profile-form-side {
    width: 100%;
  }

  .form-row {
    flex-direction: column;
  }

  .form-group {
    width: 100%;
  }

  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
  }

  .create-profile-form {
    overflow: visible; /* Remove scroll */
  }

  .container {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
}
.form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
   `}
      </style>

     <div className='container d-none d-lg-block'>
     <div className="create-profile-container">
        {/* Left Side Form */}
        <div className="create-profile-form-side">
          <h1 className="create-profile-heading">Create Profile</h1>
          <p className="create-profile-subheading">Start your journey here</p>

          <form className="create-profile-form">
            {/* Section 1: Basic Details */}
            {/* Section 1: Basic Details */}
<h3 className="form-section-title">Basic Details</h3>

<div className="form-group">
  <label className="form-label">Description</label>
  <textarea 
    className="form-textarea" 
    placeholder="Write something about yourself..."
    defaultValue="Hello, I am Ankit. Welcome to my profile. My mother tongue is Hindi. If you like my profile then send me Interest."
  />
</div>

<div className="form-row">  
  <div className="form-group">
    <label className="form-label">Sub Caste</label>
    <Select
  options={casteOptions.map((caste) => ({ label: caste, value: caste }))}
  value={{ label: formData.caste, value: formData.caste }}
  onChange={(selected) => ({ target: { name: "caste", value: selected.valu/e } })}
/>
  </div>
  <div className="form-group">
    <label className="form-label">Current Location *</label>
    <Select
  options={CountriesOptions.map((Countries) => ({ label: Location, value: Country }))}
  value={{ label: formData.caste, value: formData.caste }}
  onChange={(selected) => ({ target: { name: "caste", value: selected.value } })}
/>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Manglik Dosha</label>
    <select className="form-select">
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Marital Status *</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Height (in feet) *</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Weight (in Kg)</label>
    <input type="text" className="form-input" placeholder="Not Filled" />
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Body Type</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Physical Status *</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Eating Habits</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Drinking Habits</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Smoking Habits</label>
    <select className="form-select">
      <option>Not Filled</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Upload Kundali (pdf, jpeg, png)</label>
    <input type="file" className="form-input" accept=".pdf,.jpeg,.jpg,.png" />
  </div>
</div>


            {/* Section 2: Education & Career */}
      {/* Section 2: Education & Career */}
<h3 className="form-section-title">Education & Career</h3>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Highest Education *</label>
    <select className="form-select">
      <option>Select</option>
      <option>Bachelor's</option>
      <option>Master's</option>
      <option>Ph.D.</option>
      <option>Diploma</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Education Qualification</label>
    <select className="form-select">
      <option>Select</option>
      <option>B.Tech</option>
      <option>MBA</option>
      <option>M.Sc</option>
      <option>Other</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Occupation *</label>
    <select className="form-select">
      <option>Select</option>
      <option>Engineer</option>
      <option>Doctor</option>
      <option>Teacher</option>
      <option>Business</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Employed In</label>
    <select className="form-select">
      <option>Select</option>
      <option>Private</option>
      <option>Government</option>
      <option>Self-employed</option>
      <option>Unemployed</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Annual Income</label>
    <input type="text" className="form-input" placeholder="e.g. ₹5 LPA" />
  </div>
  <div className="form-group">
    <label className="form-label">Organization Name</label>
    <input type="text" className="form-input" placeholder="Company/Organization Name" />
  </div>
</div>
            {/* Section 3: Family Details */}
<h3 className="form-section-title">Family Details</h3>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Sister(s)</label>
    <select className="form-select">
      <option>Not Filled</option>
      <option>None</option>
      <option>1</option>
      <option>2</option>
      <option>3+</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Brother(s)</label>
    <select className="form-select">
      <option>Not Filled</option>
      <option>None</option>
      <option>1</option>
      <option>2</option>
      <option>3+</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Gothra</label>
    <Select
  options={gothraOptions.map((Countries) => ({ label: Gothra, value: gothra }))}
  value={{ label: formData.gothra, value: formData.gothra }}
  onChange={(selected) => ({ target: { name: "gothra", value: selected.value } })}
/>
  </div>
  <div className="form-group">
    <label className="form-label">Gothra (Maternal)</label>
    <Select
  options={gothraOptions.map((Countries) => ({ label: Gothra, value: gothra }))}
  value={{ label: formData.gothra, value: formData.gothra }}
  onChange={(selected) => ({ target: { name: "gothra", value: selected.value } })}
/>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Family Status</label>
    <select className="form-select">
      <option>Not Filled</option>
      <option>Middle Class</option>
      <option>Upper Middle Class</option>
      <option>Rich</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Family Type</label>
    <select className="form-select">
      <option>Not Filled</option>
      <option>Joint</option>
      <option>Nuclear</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Family belongs To</label>
    <select className="form-select">
      <option>Not Filled</option>
      <option>Delhi</option>
      <option>Mumbai</option>
      <option>Other</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Living with parents?</label>
    <select className="form-select">
      <option>Not Filled</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Country *</label>
    <select className="form-select">
      <option>India</option>
      <option>USA</option>
      <option>UK</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Current State *</label>
    <select className="form-select">
      <option>Select State</option>
      <option>Maharashtra</option>
      <option>Delhi</option>
      <option>Karnataka</option>
    </select>
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label className="form-label">Current City</label>
    <select className="form-select">
      <option>Select City</option>
      <option>Mumbai</option>
      <option>Pune</option>
      <option>Bangalore</option>
    </select>
  </div>
  <div className="form-group">
    <label className="form-label">Pincode</label>
    <input type="text" className="form-input" placeholder="Not Filled" />
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

    
     <div className='container  d-block d-lg-none'>
     <div className="container-fluid">
        <div className="row create-profile-container">
          {/* Left Side Form */}
          <div className="col-lg-7 col-md-12 p-4">
            <h1 className="create-profile-heading">Create Profile</h1>
            <p className="create-profile-subheading">Start your journey here</p>

            <form className="create-profile-form">
              {/* Section 1: Basic Details */}
              <h3 className="form-section-title">Basic Details</h3>

              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea 
                      className="form-textarea" 
                      placeholder="Write something about yourself..."
                      defaultValue="Hello, I am Ankit. Welcome to my profile. My mother tongue is Hindi. If you like my profile then send me Interest."
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Sub Caste</label>
                    <Select
  options={casteOptions.map((caste) => ({ label: caste, value: caste }))}
  value={{ label: formData.caste, value: formData.caste }}
  onChange={(selected) => ({ target: { name: "caste", value: selected.value } })}
/>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Current Location *</label>
                    <select className="form-select">
                      <option>India</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Manglik Dosha</label>
                    <select className="form-select">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Marital Status *</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Height (in feet) *</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Weight (in Kg)</label>
                    <input type="text" className="form-input" placeholder="Not Filled" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Body Type</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Physical Status *</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Eating Habits</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Drinking Habits</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Smoking Habits</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Upload Kundali (pdf, jpeg, png)</label>
                    <input type="file" className="form-input" accept=".pdf,.jpeg,.jpg,.png" />
                  </div>
                </div>
              </div>

              {/* Section 2: Education & Career */}
              <h3 className="form-section-title">Education & Career</h3>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Highest Education *</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>Ph.D.</option>
                      <option>Diploma</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Education Qualification</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>B.Tech</option>
                      <option>MBA</option>
                      <option>M.Sc</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Occupation *</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Engineer</option>
                      <option>Doctor</option>
                      <option>Teacher</option>
                      <option>Business</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Employed In</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Private</option>
                      <option>Government</option>
                      <option>Self-employed</option>
                      <option>Unemployed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Annual Income</label>
                    <input type="text" className="form-input" placeholder="e.g. ₹5 LPA" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Organization Name</label>
                    <input type="text" className="form-input" placeholder="Company/Organization Name" />
                  </div>
                </div>
              </div>

              {/* Section 3: Family Details */}
              <h3 className="form-section-title">Family Details</h3>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Sister(s)</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>None</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3+</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Brother(s)</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>None</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Gothra</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Gothra 1</option>
                      <option>Gothra 2</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Gothra (Maternal)</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Maternal Gothra 1</option>
                      <option>Maternal Gothra 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Family Status</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Middle Class</option>
                      <option>Upper Middle Class</option>
                      <option>Rich</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Family Type</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Joint</option>
                      <option>Nuclear</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Family belongs To</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Living with parents?</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Country *</label>
                    <select className="form-select">
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Current State *</label>
                    <select className="form-select">
                      <option>Select State</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Current City</label>
                    <select className="form-select">
                      <option>Select City</option>
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-input" placeholder="Not Filled" />
                  </div>
                </div>
              </div>

              <button type="submit" className="create-btn">Submit</button>
            </form>
          </div>

          {/* Right Side Image - Hidden on mobile */}
          <div className="col-lg-5 d-none d-lg-block create-profile-image-side">
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
     </div>

     
    </div>
    </div>
    <div className="create-profile-wrapper d-block d-lg-none">
      <img src={logo} alt="Hindu Humsafar" className="create-profile-logo" />
      <style>
        {` 
        /* Main Layout */
          @media (max-width: 575.98px) {
    .create-profile-container {
    padding: 0 1rem;
    width: 100%;
        display: flex;
    height: auto !important;
    overflow: hidden;
  }
  }
@media (max-width: 768px) {
  .create-profile-container {
    padding: 0 1rem;
    width: 100%;
        display: flex;
    height: auto !important;
    overflow: hidden;
  }
.create-profile-wrapper {
  min-height: 100vh;
  background-color: #fff;
}

.create-profile-logo {
  max-width: 180px;
  margin: 20px;
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
  margin-bottom: 1rem;
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
  width: 100%;
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

/* Image Side Styles */
.create-profile-image-side {
  position: relative;
  background-color: #F8E1E7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 100%;
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
  margin-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .create-profile-image-side {
    display: none;
  }
  
  .create-profile-heading {
    font-size: 1.5rem;
  }
  
  .form-section-title {
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) {
  .create-profile-container {
    height: calc(100vh - 80px);
  }
}
   `}
      </style>

      <div className="container-fluid">
        <div className="row create-profile-container">
          {/* Left Side Form */}
          <div className="col-lg-7 col-md-12 p-4">
            <h1 className="create-profile-heading">Create Profile</h1>
            <p className="create-profile-subheading">Start your journey here</p>

            <form className="create-profile-form">
              {/* Section 1: Basic Details */}
              <h3 className="form-section-title">Basic Details</h3>

              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea 
                      className="form-textarea" 
                      placeholder="Write something about yourself..."
                      defaultValue="Hello, I am Ankit. Welcome to my profile. My mother tongue is Hindi. If you like my profile then send me Interest."
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Sub Caste</label>
                    <Select
  options={casteOptions.map((caste) => ({ label: caste, value: caste }))}
  value={{ label: formData.caste, value: formData.caste }}
  onChange={(selected) => ({ target: { name: "caste", value: selected.value } })}
/>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Current Location *</label>
                    <select className="form-select">
                      <option>India</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Manglik Dosha</label>
                    <select className="form-select">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Marital Status *</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Height (in feet) *</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Weight (in Kg)</label>
                    <input type="text" className="form-input" placeholder="Not Filled" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Body Type</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Physical Status *</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Eating Habits</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Drinking Habits</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Smoking Habits</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Upload Kundali (pdf, jpeg, png)</label>
                    <input type="file" className="form-input" accept=".pdf,.jpeg,.jpg,.png" />
                  </div>
                </div>
              </div>

              {/* Section 2: Education & Career */}
              <h3 className="form-section-title">Education & Career</h3>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Highest Education *</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>Ph.D.</option>
                      <option>Diploma</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Education Qualification</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>B.Tech</option>
                      <option>MBA</option>
                      <option>M.Sc</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Occupation *</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Engineer</option>
                      <option>Doctor</option>
                      <option>Teacher</option>
                      <option>Business</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Employed In</label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Private</option>
                      <option>Government</option>
                      <option>Self-employed</option>
                      <option>Unemployed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Annual Income</label>
                    <input type="text" className="form-input" placeholder="e.g. ₹5 LPA" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Organization Name</label>
                    <input type="text" className="form-input" placeholder="Company/Organization Name" />
                  </div>
                </div>
              </div>

              {/* Section 3: Family Details */}
              <h3 className="form-section-title">Family Details</h3>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Sister(s)</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>None</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3+</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Brother(s)</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>None</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Gothra</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Gothra 1</option>
                      <option>Gothra 2</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Gothra (Maternal)</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Maternal Gothra 1</option>
                      <option>Maternal Gothra 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Family Status</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Middle Class</option>
                      <option>Upper Middle Class</option>
                      <option>Rich</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Family Type</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Joint</option>
                      <option>Nuclear</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Family belongs To</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Living with parents?</label>
                    <select className="form-select">
                      <option>Not Filled</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Country *</label>
                    <select className="form-select">
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Current State *</label>
                    <select className="form-select">
                      <option>Select State</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Current City</label>
                    <select className="form-select">
                      <option>Select City</option>
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-input" placeholder="Not Filled" />
                  </div>
                </div>
              </div>

              <button type="submit" className="create-btn">Submit</button>
            </form>
          </div>

          {/* Right Side Image - Hidden on mobile */}
          <div className="col-lg-5 d-none d-lg-block create-profile-image-side">
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
    </div>
</>

  );
};

export default CreateProfile;