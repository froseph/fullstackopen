import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        You use this app by pressing the buttons
      </div>
    )
  } else {
    return (
      <div>
        The button press history: {allClicks.join(' ')}
      </div>
    )
  }
}

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <>
      <Display counter={left} />
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      <Display counter={right} />
      <History allClicks={allClicks} />
    </>
  )
}

export default App;
