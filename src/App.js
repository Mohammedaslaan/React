import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';
function getRandomAnimal(){
    const animals = ['bird','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random()*animals.length)]
}
//console.log(getRandomAnimal());



function App() {
    const [animals,setanimals] = useState([]);
    const handleClick = () =>{
        setanimals([...animals,getRandomAnimal()] )
    }
    const renderAnimal = animals.map(
        (animal,index)=>{
        return <AnimalShow type={animal} key={index} />;
    }
    );
    return (<div className="app">        
        <div>Show animals</div>
        <button onClick={handleClick }>Add Animal</button>
        <div className="animal-list">{renderAnimal}</div>
          
    </div>

    )
}

export default App;