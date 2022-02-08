import React,{useState} from 'react';
import './cardStyles.css';

export default function Card(props){

  const [isFliped, updateFliped] = useState(false);
  const [cardInfo, updateCrdInfo] = useState(props.shape);

  function cardClickHandler(){
    updateFliped(isFliped ? false : true);
    props.getId(cardInfo.id);
  }

  return(
    <div 
      id="hero" 
      style={{backgroundColor:'white'}} 
      onClick={() => cardClickHandler()}
    >
      <div style={isFliped ? cardInfo : {...cardInfo,backgroundColor:'white'}}>
        {/* {props.shape} */}
        {cardInfo.id}
      </div>
    </div>
  );
}