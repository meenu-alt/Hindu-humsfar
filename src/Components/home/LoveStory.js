import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import Heart from "./images/heart.png";

const WeddingSwiper = () => {
  const [loveStories, setLoveStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/success-story.php";
  const IMAGE_BASE_URL = "http://localhost/perfomdigi/hindu-humsfar-react/backend/"; 

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log("Love Stories Data:", response.data);
        setLoveStories(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching love stories!", error);
        setError("Failed to load love stories. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="wedding-swiper-container">
      <h3 className="heading text-center">
        From Strangers to Soulmates – <span style={{ color: "#E53D5C" }}>Real Love Stories!</span>
      </h3>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading stories...</p>
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : loveStories.length === 0 ? (
        <p style={{ textAlign: "center" }}>No love stories found.</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={loveStories.length > 1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="wedding-swiper-wrapper"
        >
          {loveStories.map((story, index) => (
            <SwiperSlide key={story.ss_id || index} className="wedding-swiper-slide">
              <div className="wedding-slide-content">
                <div className="wedding-image-container">
                  <img
                    alt={story.groom_name}
                    className="wedding-profile-image"
                    src={`${IMAGE_BASE_URL}${story.groom_image}`}
                    onError={(e) => (e.target.src = "https://placehold.co/120x120?text=Groom")}
                  />
                  <div className="wedding-heart-icon-container">
                    <img
                      alt="Heart"
                      className="wedding-heart-icon"
                      src={Heart}
                    />
                  </div>
                  <img
                    alt={story.bride_name}
                    className="wedding-profile-image"
                    src={`${IMAGE_BASE_URL}${story.bride_image}`}
                    onError={(e) => (e.target.src = "https://placehold.co/120x120?text=Bride")}
                  />
                </div>

                <p className="wedding-testimonial-text">{story.groom_msg}</p>
                <p className="wedding-couple-names">
                  {story.groom_name} &amp; {story.bride_name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <style jsx>{`
        .wedding-swiper-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .heading {
          font-size: 24px;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .wedding-slide-content {
          text-align: center;
        }

        .wedding-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .wedding-profile-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .wedding-heart-icon-container {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          border: 4px solid #E53D5C;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wedding-heart-icon {
          width: 40px;
          height: 40px;
        }

        .wedding-testimonial-text {
          font-size: 1.1rem;
          font-weight: 600;
          max-width: 500px;
          margin: 0 auto 10px;
          line-height: 1.5;
        }

        .wedding-couple-names {
          font-size: 1rem;
          color: #E53D5C;
          font-weight: 600;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: #E53D5C;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #E53D5C;
          color: white;
        }

        .swiper-pagination-bullet {
          background: #ccc;
        }

        .swiper-pagination-bullet-active {
          background: #E53D5C;
        }

        @media (max-width: 768px) {
          .wedding-image-container {
            flex-direction: column;
          }

          .wedding-profile-image {
            width: 100px;
            height: 100px;
          }

          .wedding-heart-icon-container {
            width: 50px;
            height: 50px;
          }

          .wedding-heart-icon {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingSwiper;
