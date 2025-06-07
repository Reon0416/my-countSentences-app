import { useState } from 'react'
import Des from "./components/Desc";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Des />
    </>
  )
}

export default App
