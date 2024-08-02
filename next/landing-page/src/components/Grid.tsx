import React, { useRef, useEffect } from 'react';

interface GridProps {
  width: number;
  height: number;
  CELL_SIZE: number;
  GRID_COLOR: string;
}

const Grid: React.FC<GridProps> = ({ width, height, CELL_SIZE, GRID_COLOR }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;

      for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
      }

      for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
      }

      ctx.stroke();
    };

    drawGrid();
  }, [width, height, CELL_SIZE, GRID_COLOR]);

  return <canvas ref={canvasRef} id="grid-canvas" />;
};

export default Grid;
