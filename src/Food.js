import React from 'react';

class Food extends React.Component {
  render() {
    return(
      <div
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#FF23BE",
          border: "1px dotted #333",
          display: "inline-block",
          width: `${700/this.props.gridSize}px`,
          height: `${700/this.props.gridSize}px`
        }} className="col" />
    );
  }
}

export default Food;
