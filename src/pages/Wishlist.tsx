import React from 'react';
import { Navigation } from '../components/Navigation.tsx';
import './Wishlist.css';

export function Wishlist() {
  return (
    <>
      <Navigation />
      <div className="wishlist-container">
        <div className="wishlist-fallback">
          <h1>Ønskelisten</h1>
          <p>Vi kommer til å legge ut flere ønsker fremover, men for øyeblikket er dette vår ønskeliste:</p>
          <a 
            href="https://www.onskelister.no/liste?id=CacHQ4co7AXX5K9AsmXs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wishlist-link"
          >
            Åpne ønskelisten
          </a>
        </div>
      </div>
    </>
  );
} 