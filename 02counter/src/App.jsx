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
