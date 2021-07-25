import { useCallback, useReducer } from 'react';

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


const useForm = (intialInputs, intialValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: intialInputs,
        isValid: intialValidity

    })
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', inputId: id, value: value, isValid: isValid })
    }, []);
    return [formState, inputHandler]
}

export default useForm