import React,{useState, useEffect} from 'react';
import Card from '../cards/card';
import shapes from '../shapes';
import './styles.css';
import getRandomShapes from '../utils';

let flipedCardsIds;

export default function layout(props){
  const [dlevel, setLevel] = useState(props.gameLevel());
  const [timeLimit, setLimit] = useState(props.gameLevel().time);
  const [nofFlips, setnofFlips] = useState(props.gameLevel().fCards);
  const [randomCards, updateRC] = useState(getRandomShapes(shapes, nofFlips/2));
  
  function checkFlips(id_){
    if(!flipedCardsIds._id){
      flipedCardsIds._id = id_;
    }
    else if(flipedCardsIds._id === id_){
      updateRC(randomCards.map(
        (object) => {
          if(object.id === flipedCardsIds._id){
            return {...blank, id:id_}; 
          }
          return object;
        }
      ));
      flipedCardsIds._id = "";
    }
    else{
      //flip back both the cards//
      flipedCardsIds._id = "";
    }
  }

  useEffect(() => {
    flipedCardsIds = {
      _id : "",
    }

    return () => {flipedCardsIds = {}}
  },[]);

  return(
    <div id="main--container">
      <button onClick={() => props.getGameLevel("")}>
        Home
      </button>
      <div id="cards--container">
        {randomCards.map((shape,index) => 
          <Card 
            key={`${shape.id}${shape.backgroundColor}${index}`} 
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