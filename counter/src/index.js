import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Counter.css';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter';

const conters = [...Array(10)];
ReactDOM.render(
  <div style={{
    display: "flex",
    flexWrap: "wrap"
  }}>
    {/* {
      map(myFunction) map的attr放function
      function myFunction(num) {
        return num * 10;
      } 
      map可對array中個別值回傳
      conters.map((items) => (
        <Counter />
      ))} */}
    <Counter startingAt={1} />
    <Counter startingAt={2} />
    <Counter startingAt={3} />
    <Counter startingAt={4} />
    <Counter startingAt={5} />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
