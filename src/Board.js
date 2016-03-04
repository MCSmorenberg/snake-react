import React from 'react';
import Space from './Space';
import Player from './Player';
import Food from './Food';


class Board extends React.Component {

  isPlayerInPosition(x, y) {
    return this.props.playerPosition['x'] === x &&
      this.props.playerPosition['y'] === y;
  }

  isFoodInPosition(x, y) {
    return this.props.foodPosition['x'] === x &&
      this.props.foodPosition['y'] === y;
  }

  render() {
    console.log(this.props.playerPosition);
    console.log(this.props.foodPosition);
    let gridSize = this.props.gridSize;
    let rows = [];

    for (var y = 0; y < gridSize; y++) {
      let cols = [];

      for (var x = 0; x < gridSize; x++) {
        let col = <Space key={`col-${x}-${y}`} gridSize={this.props.gridSize} />;
        if (this.isPlayerInPosition(x, y)) {
          col = <Player key={`col-${x}-${y}`} gridSize={this.props.gridSize} />;
        }
        if (this.isFoodInPosition(x, y)) {
          col = <Food key={`col-${x}-${y}`} gridSize={this.props.gridSize} />;
        }
        // <Food />
        cols.push(col);
      }
      rows.push(
        <div key={`col-${y}`} style={{margin: 0, padding: 0, height: `${700/gridSize}px`}} className="row">{cols}</div>
      );
    }

    return (
      <div className="board" style={{width: '800px', height: '800px', margin: '10px auto'}}>
        {rows}
      </div>
      );
    }
}

export default Board;
