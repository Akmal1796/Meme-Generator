import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import Counter from './components/Counter';

function App() {
/* 
  const [count, setCount] = React.useState(0);

  function add() {
      setCount(prevCount => prevCount +  1);
  }

  function substract() {
      setCount(prevCount => prevCount - 1);
  }
 */
  return (
    <div className="App">
        <Header />
        <Contents />
{/*       <div>
          <button  onClick={substract}>-</button>
          <Counter number={count} />
          <button onClick={add}>+</button>
      </div> */}
    </div>
  );
}

export default App;
