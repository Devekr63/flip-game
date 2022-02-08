import React,{useState, useEffect} from 'react';
import Card from '../cards/card';
import shapes from '../shapes';
import './styles.css';
import getRandomShapes from '../utils';

const flipedCardsIds = {
  _id : "",
  __id: ""
}

export default function layout(props){
  const [dlevel, setLevel] = useState(props.gameLevel());
  const [timeLimit, setLimit] = useState(props.gameLevel().time);
  const [nofFlips, setnofFlips] = useState(props.gameLevel().fCards);
  const [randomCards, updateRC] = useState(getRandomShapes(shapes, nofFlips/2));
  
  function checkFlips(id){
    if(!flipedCardsIds._id){
      flipedCardsIds._id = id;
    }
    else if(!flipedCardsIds.__id){
      flipedCardsIds.__id = id;
    }
    else if(flipedCardsIds._id === flipedCardsIds.__id){
      updateRC(randomCards.map(
        (object) => {
          if(object.id === flipedCardsIds._id){
            return {...blank, id:flipedCardsIds._id}; 
          }
          return object;
        }
      ));
    }
    else{
      //flip back both the cards//
      flipedCardsIds._id = "";
      flipedCardsIds.__id = "";
    }
  }

  return(
    <div id="main--container">
      <button onClick={() => props.getGameLevel("")}>
        Home
      </button>
      <div id="cards--container">
        {randomCards.map((shape) => 
          <Card 
            key={`${shape.id}${shape.backgroundColor}`} 
            shape={shape} 
            getId={(id) => checkFlips(id)}
          />  
        )}
      </div>
    </div>
  );
}

const blank = {
  height:'25px',
  width:'25px',
  backgroundColor:'white',
};