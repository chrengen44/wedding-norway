import React from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./components/Navigation.tsx";
import { Kjoreplan } from "./components/Kjoreplan.tsx";
import { Wishlist } from "./pages/Wishlist.tsx";
import { FaUserTie, FaInfoCircle, FaHeart } from "react-icons/fa";

// Import all images
import forside1 from "./images/frontpage/forside1.jpeg";
import forside2 from "./images/frontpage/forside2.jpeg";
import forside3 from "./images/frontpage/forside3.jpeg";
import forside4 from "./images/frontpage/forside4.jpeg";
import forside5 from "./images/frontpage/forside5.jpeg";

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

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <div className='page-container'>
                <div className='navigation-wrapper'>
                  <Navigation />
                </div>
                <div className='hearts-container'>
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className='heart'
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${15 + Math.random() * 10}s`,
                      }}
                    >
                      <FaHeart />
                    </div>
                  ))}
                </div>
                <div className='split-layout'>
                  <div className='image-section'>
                    <Slider {...carouselSettings}>
                      <div className='carousel-slide'>
                        <img src={forside1} alt='Wedding' />
                        <div className='image-overlay'>
                          <p className='story-text'>So it begins...</p>
                        </div>
                      </div>
                      <div className='carousel-slide'>
                        <img src={forside2} alt='Wedding' />
                      </div>
                      <div className='carousel-slide'>
                        <img src={forside3} alt='Wedding' />
                      </div>
                      <div className='carousel-slide'>
                        <img src={forside4} alt='Wedding' />
                      </div>
                      <div className='carousel-slide'>
                        <img src={forside5} alt='Wedding' />
                      </div>
                    </Slider>
                  </div>
                  <div className='info-section'>
                    <div className='eucalyptus-top'></div>
                    <div className='wedding-info'>
                      <h1>Anndrea & Christian</h1>
                      <p className='location'>
                        Ullern Kirke / Tårnet Kulturarena
                      </p>
                      <p className='date'>28.Juni 2025 kl.13:00</p>
                      <div className='contact-info'>
                        <p><FaHeart className="contact-icon" /> Anndrea: 94881641</p>
                        <p><FaHeart className="contact-icon" /> Christian: 92428133</p>
                      </div>

                      <div className='info-boxes'>
                        <div className='info-box'>
                          <FaUserTie className='info-icon' />
                          <h3>Kveldens Festkommandør</h3>
                          <p>Trond Løschbrandt</p>
                          <p>Ring/send SMS/epost for taletid: 93460480</p>
                          <p>Epost: Trond.Løschbrandt@strommes24.no</p>
                        </div>

                        <div className='info-box important-info'>
                          <FaInfoCircle className='info-icon' />
                          <h3>Viktig info</h3>
                          <ul className='info-list'>
                            <li>Husk å meld ifra om allergier til Christian innen 30.april.</li>
                            <li>Meld ifra til Christian så raskt som mulig om du vil bruke egen transport fra kirken til Tårnet.</li>
                            <li>For taler, meld ifra til Kveldens Festkommandør Trond Løschbrandt innen 1.juni. Ta med info som navn, tilhørighet til brudeparet, bosted, yrke.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='eucalyptus-bottom'></div>
                  </div>
                </div>
              </div>
            }
          />
          <Route path='/kjoreplan' element={<Kjoreplan />} />
          <Route path='/onskeliste' element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
