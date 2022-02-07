import React,{useState, useEffect} from 'react';
import Card from '../cards/card';
import shapes from '../shapes';
import './styles.css';
import getRandomShapes from '../utils';

export default function layout(props){
  const[dlevel, setLevel] = useState(props.gameLevel());
  const [timeLimit, setLimit] = useState(1000);
  const [nofFlips, setnofFlips] = useState(0);

  useEffect(
    () => {
      if(dlevel === 'average'){
        setLimit(40*1000);
        setnofFlips(40);
      }
      else if(dlevel === 'mastermind'){
        setLimit(60*1000);
        setnofFlips(60);
      }
      else{
        setLimit(80*1000);
        setnofFlips(80);
      }
    }
  );

  return(
    <div id="main--container">
      <button onClick={() => props.getGameLevel("")}>
        Home
      </button>
      <div id="cards--container">
        {getRandomShapes(shapes, 20).map((shape) => 
          <Card shape={shape} />  
        )}
      </div>
    </div>
  );
}