import React, {useReducer} from "react";
import reducer from "../Reducer/reducer";
import Input from "./Input";
import Result from "./Result";

const initialState = {
    payment: 0, 
    saving: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thirthday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
}

const Form = (props) => {
    const [info, infoDispatch] = useReducer(reducer, initialState)

    console.log(info);
    const submitHandle = (e) => {
        e.preventDefault()
        localStorage.setItem('info', JSON.stringify(info))
        const test = JSON.parse(localStorage.getItem("info"))
        console.log(test.sunday)
    }
    

    return (
        <>
            <form onSubmit={submitHandle}>
                <Input id="PAYMENT" onDispatch={infoDispatch}/>
                <Input id="SAVING" onDispatch={infoDispatch}/>
                <Input id="MONDAY" onDispatch={infoDispatch} />
                <Input id="TSUESDAY" onDispatch={infoDispatch}/>
                <Input id="WEDNESDAY" onDispatch={infoDispatch}/>
                <Input id="THIRTHDAY" onDispatch={infoDispatch}/>
                <Input id="FRIDAY" onDispatch={infoDispatch}/>
                <Input id="SATURDAY" onDispatch={infoDispatch}/>
                <Input id="SUNDAY" onDispatch={infoDispatch}/>
                <button type="submit">計算</button>
            </form>
            <Result result = {2} />
        </>
    )
}

export default Form