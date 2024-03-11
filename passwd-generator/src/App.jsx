import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='main'>
      <h1 className='main--h1'>Generate a <span className='h1--span'>random password</span></h1>

      <h3 className='main--h3'>Never use an insecure password again.</h3>

      <button className='main--btn'>Generate passwords</button>

      <hr />

      <div className='passwrds'>
        <p id="passOne"></p>
        <p id="passTwo"></p>
      </div>
    </main>
    </>
  )
}

export default App
