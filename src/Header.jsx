import { useState,useEffect } from 'react';

const Header = ({ board, setBoard, filledSlots, setFilledSlots,turn, setTurn,winner,setWinner}) => {
  const click = new Audio("src/assets/click.mp3");
  const [isExpanded, setIsExpanded] = useState(true);
  const [isResumed, setIsResumed] = useState(false);
  
  const handleNewGame = () => {
    click.play()
    setBoard([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    setFilledSlots([]);
    setTurn("X");
    setWinner("");
    localStorage.setItem("Board",JSON.stringify([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
    localStorage.setItem("FilledSlots",JSON.stringify([]));
    localStorage.setItem('Turn', JSON.stringify("X"));
    localStorage.setItem('Winner', JSON.stringify(""));
  };

  const handlePause = () => {
    click.play();
    setIsResumed(true);
    setIsExpanded(true);
  };

  const handlePlayNow = () =>{
    click.play()
    setIsExpanded(false);
  };

  const handleResume = () => {
    click.play()
    setIsResumed(false);
    setIsExpanded(false);
  };

  useEffect(() => {
    if (JSON.stringify(board) !== JSON.stringify([[0, 0, 0], [0, 0, 0], [0, 0, 0]])) 
    {
      setIsExpanded(true);
      setIsResumed(true);
    }
  }, []); 

  return (
    <div className={`fixed w-full flex ${isExpanded ? 'flex-col justify-center':'flex-row justify-between'} items-center bg-white/10 backdrop-blur-xl border-b border-white/30 rounded-b-md z-10 ${isExpanded ? 'h-full' : 'h-20'}`}>
      <p className={`${isExpanded ? 'text-7xl md:text-9xl text-blue-700' : ' text-4xl md:text-5xl text-blue-800'} font-bold text-center matemasie-regular p-3`}>Tic Tac Toe</p>

      {/*play now*/}
      {isExpanded && !isResumed && (
        <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-4 border-white/40 text-4xl p-2 mt-20 font-bold rounded-3xl hover:scale-110 active:scale-90 transition-all duration-300 nerko-one-regular" onClick={handlePlayNow}>Play Now</button>
      )}

      {/*resume*/}
      {(isExpanded && isResumed) && (
        <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-4 border-white/40 text-4xl p-2 mt-20 font-bold rounded-md hover:scale-110 active:scale-90 transition-all duration-300" onClick={handleResume}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 4.5l10.5 7.5-10.5 7.5V4.5z" />
          </svg>
        </button>
      )}

      {!isExpanded && (
        <div className="flex space-x-4 pr-2">
          {/*restart*/}
          <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-2 border-white/40 text-2xl p-1 font-bold rounded-md hover:scale-110 active:scale-90 transition-all duration-300" onClick={handleNewGame}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c4.556 0 8.25 3.694 8.25 8.25s-3.694 8.25-8.25 8.25-8.25-3.694-8.25-8.25m0 0h4.5m-4.5 0l-3 3" />
            </svg>
          </button>
          
          {/*pause*/}
          <button className="text-blue-800 bg-white/20 backdrop-blur-2xl border-2 border-white/40 text-2xl p-1 font-bold rounded-md hover:scale-110 active:scale-90 transition-all duration-300" onClick={handlePause}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 6.75v10.5m7-10.5v10.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
