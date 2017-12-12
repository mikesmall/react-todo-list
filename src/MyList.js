import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }

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
