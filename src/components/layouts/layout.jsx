import React,{useState, useEffect} from 'react';
import Card from '../cards/card';
import shapes from '../shapes';
import './styles.css';
import getRandomShapes from '../utils';

const flipedCardsIds = {
  _id : "",
  __id: ""
}

const rcl = {list : []};

export default function layout(props){
  const [dlevel, setLevel] = useState(props.gameLevel());
  const [timeLimit, setLimit] = useState(1000);
  const [nofFlips, setnofFlips] = useState(0);
  
  function checkFlips(id){
    if(!flipedCardsIds._id){
      flipedCardsIds._id = id;
    }
    else if(!flipedCardsIds.__id){
      flipedCardsIds.__id = id;
    }
    else if(flipedCardsIds._id === flipedCardsIds.__id){
      //blank both the cards//
    }
    else{
      //flip back both the cards//
    }
  }

  function handleRCL(list){
    rcl.list = list;
  }

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
  ,[]);

  return(
    <div id="main--container">
      <button onClick={() => props.getGameLevel("")}>
        Home
      </button>
      <div id="cards--container">
        {getRandomShapes(shapes, nofFlips/2, handleRCL).map((shape) => 
          <Card 
            shape={shape} 
            getId={(id) => checkFlips(id)}
          />  
        )}
      </div>
    </div>
  );
}