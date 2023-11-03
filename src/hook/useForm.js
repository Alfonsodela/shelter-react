import { useState } from "react"

export const useForm = () => {
    const [formState, setFormState] = useState({

    });

    const onInputChange = ({ target}) => {
        const {name, value} = target;

        // const onInputChange = (event) => {
        //     const name = event.target.name;
        //     const value = event.target.value;
        //   };

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onResetForm = () => {
        setFormState({})
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}