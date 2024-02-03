import { useState } from 'react'
import './App.css'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display/>
    </>
  )
}

export default App
