import React,{useState} from "react";
import "./style.css";
import Home from './components/home/home';
import Game from './components/layouts/layout';

export default function App() {
  const [level, updateLevel] = useState("");

  return (
    <div>
      {!level ?
        <Home getGameLevel={(level) => updateLevel(level)}/> :
        <Game gameLevel={() => level} getGameLevel={(level) => updateLevel(level)}/>
      }

    </div>
  );
}
