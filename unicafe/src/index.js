import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad
  let average = (good+(bad*-1)/total)
  let positive= good/total
  if ( total === 0) {
    return (
      <div>
        No feedback needed
      </div>
    )
  }

  return (
    <div>
      <p>good: {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total: {total}</p>
      <p>average: {average}</p>
      <p>positive: {positive}</p>
    </div>
  )
}


const App = (props) => {

  // save clicks of each button to own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <h1>Give Feedback</h1>
    <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
    </div>
      
  
      <h1>Statistics</h1>
    
       <Statistics good = {good} bad = {bad} neutral = {neutral}/>

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))