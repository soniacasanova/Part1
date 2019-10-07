import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {

  // save clicks of each button to own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleClick = () => {
    console.log('clicked')
  }

  
 

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>{good}</div>
      <button onClick={() => console.log('clicked')}>
        good
      </button>
      <div>{neutral}</div>
      <button onClick={() => console.log('clicked')}>
        neutral
      </button>

      <h1>Statistics</h1>
     
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
