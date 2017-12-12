import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {

    let todoItems = this.props.theList.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop delaying:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList;

// const theList = ["avocado", "affogato", "alligator"]
// let todoItems = theList.map( (thing, index) => {
//   return newTodoItem = '<li>' + thing + '</li>'
// })
