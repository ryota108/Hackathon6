import React,{useState} from "react";

const Input = (props) => {
    return (
        <>
            <label>{props.id}</label>
            <input type="text"  onChange={(e) => props.onDispatch({type: props.id, payload: e.target.value})} />
            
        </>
    )
}

export default Input