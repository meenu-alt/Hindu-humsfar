import React, { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const PartnerSearch = () => {
  const [lookingFor, setLookingFor] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      lookingFor,
      caste,
      // You can add minAge, maxAge, minHeight, religion when your backend supports it
    };

    try {
      const response = await fetch("http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/custom-search.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="py-5">
      <div className="text-center mb-4">
        <button className="btn btn-outline-danger btn-sm mb-2">
          Partner Search
        </button>
        <h3 className="report-heading">
          Partner <span className="highlight">Search</span>
        </h3>
        <p className="sub-text">
          Most Trusted And Premium Matrimony Service In The World.
        </p>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }} className="py-5">
        <div className="popup-form">
          <h2>
            Search <span className="highlight">For Your Partner</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Looking For *</label>
              <select name="lookingFor" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} required>
                <option value="">Select</option>
                <option value="Male">Groom</option>
                <option value="Female">Bride</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Min Age *</label>
                <select value={minAge} onChange={(e) => setMinAge(e.target.value)} required>
                  {Array.from({ length: 32 }, (_, i) => (
                    <option key={i + 18} value={i + 18}>
                      {i + 18}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Max Age *</label>
                <select value={maxAge} onChange={(e) => setMaxAge(e.target.value)} required>
                  {Array.from({ length: 32 }, (_, i) => (
                    <option key={i + 18} value={i + 18}>
                      {i + 18}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Min Height *</label>
                <select value={minHeight} onChange={(e) => setMinHeight(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="4'8">4'8</option>
                  <option value="4'9">4'9</option>
                  <option value="5'0">5'0</option>
                  <option value="5'5">5'5</option>
                  <option value="5'8">5'8 (1.73 Mts)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Religion *</label>
              <select value={religion} onChange={(e) => setReligion(e.target.value)} required>
                <option value="">Select</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
              </select>
            </div>

            <div className="form-group">
              <label>Caste *</label>
              <select value={caste} onChange={(e) => setCaste(e.target.value)} required>
                <option value="">Select Caste</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC/ST">SC/ST</option>
                <option value="Rajput">Rajput</option>
                <option value="Brahmin">Brahmin</option>
                <option value="Jat">Jat</option>
              </select>
            </div>

            <button type="submit" className="search-btn search-btn-full">
              Search
            </button>

            <div className="divider">Or</div>

            <Link to="/search-id">
              <button type="button" className="search-id-btn">
                <FaIdCard /> Search By ID
              </button>
            </Link>
          </form>

          {/* 🔍 Results Section */}
          {results.length > 0 && (
            <div className="search-results mt-4">
              <h4>Search Results</h4>
              <ul>
                {results.map((user) => (
                  <li key={user.id}>
                    {user.name} - {user.gender} - {user.caste}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerSearch;
