import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Board from './Board';
import Xplayer from './Xplayer';
import OPlayer from './OPlayer';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [board, setBoard] = useState(() => {
    const storedBoard = localStorage.getItem('Board');
    return storedBoard ? JSON.parse(storedBoard) : [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  });
  const [filledSlots, setFilledSlots] = useState(() => {
    const storedFilledSlots = localStorage.getItem('FilledSlots');
    return storedFilledSlots ? JSON.parse(storedFilledSlots) : [];
  });
  const [turn, setTurn] = useState(() => {
    const storedTurn = localStorage.getItem('Turn');
    return storedTurn ? JSON.parse(storedTurn) : "X";
  });
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    localStorage.setItem('Board', JSON.stringify(board));
    localStorage.setItem('FilledSlots', JSON.stringify(filledSlots));
    localStorage.setItem("Turn",JSON.stringify(turn));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Pass both filledSlots and setFilledSlots to Header */}
      <Header board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn}/>
      {windowWidth > 800 && 
        <div className='flex flex-row justify-center items-center pt-28 space-x-10'>
          <Xplayer />
          <Board board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn}/>
          <OPlayer />
        </div>
      }
      {windowWidth < 800 && 
        <div className='grid place-items-center pt-28 p-2'>
          <div className='flex flex-row justify-between items-center'>
            <Xplayer />
            <OPlayer />
          </div>
          <Board board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn} />
        </div>
      }
    </div>
  );
};

export default App;
