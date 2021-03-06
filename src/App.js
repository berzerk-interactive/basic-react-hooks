import React from 'react';
import useSetTitle from './hooks/setTitle'
import useCountState from './hooks/countState'
import useCatApi from './hooks/catApi'
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useCountState(0);

  const title = useSetTitle(count)

  const {data, loading} = useCatApi(count)

  return (
    <div className="App">
      <header className="App-header">
        <img src={data ? data[0].url : logo} className="App-logo" alt="logo" />

        <h1>{loading ? 'Loading Cats' : 'This is ameowzing!'}</h1>
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
