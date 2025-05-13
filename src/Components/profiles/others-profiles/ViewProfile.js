import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../assets/css/style.css'; 
import '../../../assets/css/bootstrap.css'; 
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import MyProfileImage from './myprofile.png';


const ProfilePage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/get-users.php')
      .then(response => {
        console.log("API Data:", response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  // Function to calculate age from DOB
  const calculateAge = (dob) => {
    if (!dob) return 'N/A';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Function to format height (assuming height is stored as "feet.inches" like "5.6")
  const formatHeight = (height) => {
    if (!height) return 'N/A';
    const parts = height.split('.');
    if (parts.length === 2) {
      return `${parts[0]}'${parts[1]}"`;
    }
    return height;
  };

  return (
    <>

    <section>
      <style>
        {`
       .menu-pop-soci ul li link i {
            width: 38px;
    height: 38px;
    background: rgb(247, 247, 247);
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    color: rgb(51, 51, 51);
    font-size: 18px;
    padding: 11px 8px;
    transition: all 0.5s ease;
}
         .member-info h5, .member-id{
            color: white !important;
            text-align: center;
    }
      .detail-label{
            color: white !important;
      }
      .detail-value{
            color: white !important;
      }
        .recently-joined-container {
          padding: 60px 20px;
          background: #fff;
        }
          .swiper-container {
          padding: 0 40px;
          position: relative;
          margin-bottom: 30px;
        }
        .member-card {
          width: 100%;
          max-width: 100%;
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
          background: #E53D5C;
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
          color: #E53D5C;
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
          border-bottom: 1px solid rgba(255,255,255,0.1);
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
        }.swiper-button-next, .swiper-button-prev {
          color: #E53D5C;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #E53D5C;
          color: white;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
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
          background: #E53D5C;
        }
          .menu-pop-soci ul li  i {
    width: 38px;
    height: 38px;
    background: rgb(247, 247, 247);
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    color: rgb(51, 51, 51);
    font-size: 18px;
    padding: 11px 8px;
    transition: all 0.5s ease;
}
        @media (max-width: 768px) {
          .swiper-container {
            padding: 0 20px;
          }
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .recently-joined-container {
            padding: 40px 15px;
          }
          .member-details {
            font-size: 12px;
          }`}
      </style>
        <div class=" profi-ban">
            <div class="container">
                <div class="row">
                    <div class="profile col-lg-4 col-md-12 col-xl-4">
                        <div class="pg-pro-big-im">
                            <div class="s1">
                                <img src={MyProfileImage} loading="lazy" class="pro" alt=""/>
                            </div>
                            {/* <div class="">
                                <a href="#!" class="cta fol cta-chat">Message Now</a>
                            </div> */}
                        </div>
                    </div>
                    <div class=" col-lg-8 col-md-12 col-xl-8">
                        <div class="lhs">
                            <div class="pro-pg-intro">
                                <h1>Angelina Jolie</h1>
                                <div class="pro-info-status">
                                    <span class="stat-1"><b>100</b> viewers</span>
                                    <span class="stat-2"><b>Available</b> online</span>
                                </div>
                                <ul>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-city.png" loading="lazy" alt=""/>
                                            <span>City: <strong>New York</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-age.png" loading="lazy" alt=""/>
                                            <span>Age: <strong>21</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-city.png" loading="lazy" alt=""/>
                                            <span>Height: <strong>5.7</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-city.png" loading="lazy" alt=""/>
                                            <span>Job: <strong>Working</strong></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="pr-bio-c pr-bio-abo">
                                <h3 style={{color: "#E53D5C"}}>About</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English. </p>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text.</p>
                            </div>
                           
                            <div class="pr-bio-c pr-bio-gal" id="gallery">
                                <h3  style={{color: "#E53D5C"}}>Photo gallery</h3>
                                <div id="image-gallery">
                                    <div class="pro-gal-imag">
                                        <div class="img-wrapper">
                                            <a href="#!"><img src="images/profiles/1.jpg" class="img-responsive" alt=""/></a>
                                            <div class="img-overlay"><i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-gal-imag">
                                        <div class="img-wrapper">
                                            <a href="#!"><img src="images/profiles/6.jpg" class="img-responsive" alt=""/></a>
                                            <div class="img-overlay"><i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-gal-imag">
                                        <div class="img-wrapper">
                                            <a href="#!"><img src="images/profiles/14.jpg" class="img-responsive" alt=""/></a>
                                            <div class="img-overlay"><i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                            <div class="pr-bio-c pr-bio-info">
                                <h3 >Profile <span  style={{color: "#E53D5C"}}>information</span> </h3>
                                <ul>
                                    <li><b>Name:</b> Angelina Jolie</li>
                                    <li><b>Fatheres name:</b> John smith</li>
                                    <li><b>Family name:</b> Joney family</li>
                                    <li><b>Age:</b> 24</li>
                                    <li><b>Date of birth:</b>03 Jan 1998</li>
                                    <li><b>Height:</b>167cm</li>
                                    <li><b>Weight:</b>65kg</li>
                                    <li><b>Degree:</b> MSC Computer Science</li>
                                    <li><b>Religion:</b> Any</li>
                                    <li><b>Profession:</b> Working</li>
                                    <li><b>Company:</b> Google</li>
                                    <li><b>Position:</b> Web developer</li>
                                    <li><b>Salary:</b> $1000 p/m</li>
                                </ul>
                            </div>
                            
                            <div class="pr-bio-c pr-bio-hob">
                                <h3 style={{color: "#E53D5C"}}>Hobbies</h3>
                                <ul>
                                    <li><span>Modelling</span></li>
                                    <li><span>Watching movies</span></li>
                                    <li><span>Playing volleyball</span></li>
                                    <li><span>Hangout with family</span></li>
                                    <li><span>Adventure travel</span></li>
                                    <li><span>Books reading</span></li>
                                    <li><span>Music</span></li>
                                    <li><span>Cooking</span></li>
                                    <li><span>Yoga</span></li>
                                </ul>
                            </div>
                          
                            <div class="pr-bio-c menu-pop-soci pr-bio-soc">
                                <h3 style={{color: "#E53D5C"}}>Social media</h3>
                                <ul>
                                    <li><i> <FaFacebookF /></i></li>
                                    <li><i><FaLinkedinIn /></i></li>
                                    <li><i><FaInstagram /></i></li>
                                    <li><i><FaTwitter /></i></li>
                                </ul>
                            </div>
                       


                        </div>

                    
                        <div class="rhs">
                                  
                            <div class="slid-inn pr-bio-c wedd-rel-pro">
                                <h3>Related <span  style={{color: "#E53D5C"}}>profiles</span> </h3>
                                <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true, dynamicBullets:true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            loop={true}
            loopedSlides={users.length}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 25
              }
            }}
          >
            {users.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="member-card" onClick={ ()=> navigate(`/profile/${member.user_id}`) }
                  style={{cursor:"pointer"}}>
                  <img
                    src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${member.image1}`}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = "./default.webp";
                    }}
                    className="member-image img-fluid"
                  />

                  <div className="member-info">
                  <h5>{member.name}</h5>
                    <div className="member-id-gender">
                      <span className="member-id">
                        {member.gender === 'male' ? 'M' : member.gender === 'female' ? 'F' : ''}
                      </span>
                      <span className="member-id">H{member.user_id}</span>
                    </div>
                    
                    <div className="member-details">
                      <div className="detail-row">
                        <span className="detail-label">Age:</span>
                        <span className="detail-value">{calculateAge(member.dob)} Yrs</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Height:</span>
                        <span className="detail-value">{formatHeight(member.height)}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Gender:</span>
                        <span className="detail-value">
                          {member.gender === 'male' ? 'Male' : member.gender === 'female' ? 'Female' : 'N/A'}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Caste:</span>
                        <span className="detail-value">{member.caste || 'N/A'}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Location:</span>
                        <span className="detail-value">{member.curr_location || member.country || 'India'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
                            </div>
                    
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
   );
};

export default ProfilePage;
