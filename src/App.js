import React, { useEffect, useState } from 'react';
import './App.css';

// Import images directly
import p1 from './img/p1.webp';
import p2 from './img/p2.webp';
import p3 from './img/p3.webp';
import p4 from './img/p4.webp';
import p5 from './img/p5.webp';
import p6 from './img/p6.webp';
import p7 from './img/p7.webp';
import p8 from './img/p8.webp';
import p9 from './img/p9.webp';
import p10 from './img/p10.webp';
import p11 from './img/p11.webp';
import p12 from './img/p12.webp';
import p13 from './img/p13.webp';
import p14 from './img/p14.webp';
import p15 from './img/p15.webp';

// Array of image paths
const imagePaths = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];

// Define letter grids
const letterGrids = {
  'P': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0]
  ],
  'O': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  'R': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ],
  'T': [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ]
};

function App() {
  const [triggerAnimation, setTriggerAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerAnimation(false);
      setTimeout(() => setTriggerAnimation(true), 100); // Reset animation trigger
    }, 10000); // Repeat every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {triggerAnimation && ['P', 'O', 'R', 'T', 'O'].map((letter, index) => (
        <div key={index} className={`letter-grid letter-${index}`}>
          {letterGrids[letter].map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((cell, cellIndex) => (
                cell === 1 ? (
                  <img
                    key={cellIndex}
                    src={imagePaths[Math.floor(Math.random() * imagePaths.length)]}
                    alt="random"
                    className="grid-image"
                  />
                ) : (
                  <div key={cellIndex} className="grid-placeholder"></div>
                )
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;