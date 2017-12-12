import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    return (
      <div>
        <h1>Things I should stop procrastinating about:</h1>
        <ul>
          <ListItem doThis="adopt a puppy"/>
        </ul>
      </div>
    );
  }
}

export default MyList;
