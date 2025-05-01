import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaIdCard } from "react-icons/fa";

const CustomSearch = () => {
  return (
    <div style={{justifyContent: "center", display: "flex"}} className="py-5">
      <div className="popup-form">
        <h2>
          Search <span className="highlight">For Your Partner</span>
        </h2>
        <form>
          <div className="form-group">
            <label>Looking For *</label>
            <select name="lookingFor" required>
              <option value="">Select</option>
              <option value="Groom">Groom</option>
              <option value="Bride">Bride</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Min Age *</label>
              <select name="minAge" required>
                {Array.from({ length: 32 }, (_, i) => (
                  <option key={i + 18} value={i + 18}>
                    {i + 18}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Max Age *</label>
              <select name="maxAge" required>
                {Array.from({ length: 32 }, (_, i) => (
                  <option key={i + 18} value={i + 18}>
                    {i + 18}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Min Height *</label>
              <select name="minHeight" required>
                <option value="">Select</option>
                <option value="5'0">4'8</option>
                <option value="5'0">4'9</option>
                <option value="5'0">5'0</option>
                <option value="5'5">5'5</option>
                <option value="5'8">5'8 (1.73 Mts)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Religion *</label>
            <select name="religion" required>
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
            </select>
          </div>

          <div className="form-group">
            <label>Caste *</label>
            <select name="caste" required>
              <option value="">Select Caste</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC/ST">SC/ST</option>
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
      </div>
      <style>
        {` 
          .popup-form {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            overflow-y: auto;
            max-height: 90vh;
           

          }

          .popup-form h2 {
            margin-bottom: 20px;
            font-size: 24px;
            text-align: center;
            color: #333;
          }

          .highlight {
            color: #e53d5c;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
            color: #555;
          }

          .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
            background: #f8f8f8;
          }

          .form-row {
            display: flex;
            gap: 10px;
          }

          .form-row .form-group {
            flex: 1;
          }

          .divider {
            text-align: center;
            margin: 15px 0;
            color: #999;
            font-weight: bold;
            position: relative;
          }

          .divider:before, .divider:after {
            content: "";
            flex: 1;
            border-bottom: 1px solid #eee;
            margin: auto;
          }

          .divider:before {
            margin-right: 10px;
          }

          .divider:after {
            margin-left: 10px;
          }

          .search-id-btn {
            width: 100%;
            background: #fff;
            border: 1px solid #e53d5c;
            color: #e53d5c;
            padding: 12px;
            font-size: 14px;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.3s ease;
          }

          .search-id-btn:hover {
            background: #fdf2f4;
          }
`}
      </style>
    </div>
  );
};

export default CustomSearch;
