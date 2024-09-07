import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Board from './Board';
import XPlayer from './XPlayer';
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
  const [winner, setWinner] = useState(() => {
    const storedWinner = localStorage.getItem('Winner');
    return storedWinner ? JSON.parse(storedWinner) : "";
  });
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    localStorage.setItem('Board', JSON.stringify(board));
    localStorage.setItem('FilledSlots', JSON.stringify(filledSlots));
    localStorage.setItem("Turn",JSON.stringify(turn));
    localStorage.setItem("Winner",JSON.stringify(winner));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn} winner={winner} setWinner={setWinner} />

      {windowWidth > 800 && 
        <div className='flex flex-row justify-center items-center pt-28 space-x-10'>
          <XPlayer />
          <Board board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn} winner={winner} setWinner={setWinner}/>
          <OPlayer />
        </div>
      }
      
      {windowWidth < 800 && 
        <div className='grid place-items-center pt-28 p-2'>
          <div className='flex flex-row justify-between items-center'>
            <XPlayer />
            <OPlayer />
          </div>
          <Board board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn} winner={winner} setWinner={setWinner}/>
        </div>
      }
    </div>
  );
};

export default App;
