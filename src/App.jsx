import React, {useState} from 'react';


const App = () => {
    const [count,setCount]= useState(0);

    const handleClickPlus = function(){
        setCount(count+1);
    }
    
    const handleClickMoins = function(){
        setCount(count-1);
    }

    return (<div>
        <h1>Counter: {count}</h1>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMoins}>-</button>
    </div>);
};

export default App;