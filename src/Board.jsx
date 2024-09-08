import { useEffect, useState } from 'react';
import * as game from './game';

const Board = ({board,setBoard,filledSlots,setFilledSlots,turn, setTurn,winner,setWinner}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => { setWindowWidth(window.innerWidth) };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    const style = (windowWidth > 700) ? 'h-40 w-40 bg-none backdrop-blur-md border-4 border-white/20 rounded-2xl hover:bg-white/30 transition duration-300 flex justify-center items-center' : 'h-32 w-32 bg-none backdrop-blur-md border-4 border-white/20 rounded-2xl hover:bg-white/30 transition duration-300 flex justify-center items-center';

    const handleClick = (event) => 
    {
        if (filledSlots.length === 9) 
            return;
        const index = event.target.id;
        const found = filledSlots.includes(index);
        if (found) 
            return;
        if(winner!=="")
            return;
        const r = parseInt(index.charAt(0), 10);
        const c = parseInt(index.charAt(1), 10);
        const newBoard = board.map(row => [...row]);
        let newWinner="";
        const newFilledSlots =[...filledSlots,index]
        if (turn === "X") 
        {
            newBoard[r][c] = "X";
            const res=game.checkForWinnerAsX(newBoard)
            if(res!="no")
            {
                setWinner("X");
                newWinner="X";
                localStorage.setItem("Winner",JSON.stringify("X"));
            }
            setTurn("O");
            localStorage.setItem("Turn",JSON.stringify("O"));
        } 
        if(turn === "O") 
        {
            newBoard[r][c] = "O";
            const res=game.checkForWinnerAsO(newBoard)
            if(res!="no")
            {
                setWinner("O");
                newWinner="O";
                localStorage.setItem("Winner",JSON.stringify("O"));
            }
            setTurn("X");
            localStorage.setItem("Turn",JSON.stringify("X"));
        }
        setBoard(newBoard);
        setFilledSlots(newFilledSlots);
        localStorage.setItem('Board', JSON.stringify(newBoard));
        localStorage.setItem('FilledSlots', JSON.stringify(newFilledSlots));
        if(newFilledSlots.length===9 && newWinner==="")
        {
            setWinner("tie");
            localStorage.setItem("Winner",JSON.stringify("tie"));
        }
    };

    const pasteXO = (index) => {
        const val = board[index[0]][index[1]];
        if (val === "X") {
            return (<p className='text-9xl nerko-one-regular text-red-500 md:scale-150 scale-125'>X</p>);
        } else if (val === "O") {
            return (<p className='text-9xl nerko-one-regular text-blue-500 md:scale-150 scale-125'>O</p>);
        } else {
            return null;
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='grid grid-cols-3 gap-4'>
                <div className={style} id="00" onClick={handleClick}>
                    {pasteXO([0, 0])}
                </div>
                <div className={style} id="01" onClick={handleClick}>
                    {pasteXO([0, 1])}
                </div>
                <div className={style} id="02" onClick={handleClick}>
                    {pasteXO([0, 2])}
                </div>
                <div className={style} id="10" onClick={handleClick}>
                    {pasteXO([1, 0])}
                </div>
                <div className={style} id="11" onClick={handleClick}>
                    {pasteXO([1, 1])}
                </div>
                <div className={style} id="12" onClick={handleClick}>
                    {pasteXO([1, 2])}
                </div>
                <div className={style} id="20" onClick={handleClick}>
                    {pasteXO([2, 0])}
                </div>
                <div className={style} id="21" onClick={handleClick}>
                    {pasteXO([2, 1])}
                </div>
                <div className={style} id="22" onClick={handleClick}>
                    {pasteXO([2, 2])}
                </div>
            </div>
            {winner==="X" && <p className='mt-10 text-5xl text-center nerko-one-regular text-red-500 bg-white/10 backdrop-blur-xl border-2 border-white/30 p-5 rounded-lg'>X have won the game !!</p>}
            {winner==="O" && <p className='mt-10 text-5xl text-center nerko-one-regular text-blue-500 bg-white/10 backdrop-blur-xl border-2 border-white/30 p-5 rounded-lg'>O have won the game !!</p>}
            {winner==="tie" && <p className='mt-10 text-5xl text-center nerko-one-regular text-black bg-white/10 backdrop-blur-xl border-2 border-white/30 p-5 rounded-lg'>The game have ended in tie !!</p>}
            {winner==="" && turn==="X" && <p className='mt-10 text-5xl text-center nerko-one-regular text-red-500 bg-white/10 backdrop-blur-xl border-2 border-white/30 p-5 rounded-lg'>X's Turn</p>}
            {winner==="" && turn==="O" && <p className='mt-10 text-5xl text-center nerko-one-regular text-blue-500 bg-white/10 backdrop-blur-xl border-2 border-white/30 p-5 rounded-lg'>O's Turn</p>}
        </div>
    );
};

export default Board;
