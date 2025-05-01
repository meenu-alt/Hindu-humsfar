import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../home/images/logo.png';
import { FaSearch } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

const Header = () => {
    const [formData, setFormData] = useState({
      lookingFor: '',
      minAge: '',
      maxAge: '',
      minHeight: '',
      religion: '',
      caste: ''
    });
  
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchId, setSearchId] = useState("");
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleAdvancedSearch = (e) => {
      e.preventDefault();
      console.log('Advanced Search:', formData);
      setIsSearchModalOpen(false);
      // Here you would typically make an API call with the search criteria
    };

    const handleSimpleSearch = async () => {
      try {
        const response = await axios.post("http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/search.php", {
          searchId
        });
        console.log("Search Results:", response.data);
      } catch (error) {
        console.error("Search failed:", error);
      }
    };
  
    return (
      <header className="header">
        {/* Desktop Layout */}
        <div className="desktop-header">
          {/* Left: Logo */}
          <div className="logo">
            <Link to='/'><img src={logo} alt="Logo" className="img-fluid" /></Link> 
          </div>

          {/* Center: Search Section */}
          <div className="search-container">
            <p
              className="search-select"
              onClick={() => setIsSearchModalOpen(true)}>
              Looking For?
            </p>

            <p
              className="search-select"
              onClick={() => setIsSearchModalOpen(true)}>
              Caste
            </p>

            <div className="simple-search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search By ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSimpleSearch()}
              />
              <button className="search-btn" onClick={handleSimpleSearch}>
                <FaSearch/>
              </button>
            </div>
          </div>

          {/* Right: Blog + Icons + Profile */}
          <div className="header-right">
            <span className="blog-link">Blog</span>

            <div className="icons">
              <span className="icon message"><AiFillMessage /><span className="dot" /></span>
              <span className="icon notification"><IoNotifications /> <span className="dot" /></span>
            </div>

            <div className="profile-container" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img src="/user.jpg" alt="User" className="profile-img" />
              <span className="arrow">▾</span>
              {isDropdownOpen && (
                <div className="dropdown">
                  <ul>
                    <li>My Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-header">
          <div className="mobile-header-top">
            <div className="logo">
              <Link to='/'><img src={logo} alt="Logo" className="img-fluid" /></Link> 
            </div>
            <button 
              className="mobile-toggle" 
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {isMobileNavOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className={`mobile-nav-content ${isMobileNavOpen ? 'show' : ''}`}>
            {/* Search Section */}
            <div className="mobile-search-container">
              <div className="simple-search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search By ID"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSimpleSearch()}
                />
                <button className="search-btn" onClick={handleSimpleSearch}>
                  <FaSearch/>
                </button>
              </div>

              <div className="mobile-search-options">
                <button 
                  className="mobile-search-option"
                  onClick={() => setIsSearchModalOpen(true)}
                >
                  Looking For?
                </button>
                <button 
                  className="mobile-search-option"
                  onClick={() => setIsSearchModalOpen(true)}
                >
                  Caste
                </button>
              </div>
            </div>

            {/* Right: Blog + Icons + Profile */}
            <div className="mobile-header-right">
              <span className="blog-link">Blog</span>

              <div className="mobile-icons">
                <span className="icon message"><AiFillMessage /><span className="dot" /></span>
                <span className="icon notification"><IoNotifications /> <span className="dot" /></span>
              </div>

              <div className="profile-container" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img src="/user.jpg" alt="User" className="profile-img" />
                <span>My Profile</span>
                <span className="arrow">▾</span>
                {isDropdownOpen && (
                  <div className="dropdown">
                    <ul>
                      <li>My Profile</li>
                      <li>Settings</li>
                      <li>Logout</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Search Modal */}
        {isSearchModalOpen && (
          <div className="popup-overlay" onClick={() => setIsSearchModalOpen(false)}>
            <div className="popup-form" onClick={(e) => e.stopPropagation()}>
              <h2>
                Search <span className="highlight">For Your Partner</span>
              </h2>
              <form onSubmit={handleAdvancedSearch}>
                <div className="form-group">
                  <label>Looking For *</label>
                  <select 
                    name="lookingFor" 
                    value={formData.lookingFor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Groom">Groom</option>
                    <option value="Bride">Bride</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Min Age *</label>
                    <select 
                      name="minAge" 
                      value={formData.minAge}
                      onChange={handleChange}
                      required
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
                      value={formData.maxAge}
                      onChange={handleChange}
                      required
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
                      value={formData.minHeight}
                      onChange={handleChange}
                      required
                    >
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
                  <select 
                    name="religion" 
                    value={formData.religion}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Caste *</label>
                  <select 
                    name="caste" 
                    value={formData.caste}
                    onChange={handleChange}
                    required
                  >
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
          </div>
        )}

        <style jsx>{`
          .header {
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            z-index: 10;
          }

          /* Desktop Header */
          .desktop-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
          }

          .logo img {
            height: 40px;
            width: auto;
          }

          .search-container {
            display: flex;
            align-items: center;
            background: #f8f8f8;
            border-radius: 25px;
            padding: 5px 15px;
            flex: 0.6;
            border: 1px solid #e0e0e0;
          }

          .search-select {
            padding: 8px 12px;
            font-size: 14px;
            color: #555;
            cursor: pointer;
            margin: 0;
            font-weight: 500;
            border-right: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
          }

          .search-select:last-child {
            border-right: none;
          }

          .simple-search-container {
            display: flex;
            flex: 1;
            align-items: center;
          }

          .search-input {
            flex: 1;
            border: none;
            padding: 8px 12px;
            font-size: 14px;
            outline: none;
            background: transparent;
          }

          .search-btn {
            background: #e53d5c;
            color: white;
            border: none;
            padding: 8px 15px;
            cursor: pointer;
            font-size: 14px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .header-right {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .blog-link {
            font-weight: 500;
            cursor: pointer;
            color: #555;
            font-size: 14px;
          }

          .icons {
            display: flex;
            gap: 15px;
          }

          .icon {
            position: relative;
            font-size: 20px;
            cursor: pointer;
            color: #555;
          }

          .dot {
            position: absolute;
            top: -3px;
            right: -3px;
            width: 8px;
            height: 8px;
            background: #e53d5c;
            border-radius: 50%;
          }

          .profile-container {
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            gap: 5px;
          }

          .profile-img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #e53d5c;
          }

          .arrow {
            color: #777;
            font-size: 12px;
          }

          .dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 8px 0;
            z-index: 1000;
            min-width: 150px;
          }

          .dropdown ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .dropdown li {
            padding: 8px 16px;
            cursor: pointer;
            font-size: 14px;
          }

          .dropdown li:hover {
            background: #f5f5f5;
            color: #e53d5c;
          }

          /* Mobile Header */
          .mobile-header {
            display: none;
            padding: 15px;
          }

          .mobile-header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .mobile-toggle {
            border: none;
            background: transparent;
            font-size: 1.5rem;
            color: #555;
            padding: 0.5rem;
          }

          .mobile-nav-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
          }

          .mobile-nav-content.show {
            max-height: 500px;
          }

          .mobile-search-container {
            margin-top: 15px;
          }

          .mobile-search-options {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }

          .mobile-search-option {
            flex: 1;
            padding: 10px;
            background: #f8f8f8;
            border: 1px solid #e0e0e0;
            border-radius: 20px;
            text-align: center;
            font-size: 14px;
            color: #555;
            cursor: pointer;
          }

          .mobile-header-right {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .mobile-icons {
            display: flex;
            gap: 15px;
          }

          /* Modal Styles */
          .popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

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
            display: flex;
            align-items: center;
            text-align: center;
            margin: 15px 0;
            color: #999;
            font-weight: bold;
          }

          .divider::before,
          .divider::after {
            content: "";
            flex: 1;
            border-bottom: 1px solid #eee;
            margin: 0 10px;
          }

          .search-btn-full {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border-radius: 6px;
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

          /* Responsive */
          @media (max-width: 992px) {
            .desktop-header {
              display: none;
            }
            .mobile-header {
              display: block;
            }
          }
        `}</style>
      </header>
    );
};

export default Header;