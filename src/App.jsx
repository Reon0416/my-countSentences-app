import { useState } from 'react'
import Des from "./components/Desc";
import Req from './components/Req';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Des />
      <Req />
    </>
  )
}

export default App
