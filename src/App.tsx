import React from 'react';
import './App.css';
import backgroundImage from './images/background.jpg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigation } from './components/Navigation.tsx';
import { Kjoreplan } from './components/Kjoreplan.tsx';

function App() {
  const heroStyle = {
    background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
                 url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="hero-section" style={heroStyle}>
          <Navigation />
          <div className="overlay">
            <div className="content-wrapper">
              <h3 className="welcome-text">Med stor glede</h3>
              <div className="names-container">
                <h1 className="names">Anndrea</h1>
                <div className="ampersand">&</div>
                <h1 className="names">Christian</h1>
              </div>
              <p className="invitation-text">inviterer til bryllup</p>
              <div className="date-venue">
                <p>August 2024</p>
                <div className="divider">♦</div>
                <p>Norge</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/kjoreplan",
      element: <Kjoreplan />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
