import React, { useState, useEffect } from "react";
import { FaIdCard, FaSearch, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const PartnerSearch = () => {
  // Form state
  const [searchCriteria, setSearchCriteria] = useState({
    lookingFor: "",
    minAge: "18",
    maxAge: "45",
    minHeight: "",
    religion: "Hindu",
    caste: ""
  });

  // Results and UI state
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [casteOptions, setCasteOptions] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  // Fetch caste and religion options on component mount
  useEffect(() => {
    const fetchOptions = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL || "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api"}/caste.php`
        );

        if (response.data.success) {
          setCasteOptions(response.data.data.caste || []);
          setFetchError(null);
        } else {
          setFetchError("Failed to load options");
        }
      } catch (error) {
        console.error("Failed to fetch options:", error);
        setFetchError("Network error. Please check your connection.");
        setCasteOptions([]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchOptions();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    if (parseInt(searchCriteria.minAge) > parseInt(searchCriteria.maxAge)) {
      setSearchError("Minimum age cannot be greater than maximum age");
      return false;
    }
    setSearchError(null);
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL || "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api"}/custom-search.php`,
        searchCriteria,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      setResults(response.data || []);
      setSearchError(null);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchError("Failed to perform search. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
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
          
          {/* Error messages */}
          {searchError && <div className="alert alert-danger">{searchError}</div>}
          {fetchError && <div className="alert alert-warning">{fetchError}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Looking For *</label>
              <select 
                name="lookingFor" 
                value={searchCriteria.lookingFor} 
                onChange={handleChange} 
                required
                disabled={isFetching}
              >
                <option value="">Select</option>
                <option value="Male">Groom</option>
                <option value="Female">Bride</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Min Age *</label>
                <select 
                  name="minAge"
                  value={searchCriteria.minAge} 
                  onChange={handleChange} 
                  required
                  disabled={isFetching}
                >
                  {Array.from({ length: 32 }, (_, i) => (
                    <option key={i + 18} value={i + 18}>
                      {i + 18}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Max Age *</label>
                <select 
                  name="maxAge"
                  value={searchCriteria.maxAge} 
                  onChange={handleChange} 
                  required
                  disabled={isFetching}
                >
                  {Array.from({ length: 32 }, (_, i) => (
                    <option key={i + 18} value={i + 18}>
                      {i + 18}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Min Height *</label>
                <select 
                  name="minHeight"
                  value={searchCriteria.minHeight} 
                  onChange={handleChange} 
                  required
                  disabled={isFetching}
                >
                  <option value="">Select</option>
                  <option value="4.8">4'8</option>
                  <option value="4.9">4'9</option>
                  <option value="5.0">5'0</option>
                  <option value="5.5">5'5</option>
                  <option value="5.8">5'8 (1.73 Mts)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Religion *</label>
              <input
                type="text"
                name="religion"
                value="Hindu"
                disabled
              />
            </div>

            <div className="form-group">
              <label>Caste *</label>
              {isFetching ? (
                <select disabled>
                  <option>Loading castes...</option>
                </select>
              ) : (
                <select 
                  name="caste"
                  value={searchCriteria.caste} 
                  onChange={handleChange} 
                  required
                  disabled={isFetching}
                >
                  <option value="">Select Caste</option>
                  {casteOptions.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              )}
            </div>

            <button 
              type="submit" 
              className="search-btn search-btn-full"
              disabled={loading || isFetching}
            >
              {loading ? <FaSpinner className="spinner" /> : <FaSearch />}
              {loading ? "Searching..." : "Search"}
            </button>

            <div className="divider">Or</div>

            <Link to="/search-id">
              <button type="button" className="search-id-btn">
                <FaIdCard /> Search By ID
              </button>
            </Link>
          </form>

          {/* Results Section */}
          {loading ? (
            <div className="text-center mt-4">
              <FaSpinner className="spinner" /> Loading results...
            </div>
          ) : results.length > 0 ? (
            <div className="search-results mt-4">
              <h4>Search Results ({results.length})</h4>
              <div className="row">
                {results.map((user) => (
                  <div key={user.id} className="col-md-4 mb-4">
                    <div className="card profile-card">
                      <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">
                          <strong>Gender:</strong> {user.gender}<br />
                          <strong>Age:</strong> {user.age}<br />
                          <strong>Caste:</strong> {user.caste}<br />
                          <strong>Height:</strong> {user.height}
                        </p>
                        <Link to={`/profile/${user.id}`} className="btn btn-primary">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            !loading && results.length === 0 && (
              <div className="alert alert-info mt-4">
                No results found. Try different search criteria.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerSearch;