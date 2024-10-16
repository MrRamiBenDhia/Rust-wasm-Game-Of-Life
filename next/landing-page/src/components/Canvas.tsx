import React, { useRef, useEffect } from 'react';
// import { memory } from "wasm-game-of-life/wasm_game_of_life_bg";
import { Universe, Cell } from "wasm-game-of-life";

interface CanvasProps {
  width: number;
  height: number;
  CELL_SIZE: number;
  DEAD_COLOR: string;
  ALIVE_COLOR: string;
  universe: Universe;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, CELL_SIZE, DEAD_COLOR, ALIVE_COLOR, universe }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getIndex = (row: number, column: number) => {
    return row * width + column;
  };

  const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const idx = getIndex(row, col);
        ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;
        ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE);
      }
    }

    ctx.stroke();
  };

  useEffect(() => {
    drawCells();
  }, [universe]);

  return <canvas ref={canvasRef} id="game-of-life-canvas" />;
};

export default Canvas;
