import React from 'react';
import useSetTitle from './hooks/setTitle'
import useCountState from './hooks/countState'
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useCountState(0);

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
