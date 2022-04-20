import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good + -1 * bad) / all
  const perc_pos = (good / all).toLocaleString(undefined, {style: 'percent'})

  if (all === 0) {
    return <div>No feedback given</div>
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={perc_pos} />
        </tbody>
      </table>
    )
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
