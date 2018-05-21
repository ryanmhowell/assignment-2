import React from "react";

const Char = (props) => {

    const style={
        display: "inline-block",
        margin: "16px",
        textAlign: "center",
        border: "1px solid black",
        padding: "16px"
    };

    return (
        <div style={style}
        onClick={props.click}>
           {props.char}
        </div>
    )
};


export default Char;