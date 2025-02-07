import React from 'react';
import './Kjoreplan.css';
import { Navigation } from './Navigation.tsx';
import { Timeline } from './Timeline.tsx';

const timelineEvents = [
  {
    date: 'Oktober 2021',
    title: 'Første Møte',
    description: 'Vi møttes for første gang i Oslo. Det var morsomt å se hverandre igjen. Vi hadde gode samtaler og vi tok en tur i parken. og tjo og hei.',
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800'
  },
  {
    date: 'Desember 2021',
    title: 'Første Date',
    description: 'Middag på restaurant og lang kveld med gode samtaler',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800'
  },
  {
    date: 'Juni 2022',
    title: 'Flyttet Sammen',
    description: 'Vi tok det store steget og flyttet sammen',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800'
  },
  {
    date: 'August 2023',
    title: 'Forlovelsen',
    description: 'En perfekt sommerkveld med et overraskende spørsmål',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800'
  }
];

export function Kjoreplan() {
  return (
    <div className="kjoreplan">
      <Navigation />
      <h1 className="kjoreplan-title">Kjøreplan</h1>
      <Timeline events={timelineEvents} />
    </div>
  );
} 