import React, { useState, useEffect, useRef } from 'react';
import { Universe } from "wasm-game-of-life";
import Grid from './Grid';
import Canvas from './Canvas';
import Controls from './Controls';

const GameOfLife: React.FC = () => {
  const CELL_SIZE = 5; // px
  const GRID_COLOR = "#CCCCCC";
  const DEAD_COLOR = "#FFFFFF";
  const ALIVE_COLOR = "#000000";

  const [universe] = useState(() => Universe.new());
  const [width, setWidth] = useState(universe.width());
  const [height, setHeight] = useState(universe.height());
  const [animationId, setAnimationId] = useState<number | null>(null);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const renderLoop = () => {
    universe.tick();
    draw();
    setAnimationId(requestAnimationFrame(renderLoop));
  };

  const draw = () => {
    // Drawing logic, including drawGrid and drawCells
  };

  const isPaused = () => animationId === null;

  const play = () => {
    if (playPauseButtonRef.current) {
      playPauseButtonRef.current.textContent = "⏸";
    }
    setAnimationId(requestAnimationFrame(renderLoop));
  };

  const pause = () => {
    if (playPauseButtonRef.current) {
      playPauseButtonRef.current.textContent = "▶️";
    }
    if (animationId) cancelAnimationFrame(animationId);
    setAnimationId(null);
  };

  useEffect(() => {
    const canvas = document.getElementById("game-of-life-canvas") as HTMLCanvasElement;
    if (canvas) {
      canvas.height = (CELL_SIZE + 1) * height + 1;
      canvas.width = (CELL_SIZE + 1) * width + 1;
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [width, height, animationId]);

  return (
    <>
      <Grid width={width} height={height} CELL_SIZE={CELL_SIZE} GRID_COLOR={GRID_COLOR} />
      <Canvas
        width={width}
        height={height}
        CELL_SIZE={CELL_SIZE}
        DEAD_COLOR={DEAD_COLOR}
        ALIVE_COLOR={ALIVE_COLOR}
        universe={universe}
      />
      <Controls isPaused={isPaused} play={play} pause={pause} />
    </>
  );
};

export default GameOfLife;
