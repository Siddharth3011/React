import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // let counter = 15; //this value is declared but will not change when run on websites so we use hooks:
    let [counter, setCounter] = useState(15);
    const addValue = () => {
      counter = counter + 1;
      setCounter(counter); 
      //what happens if we write setCounter for more than one time. Is it increase than value of counter by more than 1?
      //ex:
      //setCounter(counter);
      //setCounter(counter);
      //setCounter(counter);
      //Ans: No, here useStates in React batches the state updates for performance reasons. So even if you call setCounter multiple times in a single event handler, React will only apply the last update when it re-renders the component.
      //but if we want to increase by more than 1 then we can do like this:
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      console.log("clicked", counter);
    }

    const removeValue = () => {
      setCounter(counter-1);
    }
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
