// export default function Day0() {
 
//     return(
//         <div id="day-0-container">
//             <h1>Day 0</h1>
//             <p>Welcome to Day 0!</p>

            


//         </div>
//     )


// }
"use client";
import React, { useState } from "react";
import "../../styles/day-0.css"; // Adjust the path as necessary


export default function Day0() {
  const [activeEvent, setActiveEvent] = useState(null);
  
  const events = [
    { 
      id: 1, 
      name: "Alpha Event", 
      description: "The brightest star in Cassiopeia - join us for an evening of stargazing and astronomy talks.",
      date: "June 10, 2025" 
    },
    { 
      id: 2, 
      name: "Beta Event", 
      description: "Music under the stars - a night of classical performances inspired by celestial wonders.",
      date: "June 15, 2025" 
    },
    { 
      id: 3, 
      name: "Gamma Event", 
      description: "Astrophotography workshop - learn to capture the night sky like a professional.",
      date: "June 20, 2025" 
    },
    { 
      id: 4, 
      name: "Delta Event", 
      description: "Space science exhibition featuring interactive displays about our universe.",
      date: "June 25, 2025" 
    },
    { 
      id: 5, 
      name: "Epsilon Event", 
      description: "Cosmic cocktail night - enjoy astronomy-themed drinks while learning about constellations.",
      date: "June 30, 2025" 
    }
  ];

  // Cassiopeia has a distinctive W or M shape
  const starPositions = [
    { top: "35%", left: "20%" },  // Alpha
    { top: "55%", left: "35%" },  // Beta
    { top: "25%", left: "50%" },  // Gamma
    { top: "45%", left: "65%" },  // Delta
    { top: "15%", left: "80%" }   // Epsilon
  ];

  return (
    <div className="night-sky">
      <div className="stars"></div>
      <div className="event-container">
        <h1 className="title">Day-0</h1>
        
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`star-event ${activeEvent === event.id ? 'active' : ''}`}
            style={{ 
              top: starPositions[index].top, 
              left: starPositions[index].left 
            }}
            onClick={() => setActiveEvent((activeEvent === event.id) ? null : event.id)}
          >
            <div className="star-point"></div>
            {activeEvent === event.id && (
              <div className="event-details">
                <h3>{event.name}</h3>
                <p className="event-date">{event.date}</p>
                <p>{event.description}</p>
              </div>
            )}
          </div>
        ))}
        
        {/* Connect the stars to form Cassiopeia */}
        <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline 
            points="20,35 36,56 51,26 66,46 81,16" 
            stroke="rgba(255, 255, 255, 0.3)" 
            strokeWidth="0.3" 
            fill="none"
          />
        </svg>
        
        <div className="instructions">
          <p>Click on a star to view event details</p>
        </div>
      </div>
    </div>
  );
}

