import { useState } from 'react';

const Header = ({ board, setBoard, filledSlots, setFilledSlots,turn, setTurn}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isResumed, setIsResumed] = useState(false);
  
  const handleNewGame = () => {
    setBoard([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    setFilledSlots([]);
    setTurn("X");
    localStorage.setItem("Board",JSON.stringify([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
    localStorage.setItem("FilledSlots",JSON.stringify([]));
    localStorage.setItem('Turn', JSON.stringify("X"));
  };

  const handlePause = () => {
    setIsResumed(true);
    setIsExpanded(!isExpanded);
  };

  const handlePlayNow = () =>{
    setIsExpanded(!isExpanded);
  };

  const handleResume = () => {
    setIsResumed(!isResumed);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`fixed w-full flex ${isExpanded ? 'flex-col justify-center':'flex-row justify-between'} items-center bg-white/10 backdrop-blur-xl border-b border-white/30 rounded-b-md z-10 ${isExpanded ? 'h-full' : ''}`}>
      <p className={`${isExpanded ? 'text-7xl md:text-9xl text-blue-700' : ' text-3xl md:text-5xl text-blue-800'} font-bold text-center matemasie-regular p-3`}>Tic Tac Toe</p>

      {isExpanded && !isResumed && (
        <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-4 border-white/40 text-4xl p-2 mt-20 font-bold rounded-3xl hover:scale-110 active:scale-90 transition-all duration-300 nerko-one-regular" onClick={handlePlayNow}>Play Now</button>
      )}

      {isExpanded && isResumed && (
        <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-4 border-white/40 text-4xl p-2 mt-20 font-bold rounded-xl hover:scale-110 active:scale-90 transition-all duration-300 nerko-one-regular" onClick={handleResume}>Resume</button>
      )}
  
      {!isExpanded && (
        <div className="flex space-x-4 pr-2">
          <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-2 border-white/40 text-2xl p-1 font-bold rounded-xl hover:scale-110 active:scale-90 transition-all duration-300 nerko-one-regular" onClick={handleNewGame}>New Game</button>
          <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-2 border-white/40 text-2xl p-1 font-bold rounded-xl hover:scale-110 active:scale-90 transition-all duration-300 nerko-one-regular" onClick={handlePause}>Pause</button>
        </div>
      )}
    </div>
  );
};

export default Header;
