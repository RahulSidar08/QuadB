import React from 'react'
import { useState } from 'react'
import './App.css'
import { Signup } from './components/Signup'

function App() {
  const [count, setCount] = useState(0)
  function Increase(){
    setCount(prev => prev + 1);
  }
  function Decrease(){
    setCount(prev => prev + 1);
  }
  function reset(){
    setCount(0)
  }
  return (
    <>
    <Signup/>
    </>
  )
}

export default App
