import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import eucalyptusTop from './images/eucalyptus-top.png';
import eucalyptusBottom from './images/eucalyptus-bottom.png';

function App() {
  const images = [
    './images/frontpage/forside1.jpeg',
    './images/frontpage/forside2.jpeg',
    './images/frontpage/forside3.jpeg',
    './images/frontpage/forside4.jpeg',
    './images/frontpage/forside5.jpeg'
  ];

  return (
    <div className="App">
      <div className="split-layout">
        <div className="image-section">
          <Carousel images={images} />
        </div>
        <div className="info-section">
          <img src={eucalyptusTop} alt="Eucalyptus decoration" className="eucalyptus-top" />
          <div className="wedding-info">
            <h1>Christian & Maria</h1>
            <p className="location">Oslo, Norway</p>
            <p className="date">August 3, 2024</p>
          </div>
          <div className="info-boxes">
            <div className="info-box">
              <h3>Schedule</h3>
              <ul className="info-list">
                <li>Ceremony: 14:00</li>
                <li>Reception: 16:00</li>
                <li>Dinner: 18:00</li>
                <li>Party: 20:00</li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Location</h3>
              <p>Oslo City Hall</p>
              <p>Rådhusplassen 1</p>
              <p>0160 Oslo</p>
            </div>
            <div className="info-box important-info">
              <h3>Important Info</h3>
              <ul className="info-list">
                <li>RSVP by June 1st</li>
                <li>Dress code: Formal</li>
                <li>Parking available</li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <p>For any questions, please contact:</p>
            <p>Maria: +47 123 45 678</p>
            <p>Christian: +47 987 65 432</p>
          </div>
          <img src={eucalyptusBottom} alt="Eucalyptus decoration" className="eucalyptus-bottom" />
        </div>
      </div>
    </div>
  );
}

export default App; 