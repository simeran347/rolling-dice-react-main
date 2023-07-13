import Dice from '../dice/dice';
import './rolls-list.css';
function RollsList(props){
    return(<div className='list'>
        {props.rollsList && props.rollsList.map(val =>{
            return (<Dice draw={val}/>)
        })}
    </div>)
}

export default RollsList;