import React from 'react';
import './Kjoreplan.css';
import Navigation from './Navigation';

const timelineEvents = [
  {
    date: 'Oktober 2021',
    title: 'Første Møte',
    description: 'Vi møttes for første gang i Oslo'
  },
  {
    date: 'Desember 2021',
    title: 'Første Date',
    description: 'Middag på restaurant og lang kveld med gode samtaler'
  },
  // Add more events as needed
];

function Kjoreplan() {
  return (
    <div>
      <Navigation />
      <div className="kjoreplan">
        <h1 className="kjoreplan-title">Kjøreplan</h1>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="date">{event.date}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kjoreplan; 