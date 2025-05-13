import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import axios from "axios";

const EditProfileForm = () => {
  // Form data state
  const [formData, setFormData] = useState({
    profileId: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "male",
    lookingFor: "female",
    religion: "Hindu",
    caste: null,
    minAge: 25,
    maxAge: 46,
    currentLocation: "",
    motherTongue: "",
    manglik: "",
    maritalStatus: "",
    age: "",
    height: "",
    weight: "",
    bodyType: "",
    physicalStatus: "",
    eatingHabits: "",
    drinkingHabits: "",
    smokingHabits: "",
    jobSector: "",
    occupation: "",
    companyName: "",
    education: "",
    salary: "",
    sisters: "",
    brothers: "",
    gothra: null,
    maternalGothra: null,
    familyType: "",
    familyState: "",
    livingWithParents: "",
    country: null,
    states: null,
    city: null,
    pincode: "",
    hobbies: "",
  });

  // Options data state
  const [options, setOptions] = useState({
    caste: [],
    gothra: [],
    cities: [], // Assume cities are objects like { name: "New Delhi", state: "Delhi" }
    countries: [],
    income: [],
    message: [],
    states: [],
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
          states: Array.isArray(response.data.data.states) ? response.data.data.states : [],
        };

        setOptions(transformedOptions);
      } catch (err) {
        console.error("Error fetching options:", err);
        setError(err.message);
        setOptions({
          caste: [],
          gothra: [],
          cities: [],
          countries: [],
          income: [],
          message: [],
          states: [],
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle select changes
  const handleSelectChange = (name, selectedOption) => {
    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [name]: selectedOption ? selectedOption.value : null,
      };
      // Reset city when state changes
      if (name === "states") {
        newFormData.city = null;
      }
      return newFormData;
    });
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

  // Helper function to prepare select options
  const prepareSelectOptions = (items, key = null) => {
    return items.map((item) => ({
      label: key ? item[key] : item,
      value: key ? item[key] : item,
    }));
  };

  // Filter cities based on selected state
  const filteredCities = formData.states
    ? options.cities.filter((city) => city.state === formData.states)
    : [];

  return (
    <div className="container py-4">
      <style>
        {`
          .custom-card {
            max-width: 800px;
            margin: auto;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            background-color: #fff;
          }

          .section-heading {
            color: #999;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 5px;
            margin-top: 20px;
          }

          h4 {
            font-weight: 600;
            margin-bottom: 20px;
          }

          .form-control,
          .form-select {
            border-radius: 8px;
            padding: 10px 15px;
            font-size: 0.95rem;
          }

          input::placeholder {
            color: #ccc;
          }

          .btn-danger {
            background-color: #e94560;
            border: none;
            border-radius: 8px;
            font-weight: bold;
          }

          .btn-danger:hover {
            background-color: #d6334a;
          }
          .css-13cymwt-control {
            border-color: #dee2e6 !important;
          }
          .css-13cymwt-control:hover {
            border-color: #dee2e6 !important;
          }
        `}
      </style>

      <form onSubmit={handleSubmit}>
        <div className="card p-4">
          <h5 className="mb-3">BASIC INFO</h5>
          <h4>Edit My Profile</h4>

          {/* Basic Information */}
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Profile ID"
              name="profileId"
              value={formData.profileId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Advanced Bio */}
          <h5 className="mb-2 section-heading">BASIC INFO</h5>
          <h4 className="mb-3">Advanced Bio</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Religion *"
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <Select
                  classNamePrefix="react-select"
                  options={prepareSelectOptions(options.caste)}
                  value={prepareSelectOptions(options.caste).find((opt) => opt.value === formData.caste)}
                  onChange={(selected) => handleSelectChange("caste", selected)}
                  placeholder="Select Sub Caste"
                  isDisabled={options.caste.length === 0}
                />
              </div>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Current Location *"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Mother Tongue *"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="manglik"
                value={formData.manglik}
                onChange={handleInputChange}
                required
              >
                <option value="">Manglik Dosha *</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                required
              >
                <option value="">Marital Status *</option>
                <option value="Never Married">Never Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Awaiting Divorce">Awaiting Divorce</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="Age *"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Height (e.g., 5'4)"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="Weight (in Kg)"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="bodyType"
                value={formData.bodyType}
                onChange={handleInputChange}
              >
                <option value="">Body Type *</option>
                <option value="Slim">Slim</option>
                <option value="Athletic">Athletic</option>
                <option value="Average">Average</option>
                <option value="Heavy">Heavy</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="physicalStatus"
                value={formData.physicalStatus}
                onChange={handleInputChange}
              >
                <option value="">Physical Status *</option>
                <option value="Normal">Normal</option>
                <option value="Physically Challenged">Physically Challenged</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="eatingHabits"
                value={formData.eatingHabits}
                onChange={handleInputChange}
              >
                <option value="">Eating Habits *</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Eggetarian">Eggetarian</option>
                <option value="Jain">Jain</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="drinkingHabits"
                value={formData.drinkingHabits}
                onChange={handleInputChange}
              >
                <option value="">Drinking Habits *</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="smokingHabits"
                value={formData.smokingHabits}
                onChange={handleInputChange}
              >
                <option value="">Smoking Habits *</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="file"
                className="form-control"
                name="profilePhoto"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Job & Education */}
          <h5 className="mt-4 mb-3">BASIC INFO</h5>
          <h4>Job & Education</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Job Sector"
                name="jobSector"
                value={formData.jobSector}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              >
                <option value="">Company Name</option>
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
              >
                <option value="">Education</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
              </select>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <Select
                  classNamePrefix="react-select"
                  name="salary"
                  options={prepareSelectOptions(options.income)}
                  value={prepareSelectOptions(options.income).find((opt) => opt.value === formData.salary)}
                  onChange={(selected) => handleSelectChange("salary", selected)}
                  placeholder="Select Salary Package"
                  isDisabled={options.income.length === 0}
                />
              </div>
            </div>
          </div>

          {/* Family Details */}
          <h5 className="mt-4 mb-3">FAMILY DETAILS</h5>
          <h4>Family Information</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <select
                className="form-select"
                name="sisters"
                value={formData.sisters}
                onChange={handleInputChange}
              >
                <option value="">Sister(s)</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="brothers"
                value={formData.brothers}
                onChange={handleInputChange}
              >
                <option value="">Brother(s)</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            <div className="col-md-6">
              <Select
                classNamePrefix="react-select"
                name="gothra"
                options={prepareSelectOptions(options.gothra)}
                value={prepareSelectOptions(options.gothra).find((opt) => opt.value === formData.gothra)}
                onChange={(selected) => handleSelectChange("gothra", selected)}
                placeholder="Select Gothra"
                isDisabled={options.gothra.length === 0}
              />
            </div>
            <div className="col-md-6">
              <Select
                classNamePrefix="react-select"
                name="maternalGothra"
                options={prepareSelectOptions(options.gothra)}
                value={prepareSelectOptions(options.gothra).find((opt) => opt.value === formData.maternalGothra)}
                onChange={(selected) => handleSelectChange("maternalGothra", selected)}
                placeholder="Select Maternal Gothra"
                isDisabled={options.gothra.length === 0}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="familyType"
                value={formData.familyType}
                onChange={handleInputChange}
              >
                <option value="">Family Type</option>
                <option value="Joint Family">Joint Family</option>
                <option value="Nuclear Family">Nuclear Family</option>
              </select>
            </div>
            
            <div className="col-md-6">
              <select
                className="form-select"
                name="livingWithParents"
                value={formData.livingWithParents}
                onChange={handleInputChange}
              >
                <option value="">Living with Parents?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-6">
              <Select
                classNamePrefix="react-select"
                name="country"
                options={prepareSelectOptions(options.countries)}
                value={prepareSelectOptions(options.countries).find((opt) => opt.value === formData.country)}
                onChange={(selected) => handleSelectChange("country", selected)}
                placeholder="Select Country"
                isDisabled={options.countries.length === 0}
              />
            </div>
            <div className="col-md-6">
              <Select
                classNamePrefix="react-select"
                name="familyState"
                options={prepareSelectOptions(options.states)}
                value={prepareSelectOptions(options.states).find((opt) => opt.value === formData.familyState)}
                onChange={(selected) => handleSelectChange("familyState", selected)}
                placeholder="Select State Family Belongs To "
                isDisabled={options.states.length === 0}
              />
            </div>
            <div className="col-md-6">
              <Select
                classNamePrefix="react-select"
                name="city"
                options={prepareSelectOptions(filteredCities, "name")}
                value={prepareSelectOptions(filteredCities, "name").find((opt) => opt.value === formData.city)}
                onChange={(selected) => handleSelectChange("city", selected)}
                placeholder="Select City"
                isDisabled={filteredCities.length === 0}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Hobbies & Interests */}
          <h5 className="mt-4 mb-3">BASIC INFO</h5>
          <h4>Hobbies & Interests</h4>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Movies, Music, Hiking etc."
              name="hobbies"
              value={formData.hobbies}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;