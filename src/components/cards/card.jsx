import React,{useState} from 'react';
import './cardStyles.css';

export default function Card(props){

  const [isFliped, updateFliped] = useState(false);

  function cardClickHandler(){
    updateFliped(isFliped ? false : true);
  }

  return(
    <div id="hero" style={{backgroundColor:'white'}} onClick={() => cardClickHandler()}>
      <div style={isFliped ? props.shape : {...props.shape,backgroundColor:'white'}}>
        {/* {props.shape} */}
        {props.shape.id}
      </div>
    </div>
  );
}