import React from 'react';
import Board from './Board';



class App extends React.Component {
  constructor() {
    super();

    this.gridSize = 36;

    this.state = {
      movementDirection: 'right',
      playerPosition: {
        x: 0,
        y: 0
      }
    };

    document.onkeydown = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.startMoving();
  }

  startMoving() {
    self = this;
    setTimeout(function() {
      self.movePlayer(self.state.movementDirection || 'right');
      self.startMoving();
    }, 100);
  }

  handleKeyPress(event) {
    switch (event.keyCode) {
      case 38:
        this.movePlayer('up');
        event.preventDefault();
        break;
      case 40:
        this.movePlayer('down');
        event.preventDefault();
        break;
      case 37:
        this.movePlayer('left');
        event.preventDefault();
        break;
      case 39:
        this.movePlayer('right');
        event.preventDefault();
        break;
    }
  }

  movePlayer(direction) {
    console.log(`moving to: ${this.state.movementDirection}`);
    let x = this.state.playerPosition['x'];
    let y = this.state.playerPosition['y'];
    let newX = x;
    let newY = y;
    let max = this.gridSize - 1;

    if (direction === 'up') {
      newY = y === 0 ?
        max :
        y-1;
    }
    if (direction === 'down') {
      newY = y === max ?
        0 :
        y+1;
    }

    if (direction === 'left') {
      newX = x === 0 ?
        max :
        x-1;
    }
    if (direction === 'right') {
      newX = x === max ?
        0 :
        x+1;
    }

    this.setState({
      movementDirection: direction,
      playerPosition: {
        x: newX,
        y: newY
      }
    });
  }

  render() {
    return (
        <Board gridSize={this.gridSize} playerPosition={this.state.playerPosition} />
    );
  }
}

export default App;
