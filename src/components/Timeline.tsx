import React from 'react';
import './Timeline.css';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="content-wrapper">
              {event.image ? (
                <img src={event.image} alt={event.title} className="event-image" />
              ) : (
                <div className="image-placeholder">
                  <span>Legg til bilde</span>
                </div>
              )}
              <div className="text-content">
                <div className="date">{event.date}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 