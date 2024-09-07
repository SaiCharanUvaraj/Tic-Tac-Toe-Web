import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Board from './Board';

const App = () => 
{
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
    localStorage.setItem('Board', JSON.stringify(board));
    localStorage.setItem('FilledSlots', JSON.stringify(filledSlots));
    localStorage.setItem("Turn",JSON.stringify(turn));
    localStorage.setItem("Winner",JSON.stringify(winner));
  }, []);

  return (
    <div>
      <Header board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn} winner={winner} setWinner={setWinner} />

      <div className='flex flex-row justify-center items-center pt-28 space-x-10'>
        <Board board={board} setBoard={setBoard} filledSlots={filledSlots} setFilledSlots={setFilledSlots} turn={turn} setTurn={setTurn} winner={winner} setWinner={setWinner}/>
      </div>
    </div>
  );
};

export default App;
