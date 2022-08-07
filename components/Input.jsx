import React,{useState} from "react";

const Input = (props) => {

    return (
        <>
            <label>{props.id}</label>
            <input type={props.type? "checkbox": "text"}  onChange={(e) => props.onDispatch({type: props.id, payload: Number(e.target.value)})} />
            
        </>
    )
}

export default Input