import React from 'react';
import Board from './Board';



class App extends React.Component {
  constructor() {
    super();

    this.gridSize = 36;

    this.state = {
      movementDirection: 'right',
      tailPositions: [{x: 3, y: 0}],
      playerPosition: {
        x: 4,
        y: 0
      },
      foodPosition: {
      x: 4,
      y: 4
    },
    foodCount: 1
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
      self.hitFoodCheck();
    }, 1000);
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

    hitFoodCheck() {
      let randomFoodPosition = this.getRandomIntInclusive(0, 36);

      if(this.state.playerPosition.x === this.state.foodPosition.x && this.state.playerPosition.y === this.state.foodPosition.y) {
        this.state.foodCount += 1;
        this.state.foodPosition = {
          x: randomFoodPosition,
          y: randomFoodPosition
        };

      }
    }

  getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  movePlayer(direction) {
    let x = this.state.playerPosition.x;
    let y = this.state.playerPosition.y;

    let newX = x;
    let newY = y;
    let foodX = this.state.foodPosition.x;
    let foodY = this.state.foodPosition.y;
    let foodCount = this.state.foodCount;
    let max = this.gridSize - 1;

    if (direction === 'up') {
      newY = y === 0 ? max : y-1;
    }
    if (direction === 'down') {
      newY = y === max ? 0 : y+1;
    }

    if (direction === 'left') {
      newX = x === 0 ?  max :
        x-1;
    }
    if (direction === 'right') {
      newX = x === max ?
        0 :
        x+1;
    }

    let tail = this.state.tailPositions;
    var add_element = tail.unshift({x: x, y: y});

    // tail = [{x:x, y:y}]
    //add one
    //remove one
    this.setState({
      movementDirection: direction,
      playerPosition: {
        x: newX,
        y: newY
      },
      tailPositions: tail,

      foodPosition: {
        x: foodX,
        y: foodY
      },
      foodCount: foodCount
    }, this.cleanupTail.bind(this));
  }

  cleanupTail() {
    let tail = this.state.tailPositions;
    while (tail.length > this.state.foodCount - 1) {
      tail.pop();
    }
  }

  render() {
    return (
        <Board gridSize={this.gridSize} playerPosition={this.state.playerPosition} tailPositions={this.state.tailPositions} foodPosition={this.state.foodPosition} foodCount={this.state.foodCount} />
    );
  }
}

export default App;
