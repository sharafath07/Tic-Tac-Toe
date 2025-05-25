import React, { useState } from "react";
import calculateWinner from "./helpers.jsx";
import Board from "./Board.jsx";

const styles = {
    width: '200px',
    margin: '20px auto'
};

function Game(){

    const [ history, setHistory ] = useState([Array(9).fill(null)]);
    const [ stepNumber, setStepNumber ] = useState(0);
    const [ xIsNext, setXisNext ] = useState(true);
    const winnner = calculateWinner(history[stepNumber]);

    function handleClick(i) {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        
        if(winnner || squares[i])
            return;

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length)
        setXisNext(!xIsNext);
        
    }

    function jumpTo(step) {
        setStepNumber(step);
        setXisNext(step % 2 === 0)

    }

    function renderMoves() {
        return (
            history.map((_step, move) => {
                const destination = move ? `Go to move #${move}` : `Go to start`;
                return(
                    <li key={move}>
                        <button onClick={() => jumpTo(move)}>{destination}</button>
                    </li>
                );
            })
        );
    }

    return(
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                <p>{winnner ? 'winner: ' + winnner : 'Next Player: ' + (xIsNext ? 'X' : 'O') }</p>
                {renderMoves()}
            </div>
        </>
    ) 
}

export default Game;