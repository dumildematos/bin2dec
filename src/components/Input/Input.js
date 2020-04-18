import React, {useState} from 'react';
import './Input.css'; 
import Result from '../Result/Result';
function Input(){
  const [dec, setDecimal] = useState(0)

  const conversor = function(){

    let binary = document.getElementById('input').value;
    let arrBin = binary.replace(/\D/g, 'L').split('').map(Number).reverse();
    let result = 0;
    for (let i = 0; i < arrBin.length; i++) {
      
      if(arrBin[i] === 1)
        result += Math.pow(2, i);
      if(arrBin[i] === 0)
        result += 0;
      if(arrBin[i] !== 1 && arrBin[i] !== 0 || isNaN(arrBin[i])){
        result = 'Only binay numbers.';
        break;
      }
    }
    setDecimal(result);
  }
  const clear = function() {
    document.getElementById('input').value = '';
    setDecimal(0)
  }
  return (
    <div className="sm-box">
      <p>Enter a Binary Number Please.</p>
      <input id="input"/> <br/>
      <div className="controls">
        <button onClick={conversor}>Convert</button>
        <button onClick={clear}>Clear</button>
      </div>
      <Result result={dec} />
    </div>
  );
}

export default Input;