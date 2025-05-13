import React, { useState, useEffect } from "react";
import { FaSearch, FaIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CustomSearch.css"; // Import external CSS

const CustomSearch = () => {
  const [lookingFor, setLookingFor] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [religion] = useState("Hindu"); // No setter needed if static
  const [caste, setCaste] = useState("");
  const [casteOptions, setCasteOptions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL ||
    "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/custom-search.php";

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/caste.php`);
        if (response.data.success) {
          setCasteOptions(response.data.data.caste || []);
        } else {
          setCasteOptions([]);
          setError("Failed to load caste options.");
        }
      } catch (error) {
        console.error("Failed to fetch caste options", error);
        setError("Failed to load caste options. Please try again.");
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSearchResults([]);
    setIsLoading(true);

    if (parseInt(minAge) > parseInt(maxAge)) {
      setError("Minimum age cannot be greater than maximum age.");
      setIsLoading(false);
      return;
    }

    try {
      const payload = { lookingFor, minAge, maxAge, minHeight, caste, religion };
      console.log("Sending request with payload:", payload);
      const response = await axios.post(`${API_BASE_URL}/custom-search.php`, payload);
      console.log("API Response:", response.data);

      if (response.data.success) {
        setSearchResults(response.data.data || []);
      } else {
        setError("No profiles found matching your criteria.");
      }
    } catch (error) {
      console.error("Search failed:", error);
      setError("An error occurred while searching. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to calculate age from dob
  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Helper function to convert string to title case
  const toTitleCase = (str) => {
    if (!str) return "N/A";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const [religionOptions, setReligionOptions] = useState([]);
  
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(
          "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/caste.php"
        );
  
        if (response.data.success) {
          setCasteOptions(response.data.data.caste || []);
          setReligionOptions(response.data.data.religion || []);
        } else {
          setCasteOptions([]);
          setReligionOptions([]);
        }
      } catch (error) {
        console.error("Failed to fetch caste/religion options", error);
      }
    };
  
    fetchOptions();
  }, []);

  return (
    <div style={{ justifyContent: "center", display: "flex" }} className="py-5">
      <div className="popup-form">
        <h2>
          Search <span className="highlight">For Your Partner</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lookingFor">Looking For *</label>
            <select
              id="lookingFor"
              name="lookingFor"
              required
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Groom">Groom</option>
              <option value="Bride">Bride</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="minAge">Min Age *</label>
              <select
                id="minAge"
                required
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
              >
                <option value="">Select</option>
                {Array.from({ length: 32 }, (_, i) => (
                  <option key={i + 18} value={i + 18}>
                    {i + 18}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="maxAge">Max Age *</label>
              <select
                id="maxAge"
                required
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
              >
                <option value="">Select</option>
                {Array.from({ length: 32 }, (_, i) => (
                  <option key={i + 18} value={i + 18}>
                    {i + 18}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="minHeight">Min Height *</label>
              <select
                id="minHeight"
                required
                value={minHeight}
                onChange={(e) => setMinHeight(e.target.value)}
              >
                <option value="">Select</option>
                {[
                  "4'8",
                  "4'9",
                  "5'0",
                  "5'1",
                  "5'2",
                  "5'3",
                  "5'4",
                  "5'5",
                  "5'6",
                  "5'7",
                  "5'8",
                  "5'9",
                  "6'0",
                ].map((h, i) => (
                  <option key={i} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="religion">Religion *</label>
            <input
              type="text"
              id="religion"
              name="religion"
              value={religion}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="caste">Caste *</label>
            <select
              id="caste"
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
              required
            >
              <option value="">Select Caste</option>
              {casteOptions.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="search-btn search-btn-full"
            disabled={isLoading}
          >
            <FaSearch /> {isLoading ? "Searching..." : "Search"}
          </button>
          <div className="divider">Or</div>
          <Link to="/search-id">
            <button type="button" className="search-id-btn">
              <FaIdCard /> Search By ID
            </button>
          </Link>
        </form>

        {error && (
          <div
            className="error-message"
            style={{ color: "red", marginTop: "20px", textAlign: "center" }}
          >
            {error}
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Search Results</h3>
            <div className="profiles-grid">
              {searchResults.map((profile, index) => (
                <div key={index} className="profile-card">
                  <h4>{profile.name || "Unknown"}</h4>
                  <p>
                    <strong>Age:</strong> {calculateAge(profile.dob)}
                  </p>
                  <p>
                    <strong>Height:</strong> {profile.height || "N/A"}
                  </p>
                  <p>
                    <strong>Caste:</strong> {profile.caste || "N/A"}
                  </p>
                  <p>
                    <strong>Religion:</strong> {toTitleCase(profile.religion) || "N/A"}
                  </p>
                  <Link to={`/profile/${profile.user_id}`}>
                    <button className="view-profile-btn">View Profile</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSearch;