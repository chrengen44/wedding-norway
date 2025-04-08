import React from "react";
import "./Kjoreplan.css";
import { Navigation } from "./Navigation.tsx";
import { Timeline } from "./Timeline.tsx";

// Import your images
import kirke from "../images/church.jpg";
import buss from "../images/buss.jpg";
import food from "../images/food.jpg";
import dinner from "../images/dinner.png";

const timelineEvents = [
  {
    date: "Kl.13:00",
    title: "Vielse Ulleren Kirke",
    description:
      "Møt opp i Ulleren Kirke i god tid (minst 30 minutter før) - ingen vil være den som kommer løpende inn i siste liten. Adresse: Holgerslystveien 0280 Oslo",
    image: kirke,
  },
  {
    date: "Etter vielsen, ca kl 14:30",
    title: "Buss til Tårnet Kulturarena",
    description:
      "Vi har leid buss til alle gjestene. Bare hopp på, len deg tilbake, og nyt turen til festen.",
    image: buss,
  },
  {
    date: "Kl 15:00",
    title: "Apritiff og småmat",
    description:
      "Mens vi tar bilder, får dere nyte noe godt i glasset og litt mat i skyloungen.",
    image: food,
  },
  {
    date: "Kl.18:00",
    title: "Middag og fest",
    description:
      "Nå blir det liv! God mat, deilige drinker og garantert noen pinlige historier i talene. PS: Vi har hørt at noen har øvd på dansemovesene sine i månedsvis...",
    image: dinner,
  },
];

export function Kjoreplan() {
  return (
    <div className='kjoreplan'>
      <Navigation />
      <h1 className='kjoreplan-title'>Kjøreplan</h1>
      <Timeline events={timelineEvents} />
    </div>
  );
}
