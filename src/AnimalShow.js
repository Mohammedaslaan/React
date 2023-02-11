import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
import { useState } from 'react'
import './AnimalShow.css';

const svgMap = {
    bird : bird, 
    cat : cat,
    cow : cow,
    dog : dog,
    gator : gator,
    horse : horse
}
function AnimalShow({type}){
    const [clicks,setClicks] = useState(0);
    const handleClick = () =>{
        setClicks(clicks+1);

    }

    return(
        <div onClick={handleClick} className ="animalShow">
            <div >{type}</div>
            <img className='animals' alt='Animals' style={{width :'100px'}} src={svgMap[type]}></img>
            <img className='heart' alt='heart' src={heart} style ={{ width : 10+10*clicks +'px'}}></img>
        </div>
    )
}

export default AnimalShow;