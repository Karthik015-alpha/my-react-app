import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome.jsx'
import Greet from './Greet.jsx'
import Image from './Image.jsx'
import Table from './table.jsx'
import Page from './page.jsx'
import Opt from './opy.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo left" alt="Vite logo"  />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo right react" alt="React logo" />
        </a>
        </div>
        <Image />
            <Opt />
             <Table />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Page />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Welcome />
      <Greet />
    </>
  )
}

export default App
