import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Hjem</Link></li>
        <li><Link to="/kjoreplan">Kjøreplan</Link></li>
        <li>Detaljer</li>
        <li>Reise</li>
        <li>RSVP</li>
      </ul>
    </nav>
  );
} 