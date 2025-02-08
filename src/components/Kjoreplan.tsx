import React from 'react';
import './Kjoreplan.css';
import { Navigation } from './Navigation.tsx';
import { Timeline } from './Timeline.tsx';

// Import your images
import kirke from '../images/Ulleren Kirke.jpg';
import buss from '../images/buss.svg';
import nyGifte from '../images/Nygifte.svg';
import dinner from '../images/dinner.svg';

const timelineEvents = [
  {
    date: 'Kl.13:00',
    title: 'Vielse Ulleren Kirke',
    description: 'Vi møtes i ærverdige Ulleren Kirke for vielse. Adresse: Holgerslystveien 0280 Oslo',
    image: kirke
  },
  {
    date: 'Etter vielsen',
    title: 'Alle blir busset til Tårnet Kulturarena',
    description: 'Middag på restaurant og lang kveld med gode samtaler',
    image: buss
  },
  {
    date: 'Etter vielsen',
    title: 'Fotografering av brudeparet',
    description: 'Brudeparet blir fotografert og vil ankomme Tårnet Kulturarena senere.',
    image: nyGifte
  },
  {
    date: 'Kl.18:00',
    title: 'Middag',
    description: 'Jævlig god mat serveres med kun Malibu & Cola til drikke',
    image: dinner
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