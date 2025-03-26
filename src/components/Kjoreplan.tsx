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
    description: 'Nå er det alvor folkens! Møt opp i Ulleren Kirke minst 30 minutter før - ingen vil være den som kommer løpende inn i siste liten. Adresse: Holgerslystveien 0280 Oslo',
    image: kirke
  },
  {
    date: 'Etter vielsen',
    title: 'Buss til Tårnet Kulturarena',
    description: 'Slapp av, ingen trenger å være Bob-Bob i kveld! Vi har fikset buss til alle gjestene. Bare hopp på, len deg tilbake, og nyt turen til festen.',
    image: buss
  },
  {
    date: 'Etter vielsen',
    title: 'Fotografering av brudeparet',
    description: 'Mens dere andre starter forfesten, må vi dessverre posere og smile til vi får krampe i kinna. Men bare vent til dere ser bildene! Vi kommer så fort vi kan!',
    image: nyGifte
  },
  {
    date: 'Kl.18:00',
    title: 'Middag og fest',
    description: 'Nå blir det liv! God mat, deilige drinker og garantert noen pinlige historier i talene. PS: Vi har hørt at noen har øvd på dansemovesene sine i månedsvis...',
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