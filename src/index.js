import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

var toDos = ["adopt a puppy", "eat an avocado", "slurp an affogato"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
);
