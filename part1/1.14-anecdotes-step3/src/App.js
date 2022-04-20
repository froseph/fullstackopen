import { useState } from 'react'

const randomInt = (max_int) => Math.floor(Math.random() * max_int)

const Votes = ({votes}) => {
  if (votes === 1) {
    return <div>has 1 vote</div>
  } else {
    return <div>has {votes} votes</div>
  }
}

const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
      <div>
        {anecdote}
      </div>
      <Votes votes={votes} />
    </div>
  )
}

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

  let max_vote = -1
  let max_index = -1
  votes.forEach((vote, idx) => {
      if (vote > max_vote) {
        max_vote = vote
        max_index = idx
      }
    })

  // Cute but as clear as above
  // const filter_max_votes = ([max_votes, max_index], votes, idx) => (votes > max_votes) ? [votes, idx] : [max_votes, max_index]
  // const [, max_index] = votes.reduce(filter_max_votes, [-1, -1])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleVote(selected)}>vote</button>
      <button onClick={handleNextAnecdote}>Next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[max_index]} votes={votes[max_index]} />
    </div>
  )
}


export default App;
