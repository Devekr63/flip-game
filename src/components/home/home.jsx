import React from 'react';
import './styles.css';

export default function home(props) {
  return (
    <div id="home">
      <div id="hero">
        <h2 id="heading">Select Difficulty Level</h2>
        <button 
          id="btn" 
          onClick={() => props.getGameLevel(lAvg)}>
          Average
        </button>
        <button
          id="btn"
          onClick={() =>
            props.getGameLevel(lMed)
          }
        >
          Mastermind
        </button>
        <button
          id="btn"
          onClick={() =>
            props.getGameLevel(lHard)
          }
        >
          Genius
        </button>
      </div>
    </div>
  );
}

const lAvg = { level: 'average', fCards: 40, time: 40000 };
const lMed = { level: 'mastermind', fCards: 60, time: 60000 };
const lHard = { level: 'genius', fCards: 80, time: 80000 };