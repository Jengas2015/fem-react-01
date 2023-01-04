import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App font-epilogue">
      <Navbar />
    </div>
  )
}

export default App
