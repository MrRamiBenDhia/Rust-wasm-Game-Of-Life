import React from 'react';
import dynamic from 'next/dynamic';

const GameOfLife = dynamic(() => import('../components/GameOfLife'), { ssr: false });

const Home: React.FC = () => {
  return (
    <div>
      <h1>Game of Life</h1>
      <GameOfLife />
    </div>
  );
};

export default Home;
