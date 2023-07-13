import "./dice.css";
function Dice(props) {
	if(props.draw === 1){
        return <div className="dice img-1"></div>; 
    } else if(props.draw === 2){
        return <div className="dice img-2"></div>;
    } else if(props.draw === 3){
        return <div className="dice img-3"></div>;
    } else if (props.draw === 4) {
          return <div className="dice img-4"></div>;
    } else if (props.draw === 5){
        return <div className="dice img-5"></div>;
    } else if (props.draw === 6) {
        return <div className="dice img-6"></div>;
    } else {
        return <div className="dice ">!!!</div>;
    }
}

export default Dice;
