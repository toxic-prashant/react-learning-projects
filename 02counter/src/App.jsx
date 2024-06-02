import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      console.log("counter reached there max limit!!")
    }    
    // console.log("clicked", counter);
    // counter += 1;
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)  
    } else {
      console.log("counter reached there min limit!!")
    }
    
    // console.log("clicked", counter);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
