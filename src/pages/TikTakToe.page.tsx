//import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Square } from '../components/atoms/Square/Square.component';
import { Patterns } from '../components/atoms/Square/Patterns.component';
import { HomeButton } from '../components/atoms/Button/HomeButton.component';

let initialValue = ['','','','','','','','',''];

export const TikTakToe = () => {
    const [board, setBoard] = useState(initialValue)
    const [player, setPlayer] = useState('X')
    const [results, setResults] = useState({winner: 'none' , state: 'none'})
    
    useEffect(() => {
        checkWinner();
        checkTie();
        if(player === 'X'){
            setPlayer('O');
        }else{
            setPlayer('X');
        }
    }, [board])
    
    useEffect(() => {
        if (results.state !== 'none'){
            alert(`Game finished! Winner player: ${results.winner}`)
        }
        restartGame();
    }, [results])
    
    const chooseSquare = (square: number) => {
        setBoard(board.map((value, index) =>{
            if (index === square && value === ''){
                return player;
            }
            return value;
        }));
        
    }

    const restartGame = () =>{
        setBoard(initialValue);
        setPlayer('O');

    }

    const checkWinner = () => {
        Patterns.forEach((currentPattern) =>{
            const player1 = board[currentPattern[0]];
            if(player1 === ''){return}
            let foundWinnerPattern = true;
            currentPattern.forEach((i) =>{
                if(board[i] !== player1){
                    foundWinnerPattern = false;
                }
            })
            if(foundWinnerPattern) {
                setResults({winner: player, state: 'won'})
            }
        })
    }

    const checkTie = () =>{
        let filled = true;
        board.forEach((square) => {
            if(square === ''){
                filled = false;
            }
        })
        if(filled){
            setResults({winner: 'No one', state: 'Tie'})
        }
    }
    
    return(
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950'>
            <div id='board' className='bg-lime-200 bg-opacity-10 dark:bg-lime-100 dark:bg-opacity-10 w-11/12 h-5/6 border-green-300 flex flex-col dark:border-green-700'>
                <div id='row' className='flex flex-row basis-1/3 border-2 border-green-300 dark:border-green-700'>
                    <Square value={board[0]} onClick={() => chooseSquare(0)}/>
                    <Square value={board[1]} onClick={() => chooseSquare(1)}/>
                    <Square value={board[2]} onClick={() => chooseSquare(2)}/>
                </div>
                <div id='row' className='flex flex-row basis-1/3 border-2 border-green-300 dark:border-green-700'>
                    <Square value={board[3]} onClick={() => chooseSquare(3)}/>
                    <Square value={board[4]} onClick={() => chooseSquare(4)}/>
                    <Square value={board[5]} onClick={() => chooseSquare(5)}/>
                </div>
                <div id='row' className='flex flex-row basis-1/3 border-2 border-green-300 dark:border-green-700'>
                    <Square value={board[6]} onClick={() => chooseSquare(6)}/>
                    <Square value={board[7]} onClick={() => chooseSquare(7)}/>
                    <Square value={board[8]} onClick={() => chooseSquare(8)}/>
                </div>
            </div>
            <HomeButton/>
        </div>
    )
}



