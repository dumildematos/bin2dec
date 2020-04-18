import React from 'react';
import './Result.css';
function Result(props){
  
  return (
    <p className="result">{props.result}</p>
  );
}

export default Result;