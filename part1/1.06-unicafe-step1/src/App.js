import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addFeedback = (value, setter) => () => setter(value + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addFeedback(good, setGood)} text="good" />
      <Button onClick={addFeedback(neutral, setNeutral)} text="neutral" />
      <Button onClick={addFeedback(bad, setBad)} text="bad" />
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </div>
  )
}

export default App;
