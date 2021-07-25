import React from 'react'

import Input from "../../shared/components/FormElements/Input"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator'
import Button from '../../shared/components/FormElements/Button'
import useForm from '../../shared/hooks/form-hook'

import "./PlaceForm.css"



function NewPlace() {

    const [formState, inputHandler] = useForm({
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
    }, false)


    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <form className={`place-form`} onSubmit={placeSubmitHandler}>
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
