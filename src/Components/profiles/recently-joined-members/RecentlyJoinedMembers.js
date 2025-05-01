import React, { useState, useEffect } from "react";
import axios from "axios";
import { TfiReload } from "react-icons/tfi";

const FilterCardGallery = () => {
  const [activeFilter, setActiveFilter] = useState("recentlyJoined");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/get-users.php"
        );
        console.log("API Data:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("There was an error fetching users!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Calculate age from DOB
  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Format height (5.6 => 5'6")
  const formatHeight = (height) => {
    if (!height) return "N/A";
    const [feet, inches] = height.split(".");
    return `${feet}'${inches}"`;
  };

  // Filter users based on active filter
  const filterData = {
    recentlyJoined: users.slice(0, 8), // First 8 as recently joined
    matchedProfiles: users.filter((user) => user.matched), // Assuming a matched property exists
    recentlySentInterest: users.slice(-8).reverse(), // Last 8 as recently sent interest
  };

  return (
    <div className="filter-card-gallery">
      <div className="content-wrapper">
        <div className="filter-buttons">
          <button
            className={activeFilter === "recentlyJoined" ? "active" : ""}
            onClick={() => setActiveFilter("recentlyJoined")}
          >
            Recently Joined Matches
          </button>
          <button
            className={activeFilter === "matchedProfiles" ? "active" : ""}
            onClick={() => setActiveFilter("matchedProfiles")}
          >
            Matched Profiles
          </button>
          <button
            className={activeFilter === "recentlySentInterest" ? "active" : ""}
            onClick={() => setActiveFilter("recentlySentInterest")}
          >
            Recently Sent Interest
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="cards-grid">
            {filterData[activeFilter].map((member) => (
              <div key={member.user_id} className="member-card">
                <img
                  // src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${member.image1}`}
                  // alt={member.name}
                  // onError={(e) => {
                  //   e.target.src = "./default.webp";
                  //   e.target.onerror = null;
                  // }}
                  src={
                    member.image1
                      ? `http://localhost/perfomdigi/hindu-humsfar-react/backend/${member.image1}`
                      : "/default.jpg"
                  }
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = "/default.jpg";
                    e.target.onerror = null;
                  }}
                  className="member-image"
                />
                <div className="member-info">
                  <h5>{member.name}</h5>
                  <div className="member-id-gender">
                    <span className="member-id">
                      {member.gender === "male"
                        ? "M"
                        : member.gender === "female"
                        ? "F"
                        : ""}
                    </span>
                    <span className="member-id">H{member.user_id}</span>
                  </div>

                  <div className="member-details">
                    <div className="detail-row">
                      <span className="detail-label">Age:</span>
                      <span className="detail-value">
                        {calculateAge(member.dob)} Yrs
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Height:</span>
                      <span className="detail-value">
                        {formatHeight(member.height)}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Gender:</span>
                      <span className="detail-value">
                        {member.gender === "male"
                          ? "Male"
                          : member.gender === "female"
                          ? "Female"
                          : "N/A"}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Caste:</span>
                      <span className="detail-value">
                        {member.caste || "N/A"}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">
                        {member.curr_location || member.country || "India"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <a href="#" className="load-more">
          <TfiReload /> Load More Profiles
        </a>
      </div>

      <style jsx>{`
        .member-info h5,
        .member-id {
          color: white !important;
          text-align: center !important;
        }
        .member-info {
          text-align: center !important;
        }
        .detail-label {
          color: white !important;
        }
        .detail-value {
          color: white !important;
        }
        .filter-card-gallery {
          padding: 60px 20px;
          background: #fff;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          border-bottom: 1px solid #eee;
          gap: 20px;
        }

        .filter-buttons button {
          background: none;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          color: #666;
          position: relative;
          transition: all 0.3s ease;
        }

        .filter-buttons button:hover {
          color: #e53d5c;
        }

        .filter-buttons button.active {
          color: #e53d5c;
          font-weight: bold;
        }

        .filter-buttons button.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #e53d5c;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .member-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .member-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .member-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .member-info {
          background: #e53d5c;
          color: white;
          padding: 15px;
        }

        .member-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          justify-content: center;
        }

        .gender-badge {
          background: white;
          color: #e53d5c;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
        }

        .member-id {
          font-weight: bold;
          color: white;
        }

        .member-details {
          font-size: 13px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .detail-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .detail-row span:first-child {
          font-weight: 500;
        }

        .load-more {
          display: block;
          text-align: center;
          color: black;
          font-size: 16px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 30px;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .load-more:hover {
          color: #e53d5c;
          text-decoration: underline;
        }

        .loading {
          text-align: center;
          padding: 50px;
          color: #666;
        }

        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .member-details {
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .filter-buttons {
            flex-wrap: wrap;
            gap: 10px;
          }

          .filter-buttons button {
            padding: 8px 12px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .filter-card-gallery {
            padding: 40px 15px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .member-details {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterCardGallery;
