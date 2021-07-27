import React, { useState, useContext } from 'react'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator'
import useForm from '../../shared/hooks/form-hook'
import { AuthContext } from '../../shared/context/Auth-context'

import "./Authenticate.css"

const Authenticate = () => {
    const auth = useContext(AuthContext)
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
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
        auth.login();
    }

    const switchModeHandler = () => {
        console.log("formState.inputs.email.isValid && formState.inputs.password.isValid :", formState.inputs.email.isValid && formState.inputs.password.isValid)
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authenticateFormSubmitHandler}>
                {!isLoginMode && <Input id="name"
                    element="input"
                    label='Name'
                    type="text"
                    errorText="Please Enter Valid Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                }
                <Input
                    id="email"
                    element="input"
                    label="E-mail"
                    type="text"
                    errorText="Please Enter Valid Email"
                    validators={[VALIDATOR_EMAIL()]}
                    onInput={inputHandler}

                />
                <Input
                    id="password"
                    element="input"
                    label="Password"
                    type="password"
                    errorText="Please Enter Valid description atleast 5 characters"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    onInput={inputHandler}

                />

                <Button type="submit" disabled={!formState.isValid}> {isLoginMode ? "Login" : "Sign Up"} </Button>
            </form>
            <Button type="button" inverse onClick={switchModeHandler} > Switch To {!isLoginMode ? "Login" : "Sign Up"} </Button>

        </Card>
    )
}

export default Authenticate
