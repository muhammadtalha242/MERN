import React from 'react'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MIN } from '../../shared/util/validator'
import useForm from '../../shared/hooks/form-hook'

const Authenticate = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)
    function authenticateFormSubmitHandler(event) {
        event.preventDefault()
        console.log(formState.inputs)
    }

    return (
        <form onSubmit={authenticateFormSubmitHandler}>
            <Input
                id="email"
                element="input"
                label="Email"
                type="text"
                errorText="Please Enter Valid Email"
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHandler}

            />
            <Input
                id="password"
                element="input"
                label="Password"
                type="text"
                errorText="Please Enter Valid Password"
                validators={[VALIDATOR_MIN(5)]}
                onInput={inputHandler}

            />

            <Button type="submit" disabled={!formState.isValid}> Login </Button>
        </form>
    )
}

export default Authenticate
