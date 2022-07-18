import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1></h1>
      <div className="card">
        <button className="button-visit" onClick={() => setCount((count) => count + 1)}>Contar Visita: {count}</button>
      </div>
    </div>
  )
}

export default App
