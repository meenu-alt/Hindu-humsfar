import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";



const MyProfilePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/get-users.php')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formatHeight = (height) => {
    if (!height) return 'N/A';
    const parts = height.split('.');
    return parts.length === 2 ? `${parts[0]}'${parts[1]}"` : height;
  };

  return (
    <div className="container py-5">
      {users.map((user, idx) => (
        <div className="card mb-5 p-4" key={idx}>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <img src={user.image} className="img-fluid rounded" alt="Profile" />
              <h4 className="mt-3">{user.name}</h4>
              <div className="d-flex justify-content-center mt-2 gap-2">
                <span className="badge bg-warning text-dark">100+ Viewers</span>
              </div>
            </div>

            <div className="col-md-8">
              <h5>About</h5>
              <p>{user.desc || "This is a sample about section text with placeholder content."}</p>

              <h5 className="mt-4">Photo Gallery</h5>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={3}
                spaceBetween={10}
                className="mySwiper"
              >
                <SwiperSlide><img src={user.image} alt="gallery" className="img-fluid rounded" /></SwiperSlide>
                <SwiperSlide><img src={user.image} alt="gallery" className="img-fluid rounded" /></SwiperSlide>
                <SwiperSlide><img src={user.image} alt="gallery" className="img-fluid rounded" /></SwiperSlide>
              </Swiper>

              <h5 className="mt-4">Profile Information</h5>
              <div className="row">
                <div className="col-sm-6">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>DOB:</strong> {user.dob}</p>
                  <p><strong>Age:</strong> {calculateAge(user.dob)}</p>
                </div>
                <div className="col-sm-6">
                  <p><strong>Height:</strong> {formatHeight(user.height)}</p>
                  <p><strong>Degree:</strong> {user.degree}</p>
                  <p><strong>Caste:</strong> {user.caste}</p>
                </div>
              </div>

              <h5 className="mt-4">Hobbies</h5>
              <div className="d-flex flex-wrap gap-2">
                {(user.hobbies || ['Modeling', 'Movies', 'Cooking']).map((hobby, i) => (
                  <span className="badge bg-light text-dark border" key={i}>{hobby}</span>
                ))}
              </div>

              <h5 className="mt-4">Socials</h5>
              <div className="d-flex gap-3 fs-5">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProfilePage;
