import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SearchPartnerById = () => {
  return (
    <div className="py-5">
      <div className="text-center mb-4">
        <button className="btn btn-outline-danger btn-sm mb-2">Partner Search </button>
        <h3 className="report-heading">
        Partner   <span className="highlight">Search</span>
        </h3>
        <p className="sub-text">
          Most Trusted And Premium Matrimony Service In The World.
        </p>
      </div>
 
    <div className="id-search-form my-5">
      <h2>
        Search <span className="highlight">For Your Partner</span>
      </h2>

      <div className="form-group">
        <label>Search By Profile ID:</label>
        <input
          type="text"
          className="search-inputt"
          placeholder="e.g. HH1234"
        />
      </div>

      <button type="button" className=" search-btn-full">
        <FaSearch /> Search
      </button>

      <div className="divider">Or</div>
<button type="button" className="search-id-btnn">
  <Link to='custom-search' style={{ textDecoration: 'none', color: 'inherit' }}>
    Click Here For Custom Search
  </Link>
</button>


      <style>{`
      .report-heading {
  font-size: 2rem;
}

.highlight {
  color: #e53d5c;
}

.sub-text {
  color: #6c757d;
  font-size: 1rem;
}
      .id-search-form {
  max-width: 50%;
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
`
}</style>
    </div>
    </div>
  );
};

export default SearchPartnerById;
