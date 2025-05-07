import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import axios from "axios";


const EditProfileForm = () => {

      // caste data
      const [casteOptions, setCasteOptions] = useState([]);
  
      useEffect(() => {
        axios
          .get(
            "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/caste.php"
          )
          .then((response) => {
            setCasteOptions(response.data);
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
    <div className="container py-4">
        <style>
            {`/* EditProfileForm.css */
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
`}
        </style>
      <div className="card p-4">
        <h5 className="mb-3">BASIC INFO</h5>
        <h4>Edit My Profile</h4>
        <div className="form-group mb-3">
          <input type="text" className="form-control" placeholder="Profile ID" />
        </div>
        <div className="form-group mb-3">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group mb-3">
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
        <div className="form-group mb-4">
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <h5 className="mb-2 section-heading">BASIC INFO</h5>
<h4 className="mb-3">Advanced Bio</h4>
<div className="row g-3">
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Religion *" required />
  </div>
  <div className="col-md-6">
  <div className="form-group">
                    <label className="form-label">Sub Caste</label>
                    <Select
  options={casteOptions.map((caste) => ({ label: caste, value: caste }))}
  value={{ label: formData.caste, value: formData.caste }}
  onChange={(selected) => ({ target: { name: "caste", value: selected.value } })}
/>
                  </div>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Current Location *" required />
  </div>  
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Mother Tongue *" required />
  </div>
  <div className="col-md-6">
    <select className="form-select" required>
      <option value="">Manglik Dosha *</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-select" required>
      <option value="">Marital Status *</option>
      <option>Never Married</option>
      <option>Divorced</option>
      <option>Widowed</option>
      <option>Awaiting Divorce</option>
    </select>
  </div>
  <div className="col-md-6">
    <input type="number" className="form-control" placeholder="Age *" required />
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Height (e.g., 5'4\) *" required />
  </div>
  <div className="col-md-6">
    <input type="number" className="form-control" placeholder="Weight (in Kg)" />
  </div>
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Body Type *</option>
      <option>Slim</option>
      <option>Athletic</option>
      <option>Average</option>
      <option>Heavy</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Physical Status *</option>
      <option>Normal</option>
      <option>Physically Challenged</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Eating Habits *</option>
      <option>Vegetarian</option>
      <option>Non-Vegetarian</option>
      <option>Eggetarian</option>
      <option>Jain</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Drinking Habits *</option>
      <option>No</option>
      <option>Yes</option>
      <option>Occasionally</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Smoking Habits *</option>
      <option>No</option>
      <option>Yes</option>
      <option>Occasionally</option>
    </select>
  </div>
  <div className="col-md-6">
    <input type="file" className="form-control" />
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Kundali Status (Uploaded/Not Uploaded)" />
  </div>
</div>



        <h5 className="mt-4 mb-3">BASIC INFO</h5>
        <h4>Job & Education</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Job Sector" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Occupation" />
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Company Name</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Education</option>
            </select>
          </div>
          <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Salary Package" />
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Company Location</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Highest Education</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Education Qualification</option>
            </select>
          </div>
          
        </div>

        <h5 className="mt-4 mb-3">FAMILY DETAILS</h5>
<h4>Family Information</h4>
<div className="row g-3">
<div className="col-md-6"> 
  <select className="form-select">
    <option value="">Sister(s)</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4+">4+</option>
  </select>
</div>

<div className="col-md-6"> 
  <select className="form-select">
    <option value="">Brother(s)</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4+">4+</option>
  </select>
</div>

<div className="col-md-6"> 
  <select className="form-select">
    <option value="">Gothra</option>
    <option value="Bharadwaj">Bharadwaj</option>
    <option value="Kashyap">Kashyap</option>
    <option value="Vashishtha">Vashishtha</option>
    <option value="Other">Other</option>
  </select>
</div>

<div className="col-md-6"> 
  <select className="form-select">
    <option value="">Gothra (Maternal)</option>
    <option value="Bharadwaj">Bharadwaj</option>
    <option value="Kashyap">Kashyap</option>
    <option value="Vashishtha">Vashishtha</option>
    <option value="Other">Other</option>
  </select>
</div>
 
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Family Type</option>
      <option>Joint Family</option>
      <option>Nuclear Family</option>
    </select>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Family Belongs To (State)" />
  </div>
  <div className="col-md-6">
    <select className="form-select">
      <option value="">Living with Parents?</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="col-md-6"> 
  <select className="form-select">
    <option value="">Country</option>
    <option>India</option>
    <option>USA</option>
    <option>UK</option>
    <option>Canada</option>
    <option>Australia</option>
  </select>
</div>

<div className="col-md-6"> 
  <select className="form-select">
    <option value="">Current State</option>
    <option>Delhi</option>
    <option>Maharashtra</option>
    <option>Karnataka</option>
    <option>Punjab</option>
    <option>Other</option>
  </select>
</div>

<div className="col-md-6"> 
  <select className="form-select">
    <option value="">Current City</option>
    <option>Delhi</option>
    <option>Mumbai</option>
    <option>Bangalore</option>
    <option>Chandigarh</option>
    <option>Other</option>
  </select>
</div>
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="Pincode" />
  </div>
</div>


        <h5 className="mt-4 mb-3">BASIC INFO</h5>
        <h4>Hobbies & Interests</h4>
        <div className="form-group mb-3">
          <select className="form-select">
            <option>Hobbies & Interests</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <input type="text" className="form-control" placeholder="Movies, Music, Hiking etc." />
        </div>

        <button className="btn btn-danger w-100">Update Profile</button>
      </div>
    </div>
  );
};

export default EditProfileForm;
