import React, { useCallback, useReducer } from 'react'

import Input from "../../shared/components/FormElements/Input"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator'
import Button from '../../shared/components/FormElements/Button'

import "./PlaceForm.css"

const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                }
                else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return (
                {
                    ...state,
                    inputs: {
                        ...state.inputs,
                        [action.inputId]: { value: action.value, isValid: action.isValid }

                    },
                    isValid: formIsValid

                }
            )
        default:
            return state
    }
}

function NewPlace() {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: "",
                isValid: false
            },
            description: {
                value: "",
                isValid: false
            },
            address: {
                value: "",
                isValid: false
            }
        },
        isValid: false

    })
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', inputId: id, value: value, isValid: isValid })
    }, []);



    const placeSubmitHandler =event=>{
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <form className={`place-form`}  onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                label="Title"
                type="text"
                errorText="Please Enter Valid Label"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                errorText="Please Enter Valid description atleast 5 characters"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler}
            /> 
            <Input
                id="address"
                element="input"
                label="Address"
                type="text"
                errorText="Please Enter Valid Address"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}> ADD PLACE </Button>
        </form>
    )
}

export default NewPlace
