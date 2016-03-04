import React from 'react';
import Board from './Board';



class App extends React.Component {
  constructor() {
    super();
    document.onkeydown = this.handleKeyPress;
  }

  handleKeyPress(event) {
    console.log("boo!");
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 38:
        console.log('up');
        event.preventDefault();
        break;
      case 40:
        console.log('down');
        event.preventDefault();
        break;
      case 37:
        console.log('left');
        event.preventDefault();
        break;
      case 39:
        console.log('right');
        event.preventDefault();
        break;
    }
  }

  render() {
    return (
        <Board gridSize={36} />
    );
  }
}

export default App;
