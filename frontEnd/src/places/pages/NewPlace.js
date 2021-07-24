import React from 'react'

import Input from "../../shared/components/FormElements/Input"
import {VALIDATOR_REQUIRE} from '../../shared/util/validator'
import "./NewPlace.css"

function NewPlace() {
    return (
        <form className={`place-form`}>
        <Input element="input" label="Title" type="text" errorText="Please Enter Valid Text" validators={[VALIDATOR_REQUIRE()]}/>
        </form>
    )
}

export default NewPlace
