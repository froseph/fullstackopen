import { useState } from 'react'

const randomInt = (max_int) => Math.floor(Math.random() * max_int)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(randomInt(anecdotes.length))
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => setSelected(randomInt(anecdotes.length))
  const handleVote = (selected) => () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  return (
    <div>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <button onClick={handleVote(selected)}>vote</button>
      <button onClick={handleNextAnecdote}>Next anecdote</button>
    </div>
  )
}


export default App;
