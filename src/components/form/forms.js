import "./forms.css";
import { useState } from "react";
import RollDice from "../dice/roll-dice";
import RollsList from "../rolls-list/rolls-list";
function Form() {
    const [diceCount, setDiceCount] = useState(5);
    const [diceList, setDiceList] = useState([]);
    const [isRolled, setIsRolled] = useState(false);
  const [rollsList, setRollsList] = useState([]);

  useState(()=>{

  },[diceList])
  const updateDiceCount = (evt) =>{
    setDiceCount(parseInt(evt.target.value));
    setIsRolled(false);
  }
  const newRoll = (val) => {
    setRollsList((prevState) => {
      return [...prevState, val];
    });
  };
  const btnHandler = () =>{
    setIsRolled(false);
    setIsRolled(true);
    const randomArr = Array.from({length: diceCount}, () => Math.random() * 20)
    setDiceList(randomArr)
  }
  return (
    <div className="flex-column-container">
      <div className="go-center">
        <div>Number of Dice</div>
        <input type="number" value={diceCount} onInput={updateDiceCount} />
        <button onClick={btnHandler}>Roll Dice</button>
      </div>
      {isRolled && <div className="flex-row-container">
        {diceList.map((val, index) => {
          return (
            <div key={val} className="roll-dice">
              <RollDice onRoll={newRoll} single={true} />
            </div>
          );
        })}
      </div>}
      <h2> Previous Rolls</h2>
      <RollsList rollsList={rollsList}></RollsList>
    </div>
  );
}
export default Form;
