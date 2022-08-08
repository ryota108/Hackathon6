import React, {useReducer} from "react";
import reducer from "../Reducer/reducer";
import Input from "./Input";
import Result from "./Result";
import { calcNeededDays, calcReduceDays } from "../caluculate/calc";

const initialState = {
    payment: 0, 
    saving: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thirthday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
    isSatisfication: false,
    hours: 0
}

const Form = (props) => {
    const [info, infoDispatch] = useReducer(reducer, initialState)

    const submitHandle = (e) => {
        e.preventDefault()
        localStorage.setItem('info', JSON.stringify(info))
        const test = JSON.parse(localStorage.getItem("info"))
        console.log(test.sunday)
    }

    // 計算処理　（ここでは商品がひとつであると仮定）
    //    const result = calcNeededDays(info.payment, info.saving, 54000, info.monday, info.tuesday, info.wednesday, info.thirthday, info.friday, info.saturday, info.sunday)
    //    console.log(result)
    //    const test = JSON.parse(localStorage.getItem("calc"))
    //    const result2 = calcReduceDays(info.isSatisfication, info.hours, info.payment, test.total_week_income, test.hasToEarn)
    //    console.log(result2)
    // // 　ここで計算処理をする場合、商品の価格を取得するか、上位のコンポーネントからPropsで渡す必要がある！　


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
                <Input id="ISSATISFICATION" type="checkbox" onDispatch={infoDispatch} />
                <Input id="HOURS" onDispatch={infoDispatch} />
                <button type="submit">計算</button>
            </form>
            <Result result = {2} />
        </>
    )
}

export default Form