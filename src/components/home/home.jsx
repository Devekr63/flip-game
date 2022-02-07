import React from 'react';
import './styles.css';

export default function home(props){
  return(
    <div id="home">
      <div id="hero">
        <h2 id="heading">
          Select Difficulty Level
        </h2>
          <button id="btn" onClick={()=>props.getGameLevel("average")}>
              Average
          </button>
          <button id="btn" onClick={()=>props.getGameLevel("mastermind")}>
              Mastermind
          </button>
          <button id="btn" onClick={()=>props.getGameLevel("genius")}>
              Genius
          </button>
      </div>
    </div>
  );
}