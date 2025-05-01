import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import couple1 from './images/cpl1.jpg';
import couple2 from './images/cpl2.jpg';
import couple3 from './images/cpl3.jpg';
import couple4 from './images/cpl4.jpg';

export default function MatchMadeInHeaven() {
    const matchmade = [
        {
            id: 1,
            image: couple1,
            title: '100% genuine members for a secure experience',
            link: '',
            delay: '0.1s'
        },
        {
            id: 2,
            image: couple2,
            title: 'Find partners based on compatibility, values & culture',
            link: '',
            delay: '0.2s'
        },
        {
            id: 3,
            image: couple3,
            title: 'Thousands of happily married couples trust us',
            link: '',
            delay: '0.3s'
        },
        {
            id: 4,
            image: couple4,
            title: 'We guide you at every step of your journey',
            link: '',
            delay: '0.4s'
        },
        {
            id: 5,
            image: couple1,
            title: '100% genuine members for a secure experience',
            link: '',
            delay: '0.3s'
        },
        {
            id: 6,
            image: couple2,
            title: 'Find partners based on compatibility, values & culture',
            link: '',
            delay: '0.4s'
        }
    ];

    return (
        
        <div>
            <style>
                {`
                    .swiper-button-next, .swiper-button-prev {
                        color: #E53D5C;
                    }
                    .swiper-pagination-bullet-active {
                        background: #E53D5C;
                    }
                    
                    .swiper-nav {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 40px;
                        height: 40px;
                        background: white;
                        border-radius: 50%;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        z-index: 10;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border: none;
                        outline: none;
                        transition: all 0.3s ease;
                    }
                    .swiper-nav:hover {
                        background: #E53D5C;
                    }
                    .swiper-nav:hover::after {
                        border-color: white;
                    }
                    .swiper-nav::after {
                        content: '';
                        width: 10px;
                        height: 10px;
                        border-top: 2px solid #E53D5C;
                        border-right: 2px solid #E53D5C;
                        transition: all 0.3s ease;
                    }
                    .swiper-nav-prev {
                        left: -20px;
                    }
                    .swiper-nav-prev::after {
                        transform: rotate(-135deg);
                        margin-right: 2px;
                    }
                    .swiper-nav-next {
                        right: -20px;  
                    }
                    .swiper-nav-next::after {
                        transform: rotate(45deg);
                        margin-left: 2px;
                    }
                   
                    
                    .image-card {
                        position: relative;
                        width: 100%;
                        height: 420px;
                        overflow: hidden;
                        border-radius: 16px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        transition: all 0.4s ease;
                    }
                    
                    .image-card::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to top, #E53D5C 0%, #E53D5C00 50%);
                        opacity: 0.8;
                        transition: all 0.4s ease;
                        z-index: 1;
                    }
                    
                    .image-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                    }
                    
                    .image-card:hover::before {
                        height: 120%;
                        opacity: 0.9;
                    }
                    
                    .image-card img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: all 0.5s ease;
                    }
                    
                    .image-card:hover img {
                        transform: scale(1.05);
                    }
                    
                    .card-content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        padding: 30px;
                        color: white;
                        z-index: 2;
                        transform: translateY(20px);
                        transition: all 0.4s ease;
                        opacity: 0;
                    }
                    
                    .image-card:hover .card-content {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    .image-card .card-content {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    
                    .card-content h4 {
                        margin: 0 0 10px;
                        font-size: 18px;
                        font-weight: 600;
                        display: block;
                        color:#fff;
                    }
                    
                    .card-content p {
                        margin: 0 0 20px;
                        font-size: 16px;
                    }
                    
                    .card-content a {
                        display: inline-block;
                        padding: 10px 20px;
                        background: white;
                        color: #E53D5C;
                        text-decoration: none;
                        border-radius: 30px;
                        font-size: 14px;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    }
                    
                    .card-content a:hover {
                        background: #f8f8f8;
                        transform: translateY(-2px);
                    }
                    
                    .home-acces {
                        padding: 0 40px;
                        position: relative;
                    }
                    
                    @media (max-width: 768px) {
                        .swiper-nav {
                            display: none;
                        }
                        .home-acces {
                            padding: 0 15px;
                        }
                        .image-card {
                            height: 350px;
                        }
                    }
                    
                    .home-tit h3 {
                        position: relative;
                        display: inline-block;
                    }

                    .home-tit:hover h3::after {
                        width: 120px;
                    }
                `}
            </style>

            <section  className="comp-sec">
                <div className="str">
                    <div className="container">
                        <div className="row">
                            <div className="wedd-shap">
                            </div>

                            <div className="heading">
                            <div className="home-tit">
                                <h3>A Match Made In Heaven, Brought Together By 
                                    <br/> <span style={{color: "#E53D5C"}}>Hindu Humsafar</span></h3>
                                    
                            </div>
                            </div>

                            

                            <div className="home-acces">
                                <button className="swiper-nav swiper-nav-prev"></button>
                                <button className="swiper-nav swiper-nav-next"></button>
                                
                                <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={2} // Default for mobile
    navigation={{
        prevEl: '.swiper-nav-prev',
        nextEl: '.swiper-nav-next',
    }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    breakpoints={{
        0: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    }}
>

                                    {matchmade.map((service) => (
                                        <SwiperSlide key={service.id}>
                                            <div className={`wow fadeInUp hacc hacc${service.id}`} data-wow-delay={service.delay}>
                                                <div className="image-card">
                                                    <img src={service.image} alt={service.title} loading="lazy" />
                                                    <div className="card-content">
                                                        <h4>{service.title}</h4>
                                                        {/* <p>{service.description}</p>
                                                        <a href={service.link}>View more</a> */}
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
            </section>
        </div>
    );
}