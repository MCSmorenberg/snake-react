import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
          color: "#fff",
          border: "1px dotted #333",
          display: "inline-block",
          width: `${(700/this.props.gridSize)}px`,
          height: `${(700/this.props.gridSize) -2}px`
        }} className="col">
          {this.props.foodCount}
      </div>
    );
  }
}

export default Player;
