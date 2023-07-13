import Dice from "./dice";
import {useState,useEffect} from 'react';

function RollDice(props){
    const [draw, setDraw] = useState(1);  
    let counter= 15;
    
    useEffect(() => {
      let drawVal;
      const interval = setInterval(() => {
        counter--;
        drawVal = Math.round((Math.random()*5) + 1);
        setDraw(drawVal);
        if(counter <= 0){
            props.onRoll(drawVal);
            return clearInterval(interval);
        }    	
      }, 100);
      return () => clearInterval(interval);
      }, []);
      
    return <Dice draw={draw} />;
  }

  export default RollDice;