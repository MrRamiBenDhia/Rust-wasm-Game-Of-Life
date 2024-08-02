import React from 'react';

interface ControlsProps {
  isPaused: () => boolean;
  play: () => void;
  pause: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isPaused, play, pause }) => {
  return (
    <button id="play-pause" onClick={() => (isPaused() ? play() : pause())}>
      {isPaused() ? '▶️' : '⏸'}
    </button>
  );
};

export default Controls;
