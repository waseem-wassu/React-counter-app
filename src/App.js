import React, {useState} from "react";
import Counter from './components/counter';
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  let [day,setDay] = useState(false);

  return (
    <div className={` box ${day ? 'dayLight' : 'dayDark'} `}>
     
    <h1>Now its time to say good {day ? 'morning':'night'}</h1>

       <Counter counter={count} />
       &nbsp; &nbsp;
       <button onClick={() => {
         setCount(++count);
       }}>Update Count</button>
         &nbsp; &nbsp;
       <button onClick = {() => {
          setDay(!day)
       }}>Update Day</button>

    </div>
  );
}

export default App;
