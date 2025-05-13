import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/animate.min.css';
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/font-awesome.min.css';
import logo from './images/logo.png';
import { IoReorderThree } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="hom-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="hom-nav col-12">
              <div className='row align-items-center'>
                <div className='col-6 col-md-6'>
                  <div className="logo">
                    <img src={logo} alt="Logo" className="img-fluid" />
                  </div>
                </div>
                
                <div className='col-6 col-md-6 d-flex justify-content-end'>
                  {/* Desktop buttons - hidden on mobile */}
                  <div className='button-place d-none d-md-block'>
                    <div className='button-container'>
                      <button type="button" className='btn-signup me-2'>Sign Up</button>
                      <button type="button" className='btn-login'>Login</button>
                      {/* <button type="button" className='btn btn-signup me-2'>Sign Up</button>
                      <button type="button" className='btn btn-login'>Login</button> */}
                    </div>
                  </div>
                  
                  {/* Mobile menu toggle - hidden on desktop */}
                  <div className='d-md-none'  >
                    <button 
                      className="menu-toggle btn btn-outline-primary" 
                      onClick={toggleMenu}
                      aria-expanded={isMenuOpen}
                      aria-label="Toggle navigation"
                     
                    >
                     <i style={{fontSize: "52px"}}> <IoReorderThree /></i>
                    </button>
                  </div>
                </div>
                
                {/* Mobile menu - appears below on toggle */}
                {isMenuOpen && (
                  <div className='col-12 d-md-none mt-3'>
                    <div className='mobile-menu bg-light p-3 rounded'>
                      <div className='d-flex gap-5'>
                       <link to="/sing-up"><button type="button" className='btn btn-signup'>Sign Upp</button></link> 
                        <button type="button" className='btn btn-login'>Login</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}