import React from "react";
import Square from "./Square.jsx";

function Board({ squares, onClick}){

    const style = {
        border: '4px solid Darkblue',
        borderRadius: '10px',
        width: '250px',
        height: '250px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3,1fr) / repeat(3, 1fr)'
    }

    return(
        <div style={style}>
            {squares.map((squares, i) => (
                <Square key={i} value={squares} onClick={() => onClick(i)}/>
            ))}  
        </div>
    )
}

export default Board;