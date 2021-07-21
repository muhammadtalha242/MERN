import React from 'react'

import Input from "../../shared/components/FormElements/Input"

import "./NewPlace.css"

function NewPlace() {
    return (
        <form className={`place-form`}>
        <Input element="input" label="Title" type="text" errorText="Please Enter Valid Text"/>
        </form>
    )
}

export default NewPlace
