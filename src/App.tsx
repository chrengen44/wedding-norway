import React from 'react';
import './App.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation.tsx';
import { Kjoreplan } from './components/Kjoreplan.tsx';
import { Wishlist } from './pages/Wishlist.tsx';
import { FaUserTie, FaGift, FaCalendarAlt, FaHeart } from 'react-icons/fa';

// Import all images
import forside1 from './images/frontpage/forside1.jpeg';
import forside2 from './images/frontpage/forside2.jpeg';
import forside3 from './images/frontpage/forside3.jpeg';
import forside4 from './images/frontpage/forside4.jpeg';
import forside5 from './images/frontpage/forside5.jpeg';

function App() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="page-container">
          <div className="navigation-wrapper">
            <Navigation />
          </div>
          <div className="hearts-container">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="heart" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}>
                <FaHeart />
              </div>
            ))}
          </div>
          <div className="split-layout">
            <div className="image-section">
              <Slider {...carouselSettings}>
                <div className="carousel-slide">
                  <img src={forside1} alt="Wedding" />
                  <div className="image-overlay">
                    <p className="story-text">So it begins...</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src={forside2} alt="Wedding" />
                </div>
                <div className="carousel-slide">
                  <img src={forside3} alt="Wedding" />
                </div>
                <div className="carousel-slide">
                  <img src={forside4} alt="Wedding" />
                </div>
                <div className="carousel-slide">
                  <img src={forside5} alt="Wedding" />
                </div>
              </Slider>
            </div>
            <div className="info-section">
              <div className="eucalyptus-top"></div>
              <div className="wedding-info">
                <h1>Anndrea & Christian</h1>
                <p className="location">Ullern Kirke / Tårnet Kulturarena</p>
                <p className="date">28.Juni 2025 kl.13:00</p>
                
                <div className="info-boxes">
                  <div className="info-box">
                    <FaUserTie className="info-icon" />
                    <h3>Toastmaster</h3>
                    <p>Trond da man</p>
                    <p>Tlf: 123 45 678</p>
                  </div>
                  
                  <Link to="/onskeliste" className="info-box-link">
                    <div className="info-box">
                      <FaGift className="info-icon" />
                      <h3>Ønskeliste</h3>
                      <p>Kommer snart</p>
                    </div>
                  </Link>
                  
                  <Link to="/kjoreplan" className="info-box-link">
                    <div className="info-box">
                      <FaCalendarAlt className="info-icon" />
                      <h3>Kjøreplan</h3>
                      <p>Se program for dagen</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="eucalyptus-bottom"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/kjoreplan",
      element: <Kjoreplan />,
    },
    {
      path: "/onskeliste",
      element: <Wishlist />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
