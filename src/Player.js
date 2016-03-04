import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
          border: "1px dotted #333",
          display: "inline-block",
          width: `${700/this.props.gridSize}px`,
          height: `${700/this.props.gridSize}px`
        }} className="col" />
    );
  }
}

export default Player;
