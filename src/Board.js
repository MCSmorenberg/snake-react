import React from 'react';
import Space from './Space';
import Player from './Player';
import Food from './Food';


class Board extends React.Component {

  drawTail(ctx) {
    if (!this.props || !!!this.props.tailPositions || this.props.foodCount === 0)  { return false; }
    this.props.tailPositions.forEach((pos, i) => {
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect (pos.x * 6, pos.y * 6, 6, 6);
    });
  }

  drawFood(ctx) {
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (this.props.foodPosition.x * 6, this.props.foodPosition.y * 6, 6, 6);
  }

  drawPlayer(ctx) {
    console.log(this.props.playerPosition);
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.fillRect (this.props.playerPosition.x * 6, this.props.playerPosition.y * 6, 6, 6);
  }

  render() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.drawPlayer(ctx);
      this.drawTail(ctx);
      this.drawFood(ctx);
    }
    return <div/>
  }

  // render() {
    // let gridSize = this.props.gridSize;
    // let rows = [];
    //
    // for (var y = 0; y < gridSize; y++) {
    //   let cols = [];
    //
    //   for (var x = 0; x < gridSize; x++) {
    //     let col = <Space key={`col-${x}-${y}`} gridSize={this.props.gridSize} />;
    //     if (this.isPlayerInPosition(x, y)) {
    //       col = <Player key={`col-${x}-${y}`} gridSize={this.props.gridSize} foodCount={this.props.foodCount} />;
    //     }
    //     if (this.isTailInPosition(x, y)) {
    //       col = <Player key={`col-${x}-${y}`} gridSize={this.props.gridSize} foodCount={this.props.foodCount} />;
    //     }
    //     if (this.isFoodInPosition(x, y)) {
    //       col = <Food key={`col-${x}-${y}`} gridSize={this.props.gridSize} />;
    //     }
    //     // <Food />
    //     cols.push(col);
    //   }
    //   rows.push(
    //     <div key={`col-${y}`} style={{margin: 0, padding: 0, height: `${700/gridSize}px`}} className="row">{cols}</div>
    //   );
    // }
    //
    // return (
    //   <canvas id="canvas" width="600" height="600" />
    //   );
    // }
}

export default Board;
