import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../../../public/default.jpg"

const RecentlyJoined = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/get-users.php"
      )
      .then((response) => {
        console.log("API Data:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  // Function to calculate age from DOB
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

  // Function to format height (assuming height is stored as "feet.inches" like "5.6")
  const formatHeight = (height) => {
    if (!height) return "N/A";
    const parts = height.split(".");
    if (parts.length === 2) {
      return `${parts[0]}'${parts[1]}"`;
    }
    return height;
  };

  return (
    <div className="recently-joined-container">
      <div className="content-wrapper">
        <div className="heading">
          <h3 className="text-center">
            Recently Joined Members –{" "}
            <span style={{ color: "#E53D5C" }}>Start Connecting Now!</span>
          </h3>
        </div>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            loopedSlides={users.length}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {users.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="member-card">
                  <img
                    src={
                      member.image1
                        ? `http://localhost/perfomdigi/hindu-humsfar-react/backend/${member.image1}`
                        : "/default.jpg"
                    }
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = "/default.jpg";
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <a href="#" className="view-more text-end">
          View More Profile
        </a>
      </div>

      <style jsx>{`
        .member-info h5,
        .member-id {
          color: white !important;
          text-align: center;
        }
        .detail-label {
          color: white !important;
        }
        .detail-value {
          color: white !important;
        }
        .recently-joined-container {
          padding: 60px 20px;
          background: #fff;
        }
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }
        .swiper-container {
          padding: 0 40px;
          position: relative;
          margin-bottom: 30px;
        }
        .member-card {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
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
          height: 300px;
          object-fit: cover;
          display: block;
        }
        .member-info {
          background: #e53d5c;
          color: white;
          padding: 15px;
        }
        .member-id-gender {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          justify-content: center;
        }
        .gender-badge {
          background: white;
          color: #e53d5c;
          border-radius: 3px;
          padding: 2px 5px;
          font-weight: bold;
          margin-right: 8px;
        }
        .member-id {
          font-weight: bold;
          font-size: 14px;
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
        .detail-label {
          font-weight: 500;
        }
        .detail-value {
          text-align: right;
        }
        .view-more {
          display: block;
          text-align: center;
          color: #e53d5c;
          font-size: 16px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 30px;
          transition: color 0.3s ease;
        }
        .view-more:hover {
          color: #c2334d;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #e53d5c;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #e53d5c;
          color: white;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #e53d5c;
        }
        @media (max-width: 768px) {
          .swiper-container {
            padding: 0 20px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .recently-joined-container {
            padding: 40px 15px;
          }
          .member-details {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default RecentlyJoined;
