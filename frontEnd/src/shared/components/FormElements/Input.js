import React, { useReducer } from 'react'

import {validate} from "../../util/validator"

import "./Input.css"


//Reducer function
const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,            // initial state
                value: action.val, //  value dispatched 
                isValid: validate(action.val, action.validators)
            }
        case "TOUCHED":
            return{
                ...state,
                isTouched:true
            }
        default:
            return state;   
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: "", isTouched:false, isValid: false })

    const changeHandler = (event) => {
        dispatch({
            type: "CHANGE",
            val: event.target.value,
            validators: props.validators
        })
    }

    const touchHandler=()=>{
        dispatch({
            type: "TOUCHED",
        })  
    }
    const element = props.element === "input" ? (

        <input id={props.id} 
        placeholder={props.placeholder} 
        onChange={changeHandler} 
        onBlur={touchHandler}
        value={inputState.value} />

    ) : (

        <textarea id={props.id} rows={props.rows || 3} 
        onBlur={touchHandler}
        onChange={changeHandler} 
        value={inputState.value} />

    );
    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched  && "form-control--invalid"}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched&&<p>{props.errorText}</p>}
        </div>
    )
}

export default Input
