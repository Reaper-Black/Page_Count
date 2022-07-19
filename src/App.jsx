import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='photo'>
        <img className="picture" src="./img/me.jpeg" alt="perfil"></img>
      </div>
      <div className='top'>
        <h1>Jesús Andrés Chacón Hernández</h1>
      </div>
      <div className='info'>
        <p>Al finalizar la carrera me gustaría encontrar un buen trabajo referente a esto y no fracasar</p>
        <p>para asi poder tener un buen sustento economico y no fallar en el intento.</p>
      </div>
      <div className='button'>
        <div className="btn-group">
          <button onClick={() => setCount((count) => count + 1)}>Contar Visita: </button>
        </div>
        <div>
          <p>Contador de visitas: {count}</p>
        </div>
      </div>
    </div>
  )
}
export default App