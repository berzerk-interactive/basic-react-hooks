import React, {useState, useEffect} from 'react';
import useSetTitle from './hooks/setTitle'
import logo from './logo.svg';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "count"
  //
  //    state  set[State] in camelCase you choose the name
  //       |      |                   intial value
  //      \/     \/                  \/
  const [count, setCount] = useState(1);

  const title = useSetTitle(count)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
