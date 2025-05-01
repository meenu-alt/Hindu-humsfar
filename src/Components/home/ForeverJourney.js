import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ForeverJourney = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/testimonial.php')
      .then(response => {
        console.log("API Data:", response.data);

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          setTestimonials(response.data);
        } 
        // If data is wrapped inside an object
        else if (response.data && Array.isArray(response.data.data)) {
          setTestimonials(response.data.data);
        } 
        else {
          console.error("Expected an array but got:", response.data);
          setTestimonials([]); // fallback to empty array
        }
      })
      .catch(error => {
        console.error("There was an error fetching users!", error);
        setTestimonials([]); // fallback to empty array
      });
  }, []);

  return (
    <div className="testimonial-container">
      <div className="heading">
        <h3 className="text-center"><span style={{ color: "#E53D5C" }}> Hindu Humsafar </span>– A Journey to Forever </h3>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Array.isArray(testimonials) && testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">
                {t.text}
              </p>
              <p className="testimonial-text">
                {t.message}
              </p>
              <div className="testimonial-footer">
                <div>
                  <strong>{t.name}</strong>, {t.location}
                </div>
                <img src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${t.image}`} alt={t.name} className="testimonial-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .testimonial-container {
          padding: 40px;
          max-width: 1200px;
          margin: auto;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .quote-icon {
          font-size: 30px;
          color: #000;
          margin-bottom: 10px;
        }

        .testimonial-text {
          font-style: italic;
          color: #333;
          flex-grow: 1;
          font-size: 14px;
        }

        .testimonial-footer {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .testimonial-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ForeverJourney;
