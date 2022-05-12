import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const headers = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":"*",
    }};
  const baseURL = "https://localhost:3000"; // https://3000-gilsonsantosux-ssc-2mo4lg2dkzl.ws-us44.gitpod.io

  useEffect(()=>{
     fetch(`${baseURL}/home`,headers).then(response=>response).then(data=>{
      console.log(data);
     })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
