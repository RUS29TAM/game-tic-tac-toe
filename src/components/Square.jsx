import React from 'react';

function Square(props) {
    return (
        <button
            style={{color: "#505050"}}
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}


export default Square;