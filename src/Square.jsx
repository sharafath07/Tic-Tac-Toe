import React from "react";

function Square({ value,onClick }){

    const style1 = {
        background: 'lightblue',
        border: '2px solid darkblue',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none',
        borderRadius: '5px'
    };

    const style2 = {
        background: '#ff7a7a',
        border: '2px solid red',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none',
        borderRadius: '5px'
    }

    return(
        <button style={style2} onClick={onClick}>{value}</button>
    )
}

export default Square;