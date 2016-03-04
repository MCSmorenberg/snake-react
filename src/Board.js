import React from 'react';
import Player from './Player';
import Food from './Food';

class Board extends React.Component {

  artefacts() {
    return {
      5: {
        5: <Player />
      },
      18: {
        24: <Food />
      }
    }
  }

  render() {
    let gridSize = this.props.gridSize;
    let rows = [];
    let artefacts = this.artefacts();

    for (var y = 0; y < gridSize; y++) {
      let cols = [];

      for (var x = 0; x < gridSize; x++) {
        cols.push(
          <div key={`col-${x}-${y}`}
            style={{
              margin: 0,
              padding: 0,
              backgroundColor: "#fff",
              border: "1px dotted #333",
              display: "inline-block",
              width: `${700/gridSize}px`,
              height: `${700/gridSize}px`
            }} className="col">
            {artefacts[x] ? (artefacts[x][y] || '') : ''}
          </div>
        );
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
