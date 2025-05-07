import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SearchById = () => {
  const [profileId, setProfileId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!profileId.trim()) {
      setError("Please enter a Profile Id.");
      return;
    }

    try {
      const response = await axios.get(
        // "http://localhost/perfomdigi/hindu-humsfar-react/backend/api/search-id.php",
         "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/get-users.php",
        {
          params: { id: profileId },
        }
      );

      const data = response.data;

      if (data.status === "success") {
        navigate(`/profile/${profileId}`);
      } else {
        setError("Profile not Found.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="id-search-form my-5">
      <h2>
        Search <span className="highlight">By Profile ID</span>
      </h2>

      <div className="form-group">
        <label>Search By Profile ID:</label>
        <input
          type="text"
          className="search-inputt"
          placeholder="e.g. HH1234"
          value={profileId}
          onChange={(e) => {
            setProfileId(e.target.value);
            setError("");
          }}
        />
        {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}
      </div>

      <button type="button" className="search-btn-full" onClick={handleSearch}>
        <FaSearch /> Search
      </button>

      <div className="divider">Or</div>

      <button type="button" className="search-id-btnn">
        <Link
          to="/custom-search"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Click Here For Custom Search
        </Link>
      </button>

      <style>{`
        .id-search-form {
          max-width: 400px;
          margin: auto;
          padding: 24px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-family: sans-serif;
        }

        .id-search-form h2 {
          margin-bottom: 20px;
          font-size: 20px;
          text-align: center;
        }

        .highlight {
          color: #e53d5c;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: bold;
        }

        .search-inputt {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
        }

        .search-btn-full,
        .search-id-btnn {
          width: 100%;
          padding: 10px;
          background-color: #e53d5c;
          color: white;
          font-size: 14px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .divider {
          text-align: center;
          margin: 12px 0;
          font-size: 14px;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default SearchById;
