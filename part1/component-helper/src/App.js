import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={setToZero} text="Zero" />
      <Button onClick={decreaseByOne} text="Minus" />
    </>
  )
}

export default App;
